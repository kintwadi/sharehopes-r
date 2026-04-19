import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Mail, User, MessageSquare, Heart, Users, Phone, MapPin, Globe, CheckCircle2, AlertCircle } from 'lucide-react';
import { sendEmail, MailData } from '../lib/mailSender';

export function VolunteerForm() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    postcode: '',
    country: '',
    city: '',
    volunteerInterests: [] as string[],
    availability: '',
    skills: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      volunteerInterests: prev.volunteerInterests.includes(interest)
        ? prev.volunteerInterests.filter(i => i !== interest)
        : [...prev.volunteerInterests, interest]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Prepare data for MailSender
    const mailData: MailData = {
      ...formData,
      countryLabel: formData.country, // In a real app, you'd map these to labels
      cityLabel: formData.city,
      volunteerInterests: formData.volunteerInterests.join(', '),
      availabilityLabel: t(`volunteer.options.availability.${formData.availability.toLowerCase()}`) || formData.availability,
      skills: formData.skills + (formData.message ? `\n\nPersonal Message: ${formData.message}` : '')
    };

    try {
      await sendEmail(mailData);
      setStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        postcode: '',
        country: '',
        city: '',
        volunteerInterests: [],
        availability: '',
        skills: '',
        message: ''
      });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const interestOptions = [
    { key: 'foodDistribution', icon: Heart },
    { key: 'hotMeals', icon: Heart },
    { key: 'schoolSupplies', icon: Heart },
    { key: 'hospitalAid', icon: Heart },
    { key: 'serveStrengthen', icon: Heart }
  ];

  return (
    <section id="volunteer" className="py-24 relative overflow-hidden scroll-mt-20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-emerald-600 -z-10 skew-y-3 origin-top-left" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-2 text-gray-900 sticky top-24">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900"
            >
              {t('volunteer.title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-800 mb-12 leading-relaxed"
            >
              {t('volunteer.subtitle')}
            </motion.p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-black/10 flex items-center justify-center shrink-0">
                  <Heart className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900">{t('volunteer.benefits.impact.title')}</h4>
                  <p className="text-gray-800">{t('volunteer.benefits.impact.desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-black/10 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900">{t('volunteer.benefits.community.title')}</h4>
                  <p className="text-gray-800">{t('volunteer.benefits.community.desc')}</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-2xl relative"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{t('volunteer.success')}</h3>
                  <p className="text-gray-600">{t('volunteer.subtitle')}</p>
                </motion.div>
              ) : (
                <form className="space-y-8" onSubmit={handleSubmit}>
                  {/* Basic Info */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">1. {t('volunteer.name')}</h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-bold text-gray-700 ml-1">{t('volunteer.firstName')} *</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            required
                            id="firstName"
                            type="text"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-600 transition-all"
                            placeholder="John"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-bold text-gray-700 ml-1">{t('volunteer.lastName')} *</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            required
                            id="lastName"
                            type="text"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-600 transition-all"
                            placeholder="Doe"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold text-gray-700 ml-1">{t('volunteer.email')} *</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            required
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-600 transition-all"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-bold text-gray-700 ml-1">{t('volunteer.phone')}</label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-600 transition-all"
                            placeholder="+123 456 7890"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">2. {t('volunteer.address')}</h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="sm:col-span-2 space-y-2">
                        <label htmlFor="address" className="text-sm font-bold text-gray-700 ml-1">{t('volunteer.address')}</label>
                        <div className="relative">
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            id="address"
                            type="text"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-600 transition-all"
                            placeholder="123 Hope Lane"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="city" className="text-sm font-bold text-gray-700 ml-1">{t('volunteer.city')}</label>
                        <input
                          id="city"
                          type="text"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-600 transition-all"
                          placeholder="New York"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="postcode" className="text-sm font-bold text-gray-700 ml-1">{t('volunteer.postcode')}</label>
                        <input
                          id="postcode"
                          type="text"
                          value={formData.postcode}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-600 transition-all"
                          placeholder="Zip Code"
                        />
                      </div>
                      <div className="sm:col-span-2 space-y-2">
                        <label htmlFor="country" className="text-sm font-bold text-gray-700 ml-1">{t('volunteer.country')}</label>
                        <div className="relative">
                          <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <select
                            id="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-600 transition-all appearance-none"
                          >
                            <option value="">Select Country</option>
                            <option value="DE">Germany</option>
                            <option value="ES">Spain</option>
                            <option value="FR">France</option>
                            <option value="PT">Portugal</option>
                            <option value="AO">Angola</option>
                            <option value="BR">Brazil</option>
                            <option value="US">USA</option>
                            <option value="UK">UK</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Interests & Availability */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">3. {t('volunteer.interests')}</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {interestOptions.map((option) => (
                        <button
                          key={option.key}
                          type="button"
                          onClick={() => handleInterestChange(t(`activities.${option.key}.title`))}
                          className={`flex items-center gap-3 p-4 rounded-2xl border-2 transition-all text-left ${
                            formData.volunteerInterests.includes(t(`activities.${option.key}.title`))
                              ? 'border-emerald-600 bg-emerald-50 text-emerald-700'
                              : 'border-gray-50 bg-gray-50 text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          <option.icon className={`w-5 h-5 ${formData.volunteerInterests.includes(t(`activities.${option.key}.title`)) ? 'text-emerald-600' : 'text-gray-400'}`} />
                          <span className="font-bold text-sm">{t(`activities.${option.key}.title`)}</span>
                        </button>
                      ))}
                    </div>

                    <div className="space-y-2 mt-6">
                      <label htmlFor="availability" className="text-sm font-bold text-gray-700 ml-1">{t('volunteer.availability')}</label>
                      <select
                        id="availability"
                        value={formData.availability}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-600 transition-all appearance-none"
                      >
                        <option value="">{t('volunteer.availability')}</option>
                        {['weekdays', 'weekends', 'evenings', 'flexible'].map(key => (
                          <option key={key} value={key}>{t(`volunteer.options.availability.${key}`)}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message & Experience */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">4. {t('volunteer.skills')}</h3>
                    <div className="space-y-2">
                      <label htmlFor="skills" className="text-sm font-bold text-gray-700 ml-1">{t('volunteer.skills')}</label>
                      <textarea
                        id="skills"
                        rows={3}
                        value={formData.skills}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-600 transition-all resize-none"
                        placeholder="Tell us about your relevant skills or experience..."
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-bold text-gray-700 ml-1">{t('volunteer.message')}</label>
                      <textarea
                        id="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-600 transition-all resize-none"
                        placeholder="Any additional thoughts?"
                      />
                    </div>
                  </div>

                  {status === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-4 bg-red-50 text-red-700 rounded-2xl border border-red-100"
                    >
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <p className="text-sm font-medium">{t('volunteer.error')}</p>
                    </motion.div>
                  )}

                  <button
                    disabled={status === 'sending'}
                    className={`w-full bg-emerald-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100 flex items-center justify-center gap-3 group relative overflow-hidden ${
                      status === 'sending' ? 'opacity-80 cursor-not-allowed' : ''
                    }`}
                  >
                    {status === 'sending' ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        {t('volunteer.submit')}
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
