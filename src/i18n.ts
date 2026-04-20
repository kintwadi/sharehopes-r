import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        activities: 'Activities',
        volunteer: 'Volunteer',
        about: 'About Us',
        contact: 'Contact'
      },
      hero: {
        badge: 'Connecting Causes. Empowering Change',
        title: 'Planting seeds of hope, together.',
        subtitle: 'Sowing love, reaping change—we offer free assistance to those in need.',
        cta: 'Start Volunteering',
        secondaryCta: 'Learn More'
      },
      activities: {
        label: 'Activities',
        title: 'Our Activities',
        subtitle: 'What We Do: Nourishing Bodies, Minds, and Communities',
        foodDistribution: {
          title: 'Food Distribution',
          desc: 'Providing nutritious meals and essential groceries to families facing hunger.'
        },
        hotMeals: {
          title: 'Hot Meals for the Homeless',
          desc: 'Serving freshly prepared food with dignity, warmth, and care.'
        },
        schoolSupplies: {
          title: 'School Supplies',
          desc: 'Equipping students with the essential tools they need to learn and thrive.'
        },
        hospitalAid: {
          title: 'Hospital Aid',
          desc: 'Delivering critical supplies and relief to under-resourced healthcare facilities.'
        },
        serveStrengthen: {
          title: 'Serve and Strengthen',
          desc: 'Connecting heroes on the ground—small teams, passionate volunteers, and emerging non-profits—with brilliant ideas but limited resources.'
        }
      },
      volunteer: {
        label: 'Volunteer',
        title: 'Ready to Help?',
        subtitle: 'Fill out the form below and we will get in touch with you shortly.',
        name: 'Full Name',
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email Address',
        phone: 'Phone Number',
        address: 'Home Address',
        city: 'City',
        postcode: 'Postcode',
        country: 'Country',
        interests: 'Areas of Interest',
        availability: 'Your Availability',
        skills: 'Skills & Experience',
        message: 'Why do you want to join?',
        submit: 'Send Application',
        success: 'Application Sent Successfully!',
        error: 'Failed to send. Please try again.',
        options: {
          availability: {
            weekdays: 'Weekdays',
            weekends: 'Weekends',
            evenings: 'Evenings',
            flexible: 'Flexible'
          }
        },
        benefits: {
          impact: {
            title: 'Impact First',
            desc: 'Every hour you give directly supports someone in need.'
          },
          community: {
            title: 'Global Community',
            desc: 'Connect with like-minded individuals from all over the world.'
          }
        }
      },
      footer: {
        quickLinks: 'Quick Links',
        contactUs: 'Contact Us',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        cookie: 'Cookie Policy',
        rights: '© 2026 ShareHopes. All rights reserved.',
        tagline: 'Building a better world, one volunteer at a time.'
      },
      timeline: {
        label: "Our Journey",
        accessibility: {
          activity: "activity",
          currentActivity: "Current Activity",
          thumbnail: "Thumbnail"
        },
        stages: {
          "2025": {
            "title": "Foundations & Growth",
            "description": "Our initial launch year where we established our core volunteer network and completed our first community projects."
          },
          "2026": {
            "title": "The Next Chapter: Global Roots, Smarter Connections",
            "description": "While our hearts remain firmly planted in the communities we serve today, our vision is expanding beyond borders. Guided by our unwavering commitment to Radical Empathy and Collective Power, we are extending our footprint to new countries—not to impose solutions from afar, but to listen, learn, and lift up local heroes already doing the work on the ground.\n\nAnd we are building a smarter bridge to connect them. By acting as a force multiplier, we ensure that every hour volunteered and every resource shared lands exactly where it can generate the greatest hope. We are strengthening the hands that help, everywhere."
          }
        }
      },
      aboutPage: {
        hero: {
          label: 'Volunteer',
          title: 'About ShareHopes',
          subtitle: 'Strengthening the Hands That Help.'
        },
        story: {
          title: 'Our Story: More Than a Mission, A Movement',
          p1: "At ShareHopes, we understand that the challenges facing our community—hunger, homelessness, educational gaps, and healthcare access—are too complex for any one organization to solve alone. We started with a simple belief: that a hot meal or a bag of groceries could restore a person's dignity. But as we grew, we realized our true calling was bigger than our own programs.",
          quote: 'We are not just a non-profit. We are a platform for compassion.',
          p2: 'While we remain deeply committed to our direct service roots (feeding the hungry and equipping the vulnerable), we have evolved into a community hub and sponsor. We exist to remove the barriers that prevent other incredible, grassroots changemakers from doing their best work. By providing operational support, shared resources, and a network of care, we amplify the impact of our entire community.'
        },
        mission: {
          title: 'Our Dual Mission: Serve and Strengthen',
          subtitle: 'We operate on two interconnected fronts because we believe a rising tide lifts all boats.',
          direct: {
            title: '1. Direct Service: Meeting Immediate Needs',
            desc: 'We show up on the front lines every day. Our programs are designed to provide relief with respect and care, ensuring no one in our community is invisible.',
            food: { title: 'Food Security', desc: 'From our food distribution centers to our street outreach serving hot, freshly prepared meals, we fight hunger where it lives.' },
            youth: { title: 'Youth & Education', desc: 'We equip students with the essential supplies they need to focus on learning, not lack.' },
            health: { title: 'Health & Hospital Aid', desc: 'We supply healthcare facilities and partners with the most critical items needed to care for our neighbors.' }
          },
          hub: {
            title: '2. The ShareHopes Hub: Powering the Doers',
            desc: 'This is the heart of our long-term strategy for change. We know there are heroes on the ground—small teams, passionate volunteers, and emerging non-profits—with brilliant ideas but limited infrastructure.',
            detail: 'We open our doors and our resources to sponsor and support other non-profit organizations. Through sponsorship and shared operational capacity, we allow these groups to focus on their unique mission while we handle the heavy lifting.',
            tagline: 'We lift the lifters.'
          }
        },
        principles: {
          title: 'Our Guiding Principles',
          empathy: { title: 'Radical Empathy', desc: 'We meet people where they are, without judgment. Whether serving a meal to an unhoused neighbor or reviewing a grant for a partner organization, we lead with heart.' },
          power: { title: 'Collective Power', desc: 'We believe the community solves problems best when we work together. Our role as a hub is to connect the dots, reduce duplication, and make sure resources flow where they are needed most.' },
          dignity: { title: 'Dignity First', desc: 'Receiving help should never feel like a handout. Our services and our partnerships are structured to uplift and empower, preserving the self-worth of everyone we touch.' },
          hope: { title: 'Steadfast Hope', desc: 'We are not naive optimists; we are disciplined hopers. We see the cracks in the system and work every day to fill them, believing firmly in a brighter, shared future.' }
        },
        future: {
          title: 'The Future We\'re Building',
          p1: 'ShareHopes is not a silo; it is a nerve center. Our vision is a community where non-profits no longer struggle in isolation. We envision a network where a food bank can seamlessly coordinate with a housing advocate because we provide the common ground.',
          p2: 'Whether you are a family in need of groceries, a volunteer looking to serve, or a small non-profit founder looking for a sponsor to help you get off the ground—ShareHopes is your home.',
          cta: 'Together, we don\'t just offer help. We build the capacity for hope to thrive.'
        }
      },
      privacy: {
        title: 'Privacy Policy | ShareHopes',
        lastUpdated: 'Last Updated: April 18, 2026',
        commitment: {
          title: 'Our Commitment to You',
          text: 'At ShareHopes ("we," "us," or "our"), we believe in transparency and radical empathy. Protecting the privacy of our community—whether you are a family receiving groceries, a volunteer, a donor, or a partner non-profit organization—is foundational to our mission of strengthening the hands that help. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website sharehopes.org or engage with our services.'
        },
        sections: {
          s1: {
            title: '1. Information We Collect',
            text: 'Because ShareHopes serves as both a direct service provider and a hub for other organizations, the type of information we collect depends on how you interact with us.',
            sub1: 'Information You Provide Directly:',
            item1: 'Service Recipients: Names, contact information, household size, and dietary needs (used strictly for service delivery and grant reporting in anonymized, aggregate formats).',
            item2: 'Partner Non-Profits & Sponsees: Organization details, EIN/Tax ID numbers, banking information for disbursement of funds, and contact information for leadership.',
            item3: 'Donors & Volunteers: Name, email address, mailing address, phone number, and payment information (processed securely by third-party PCI-compliant vendors; we do not store full credit card numbers).',
            sub2: 'Information Collected Automatically:',
            item4: 'Website Usage: We use standard cookies and analytics tools (e.g., Google Analytics) to understand how visitors find our website and which pages they visit. This data is anonymized and helps us improve our platform.'
          },
          s2: {
            title: '2. How We Use Your Information',
            text: 'We use your data only for legitimate, mission-focused reasons. We never sell, trade, or rent your personal information to third parties for marketing purposes.',
            item1: 'To Deliver Services: To coordinate food distribution, schedule volunteer shifts, or provide back-office support to our sponsored partners.',
            item2: 'To Process Donations: To securely process tax-deductible contributions and provide receipts.',
            item3: 'To Communicate: To send updates about ShareHopes programs, impact stories, or critical safety alerts.'
          },
          s3: {
            title: '3. How We Share Information (The "Hub" Nuance)',
            text: 'Because we serve as a sponsor, there are specific, limited instances where data sharing is necessary:',
            item1: 'With Partner Organizations (Sponsored Groups): If you are a donor giving to a specific campaign under our sponsorship umbrella, we may share your name and donation amount with that specific project leader.',
            item2: 'Service Providers: We share data with trusted third-party vendors who help us operate.',
            item3: 'Legal Compliance: We may disclose information if required by law.'
          },
          s4: {
            title: '4. Data Security',
            text: 'We take the protection of sensitive data seriously. We implement industry-standard security measures including SSL encryption and secure, access-controlled databases.'
          },
          s5: {
            title: '5. Your Rights & Choices',
            item1: 'Email Communications: You may unsubscribe from our mailing list at any time.',
            item2: 'Access & Correction: You may request to see or correct the personal data we have on file.',
            item3: 'Do Not Track: We respect "Do Not Track" signals from web browsers.'
          },
          s6: {
            title: '6. Children\'s Privacy',
            text: 'We do not knowingly collect personal information from children under 13 without verified parental consent.'
          },
          s7: {
            title: '7. Changes to This Policy',
            text: 'We may update this policy periodically. The "Last Updated" date at the top of this page will indicate when revisions were made.'
          },
          s8: {
            title: '8. Contact Us',
            text: 'For any questions regarding this Privacy Policy, please contact us at info@sharehopes.org.'
          }
        }
      },
      terms: {
        title: 'Terms of Service | ShareHopes',
        lastUpdated: 'Last Updated: April 18, 2026',
        s1: {
          title: '1. Acceptance of Terms',
          text: 'Welcome to ShareHopes. By accessing our website, making a donation, applying for services, or engaging with us as a partner organization, you agree to be bound by these Terms of Service.'
        },
        s2: {
          title: '2. Our Role: Platform and Provider',
          text: 'ShareHopes operates with a dual mission. Please read these sections carefully depending on how you interact with us.',
          sub1: 'A. For Direct Service Recipients',
          item1: 'ShareHopes provides food, supplies, and aid based on availability and the honor system.',
          sub2: 'B. For Partner Organizations & Sponsees',
          item2: 'If ShareHopes serves as your sponsor, your relationship is governed by a separate Sponsorship Agreement.'
        },
        s3: {
          title: '3. Intellectual Property',
          text: 'The text, logos, graphics, and images on this website are the property of ShareHopes or used with permission.'
        },
        s4: {
          title: '4. Donations and Financial Transactions',
          text: 'Donations made to ShareHopes are generally non-refundable.'
        },
        s5: {
          title: '5. User Conduct',
          text: 'You agree not to use the website for any unlawful purpose or attempt to gain unauthorized access to our systems.'
        },
        s6: {
          title: '6. Disclaimer of Warranties',
          text: 'Services provided "as is". While we work tirelessly to ensure our food is nutritious, we make no warranties regarding uninterrupted availability.'
        },
        s7: {
          title: '7. Limitation of Liability',
          text: 'To the fullest extent permitted by law, ShareHopes shall not be liable for any indirect or consequential damages.'
        },
        s8: {
          title: '8. Governing Law',
          text: 'These Terms shall be governed by and construed in accordance with the local laws.'
        },
        s9: {
          title: '9. Contact Information',
          text: 'For questions regarding these Terms of Service: info@sharehopes.org'
        }
      },
      cookies: {
        title: 'Cookie Policy | ShareHopes',
        lastUpdated: 'Last Updated: April 18, 2026',
        explanation: {
          title: 'A Simple Explanation of Cookies',
          p1: 'At ShareHopes, we believe in transparency in all things—from how we source our meals to how our website operates. This policy explains what cookies are, how we use them, and how you can control them.',
          p2: 'Think of cookies as small, harmless text files that act as digital name tags or short-term memory. When you visit our website, these files help us remember that you\'ve been here before. They do not contain viruses or software programs; they are simply pieces of data that make your browsing experience smoother.'
        },
        why: {
          title: 'Why We Use Cookies: Strengthening Our Digital Hands',
          text: 'Our website uses cookies for three main reasons, all aligned with our mission to serve more effectively.'
        },
        sections: {
          s1: {
            title: '1. Essential Cookies (Always On)',
            desc: 'These are the cookies that make our website function. Without them, you couldn\'t navigate the site, apply for volunteer shifts, or complete a donation form.',
            examples: 'Remembering the items you add to a volunteer sign-up form, maintaining secure login sessions for partner organizations, or processing donation payments.',
            optOut: 'You cannot disable these cookies. They are strictly necessary for the website to work.'
          },
          s2: {
            title: '2. Performance & Analytics Cookies (Understanding Our Impact)',
            desc: 'These cookies help us understand how people find ShareHopes and what information is most useful to them. Just as we track how many meals we serve to improve our kitchen operations, we track how many people visit our "Sponsorship" page so we can make that information easier to find.',
            data: 'This information is anonymized and aggregated. We can see that "many people read about the Food Distribution program today," but we cannot see "John Smith read about the Food Distribution program."',
            tools: 'We use standard tools like Google Analytics.'
          },
          s3: {
            title: '3. Functionality Cookies (Remembering Your Preferences)',
            desc: 'These cookies remember choices you make to improve your experience. They allow the website to remember your preferred language or the region you are in (so we show you the correct volunteer opportunities for your city).',
            optOut: 'You can disable these, but the site may not feel as personalized to your needs.'
          }
        },
        thirdParty: {
          title: 'A Note on Third-Party Cookies',
          text: 'Because ShareHopes is a community hub, we sometimes embed content from trusted partners. For example, we might embed a YouTube video showing our work or a map showing our food distribution sites. These third-party platforms (YouTube, Google Maps, etc.) may set their own cookies when you interact with that embedded content. We do not control these cookies. We encourage you to review the privacy policies of those specific platforms.'
        },
        notUsed: {
          title: 'Cookies We Do NOT Use',
          text: 'We want to be clear: ShareHopes does not use cookies to create a profile of you for the purpose of selling advertisements or tracking you across the entire internet. We are a non-profit organization focused on community care, not surveillance capitalism.'
        },
        managing: {
          title: 'Managing Your Cookie Preferences',
          text: 'You have complete control over how cookies interact with your device.',
          opt1: {
            title: 'Option 1: Browser Settings',
            text: 'Most web browsers (Chrome, Safari, Firefox, Edge) allow you to block or delete cookies through the "Settings" or "Preferences" menu.'
          },
          opt2: {
            title: 'Option 2: Cookie Consent Banner',
            text: 'When you first visit our website, a banner will appear asking for your consent to use non-essential (Analytics and Functionality) cookies. You may click "Reject Non-Essential" or "Manage Settings."'
          }
        },
        updates: {
          title: 'Updates to This Policy',
          text: 'We may update this Cookie Policy periodically to reflect changes in the technology we use or the services we provide.'
        },
        contact: {
          title: 'Contact Us',
          text: 'If you have any questions about our use of cookies or data privacy, please reach out. We\'re happy to explain this in plain English.',
          team: 'ShareHopes Operations Team'
        }
      }
    }
  },
  de: {
    translation: {
      nav: {
        home: 'Startseite',
        activities: 'Aktivitäten',
        volunteer: 'Freiwillige',
        about: 'Über uns',
        contact: 'Kontakt'
      },
      hero: {
        badge: 'Anliegen verbinden. Wandel bewirken',
        title: 'Samen der Hoffnung pflanzen, gemeinsam.',
        subtitle: 'Liebe säen, Veränderung ernten – wir bieten kostenlose Hilfe für Bedürftige.',
        cta: 'Jetzt helfen',
        secondaryCta: 'Mehr erfahren'
      },
      activities: {
        label: 'Aktivitäten',
        title: 'Unsere Aktivitäten',
        subtitle: 'Was wir tun: Körper, Geist und Gemeinschaft nähren',
        foodDistribution: {
          title: 'Lebensmittelverteilung',
          desc: 'Bereitstellung von nahrhaften Mahlzeiten und lebenswichtigen Lebensmitteln für Familien, die unter Hunger leiden.'
        },
        hotMeals: {
          title: 'Warme Mahlzeiten für Obdachlose',
          desc: 'Frisch zubereitetes Essen mit Würde, Wärme und Sorgfalt servieren.'
        },
        schoolSupplies: {
          title: 'Schulmaterialien',
          desc: 'Schüler mit den notwendigen Werkzeugen ausstatten, die sie zum Lernen und Gedeihen benötigen.'
        },
        hospitalAid: {
          title: 'Krankenhaushilfe',
          desc: 'Lieferung kritischer Vorräte und Hilfe für unterversorgte Gesundheitseinrichtungen.'
        },
        serveStrengthen: {
          title: 'Dienen und Stärken',
          desc: 'Vernetzen lokale Helden – kleine Teams, leidenschaftliche Freiwillige und aufstrebende gemeinnützige Organisationen – mit brillanten Ideen, aber begrenzten Ressourcen.'
        }
      },
      volunteer: {
        label: 'Freiwillige',
        title: 'Bereit zu helfen?',
        subtitle: 'Füllen Sie das Formular aus und wir melden uns in Kürze bei Ihnen.',
        name: 'Vollständiger Name',
        firstName: 'Vorname',
        lastName: 'Nachname',
        email: 'E-Mail-Adresse',
        phone: 'Telefonnummer',
        address: 'Heimatadresse',
        city: 'Stadt',
        postcode: 'Postleitzahl',
        country: 'Land',
        interests: 'Interessengebiete',
        availability: 'Ihre Verfügbarkeit',
        skills: 'Fähigkeiten & Erfahrung',
        message: 'Warum möchten Sie beitreten?',
        submit: 'Bewerbung senden',
        success: 'Bewerbung erfolgreich gesendet!',
        error: 'Senden fehlgeschlagen. Bitte erneut versuchen.',
        options: {
          availability: {
            weekdays: 'Wochentage',
            weekends: 'Wochenende',
            evenings: 'Abende',
            flexible: 'Flexibel'
          }
        },
        benefits: {
          impact: {
            title: 'Wirkung zuerst',
            desc: 'Jede Stunde, die Sie geben, unterstützt direkt jemanden in Not.'
          },
          community: {
            title: 'Globale Gemeinschaft',
            desc: 'Vernetzen Sie sich mit Gleichgesinnten aus der ganzen Welt.'
          }
        }
      },
      footer: {
        quickLinks: 'Schnelllinks',
        contactUs: 'Kontaktieren Sie uns',
        privacy: 'Datenschutz-Bestimmungen',
        terms: 'Nutzungsbedingungen',
        cookie: 'Cookie-Richtlinie',
        rights: '© 2026 ShareHopes. Alle Rechte vorbehalten.',
        tagline: 'Eine bessere Welt bauen, ein Freiwilliger nach dem anderen.'
      },
      aboutPage: {
        hero: {
          label: 'Freiwillige',
          title: 'Über ShareHopes',
          subtitle: 'Die Hände stärken, die helfen.'
        },
        story: {
          title: 'Unsere Geschichte: Mehr als eine Mission, eine Bewegung',
          p1: 'Bei ShareHopes verstehen wir, dass die Herausforderungen, vor denen unsere Gemeinschaft steht – Hunger, Obdachlosigkeit, Bildungslücken und Zugang zur Gesundheitsversorgung – zu komplex sind, als dass eine Organisation sie allein lösen könnte. Wir haben mit der einfachen Überzeugung begonnen, dass eine warme Mahlzeit oder eine Tüte Lebensmittel die Würde eines Menschen wiederherstellen kann. Aber während wir gewachsen sind, wurde uns klar, dass unsere wahre Berufung größer war als unsere eigenen Programme.',
          quote: 'Wir sind nicht nur eine gemeinnützige Organisation. Wir sind eine Plattform für Mitgefühl.',
          p2: 'Während wir unseren Wurzeln im direkten Service (Hungrige speisen und Gefährdete ausstatten) zutiefst verpflichtet bleiben, haben wir uns zu einem Gemeinschaftszentrum und Sponsor entwickelt. Wir existieren, um die Barrieren zu beseitigen, die andere unglaubliche Basis-Aktivisten daran hindern, ihre beste Arbeit zu leisten. Durch die Bereitstellung operativer Unterstützung, gemeinsamer Ressourcen und eines Netzwerks der Fürsorge verstärken wir die Wirkung unserer gesamten Gemeinschaft.'
        },
        mission: {
          title: 'Unsere duale Mission: Dienen und Stärken',
          subtitle: 'Wir agieren an zwei miteinander verbundenen Fronten, weil wir glauben, dass eine steigende Flut alle Boote hebt.',
          direct: {
            title: '1. Direkter Service: Unmittelbare Bedürfnisse erfüllen',
            desc: 'Wir sind jeden Tag an der Front präsent. Unsere Programme sind darauf ausgelegt, Hilfe mit Respekt und Sorgfalt zu leisten, um sicherzustellen, dass niemand in unserer Gemeinschaft unsichtbar ist.',
            food: { title: 'Ernährungssicherheit', desc: 'Von unseren Lebensmittelverteilungszentren bis hin zu unserer aufsuchenden Arbeit auf der Straße, bei der wir heiße, frisch zubereitete Mahlzeiten servieren, bekämpfen wir den Hunger dort, wo er entsteht.' },
            youth: { title: 'Jugend & Bildung', desc: 'Wir statten Schüler mit den notwendigen Materialien aus, die sie brauchen, um sich auf das Lernen zu konzentrieren, nicht auf den Mangel.' },
            health: { title: 'Hilfe für das Gesundheitswesen', desc: 'Wir beliefern Gesundheitseinrichtungen und Partner mit den kritischsten Gütern, die für die Versorgung unserer Nachbarn benötigt werden.' }
          },
          hub: {
            title: '2. Der ShareHopes Hub: Die Macher unterstützen',
            desc: 'Dies ist das Herzstück unserer langfristigen Veränderungsstrategie. Wir wissen, dass es Helden vor Ort gibt – kleine Teams, leidenschaftliche Freiwillige und aufstrebende gemeinnützige Organisationen – mit brillanten Ideen, aber begrenzter Infrastruktur.',
            detail: 'Wir öffnen unsere Türen und Ressourcen, um andere gemeinnützige Organisationen zu sponsern und zu unterstützen. Durch Sponsoring und gemeinsame operative Kapazitäten ermöglichen wir es diesen Gruppen, sich auf ihre einzigartige Mission zu konzentrieren, während wir die schwere Arbeit übernehmen.',
            tagline: 'Wir stärken die Helfer.'
          }
        },
        principles: {
          title: 'Unsere Leitprinzipien',
          empathy: { title: 'Radikale Empathie', desc: 'Wir begegnen den Menschen dort, wo sie sind, ohne Vorurteil. Ob wir einem obdachlosen Nachbarn eine Mahlzeit servieren oder einen Zuschuss für eine Partnerorganisation prüfen – wir führen mit dem Herzen.' },
          power: { title: 'Kollektive Kraft', desc: 'Wir glauben, dass die Gemeinschaft Probleme am besten löst, wenn wir zusammenarbeiten. Unsere Rolle als Hub besteht darin, die Punkte zu verbinden, Doppelarbeit zu reduzieren und sicherzustellen, dass die Ressourcen dorthin fließen, wo sie am dringendsten benötigt werden.' },
          dignity: { title: 'Würde zuerst', desc: 'Hilfe zu erhalten, sollte sich nie wie ein Almosen anfühlen. Unsere Dienstleistungen und Partnerschaften sind darauf ausgerichtet, aufzubauen und zu befähigen und das Selbstwertgefühl jedes Menschen, den wir berühren, zu bewahren.' },
          hope: { title: 'Standhafte Hoffnung', desc: 'Wir sind keine naiven Optimisten; wir sind disziplinierte Hoffende. Wir sehen die Risse im System und arbeiten jeden Tag daran, sie zu füllen, im festen Glauben an eine hellere, gemeinsame Zukunft.' }
        },
        future: {
          title: 'Die Zukunft, die wir bauen',
          p1: 'ShareHopes ist kein Silo; es ist ein Nervenzentrum. Unsere Vision ist eine Gemeinschaft, in der gemeinnützige Organisationen nicht länger isoliert kämpfen. Wir stellen uns ein Netzwerk vor, in dem eine Lebensmittelbank nahtlos mit einem Wohnbeauftragten koordiniert werden kann, weil wir die gemeinsame Basis bieten.',
          p2: 'Egal, ob Sie eine Familie sind, die Lebensmittel benötigt, ein Freiwilliger, der dienen möchte, oder ein Gründer einer kleinen gemeinnützigen Organisation, der einen Sponsor sucht, um Ihnen beim Start zu helfen – ShareHopes ist Ihr Zuhause.',
          cta: 'Gemeinsam bieten wir nicht nur Hilfe an. Wir bauen die Kapazität aus, damit die Hoffnung gedeihen kann.'
        }
      },
      privacy: {
        title: 'Datenschutzrichtlinie | ShareHopes',
        lastUpdated: 'Zuletzt aktualisiert: 18. April 2026',
        commitment: {
          title: 'Unser Engagement für Sie',
          text: 'Bei ShareHopes („wir“, „uns“ oder „unser“) glauben wir an Transparenz und radikale Empathie. Der Schutz der Privatsphäre unserer Gemeinschaft – ob Sie nun eine Familie sind, die Lebensmittel erhält, ein Freiwilliger, ein Spender oder eine Partnerorganisation – ist grundlegend für unsere Mission, die Hände zu stärken, die helfen. Diese Datenschutzrichtlinie erklärt, wie wir Ihre Informationen erfassen, verwenden und schützen, wenn Sie unsere Website sharehopes.org besuchen oder unsere Dienste in Anspruch nehmen.'
        },
        sections: {
          s1: {
            title: '1. Informationen, die wir sammeln',
            text: 'Da ShareHopes sowohl als direkter Dienstleister als auch als Drehscheibe für andere Organisationen fungiert, hängt die Art der von uns erfassten Informationen davon ab, wie Sie mit uns interagieren.',
            sub1: 'Informationen, die Sie direkt bereitstellen:',
            item1: 'Leistungsempfänger: Namen, Kontaktinformationen, Haushaltsgröße und Ernährungsbedürfnisse (ausschließlich für die Leistungserbringung und die Berichterstattung über Finanzhilfen in anonymisierten, aggregierten Formaten verwendet).',
            item2: 'Partnerorganisationen & Gesponserte: Organisationsdetails, Steueridentifikationsnummern, Bankinformationen für die Auszahlung von Geldern und Kontaktinformationen für die Leitung.',
            item3: 'Spender & Freiwillige: Name, E-Mail-Adresse, Postanschrift, Telefonnummer und Zahlungsinformationen (sicher verarbeitet durch PCI-konforme Drittanbieter; wir speichern keine vollständigen Kreditkartennummern).',
            sub2: 'Automatisch gesammelte Informationen:',
            item4: 'Website-Nutzung: Wir verwenden Standard-Cookies und Analysetools (z. B. Google Analytics), um zu verstehen, wie Besucher unsere Website finden und welche Seiten sie besuchen. Diese Daten sind anonymisiert und helfen uns, unsere Plattform zu verbessern.'
          },
          s2: {
            title: '2. Wie wir Ihre Informationen verwenden',
            text: 'Wir verwenden Ihre Daten nur aus legitimen, missionsorientierten Gründen. Wir verkaufen, tauschen oder vermieten Ihre persönlichen Daten niemals zu Marketingzwecken an Dritte.',
            item1: 'Zur Erbringung von Dienstleistungen: Zur Koordinierung der Lebensmittelverteilung, zur Planung von Freiwilligeneinsätzen oder zur Bereitstellung von Back-Office-Unterstützung für unsere gesponserten Partner.',
            item2: 'Zur Bearbeitung von Spenden: Um steuerlich absetzbare Beiträge sicher zu verarbeiten und Quittungen auszustellen.',
            item3: 'Zur Kommunikation: Um Updates über ShareHopes-Programme, Wirkungsberichte oder kritische Sicherheitswarnungen zu senden.'
          },
          s3: {
            title: '3. Weitergabe von Informationen (Die „Hub“-Nuance)',
            text: 'Da wir als Sponsor fungieren, gibt es spezifische, begrenzte Fälle, in denen ein Datenaustausch erforderlich ist:',
            item1: 'Mit Partnerorganisationen (Gesponserte Gruppen): Wenn Sie ein Spender sind, der für eine bestimmte Kampagne unter unserem Sponsoring-Dach spendet, können wir Ihren Namen und den Spendenbetrag an den jeweiligen Projektleiter weitergeben.',
            item2: 'Dienstleister: Wir teilen Daten mit vertrauenswürdigen Drittanbietern, die uns beim Betrieb unterstützen.',
            item3: 'Gesetzliche Compliance: Wir können Informationen offenlegen, wenn dies gesetzlich vorgeschrieben ist.'
          },
          s4: {
            title: '4. Datensicherheit',
            text: 'Wir nehmen den Schutz sensibler Daten ernst. Wir implementieren Sicherheitsmaßnahmen nach Industriestandard, einschließlich SSL-Verschlüsselung und gesicherter, zugriffsgesteuerter Datenbanken.'
          },
          s5: {
            title: '5. Ihre Rechte & Entscheidungen',
            item1: 'E-Mail-Kommunikation: Sie können sich jederzeit von unserer Mailingliste abmelden.',
            item2: 'Zugriff & Korrektur: Sie können beantragen, die bei uns gespeicherten personenbezogenen Daten einzusehen oder zu korrigieren.',
            item3: 'Do Not Track: Wir respektieren „Do Not Track“-Signale von Webbrowsern.'
          },
          s6: {
            title: '6. Privatsphäre von Kindern',
            text: 'Wir sammeln wissentlich keine personenbezogenen Daten von Kindern unter 13 Jahren ohne verifizierte elterliche Zustimmung.'
          },
          s7: {
            title: '7. Änderungen dieser Richtlinie',
            text: 'Wir können diese Richtlinie regelmäßig aktualisieren. Das Datum „Zuletzt aktualisiert“ oben auf dieser Seite gibt an, wann Revisionen vorgenommen wurden.'
          },
          s8: {
            title: '8. Kontaktieren Sie uns',
            text: 'Bei Fragen zu dieser Datenschutzrichtlinie wenden Sie sich bitte an info@sharehopes.org.'
          }
        }
      },
      terms: {
        title: 'Nutzungsbedingungen | ShareHopes',
        lastUpdated: 'Zuletzt aktualisiert: 18. April 2026',
        s1: {
          title: '1. Annahme der Bedingungen',
          text: 'Willkommen bei ShareHopes. Durch den Zugriff auf unsere Website, das Tätigen einer Spende, die Beantragung von Dienstleistungen oder die Zusammenarbeit mit uns als Partnerorganisation erklären Sie sich mit diesen Nutzungsbedingungen einverstanden.'
        },
        s2: {
          title: '2. Unsere Rolle: Plattform und Anbieter',
          text: 'ShareHopes verfolgt eine duale Mission. Bitte lesen Sie diese Abschnitte sorgfältig durch, je nachdem, wie Sie mit uns interagieren.',
          sub1: 'A. Für direkte Leistungsempfänger',
          item1: 'ShareHopes stellt Lebensmittel, Vorräte und Hilfe basierend auf Verfügbarkeit und dem Ehrenwort-Prinzip bereit.',
          sub2: 'B. Für Partnerorganisationen & Gesponserte',
          item2: 'Wenn ShareHopes als Ihr Sponsor fungiert, wird Ihre Beziehung durch eine separate Sponsoringvereinbarung geregelt.'
        },
        s3: {
          title: '3. Geistiges Eigentum',
          text: 'Die Texte, Logos, Grafiken und Bilder auf dieser Website sind Eigentum von ShareHopes oder werden mit Genehmigung verwendet.'
        },
        s4: {
          title: '4. Spenden und Finanztransaktionen',
          text: 'Spenden an ShareHopes sind in der Regel nicht erstattungsfähig.'
        },
        s5: {
          title: '5. Nutzerverhalten',
          text: 'Sie erklären sich damit einverstanden, die Website nicht für rechtswidrige Zwecke zu nutzen oder zu versuchen, unbefugten Zugriff auf unsere Systeme zu erlangen.'
        },
        s6: {
          title: '6. Gewährleistungsausschluss',
          text: 'Dienstleistungen werden „wie besehen“ bereitgestellt. Während wir unermüdlich daran arbeiten, sicherzustellen, dass unsere Lebensmittel nahrhaft sind, geben wir keine Garantien bezüglich einer ununterbrochenen Verfügbarkeit.'
        },
        s7: {
          title: '7. Haftungsbeschränkung',
          text: 'Soweit gesetzlich zulässig, haftet ShareHopes nicht für indirekte Schäden oder Folgeschäden.'
        },
        s8: {
          title: '8. Anwendbares Recht',
          text: 'Diese Bedingungen unterliegen den lokalen Gesetzen und werden in Übereinstimmung mit diesen ausgelegt.'
        },
        s9: {
          title: '9. Kontaktinformationen',
          text: 'Bei Fragen zu diesen Bedingungen wenden Sie sich bitte an info@sharehopes.org'
        }
      },
      cookies: {
        title: 'Cookie-Richtlinie | ShareHopes',
        lastUpdated: 'Zuletzt aktualisiert: 18. April 2026',
        explanation: {
          title: 'Eine einfache Erklärung von Cookies',
          p1: 'Bei ShareHopes glauben wir an Transparenz in allen Dingen. Diese Richtlinie erklärt, was Cookies sind, wie wir sie verwenden und wie Sie sie steuern können.',
          p2: 'Betrachten Sie Cookies als kleine, harmlose Textdateien, die als digitale Namensschilder fungieren.'
        },
        sections: {
          s1: {
            title: '1. Essenzielle Cookies (Die Website zum Laufen bringen)',
            desc: 'Dies sind die Cookies, die dafür sorgen, dass unsere Website funktioniert. Sie ermöglichen grundlegende Funktionen wie die Navigation auf der Seite und den Zugriff auf sichere Bereiche. Ohne diese Cookies kann die Website nicht ordnungsgemäß funktionieren.'
          },
          s2: {
            title: '2. Leistungs- & Analyse-Cookies (Unseren Einfluss verstehen)',
            desc: 'Diese Cookies helfen uns zu verstehen, wie Menschen ShareHopes finden und welche Informationen für sie am nützlichsten sind. So wie wir verfolgen, wie viele Mahlzeiten wir servieren, um unseren Küchenbetrieb zu verbessern, verfolgen wir, wie viele Personen unsere „Sponsoring“-Seite besuchen, damit wir diese Informationen leichter auffindbar machen können.',
            data: 'Diese Informationen sind anonymisiert und aggregiert. Wir können sehen, dass „heute viele Menschen über das Lebensmittelverteilungsprogramm gelesen haben“, aber wir können nicht sehen, dass „Max Mustermann über das Lebensmittelverteilungsprogramm gelesen hat“.',
            tools: 'Wir verwenden Standard-Tools wie Google Analytics.'
          },
          s3: {
            title: '3. Funktionalitäts-Cookies (Ihre Präferenzen merken)',
            desc: 'Diese Cookies merken sich von Ihnen getroffene Entscheidungen, um Ihr Erlebnis zu verbessern. Sie ermöglichen es der Website, sich an Ihre bevorzugte Sprache oder die Region zu erinnern, in der Sie sich befinden (damit wir Ihnen die richtigen Freiwilligenangebote für Ihre Stadt zeigen).'
          }
        },
        contact: {
          title: 'Kontaktieren Sie uns',
          text: 'Sollten Sie Fragen zu unserer Verwendung von Cookies haben, setzen Sie sich bitte mit uns in Verbindung.',
          team: 'ShareHopes Operationsteam'
        }
      },
      timeline: {
        label: "Unsere Reise",
        accessibility: {
          activity: "Aktivität",
          currentActivity: "Aktuelle Aktivität",
          thumbnail: "Vorschaubild"
        },
        stages: {
          "2025": {
            "title": "Grundlagen & Wachstum",
            "description": "Unser Gründungsjahr, in dem wir unser Kern-Freiwilligennetzwerk aufgebaut und unsere ersten Gemeinschaftsprojekte abgeschlossen haben."
          },
          "2026": {
            "title": "Das nächste Kapitel: Globale Wurzeln, intelligentere Verbindungen",
            "description": "Während unsere Herzen fest in den Gemeinschaften verwurzelt bleiben, denen wir heute dienen, dehnt sich unsere Vision über Grenzen hinaus aus. Geleitet von unserem unerschütterlichen Engagement für radikale Empathie und kollektive Kraft erweitern wir unsere Präsenz in neuen Ländern – nicht um Lösungen von fern aufzuzwingen, sondern um zuzuhören, zu lernen und lokale Helden zu unterstützen, die bereits vor Ort die Arbeit leisten.\n\nUnd wir bauen eine intelligentere Brücke, um sie zu verbinden. Indem wir als Kraftmultiplikator wirken, stellen wir sicher, dass jede geleistete Freiwilligenstunde und jede geteilte Ressource genau dort landet, wo sie die größte Hoffnung erzeugen kann. Wir stärken die Hände, die helfen, überall."
          }
        }
      }
    }
  },
  es: {
    translation: {
      nav: {
        home: 'Inicio',
        activities: 'Actividades',
        volunteer: 'Voluntariado',
        about: 'Nosotros',
        contact: 'Contacto'
      },
      hero: {
        badge: 'Conectando Causas. Potenciando el Cambio',
        title: 'Sembrando semillas de esperanza, juntos.',
        subtitle: 'Sembrando amor, cosechando cambios: ofrecemos asistencia gratuita a quienes la necesitan.',
        cta: 'Empezar a ayudar',
        secondaryCta: 'Saber más'
      },
      activities: {
        label: 'Actividades',
        title: 'Nuestras Actividades',
        subtitle: 'Lo que hacemos: Nutriendo cuerpos, mentes y comunidades',
        foodDistribution: {
          title: 'Distribución de Alimentos',
          desc: 'Proporcionando comidas nutritivas y alimentos esenciales a familias que enfrentan el hambre.'
        },
        hotMeals: {
          title: 'Comidas Calientes para Personas sin Hogar',
          desc: 'Sirviendo comida recién preparada con dignidad, calidez y cuidado.'
        },
        schoolSupplies: {
          title: 'Suministros Escolares',
          desc: 'Equipando a los estudiantes con las herramientas esenciales que necesitan para aprender y prosperar.'
        },
        hospitalAid: {
          title: 'Ayuda Hospitalaria',
          desc: 'Entregando suministros críticos y alivio a instalaciones de atención médica con pocos recursos.'
        },
        serveStrengthen: {
          title: 'Servir y Fortalecer',
          desc: 'Conectando héroes sobre el terreno (pequeños equipos, voluntarios apasionados y organizaciones sin fines de lucro emergentes) con ideas brillantes pero recursos limitados.'
        }
      },
      volunteer: {
        label: 'Voluntariado',
        title: '¿Listo para ayudar?',
        subtitle: 'Completa el formulario y nos pondremos en contacto contigo pronto.',
        name: 'Nombre completo',
        firstName: 'Nombre',
        lastName: 'Apellido',
        email: 'Correo electrónico',
        phone: 'Número de teléfono',
        address: 'Dirección',
        city: 'Ciudad',
        postcode: 'Código postal',
        country: 'País',
        interests: 'Áreas de interés',
        availability: 'Tu disponibilidad',
        skills: 'Habilidades y experiencia',
        message: '¿Por qué quieres unirte?',
        submit: 'Enviar solicitud',
        success: '¡Solicitud enviada con éxito!',
        error: 'Error al enviar. Inténtalo de nuevo.',
        options: {
          availability: {
            weekdays: 'Días laborables',
            weekends: 'Fines de semana',
            evenings: 'Tardes',
            flexible: 'Flexible'
          }
        },
        benefits: {
          impact: {
            title: 'Impacto Primero',
            desc: 'Cada hora que das apoya directamente a alguien que lo necesita.'
          },
          community: {
            title: 'Comunidad Global',
            desc: 'Conéctate con personas de ideas afines de todo el mundo.'
          }
        }
      },
      footer: {
        quickLinks: 'Enlaces Rápidos',
        contactUs: 'Contáctenos',
        privacy: 'Política de Privacidad',
        terms: 'Términos de Servicio',
        cookie: 'Política de Cookies',
        rights: '© 2026 ShareHopes. Todos los derechos reservados.',
        tagline: 'Construyendo un mundo mejor, un voluntario a la vez.'
      },
      timeline: {
        label: "Nuestro Viaje",
        accessibility: {
          activity: "actividad",
          currentActivity: "Actividad Actual",
          thumbnail: "Miniatura"
        },
        stages: {
          "2025": {
            "title": "Cimientos y Crecimiento",
            "description": "Nuestro año inicial de lanzamiento, donde establecimos nuestra red central de voluntarios y completamos nuestros primeros proyectos comunitarios."
          },
          "2026": {
            "title": "El Próximo Capítulo: Raíces Globales, Conexiones Inteligentes",
            "description": "Si bien nuestros corazones permanecen firmemente plantados en las comunidades a las que servimos hoy, nuestra visión se expande más allá de las fronteras. Guiados por nuestro compromiso inquebrantable con la Empatía Radical y el Poder Colectivo, estamos extendiendo nuestra huella a nuevos países, no para imponer soluciones desde lejos, sino para escuchar, aprender y elevar a los héroes locales que ya realizan el trabajo en el terreno.\n\nY estamos construyendo un puente más inteligente para conectarlos. Al actuar como un multiplicador de fuerza, nos aseguramos de que cada hora de voluntariado y cada recurso compartido aterrice exactamente donde pueda generar la mayor esperanza. Estamos fortaleciendo las manos que ayudan, en todas partes."
          }
        }
      },
      aboutPage: {
        hero: {
          label: 'Voluntariado',
          title: 'Sobre ShareHopes',
          subtitle: 'Fortaleciendo las manos que ayudan.'
        },
        story: {
          title: 'Nuestra Historia: Más que una Misión, un Movimiento',
          p1: 'En ShareHopes, entendemos que los desafíos que enfrenta nuestra comunidad (el hambre, la falta de vivienda, las brechas educativas y el acceso a la atención médica) son demasiado complejos para que una sola organización los resuelva por sí sola. Comenzamos con una creencia simple: que una comida caliente o una bolsa de comestibles podría restaurar la dignidad de una persona. Pero a medida que crecimos, nos dimos cuenta de que nuestra verdadera vocación era más grande que nuestros propios programas.',
          quote: 'No somos solo una organización sin fines de lucro. Somos una plataforma para la compasión.',
          p2: 'Si bien seguimos profundamente comprometidos con nuestras raíces de servicio directo (alimentar a los hambrientos y equipar a los vulnerables), hemos evolucionado hasta convertirnos en un centro y patrocinador comunitario. Existimos para eliminar las barreras que impiden que otros increíbles agentes de cambio de base realicen su mejor trabajo. Al brindar apoyo operativo, recursos compartidos y una red de atención, amplificamos el impacto de toda nuestra comunidad.'
        },
        mission: {
          title: 'Nuestra Misión Dual: Servir y Fortalecer',
          subtitle: 'Creemos que una marea creciente levanta todos los barcos.',
          direct: {
            title: '1. Servicio Directo: Cubriendo Necesidades Inmediatas',
            desc: 'Estamos en la primera línea todos los días. Nuestros programas están diseñados para brindar alivio con respeto y cuidado, asegurando que nadie en nuestra comunidad sea invisible.',
            food: { title: 'Seguridad Alimentaria', desc: 'Desde nuestros centros de distribución de alimentos hasta nuestro alcance en las calles sirviendo comidas calientes y recién preparadas, combatimos el hambre donde vive.' },
            youth: { title: 'Educación y Juventud', desc: 'Equipamos a los estudiantes con los suministros esenciales que necesitan para enfocarse en el aprendizaje, no en la carencia.' },
            health: { title: 'Ayuda Médica y Hospitalaria', desc: 'Suministramos a las instalaciones de atención médica y a los socios los artículos más críticos necesarios para cuidar a nuestros vecinos.' }
          },
          hub: {
            title: '2. El Hub de ShareHopes: Impulsando a los que Hacen',
            desc: 'Este es el corazón de nuestra estrategia de cambio a largo plazo. Sabemos que hay héroes en el terreno: equipos pequeños, voluntarios apasionados y organizaciones sin fines de lucro emergentes, con ideas brillantes pero infraestructura limitada.',
            detail: 'Abrimos nuestras puertas y nuestros recursos para patrocinar y apoyar a otras organizaciones sin fines de lucro. A través del patrocinio y la capacidad operativa compartida, permitimos que estos grupos se concentren en su misión única mientras nosotros nos encargamos del trabajo pesado.',
            tagline: 'Elevamos a los que elevan.'
          }
        },
        principles: {
          title: 'Principios rectores',
          empathy: { title: 'Empatía Radical', desc: 'Nos encontramos con las personas donde están, sin juzgar. Ya sea sirviendo una comida a un vecino sin hogar o revisando una subvención para una organización socia, lideramos con el corazón.' },
          power: { title: 'Poder Colectivo', desc: 'Creemos que la comunidad resuelve mejor los problemas cuando trabajamos juntos. Nuestro papel como centro es conectar los puntos, reducir la duplicación y asegurar que los recursos fluyan hacia donde más se necesitan.' },
          dignity: { title: 'La Dignidad Primero', desc: 'Recibir ayuda nunca debería sentirse como una limosna. Nuestros servicios y nuestras asociaciones están estructurados para elevar y empoderar, preservando la autoestima de cada persona que tocamos.' },
          hope: { title: 'Esperanza Inquebrantable', desc: 'No somos optimistas ingenuos; somos personas que esperamos con disciplina. Vemos las grietas en el sistema y trabajamos cada día para llenarlas, creyendo firmemente en un futuro compartido más brillante.' }
        },
        future: {
          title: 'El futuro que estamos construyendo',
          p1: 'ShareHopes no es un silo; es un centro neurálgico. Nuestra visión es una comunidad donde las organizaciones sin fines de lucro ya no luchan aisladas. Imaginamos una red donde un banco de alimentos pueda coordinarse sin problemas con un defensor de la vivienda porque nosotros proporcionamos el terreno común.',
          p2: 'Ya sea que sea una familia que necesita comestibles, un voluntario que busca servir o el fundador de una pequeña organización sin fines de lucro que busca un patrocinador que lo ayude a despegar, ShareHopes es su hogar.',
          cta: 'Juntos, no solo ofrecemos ayuda. Construimos la capacidad para que la esperanza prospere.'
        }
      },
      privacy: {
        title: 'Política de Privacidad | ShareHopes',
        lastUpdated: 'Última actualización: 18 de abril de 2026',
        commitment: {
          title: 'Nuestro compromiso con usted',
          text: 'En ShareHopes («nosotros», «nos» o «nuestro»), creemos en la transparencia y la empatía radical. Proteger la privacidad de nuestra comunidad —ya sea una familia que recibe alimentos, un voluntario, un donante o una organización asociada sin fines de lucro— es fundamental para nuestra misión de fortalecer las manos que ayudan. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos su información cuando visita nuestro sitio web sharehopes.org o interactúa con nuestros servicios.'
        },
        sections: {
          s1: {
            title: '1. Información que recopilamos',
            text: 'Debido a que ShareHopes actúa como proveedor de servicios directos y como centro para otras organizaciones, el tipo de información que recopilamos depende de cómo interactúe con nosotros.',
            sub1: 'Información que proporciona directamente:',
            item1: 'Beneficiarios de servicios: Nombres, información de contacto, tamaño del hogar y necesidades dietéticas (utilizados estrictamente para la prestación de servicios y la elaboración de informes de subvenciones en formatos agregados y anónimos).',
            item2: 'Organizaciones asociadas y patrocinadas: Detalles de la organización, números de identificación fiscal, información bancaria para el desembolso de fondos e información de contacto de los directivos.',
            item3: 'Donantes y voluntarios: Nombre, dirección de correo electrónico, dirección postal, número de teléfono e información de pago (procesada de forma segura por proveedores externos que cumplen con la normativa PCI; no almacenamos números completos de tarjetas de crédito).',
            sub2: 'Información recopilada automáticamente:',
            item4: 'Uso del sitio web: Utilizamos cookies estándar y herramientas de análisis (por ejemplo, Google Analytics) para entender cómo los visitantes encuentran nuestro sitio web y qué páginas visitan. Estos datos son anónimos y nos ayudan a mejorar nuestra plataforma.'
          },
          s2: {
            title: '2. Cómo usamos su información',
            text: 'Usamos sus datos únicamente por motivos legítimos y centrados en nuestra misión. Nunca vendemos, intercambiamos ni alquilamos su información personal a terceros con fines de marketing.',
            item1: 'Para prestar servicios: Para coordinar la distribución de alimentos, programar turnos de voluntarios o proporcionar apoyo administrativo a nuestros socios patrocinados.',
            item2: 'Para procesar donaciones: Para procesar de forma segura las contribuciones deducibles de impuestos y proporcionar recibos.',
            item3: 'Para comunicarnos: Para enviar actualizaciones sobre los programas de ShareHopes, historias de impacto o alertas críticas de seguridad.'
          },
          s3: {
            title: '3. Cómo compartimos la información (El matiz del «Hub»)',
            text: 'Al actuar como patrocinador, existen casos específicos y limitados en los que la compartición de datos es necesaria:',
            item1: 'Con organizaciones asociadas (grupos patrocinados): Si usted es un donante que aporta a una campaña específica bajo nuestro paraguas de patrocinio, podemos compartir su nombre y el monto de la donación con el líder de ese proyecto específico.',
            item2: 'Proveedores de servicios: Compartimos datos con proveedores externos de confianza que nos ayudan a operar.',
            item3: 'Cumplimiento legal: Podemos divulgar información si la ley lo requiere.'
          },
          s4: {
            title: '4. Seguridad de los datos',
            text: 'Nos tomamos muy en serio la protección de los datos sensibles. Implementamos medidas de seguridad estándar de la industria, incluyendo cifrado SSL y bases de datos seguras con acceso controlado.'
          },
          s5: {
            title: '5. Sus derechos y opciones',
            item1: 'Comunicaciones por correo electrónico: Puede cancelar su suscripción a nuestra lista de correo en cualquier momento.',
            item2: 'Acceso y corrección: Puede solicitar ver o corregir los datos personales que tenemos registrados.',
            item3: 'No rastrear (Do Not Track): Respetamos las señales Do Not Track de los navegadores web.'
          },
          s6: {
            title: '6. Privacidad de los niños',
            text: 'No recopilamos a sabiendas información personal de niños menores de 13 años sin el consentimiento paterno verificado.'
          },
          s7: {
            title: '7. Cambios en esta política',
            text: 'Podemos actualizar esta política periódicamente. La fecha de «Última actualización» en la parte superior de esta página indicará cuándo se realizaron revisiones.'
          },
          s8: {
            title: '8. Contáctenos',
            text: 'Para cualquier pregunta con respecto a esta Política de Privacidad, por favor contáctenos en info@sharehopes.org.'
          }
        }
      },
      terms: {
        title: 'Términos de Servicio | ShareHopes',
        lastUpdated: 'Última actualización: 18 de abril de 2026',
        s1: {
          title: '1. Aceptación de los términos',
          text: 'Bienvenido a ShareHopes. Al acceder a nuestro sitio web, realizar una donación, solicitar servicios o colaborar con nosotros como organización asociada, usted acepta estar sujeto a estos Términos de Servicio.'
        },
        s2: {
          title: '2. Nuestro rol: Plataforma y proveedor',
          text: 'ShareHopes opera con una misión dual. Por favor, lea estas secciones atentamente dependiendo de cómo interactúe con nosotros.',
          sub1: 'A. Para beneficiarios de servicios directos',
          item1: 'ShareHopes proporciona alimentos, suministros y ayuda basada en la disponibilidad y bajo el sistema de honor.',
          sub2: 'B. Para organizaciones asociadas y patrocinadas',
          item2: 'Si ShareHopes actúa como su patrocinador, su relación se rige por un Acuerdo de Patrocinio independiente.'
        },
        s3: {
          title: '3. Propiedad Intelectual',
          text: 'El texto, los logotipos, los gráficos y las imágenes de este sitio web son propiedad de ShareHopes o se utilizan con permiso.'
        },
        s4: {
          title: '4. Donaciones y Transacciones Financieras',
          text: 'Las donaciones realizadas a ShareHopes generalmente no son reembolsables.'
        },
        s5: {
          title: '5. Conducta del usuario',
          text: 'Usted acepta no utilizar el sitio web para ningún propósito ilegal ni intentar obtener acceso no autorizado a nuestros sistemas.'
        },
        s6: {
          title: '6. Renuncia de garantías',
          text: 'Servicios proporcionados «tal cual». Si bien trabajamos incansablemente para asegurar que nuestros alimentos sean nutritivos, no ofrecemos garantías con respecto a la disponibilidad ininterrumpida.'
        },
        s7: {
          title: '7. Limitación de responsabilidad',
          text: 'En la medida máxima permitida por la ley, ShareHopes no será responsable de ningún daño indirecto o consecuente.'
        },
        s8: {
          title: '8. Ley aplicable',
          text: 'Estos Términos se regirán e interpretarán de acuerdo con las leyes locales.'
        },
        s9: {
          title: '9. Información de contacto',
          text: 'Para preguntas sobre estos términos, contáctenos en info@sharehopes.org'
        }
      },
      cookies: {
        title: 'Política de Cookies | ShareHopes',
        lastUpdated: 'Última actualización: 18 de abril de 2026',
        explanation: {
          title: 'Una explicación sencilla de las cookies',
          p1: 'En ShareHopes, creemos en la transparencia en todas las cosas. Esta política explica qué son las cookies, cómo las usamos y cómo puede controlarlas.',
          p2: 'Piense en las cookies como pequeños archivos de texto inofensivos que actúan como etiquetas de nombre digitales.'
        },
        sections: {
          s1: {
            title: '1. Cookies Esenciales (Para que el sitio funcione)',
            desc: 'Estas son las cookies que hacen que nuestro sitio web funcione. Permiten funciones básicas como la navegación por las páginas y el acceso a áreas seguras. El sitio web no puede funcionar correctamente sin estas cookies.'
          },
          s2: {
            title: '2. Cookies de Rendimiento y Análisis (Para entender nuestro impacto)',
            desc: 'Estas cookies nos ayudan a entender cómo la gente encuentra ShareHopes y qué información les resulta más útil. Al igual que rastreamos cuántas comidas servimos para mejorar nuestras operaciones de cocina, rastreamos cuántas personas visitan nuestra página de «Patrocinio» para poder hacer que esa información sea más fácil de encontrar.',
            data: 'Esta información es anónima y agregada. Podemos ver que «muchas personas leyeron hoy sobre el programa de distribución de alimentos», pero no podemos ver que «Juan Pérez leyó sobre el programa de distribución de alimentos».',
            tools: 'Utilizamos herramientas estándar como Google Analytics.'
          },
          s3: {
            title: '3. Cookies de Funcionalidad (Para recordar sus preferencias)',
            desc: 'Estas cookies recuerdan las elecciones que usted hace para mejorar su experiencia. Permiten que el sitio web recuerde su idioma preferido o la región en la que se encuentra (para que podamos mostrarle las oportunidades de voluntariado correctas para su ciudad).'
          }
        },
        contact: {
          title: 'Contáctenos',
          text: 'Si tiene alguna pregunta sobre nuestro uso de cookies, por favor póngase en contacto con nosotros.',
          team: 'Equipo de Operaciones de ShareHopes'
        }
      }
    }
  },
  fr: {
    translation: {
      nav: {
        home: 'Accueil',
        activities: 'Activités',
        volunteer: 'Bénévolat',
        about: 'À propos',
        contact: 'Contact'
      },
      hero: {
        badge: 'Relier les Causes. Propulser le Changement',
        title: 'Planter des graines d\'espoir, ensemble.',
        subtitle: 'Semer l\'amour, récolter le changement—nous offrons une assistance gratuite à ceux qui en ont besoin.',
        cta: 'Devenir bénévole',
        secondaryCta: 'En savoir plus'
      },
      activities: {
        label: 'Activités',
        title: 'Nos Activités',
        subtitle: 'Ce que nous faisons : Nourrir les corps, les esprits et les communautés',
        foodDistribution: {
          title: 'Distribution Alimentaire',
          desc: 'Fournir des repas nutritifs et des produits d\'épicerie essentiels aux familles confrontées à la faim.'
        },
        hotMeals: {
          title: 'Repas Chauds pour les Sans-abri',
          desc: 'Servir des aliments fraîchement préparés avec dignité, chaleur et soin.'
        },
        schoolSupplies: {
          title: 'Fournitures Scolaires',
          desc: 'Doter les étudiants des outils essentiels dont ils ont besoin pour apprendre et s\'épanouir.'
        },
        hospitalAid: {
          title: 'Aide Hospitalière',
          desc: 'Livrer des fournitures critiques et des secours aux établissements de santé sous-ressources.'
        },
        serveStrengthen: {
          title: 'Servir et Fortifier',
          desc: 'Connecter les héros sur le terrain – petites équipes, bénévoles passionnés et organisations à but non lucratif émergentes – avec des idées brillantes mais des ressources limitées.'
        }
      },
      volunteer: {
        label: 'Bénévolat',
        title: 'Prêt à aider ?',
        subtitle: 'Remplissez le formulaire ci-dessous et nous vous contacterons prochainement.',
        name: 'Nom complet',
        firstName: 'Prénom',
        lastName: 'Nom',
        email: 'Adresse e-mail',
        phone: 'Numéro de téléphone',
        address: 'Adresse',
        city: 'Ville',
        postcode: 'Code postal',
        country: 'Pays',
        interests: 'Domaines d\'intérêt',
        availability: 'Votre disponibilité',
        skills: 'Compétences et expérience',
        message: 'Pourquoi voulez-vous nous rejoindre ?',
        submit: 'Envoyer la candidature',
        success: 'Candidature envoyée avec succès !',
        error: 'Échec de l\'envoie. Veuillez réessayer.',
        options: {
          availability: {
            weekdays: 'En semaine',
            weekends: 'Le week-end',
            evenings: 'Le soir',
            flexible: 'Flexible'
          }
        },
        benefits: {
          impact: {
            title: 'L\'Impact d\'Abord',
            desc: 'Chaque heure que vous donnez soutient directement une personne dans le besoin.'
          },
          community: {
            title: 'Communauté Mondiale',
            desc: 'Connectez-vous avec des personnes partageant les mêmes idées du monde entier.'
          }
        }
      },
      footer: {
        quickLinks: 'Liens Rapides',
        contactUs: 'Contactez-nous',
        privacy: 'Politique de Confidentialité',
        terms: 'Conditions d\'Utilisation',
        cookie: 'Politique relative aux Cookies',
        rights: '© 2026 ShareHopes. Tous droits réservés.',
        tagline: 'Bâtir un monde meilleur, un bénévole à la fois.'
      },
      timeline: {
        label: "Notre Parcours",
        accessibility: {
          activity: "activité",
          currentActivity: "Activité Actuelle",
          thumbnail: "Miniature"
        },
        stages: {
          "2025": {
            "title": "Fondations & Croissance",
            "description": "Notre année de lancement initiale, où nous avons établi notre réseau de bénévoles de base et mené à bien nos premiers projets communautaires."
          },
          "2026": {
            "title": "Le Prochain Chapitre : Racines Globales, Connexions Intelligentes",
            "description": "Alors que nos cœurs restent fermement ancrés dans les communautés que nous servons aujourd'hui, notre vision s'étend au-delà des frontières. Guidés par notre engagement indéfectible envers l'empathie radicale et le pouvoir collectif, nous étendons notre empreinte à de nouveaux pays — non pas pour imposer des solutions de loin, mais pour écouter, apprendre et élever les héros locaux qui font déjà le travail sur le terrain.\n\nEt nous construisons un pont plus intelligent pour les connecter. En agissant comme un multiplicateur de force, nous veillons à ce que chaque heure de bénévolat et chaque ressource partagée atterrisse exactement là où elle peut générer le plus grand espoir. Nous renforçons les mains qui aident, partout."
          }
        }
      },
      aboutPage: {
        hero: {
          label: 'Bénévolat',
          title: 'À propos de ShareHopes',
          subtitle: 'Fortifier les mains qui aident.'
        },
        story: {
          title: 'Notre histoire : Plus qu\'une mission, un mouvement',
          p1: 'Chez ShareHopes, nous comprenons que les défis auxquels notre communauté est confrontée — la faim, l\'itinérance, les lacunes en matière d\'éducation et l\'accès aux soins de santé — sont trop complexes pour qu\'une seule organisation puisse les résoudre seule. Nous avons commencé avec une conviction simple : qu\'un repas chaud ou un sac de courses pourrait restaurer la dignité d\'une personne. Mais au fil de notre croissance, nous avons réalisé que notre véritable vocation était plus grande que nos propres programmes.',
          quote: 'Nous ne sommes pas seulement une organisation à but non lucratif. Nous sommes une plateforme pour la compassion.',
          p2: 'Bien que nous restions profondément attachés à nos racines de service direct (nourrir les affamés et équiper les vulnérables), nous avons évolué pour devenir un pivot communautaire et un parrain. Nous existons pour lever les obstacles qui empêchent d\'autres incroyables acteurs du changement à la base de faire leur meilleur travail. En fournissant un soutien opérationnel, des ressources partagées et un réseau de soins, nous amplifions l\'impact de l\'ensemble de notre communauté.'
        },
        mission: {
          title: 'Notre double mission : Servir et Fortifier',
          subtitle: 'Nous pensons qu\'une marée montante soulève tous les bateaux.',
          direct: {
            title: '1. Service Direct : Répondre aux besoins immédiats',
            desc: 'Nous sommes sur le terrain chaque jour. Nos programmes sont conçus pour apporter du soulagement avec respect et soin, garantissant que personne dans notre communauté ne soit invisible.',
            food: { title: 'Sécurité Alimentaire', desc: 'De nos centres de distribution alimentaire à nos maraudes servant des repas chauds fraîchement préparés, nous combattons la faim là où elle se trouve.' },
            youth: { title: 'Jeunesse et Éducation', desc: 'Nous dotons les étudiants des fournitures essentielles dont ils ont besoin pour se concentrer sur l\'apprentissage, et non sur le manque.' },
            health: { title: 'Aide Médicale et Hospitalière', desc: 'Nous fournissons aux établissements de santé et aux partenaires les articles les plus critiques nécessaires pour soigner nos voisins.' }
          },
          hub: {
            title: '2. Le Hub ShareHopes : Propulser ceux qui agissent',
            desc: 'C\'est le cœur de notre stratégie de changement à long terme. Nous savons qu\'il y a des héros sur le terrain — de petites équipes, des bénévoles passionnés et des organisations à but non lucratif émergentes — avec des idées brillantes mais une infrastructure limitée.',
            detail: 'Nous ouvrons nos portes et nos ressources pour parrainer et soutenir d\'autres organisations à but non lucratif. Grâce au parrainage et à une capacité opérationnelle partagée, nous permettons à ces groupes de se concentrer sur leur mission unique pendant que nous nous occupons du travail lourd.',
            tagline: 'Nous aidons les aidants.'
          }
        },
        principles: {
          title: 'Nos principes directeurs',
          empathy: { title: 'Empathie Radicale', desc: 'Nous rencontrons les gens là où ils en sont, sans jugement. Qu\'il s\'agisse de servir un repas à un voisin sans abri ou d\'examiner une subvention pour une organisation partenaire, nous agissons avec cœur.' },
          power: { title: 'Pouvoir Collectif', desc: 'Nous croyons que la communauté résout mieux les problèmes lorsque nous travaillons ensemble. Notre rôle en tant que hub est de faire le lien, de réduire les doublons et de veiller à ce que les ressources circulent là où elles sont le plus nécessaires.' },
          dignity: { title: 'La Dignité d\'Abord', desc: 'Recevoir de l\'aide ne devrait jamais ressembler à une aumône. Nos services et nos partenariats sont structurés pour élever et responsabiliser, en préservant l\'estime de soi de chaque personne que nous touchons.' },
          hope: { title: 'Espoir Inébranlable', desc: 'Nous ne sommes pas des optimistes naïfs ; nous sommes des porteurs d\'espoir disciplinés. Nous voyons les failles du système et travaillons chaque jour à les combler, croyant fermement en un avenir commun plus radieux.' }
        },
        future: {
          title: 'L\'avenir que nous construisons',
          p1: 'ShareHopes n\'est pas un silo ; c\'est un centre névralgique. Notre vision est celle d\'une communauté où les organisations à but non lucratif ne luttent plus de manière isolée. Nous envisageons un réseau où une banque alimentaire peut coordonner ses efforts en toute transparence avec un défenseur du logement parce que nous fournissons le terrain d\'entente.',
          p2: 'Que vous soyez une famille ayant besoin de courses, un bénévole souhaitant servir ou le fondateur d\'une petite organisation à but non lucratif cherchant un parrain pour vous aider à démarrer — ShareHopes est votre maison.',
          cta: 'Ensemble, nous ne nous contentons pas d\'offrir de l\'aide. Nous bâtissons la capacité de l\'espoir à s\'épanouir.'
        }
       },
       privacy: {
         title: 'Politique de Confidentialité | ShareHopes',
         lastUpdated: 'Dernière mise à jour : 18 avril 2026',
         commitment: {
           title: 'Notre engagement envers vous',
           text: 'Chez ShareHopes (« nous », « notre » ou « nos »), nous croyons en la transparence et l\'empathie radicale. Protéger la vie privée de notre communauté — que vous soyez une famille recevant des produits d\'épicerie, un bénévole, un donateur ou une organisation partenaire à but non lucratif — est fondamental pour notre mission de renforcer les mains qui aident. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations lorsque vous visitez notre site Web sharehopes.org ou utilisez nos services.'
         },
         sections: {
           s1: {
             title: '1. Informations que nous collectons',
             text: 'Parce que ShareHopes sert à la fois de fournisseur de services directs et de hub pour d\'autres organisations, le type d\'informations que nous collectons dépend de la manière dont vous interagissez avec nous.',
             sub1: 'Informations que vous fournissez directement :',
             item1: 'Bénéficiaires de services : Noms, coordonnées, taille du ménage et besoins alimentaires (utilisés strictement pour la prestation de services et les rapports de subvention dans des formats anonymisés et agrégés).',
             item2: 'Partenaires à but non lucratif et parrainés : Détails de l\'organisation, numéros d\'identification fiscale, informations bancaires pour le versement des fonds et coordonnées des dirigeants.',
             item3: 'Donateurs et bénévoles : Nom, adresse e-mail, adresse postale, numéro de téléphone et informations de paiement (traités en toute sécurité par des fournisseurs tiers conformes à la norme PCI ; nous ne stockons pas les numéros complets de carte de crédit).',
             sub2: 'Informations collectées automatiquement :',
             item4: 'Utilisation du site Web : Nous utilisons des cookies standard et des outils d\'analyse (par exemple, Google Analytics) pour comprendre comment les visiteurs trouvent notre site Web et quelles pages ils visitent. Ces données sont anonymisées et nous aident à améliorer notre plateforme.'
           },
           s2: {
             title: '2. Comment nous utilisons vos informations',
             text: 'Nous utilisons vos données uniquement pour des raisons légitimes axées sur notre mission. Nous ne vendons, n\'échangeons ni ne louons jamais vos informations personnelles à des tiers à des fins de marketing.',
             item1: 'Pour fournir des services : Pour coordonner la distribution alimentaire, planifier les quarts de bénévolat ou fournir un soutien administratif à nos partenaires parrainés.',
             item2: 'Pour traiter les dons : Pour traiter en toute sécurité les contributions déductibles d\'impôt et fournir des reçus.',
             item3: 'Pour communiquer : Pour envoyer des mises à jour sur les programmes de ShareHopes, des histoires d\'impact ou des alertes de sécurité critiques.'
           },
           s3: {
             title: '3. Comment nous partageons les informations (La nuance du « Hub »)',
             text: 'Parce que nous servons de parrain, il existe des cas spécifiques et limités où le partage de données est nécessaire :',
             item1: 'Avec les organisations partenaires (groupes parrainés) : Si vous êtes un donateur versant à une campagne spécifique sous notre égide de parrainage, nous pouvons partager votre nom et le montant du don avec le responsable de ce projet spécifique.',
             item2: 'Prestataires de services.',
             item3: 'Conformité légale.'
           },
           s4: {
             title: '4. Sécurité des données',
             text: 'Nous prenons la protection des données sensibles au sérieux. Nous mettons en œuvre des mesures de sécurité conformes aux normes de l\'industrie, y compris le cryptage SSL et des bases de données sécurisées à accès contrôlé.'
           },
           s5: {
             title: '5. Vos droits et choix',
             item1: 'Communications par e-mail : Vous pouvez vous désabonner à tout moment.',
             item2: 'Accès et correction : Vous pouvez demander à voir ou à corriger vos données.',
             item3: 'Do Not Track : Nous respectons les signaux « Do Not Track » des navigateurs Web.'
           },
           s6: {
             title: '6. Vie privée des enfants',
             text: 'Nous ne collectons pas sciemment d\'informations personnelles auprès d\'enfants de moins de 13 ans sans un consentement parental vérifié.'
           },
           s7: {
             title: '7. Modifications de cette politique',
             text: 'Nous pouvons mettre à jour cette politique périodiquement. La date de « Dernière mise à jour » en haut de cette page indiquera quand des révisions ont été effectuées.'
           },
           s8: {
             title: '8. Contactez-nous',
             text: 'Pour toute question concernant cette politique de confidentialité, veuillez nous contacter à info@sharehopes.org.'
           }
         }
       },
       terms: {
         title: 'Conditions d\'Utilisation | ShareHopes',
         lastUpdated: 'Dernière mise à jour : 18 avril 2026',
         s1: {
           title: '1. Acceptation des conditions',
           text: 'Bienvenue sur ShareHopes. En accédant à notre site Web, en faisant un don, en demandant des services ou en vous engageant avec nous en tant qu\'organisation partenaire, vous acceptez d\'être lié par ces conditions d\'utilisation.'
         },
         s2: {
           title: '2. Notre rôle : Plateforme et fournisseur',
           text: 'ShareHopes opère avec une double mission. Veuillez lire attentivement ces sections en fonction de la manière dont vous interagissez avec nous.',
           sub1: 'A. Pour les bénéficiaires de services directs',
           item1: 'ShareHopes fournit de la nourriture, des fournitures et de l\'aide en fonction des disponibilités et du système d\'honneur.',
           sub2: 'B. Pour les organisations partenaires',
           item2: 'Si ShareHopes sert de parrain, votre relation est régie par un accord de parrainage distinct.'
         },
         s3: {
           title: '3. Propriété intellectuelle',
           text: 'Le texte, les logos, les graphiques et les images de ce site Web sont la propriété de ShareHopes ou utilisés avec permission.'
         },
         s4: {
           title: '4. Dons et transactions financières',
           text: 'Les dons faits à ShareHopes sont généralement non remboursables.'
         },
         s5: {
           title: '5. Conduite de l\'utilisateur',
           text: 'Vous acceptez de ne pas utiliser le site Web à des fins illégales ou de tenter d\'obtenir un accès non autorisé à nos systèmes.'
         },
         s6: {
           title: '6. Limitation de garantie',
           text: 'Services fournis « tels quels ». Bien que nous travaillions sans relâche pour nous assurer que nos aliments sont nutritifs, ne donnons aucune garantie quant à une disponibilité ininterrompue.'
         },
         s7: {
           title: '7. Limitation de responsabilité',
           text: 'Dans toute la mesure permise par la loi, ShareHopes ne sera pas responsable des dommages indirects ou consécutifs.'
         },
         s8: {
           title: '8. Loi applicable',
           text: 'Ces conditions sont régies et interprétées conformément aux lois locales.'
         },
         s9: {
           title: '9. Coordonnées',
           text: 'Pour toute question concernant ces conditions : info@sharehopes.org'
         }
       },
       cookies: {
         title: 'Politique relative aux Cookies | ShareHopes',
         lastUpdated: 'Dernière mise à jour : 18 avril 2026',
         explanation: {
           title: 'Une explication simple des cookies',
           p1: 'Chez ShareHopes, nous croyons en la transparence en toutes choses. Cette politique explique ce que sont les cookies, comment nous les utilisons et comment vous pouvez les contrôler.',
           p2: 'Considérez les cookies comme de petits fichiers texte inoffensifs qui agissent comme des badges nominatifs numériques.'
         },
         sections: {
           s1: {
             title: '1. Cookies essentiels (Faire fonctionner le site)',
             desc: 'Ce sont les cookies qui font fonctionner notre site Web. Ils permettent des fonctions de base comme la navigation sur les pages et l\'accès aux zones sécurisées. Le site Web ne peut pas fonctionner correctement sans ces cookies.'
           },
           s2: {
             title: '2. Cookies de performance et d\'analyse (Comprendre notre impact)',
             desc: 'Ces cookies nous aident à comprendre comment les gens trouvent ShareHopes et quelles informations leur sont les plus utiles. Tout comme nous suivons le nombre de repas que nous servons pour améliorer nos opérations de cuisine, nous suivons le nombre de personnes qui visitent notre page « Parrainage » afin de rendre ces informations plus faciles à trouver.',
             data: 'Ces informations sont anonymisées et agrégées. Nous pouvons voir que « de nombreuses personnes ont lu des articles sur le programme de distribution alimentaire aujourd\'hui », mais nous ne pouvons pas voir que « Jean Durand a lu des articles sur le programme de distribution alimentaire ».',
             tools: 'Nous utilisons des outils standard comme Google Analytics.'
           },
           s3: {
             title: '3. Cookies de fonctionnalité',
             desc: 'Ces cookies mémorisent les choix que vous faites.'
           }
         },
         contact: {
           title: 'Contactez-nous',
           text: 'Si vous avez des questions, n\'hésitez pas à nous contacter.',
           team: 'Équipe des opérations de ShareHopes'
         }
       }
     }
   },
  pt: {
    translation: {
      nav: {
        home: 'Início',
        activities: 'Atividades',
        volunteer: 'Voluntariado',
        about: 'Sobre nós',
        contact: 'Contato'
      },
      hero: {
        badge: 'Conectando Causas. Impulsionando a Mudança',
        title: 'Plantando juntos as sementes da esperança.',
        subtitle: 'Semeando amor, colhendo mudanças—oferecemos assistência gratuita aos necessitados.',
        cta: 'Começar a ajudar',
        secondaryCta: 'Saiba mais'
      },
      activities: {
        label: 'Atividades',
        title: 'Nossas Atividades',
        subtitle: 'O que fazemos: Nutrir corpos, mentes e comunidades',
        foodDistribution: {
          title: 'Distribuição de Alimentos',
          desc: 'Fornecendo refeições nutritivas e mantimentos essenciais para famílias que enfrentam a fome.'
        },
        hotMeals: {
          title: 'Refeições Quentes para Sem-Teto',
          desc: 'Servindo comida preparada na hora com dignidade, carinho e cuidado.'
        },
        schoolSupplies: {
          title: 'Material Escolar',
          desc: 'Equipando estudantes com as ferramentas essenciais que precisam para aprender e prosperar.'
        },
        hospitalAid: {
          title: 'Ajuda Hospitalar',
          desc: 'Entregando suprimentos críticos e alívio para unidades de saúde com poucos recursos.'
        },
        serveStrengthen: {
          title: 'Servir e Fortalecer',
          desc: 'Conectando heróis no terreno — pequenas equipes, voluntários apaixonados e organizações sem fins lucrativos emergentes — com ideias brilhantes, mas recursos limitados.'
        }
      },
      volunteer: {
        label: 'Voluntariado',
        title: 'Pronto para ajudar?',
        subtitle: 'Preencha o formulário abaixo e entraremos em contato em breve.',
        name: 'Nome completo',
        firstName: 'Nome',
        lastName: 'Sobrenome',
        email: 'Endereço de e-mail',
        phone: 'Número de telefone',
        address: 'Endereço',
        city: 'Cidade',
        postcode: 'Código postal',
        country: 'País',
        interests: 'Áreas de interesse',
        availability: 'Sua disponibilidade',
        skills: 'Habilidades e experiência',
        message: 'Por que você quer se juntar a nós?',
        submit: 'Enviar candidatura',
        success: 'Candidatura enviada com sucesso!',
        error: 'Falha ao enviar. Tente novamente.',
        options: {
          availability: {
            weekdays: 'Dias úteis',
            weekends: 'Finais de semana',
            evenings: 'Noites',
            flexible: 'Flexível'
          }
        },
        benefits: {
          impact: {
            title: 'Impacto em Primeiro Lugar',
            desc: 'Cada hora que você dedica apoia diretamente alguém necessitado.'
          },
          community: {
            title: 'Comunidade Global',
            desc: 'Conecte-se com pessoas de todo o mundo que pensam como você.'
          }
        }
      },
      footer: {
        quickLinks: 'Links Rápidos',
        contactUs: 'Contate-nos',
        privacy: 'Política de Privacidade',
        terms: 'Termos de Serviço',
        cookie: 'Política de Cookies',
        rights: '© 2026 ShareHopes. Todos os direitos reservados.',
        tagline: 'Construindo um mundo melhor, um voluntário de cada vez.'
      },
      timeline: {
        label: "Nossa Jornada",
        accessibility: {
          activity: "atividade",
          currentActivity: "Atividade Atual",
          thumbnail: "Miniatura"
        },
        stages: {
          "2025": {
            "title": "Fundamentos e Crescimento",
            "description": "Nosso ano de lançamento inicial, onde estabelecemos nossa rede central de voluntários e concluímos nossos primeiros projetos comunitários."
          },
          "2026": {
            "title": "O Próximo Capítulo: Raízes Globais, Conexões mais Inteligentes",
            "description": "Embora nossos corações permaneçam firmemente plantados nas comunidades que servimos hoje, nossa visão está se expandindo além das fronteiras. Guiados por nosso compromisso inabalável com a Empatia Radical e o Poder Coletivo, estamos estendendo nossa pegada a novos países — não para impor soluções de longe, mas para ouvir, aprender e elevar os heróis locais que já estão realizando o trabalho no terreno.\n\nE estamos construindo uma ponte mais inteligente para conectá-los. Ao atuar como um multiplicador de força, garantimos que cada hora de voluntariado e cada recurso compartilhado chegue exatamente onde possa gerar a maior esperança. Estamos fortalecendo as mãos que ajudam, em todos os lugares."
          }
        }
      },
      aboutPage: {
        hero: {
          label: 'Voluntariado',
          title: 'Sobre a ShareHopes',
          subtitle: 'Fortalecendo as mãos que ajudam.'
        },
        story: {
          title: 'Nossa História: Mais que uma Missão, um Movimento',
          p1: 'Na ShareHopes, entendemos que os desafios enfrentados por nossa comunidade — fome, sem-teto, lacunas educacionais e acesso à saúde — são complexos demais para qualquer organização resolver sozinha. Começamos com uma crença simples: que uma refeição quente ou uma sacola de mantimentos poderia restaurar a dignidade de uma pessoa. Mas à medida que crescemos, percebemos que nossa verdadeira vocação era maior do que nossos próprios programas.',
          quote: 'Não somos apenas uma organização sem fins lucrativos. Somos uma plataforma para a compaixão.',
          p2: 'Embora continuemos profundamente comprometidos com as nossas raízes de serviço direto (alimentar os famintos e equipar os vulneráveis), evoluímos para um centro comunitário e patrocinador. Existimos para remover as barreiras que impedem que outros incríveis agentes de mudança de base façam o seu melhor trabalho. Ao fornecer apoio operacional, recursos partilhados e uma rede de cuidados, amplificamos o impacto de toda a nossa comunidade.'
        },
        mission: {
          title: 'Nossa Missão Dupla: Servir e Fortalecer',
          subtitle: 'Acreditamos que uma maré alta levanta todos os barcos.',
          direct: {
            title: '1. Serviço Direto: Atendendo Necessidades Imediatas',
            desc: 'Estamos na linha de frente todos os dias. Nossos programas são projetados para proporcionar alívio com respeito e cuidado, garantindo que ninguém em nossa comunidade seja invisível.',
            food: { title: 'Segurança Alimentar', desc: 'De nossos centros de distribuição de alimentos ao nosso alcance nas ruas servindo refeições quentes e preparadas na hora, combatemos a fome onde ela mora.' },
            youth: { title: 'Juventude e Educação', desc: 'Equipamos os alunos com os suprimentos essenciais de que precisam para se concentrar no aprendizado, não na carência.' },
            health: { title: 'Ajuda Médica e Hospitalar', desc: 'Fornecemos instalações de saúde e parceiros com os itens mais críticos necessários para cuidar de nossos vizinhos.' }
          },
          hub: {
            title: '2. O Hub ShareHopes: Impulsionando quem Faz',
            desc: 'Este é o coração de nossa estratégia de mudança a longo prazo. Sabemos que existem heróis no terreno — pequenas equipes, voluntários apaixonados e organizações sem fins lucrativos emergentes — com ideias brilhantes, mas infraestrutura limitada.',
            detail: 'Abrimos nossas portas e nossos recursos para patrocinar e apoiar outras organizações sem fins lucrativos. Por meio de patrocínio e capacidade operacional compartilhada, permitimos que esses grupos se concentrem em sua missão única enquanto cuidamos do trabalho pesado.',
            tagline: 'Elevamos quem eleva.'
          }
        },
        principles: {
          title: 'Nossos princípios orientadores',
          empathy: { title: 'Empatia Radical', desc: 'Acolhemos as pessoas onde elas estão, sem julgamento. Seja servindo uma refeição a um vizinho sem-teto ou revisando uma doação para uma organização parceira, lideramos com o coração.' },
          power: { title: 'Poder Coletivo', desc: 'Acreditamos que a comunidade resolve melhor os problemas quando trabalhamos juntos. Nosso papel como hub é conectar os pontos, reduzir a duplicação e garantir que os recursos fluam para onde são mais necessários.' },
          dignity: { title: 'Dignidade Primeiro', desc: 'Receber ajuda nunca deve parecer uma esmola. Nossos serviços e parcerias são estruturados para elevar e capacitar, preservando a autoestima de cada pessoa que tocamos.' },
          hope: { title: 'Esperança Inabalável', desc: 'Não somos otimistas ingênuos; somos esperançosos disciplinados. Vemos as rachaduras no sistema e trabalhamos todos os dias para preenchê-las, acreditando firmemente num futuro compartilhado brilhante.' }
        },
        future: {
          title: 'O futuro que estamos construindo',
          p1: 'A ShareHopes não é um silo; é um centro nevrálgico. Nossa visão é uma comunidade onde as organizações sem fins lucrativos não lutam mais isoladas. Prevemos uma rede onde um banco de alimentos possa se coordenar perfeitamente com um defensor da habitação porque fornecemos o terreno comum.',
          p2: 'Seja você uma família que precisa de mantimentos, um voluntário que deseja servir ou o fundador de uma pequena organização sem fins lucrativos em busca de um patrocinador para ajudá-lo a começar — a ShareHopes é o seu lugar.',
          cta: 'Juntos, não oferecemos apenas ajuda. Construímos a capacidade para que a esperança floresça.'
        }
      },
      privacy: {
        title: 'Política de Privacidade | ShareHopes',
        lastUpdated: 'Última atualização: 18 de abril de 2026',
        commitment: {
          title: 'Nosso Compromisso com Você',
          text: 'Na ShareHopes (« nós », « nosso » ou « nossos »), acreditamos na transparência e na empatia radical. Proteger a privacidade da nossa comunidade — seja você uma família recebendo mantimentos, um voluntário, um doador ou uma organização parceira sem fins lucrativos — é fundamental para a nossa missão de fortalecer as mãos que ajudam. Esta Política de Privacidade explica como coletamos, usamos e protegemos suas informações quando você visita nosso site sharehopes.org ou utiliza nossos serviços.'
        },
        sections: {
          s1: {
            title: '1. Informações que Coletamos',
            text: 'Como a ShareHopes atua tanto como prestadora de serviços diretos quanto como centro para outras organizações, o tipo de informação que coletamos depende de como você interage conosco.',
            sub1: 'Informações que você fornece diretamente:',
            item1: 'Beneficiários de Serviços: Nomes, informações de contato, tamanho da família e necessidades alimentares (utilizados estritamente para a prestação de serviços e relatórios de subsídios em formatos anônimos e agregados).',
            item2: 'Parceiros sem fins lucrativos e patrocinados: Detalhes da organização, números de identificação fiscal, informações bancárias para desembolso de fundos e informações de contato da liderança.',
            item3: 'Doadores e Voluntários: Nome, e-mail, endereço, telefone e informações de pagamento (processados de forma segura por fornecedores terceirizados em conformidade com PCI; não armazenamos números completos de cartões de crédito).',
            sub2: 'Informações Coletadas Automaticamente:',
            item4: 'Uso do Website: Utilizamos cookies padrão e ferramentas de análise (ex: Google Analytics) para entender como os visitantes encontram nosso site e quais páginas visitam. Esses dados são anônimos e nos ajudam a melhorar nossa plataforma.'
          },
          s2: {
            title: '2. Como usamos suas informações',
            text: 'Usamos seus dados apenas por motivos legítimos e focados na nossa missão. Nunca vendemos, trocamos ou alugamos suas informações pessoais a terceiros para fins de marketing.',
            item1: 'Para prestar serviços: Para coordenar a distribuição de alimentos, agendar turnos de voluntários ou fornecer suporte administrativo aos nossos parceiros patrocinados.',
            item2: 'Para processar doações: Para processar com segurança contribuições dedutíveis de impostos e fornecer recibos.',
            item3: 'Para comunicar: Para enviar atualizações sobre os programas da ShareHopes, histórias de impacto ou alertas de segurança críticos.'
          },
          s3: {
            title: '3. Como compartilhamos informações (A nuance do «Hub»)',
            text: 'Como atuamos como patrocinador, existem casos específicos e limitados onde o compartilhamento de dados é necessário:',
            item1: 'Com organizações parceiras (grupos patrocinados): Se você for um doador que contribui para uma campanha específica sob nosso guarda-chuva de patrocínio, podemos compartilhar seu nome e o valor da doação com o líder desse projeto específico.',
            item2: 'Prestadores de serviço: Compartilhamos dados com fornecedores terceirizados de confiança que nos ajudam a operar.',
            item3: 'Conformidade legal: Podemos divulgar informações se exigido por lei.'
          },
          s4: {
            title: '4. Segurança de dados',
            text: 'Levamos a sério a proteção de dados sensíveis. Implementamos medidas de segurança padrão da indústria, incluindo criptografia SSL e bancos de dados seguros com acesso controlado.'
          },
          s5: {
            title: '5. Seus direitos e escolhas',
            item1: 'Comunicações por e-mail: Você pode cancelar a inscrição a qualquer momento.',
            item2: 'Acesso e Correção: Você pode solicitar ver ou corrigir seus dados.',
            item3: 'Do Not Track: Respeitamos os sinais «Do Not Track» dos navegadores web.'
          },
          s6: {
            title: '6. Privacidade das Crianças',
            text: 'Não coletamos conscientemente informações pessoais de crianças menores de 13 anos sem o consentimento verificado dos pais.'
          },
          s7: {
            title: '7. Alterações nesta Política',
            text: 'Podemos atualizar esta política periodicamente. A data da «Última atualização» no topo desta página indicará quando as revisões foram feitas.'
          },
          s8: {
            title: '8. Contacte-nos',
            text: 'Para qualquer dúvida sobre esta Política de Privacidade, entre em contato conosco pelo e-mail info@sharehopes.org.'
          }
        }
      },
      terms: {
        title: 'Termos de Serviço | ShareHopes',
        lastUpdated: 'Última atualização: 18 de abril de 2026',
        s1: {
          title: '1. Aceitação dos Termos',
          text: 'Bem-vindo à ShareHopes. Ao acessar nosso site, fazer uma doação, solicitar serviços ou envolver-se conosco como uma organização parceira, você concorda em cumprir estes Termos de Serviço.'
        },
        s2: {
          title: '2. Nosso Papel: Plataforma e Provedor',
          text: 'A ShareHopes opera com uma missão dupla. Leia estas seções cuidadosamente, dependendo de como você interage conosco.',
          sub1: 'A. Para Beneficiários de Serviços Diretos',
          item1: 'A ShareHopes fornece alimentos, suprimentos e ajuda com base na disponibilidade e no sistema de honra.',
          sub2: 'B. Para Organizações Parceiras e Patrocinadas',
          item2: 'Se a ShareHopes atuar como sua patrocinadora, seu relacionamento será regido por um Contrato de Patrocínio separado.'
        },
        s3: {
          title: '3. Propriedade Intelectual',
          text: 'O texto, logotipos, gráficos e imagens neste site são de propriedade da ShareHopes ou usados com permissão.'
        },
        s4: {
          title: '4. Doações e Transações Financeiras',
          text: 'As doações feitas à ShareHopes geralmente não são reembolsáveis.'
        },
        s5: {
          title: '5. Conduta do Usuário',
          text: 'Você concorda em não usar o site para qualquer finalidade ilegal ou tentar obter acesso não autorizado aos nossos sistemas.'
        },
        s6: {
          title: '6. Isenção de Garantias',
          text: 'Serviços fornecidos «como estão». Embora trabalhemos incansavelmente para garantir que nossos alimentos sejam nutritivos, não oferecemos garantias quanto à disponibilidade ininterrompida.'
        },
        s7: {
          title: '7. Limitação de Responsabilidade',
          text: 'Na medida máxima permitida por lei, a ShareHopes não será responsável por quaisquer danos indiretos ou consequentes.'
        },
        s8: {
          title: '8. Lei Aplicável',
          text: 'Estes Termos serão regidos e interpretados de acordo com as leis locais.'
        },
        s9: {
          title: '9. Informações de Contato',
          text: 'Para dúvidas sobre estes termos, entre em contato em info@sharehopes.org'
        }
      },
      cookies: {
        title: 'Política de Cookies | ShareHopes',
        lastUpdated: 'Última atualização: 18 de abril de 2026',
        explanation: {
          title: 'Uma Explicação Simples de Cookies',
          p1: 'Na ShareHopes, acreditamos na transparência em todas as coisas. Esta política explica o que são cookies, como os usamos e como você pode controlá-los.',
          p2: 'Pense nos cookies como pequenos e inofensivos arquivos de texto que funcionam como crachás digitais.'
        },
        sections: {
          s1: {
            title: '1. Cookies Essenciais (Fazendo o site funcionar)',
            desc: 'Esses são os cookies que fazem o nosso website funcionar. Eles permitem funções básicas como navegação de páginas e acesso a áreas seguras do website. O website não pode funcionar corretamente sem esses cookies.'
          },
          s2: {
            title: '2. Cookies de Desempenho e Análise (Entendendo nosso impacto)',
             desc: 'Esses cookies nos ajudam a entender como as pessoas encontram a ShareHopes e quais informações são mais úteis para elas. Assim como monitoramos quantas refeições servimos para melhorar nossas operações de cozinha, monitoramos quantas pessoas visitam nossa página de «Patrocínio» para facilitar a localização dessas informações.',
             data: 'Essas informações são anônimas e agregadas. Podemos ver que «muitas pessoas leram sobre o programa de distribuição de alimentos hoje», mas não podemos ver que «João Silva leu sobre o programa de distribuição de alimentos».',
             tools: 'Utilizamos ferramentas padrão como Google Analytics.'
          },
          s3: {
            title: '3. Cookies de Funcionalidade',
            desc: 'Estes cookies lembram escolhas que você faz.'
          }
        },
        contact: {
          title: 'Contacte-nos',
          text: 'Se você tiver alguma dúvida, por favor entre em contato.',
          team: 'Equipe de Operações ShareHopes'
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
