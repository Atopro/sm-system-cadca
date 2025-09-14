import React from 'react';
import Section from '../components/ui/Section';
import FeatureCard from '../components/ui/FeatureCard';
import { FeatureGridSection } from '../components/common/FeatureGridSection';
import { useLanguage } from '../contexts/LanguageContext';

const SMSystemPage = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-navy via-[#0E5A6F] to-brand-aqua">
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center bg-transparent text-white px-4 pt-24 md:pt-28">
          {/* Subtle decorative backdrop */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-brand-teal/10 mix-blend-overlay [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
          />
          
          <div className="max-w-7xl mx-auto w-full">
            {/* Title - Full Width Above Everything */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-bold">
                {t('smsystem.hero.title')}
              </h1>
            </div>
            
            {/* Subtitle and Image Grid */}
            <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
              {/* Subtitle Content */}
              <div className="text-center lg:text-left">
                {/* Mobile version - split text */}
                <div className="lg:hidden">
                  <p className="text-2xl text-brand-aqua font-medium mb-2">
                    Metódu špirálovej stabilizácie vynašiel MUDr. Smíšek v roku 1979.
                  </p>
                  <p className="text-2xl text-white font-medium">
                    Špirálová stabilizácia spája rehabilitačnú liečbu s prevenciou, regeneráciou a kondičným a výkonnostným tréningom s použitím jediného metodického postupu – túto kombináciu neposkytuje žiadna iná pohybová metóda.
                  </p>
                </div>
                
                {/* Desktop version - original single line */}
                <p className="hidden lg:block text-3xl text-brand-aqua font-medium">
                  {t('smsystem.hero.subtitle')}
                </p>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/assets/images/svalove-pletence.webp"
                    alt="Svalové pletence"
                    className="w-full h-full object-cover"
                    fetchpriority="high"
                    width="934"
                    height="632"
                    decoding="sync"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2 text-right">zdroj: spiralstabilization.com</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <FeatureGridSection
          title={t('smsystem.benefits.title')}
          features={[
            {
              iconUrl: '/assets/icons/icon-pain-relief.png',
              iconAlt: 'Ikona úľavy od bolesti',
              title: t('smsystem.benefit1'),
              description: t('smsystem.benefit1.desc')
            },
            {
              iconUrl: '/assets/icons/icon-scoliosis-prevention.png',
              iconAlt: 'Ikona prevencie skoliózy',
              title: t('smsystem.benefit2'),
              description: t('smsystem.benefit2.desc')
            },
            {
              iconUrl: '/assets/icons/icon-posture.png',
              iconAlt: 'Ikona držania tela',
              title: t('smsystem.benefit3'),
              description: t('smsystem.benefit3.desc')
            },
            {
              iconUrl: '/assets/icons/icon-regeneration.png',
              iconAlt: 'Ikona regenerácie',
              title: t('smsystem.benefit4'),
              description: t('smsystem.benefit4.desc')
            },
            {
              iconUrl: '/assets/icons/icon-all-ages.png',
              iconAlt: 'Ikona všetkých vekových kategórií',
              title: t('smsystem.benefit5'),
              description: t('smsystem.benefit5.desc')
            },
            {
              iconUrl: '/assets/icons/icon-sport.png',
              iconAlt: 'Ikona športu',
              title: t('smsystem.benefit6'),
              description: t('smsystem.benefit6.desc')
            }
          ]}
          className="py-16 sm:py-20 bg-transparent"
        />

        {/* Main Principles */}
        <Section
          id="principles"
          title={t('smsystem.principles.title')}
        >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                iconUrl: '/assets/icons/icon-vertical-axiss.png',
                iconAlt: 'Ikona vertikálnej osi',
                title: t('smsystem.principle1'),
                description: t('smsystem.principle1.desc')
              },
              {
                iconUrl: '/assets/icons/icon-muscle-balance.png',
                iconAlt: 'Ikona svalovej rovnováhy',
                title: t('smsystem.principle2'),
                description: t('smsystem.principle2.desc')
              },
              {
                iconUrl: '/assets/icons/icon-range-of-motion.png',
                iconAlt: 'Ikona rozsahu pohybu',
                title: t('smsystem.principle3'),
                description: t('smsystem.principle3.desc')
              },
              {
                iconUrl: '/assets/icons/icon-spiral-stabilization.png',
                iconAlt: 'Ikona špirálnej stabilizácie',
                title: t('smsystem.principle4'),
                description: t('smsystem.principle4.desc')
              }
            ].map((principle, index) => {
              return (
                <FeatureCard
                  key={index}
                  iconUrl={principle.iconUrl}
                  iconAlt={principle.iconAlt}
                  title={principle.title}
                  description={principle.description}
                />
              );
            })}
          </div>
        </div>
      </Section>

        {/* Training Gallery Section */}
        <Section
          id="training-gallery"
          title={t('smsystem.gallery.title')}
        >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Duo Training - Large 2x2 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-brand-teal/5 to-brand-navy/5 aspect-square lg:col-span-2">
              <img
                src="/assets/images/duo-big-square-image.jpg"
                alt="Duo tréning"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                <h3 className="text-white font-bold text-xl mb-1">Duo tréning</h3>
                <p className="text-white/80 text-sm">Tréning v dvojici</p>
              </div>
            </div>

            {/* Individual Training - Tall */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-brand-teal/5 to-brand-navy/5 aspect-[9/16]">
              <img
                src="/assets/images/individual-slim-vertical-image.jpg"
                alt="Individuálny tréning"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                <h3 className="text-white font-bold text-base mb-1">Individuálny tréning</h3>
                <p className="text-white/80 text-sm">Personalizovaný prístup</p>
              </div>
            </div>

            {/* Sport Training - Tall */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-brand-teal/5 to-brand-navy/5 aspect-[9/16]">
              <img
                src="/assets/images/sport-thick-vertical-image.jpg"
                alt="Športový tréning"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                <h3 className="text-white font-bold text-base mb-1">Športový tréning</h3>
                <p className="text-white/80 text-sm">Pre aktívnych športovcov</p>
              </div>
            </div>

            {/* Man Training - Standard */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-brand-teal/5 to-brand-navy/5 aspect-[9/16]">
              <img
                src="/assets/images/man-slim-vertical-image.jpg"
                alt="Tréning pre mužov"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                <h3 className="text-white font-bold text-base mb-1">Tréning pre mužov</h3>
                <p className="text-white/80 text-sm">Silový prístup</p>
              </div>
            </div>

            {/* Kids Group Training - Standard */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-brand-teal/5 to-brand-navy/5 aspect-[9/16]">
              <img
                src="/assets/images/kids-thick-vertical-image.jpg"
                alt="Skupinový tréning pre deti"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                <h3 className="text-white font-bold text-base mb-1">Detský skupinový tréning</h3>
                <p className="text-white/80 text-sm">Zábava a zdravie</p>
              </div>
            </div>

            {/* Duo Sport Training - Large 2x2 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-brand-teal/5 to-brand-navy/5 aspect-square lg:col-span-2">
              <img
                src="/assets/images/duo-sport-big-square-image.jpg"
                alt="Duo športový tréning"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                <h3 className="text-white font-bold text-xl mb-1">Duo športový tréning</h3>
                <p className="text-white/80 text-sm">Tréning pre dvoch športovcov</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      </main>
    </div>
  );
};

export default SMSystemPage;