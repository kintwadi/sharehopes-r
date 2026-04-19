// Simple email sender module with EmailJS support and mailto fallback
// Ported from user's email_sender.js

declare global {
  interface Window {
    emailjs: any;
    EMAILJS_PUBLIC_KEY?: string;
    EMAILJS_SERVICE_ID?: string;
    EMAILJS_TEMPLATE_ID?: string;
  }
}

export interface MailData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  postcode: string;
  country: string;
  countryLabel: string;
  city: string;
  cityLabel: string;
  volunteerInterests: string;
  availability: string;
  availabilityLabel: string;
  skills: string;
  message?: string;
  donationAmount?: string;
}

const WORKER_URL = 'https://solitary-morning-4035.antmabiala.workers.dev/';
const CONFIG_URL = WORKER_URL + 'config';
const EMAIL_TO = 'info@sharehopes.org';

let EMAILJS_PUBLIC_KEY = '';
let EMAILJS_SERVICE_ID = '';
let EMAILJS_TEMPLATE_ID = '';
let emailJsReady = false;
let workerFailed = false;

async function buildMessage(data: MailData) {
  const lines = [
    `New involvement submission`,
    ``,
    `Name: ${data.firstName || ''} ${data.lastName || ''}`.trim(),
    `Email: ${data.email || ''}`,
    `Phone: ${data.phone || ''}`,
    `Address: ${data.address || ''}`,
    `City: ${data.cityLabel || data.city || ''}`,
    `Postcode: ${data.postcode || ''}`,
    `Country: ${data.countryLabel || data.country || ''}`,
    `Volunteer interests: ${data.volunteerInterests || '—'}`,
    `Availability: ${data.availabilityLabel || data.availability || '—'}`,
    `Skills: ${data.skills || '—'}`,
    ``,
    `Donation amount: ${data.donationAmount || '—'}`
  ];
  return lines.join('\n');
}

async function submitToWorker(data: MailData, subject: string) {
  try {
    const message = await buildMessage(data);
    
    const payload = {
      ...data,
      subject: subject,
      to: EMAIL_TO,
      message: message, // The full summary
      name: `${data.firstName || ''} ${data.lastName || ''}`.trim()
    };

    console.log('Worker submission payload:', payload);
    
    const res = await fetch(WORKER_URL, {
      method: 'POST',
      mode: 'cors',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    
    const bodyText = await res.text();
    console.log('Worker response status:', res.status);
    console.log('Worker response body:', bodyText);

    if (!res.ok) {
      throw new Error(`Worker rejected request: ${res.status} ${bodyText}`);
    }
    
    return bodyText;
  } catch (e: any) {
    console.error('Cloudflare Worker fetch error:', e);
    throw e;
  }
}

async function loadEmailJsConfig() {
  if (EMAILJS_PUBLIC_KEY && EMAILJS_SERVICE_ID) return; // Already loaded
  
  try {
    const res = await fetch(CONFIG_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ purpose: 'emailjs-config' })
    });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const cfg = await res.json().catch(() => ({ publicKey: '', serviceId: '', templateId: '' }));
    EMAILJS_PUBLIC_KEY = cfg.publicKey || window.EMAILJS_PUBLIC_KEY || '';
    EMAILJS_SERVICE_ID = cfg.serviceId || window.EMAILJS_SERVICE_ID || '';
    EMAILJS_TEMPLATE_ID = cfg.templateId || window.EMAILJS_TEMPLATE_ID || '';
  } catch (e) {
    console.warn('Failed to load EmailJS config from worker, using defaults');
    EMAILJS_PUBLIC_KEY = window.EMAILJS_PUBLIC_KEY || '';
    EMAILJS_SERVICE_ID = window.EMAILJS_SERVICE_ID || '';
    EMAILJS_TEMPLATE_ID = window.EMAILJS_TEMPLATE_ID || '';
  }
}

async function ensureEmailJsReady() {
  if (emailJsReady) return true;
  await loadEmailJsConfig();
  const hasEmailJS = typeof window.emailjs !== 'undefined';
  if (hasEmailJS && EMAILJS_PUBLIC_KEY) {
    try { 
      window.emailjs.init(EMAILJS_PUBLIC_KEY); 
      emailJsReady = true; 
    } catch (e) {
      console.warn('EmailJS init error:', e);
    }
  }
  return emailJsReady;
}

export type SendResult = 
  | { type: 'success'; method: 'emailjs' | 'worker' };

export async function sendEmail(data: MailData): Promise<SendResult> {
  const subject = `New Involvement: ${data.firstName || ''} ${data.lastName || ''}`.trim();
  const message = await buildMessage(data);

  console.log('--- Email Submission Started ---');
  console.log('Data:', data);

  // 1. Try EmailJS
  try {
    const ready = await ensureEmailJsReady();
    if (ready && EMAILJS_PUBLIC_KEY && EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID) {
      console.log('Sending via EmailJS...');
      await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        ...data,
        to_email: EMAIL_TO,
        subject: subject,
        message: message // The summary should win
      });
      console.log('EmailJS Success!');
      return { type: 'success', method: 'emailjs' };
    } else {
      console.log('Skipping EmailJS (not configured or not ready)');
    }
  } catch (e: any) {
    console.error('EmailJS execution failed:', e.message || e);
  }

  // 2. Try Worker
  try {
    console.log('Sending via Cloudflare Worker...');
    await submitToWorker(data, subject);
    console.log('Worker Success!');
    return { type: 'success', method: 'worker' };
  } catch (e: any) {
    console.error('Cloudflare Worker execution failed:', e.message || e);
    throw new Error('All automated submission methods failed. Please check the browser console for details.');
  }
}
