import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, CheckCircle, Users, Award, Clock } from 'lucide-react';
import { Section } from '../components/ui/redesign/Section';
import { CTAButton } from '../components/ui/redesign/CTAButton';
import { Card } from '../components/ui/redesign/Card';
import { Metrics } from '../components/ui/redesign/Metrics';
import { useLanguage } from '../contexts/LanguageContext';
import { FeatureGridSection } from '../components/common/FeatureGridSection';

const HomePage = () => {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Sample metrics - to be replaced with real data
  const metrics = [
    { value: '200+', label: t('homepage.metrics.clients'), icon: <Users className="w-6 h-6" /> },
    { value: t('homepage.metrics.study.value'), label: t('homepage.metrics.study'), icon: <Award className="w-6 h-6" /> },
    { value: '95%', label: t('homepage.metrics.success'), icon: <CheckCircle className="w-6 h-6" /> },
  ];

  // Determine video source based on device type
  const videoSource = isMobile 
    ? "https://smsystem.b-cdn.net/videos/sm-system-hero-video-mobile.mp4"
    : "https://smsystem.b-cdn.net/videos/sm-system-hero-video.mp4";

  // SM System features for the FeatureGridSection
  const smSystemFeatures = [
    {
      iconUrl: "/assets/icons/icon-pain-relief.png",
      iconAlt: "Ikona úľavy od bolesti",
      title: t('homepage.whySmSystem.benefit1.title'),
      description: t('homepage.whySmSystem.benefit1.desc')
    },
    {
      iconUrl: "/assets/icons/icon-scoliosis-prevention.png",
      iconAlt: "Ikona prevencie skoliózy",
      title: t('homepage.whySmSystem.benefit2.title'),
      description: t('homepage.whySmSystem.benefit2.desc')
    },
    {
      iconUrl: "/assets/icons/icon-all-ages.png",
      iconAlt: "Ikona všetkých vekových kategórií",
      title: t('homepage.whySmSystem.benefit3.title'),
      description: t('homepage.whySmSystem.benefit3.desc')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-navy via-[#0E5A6F] to-brand-aqua">
    <main className="relative">
      {/* Hero Section */}
      <Section className="section-hero min-h-screen flex items-center justify-center px-4 pb-20" fadeIn={false}>
        <div className="max-w-6xl mx-auto text-center">
          {/* Video Background */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <video
              className="w-full h-full object-cover"
              src={videoSource}
              autoPlay
              loop
              muted
              decoding="sync"
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0E3C61]/80 to-[#00C6A7]/60" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-6 leading-snug tracking-tight text-balance max-w-[22ch] md:max-w-[26ch]">
              {t('homepage.hero.mainTitle')}
            </h1>
            <p className="text-lg md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              {t('homepage.hero.mainTitle.desc')}
            </p>
            
            {/* Primary CTA */}
            <div className="mb-12">
              <CTAButton
                size="lg"
                href="tel:+421948525380"
                className="text-lg px-8 py-4 sm:text-xl sm:px-12 sm:py-5 shadow-2xl hover:scale-105"
              >
                {t('homepage.hero.ctaButton')}
              </CTAButton>
            </div>
            
            {/* Metrics */}
            <Metrics metrics={metrics} />
          </div>
        </div>
      </Section>

      {/* Value Props Section */}
      <FeatureGridSection
        title={t('homepage.whySmSystem.title')}
        features={smSystemFeatures}
        className="py-16 sm:py-20 bg-transparent"
      />

      {/* O mne Section */}
      <section aria-labelledby="o-mne" className="relative isolate py-16 sm:py-20 bg-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div className="order-2 lg:order-1 relative before:content-[''] before:absolute before:-inset-x-6 before:-inset-y-4 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:blur-2xl before:rounded-3xl before:pointer-events-none">
              <p className="text-sm font-semibold tracking-wide uppercase text-brand-aqua/90">{t('homepage.about.subtitle')}</p>
              <h2 id="o-mne" className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-white [text-wrap:balance]">{t('homepage.about.title')}</h2>
              <p className="mt-4 text-base md:text-lg text-white/85 leading-relaxed max-w-[58ch] [text-wrap:balance]">
                {t('homepage.about.intro1')}
              </p>
              <p className="mt-4 text-base md:text-lg text-white/85 leading-relaxed max-w-[58ch] [text-wrap:balance]">
                {t('homepage.about.intro2')}
              </p>
              <div className="mt-6">
                <a
                  href="/o-mne"
                  className="inline-flex items-center justify-center rounded-2xl bg-white text-brand-navy px-5 py-3 font-semibold shadow-sm transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  {t('homepage.about.more')}
                </a>
              </div>
            </div>

            {/* Photo */}
            <div className="order-1 lg:order-2">
              <img
                src="/assets/images/ctibor-image.jpg"
                alt="Ctibor Koža – špecialista na Špirálnu stabilizáciu (SM systém)"
                width="960" height="1200"
                decoding="sync"
                className="w-full h-auto rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative isolate py-16 sm:py-20 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">
            {t('homepage.services.title')}
          </h2>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Individuálny tréning */}
            <div className="group relative overflow-hidden rounded-3xl ring-1 ring-white/15 bg-white/5 backdrop-blur-md shadow-sm transition hover:bg-white/10">
              <div className="relative w-full h-[260px] md:h-[280px] lg:h-[320px] xl:h-[360px] overflow-hidden rounded-3xl">
                <img
                  src="/assets/images/individual-image.jpg"
                  alt="Individuálny tréning"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  decoding="sync"
                  width="1280"
                  height="720"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/30 to-transparent backdrop-blur-0"
                  aria-hidden="true"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <h3 className="text-white text-xl md:text-2xl font-semibold tracking-tight [text-wrap:balance] drop-shadow">
                  {t('homepage.services.individual.title')}
                </h3>
                <p className="mt-1 text-white/90 text-sm md:text-[15px] leading-relaxed max-w-[30ch]">
                  {t('homepage.services.individual.desc')}
                </p>
                <a
                  href="/sluzby"
                  className="mt-4 inline-flex items-center rounded-xl bg-white text-brand-navy px-4 py-2 font-semibold shadow-sm transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  {t('homepage.services.more')}
                </a>
              </div>
            </div>

            {/* Skupinové cvičenia */}
            <div className="group relative overflow-hidden rounded-3xl ring-1 ring-white/15 bg-white/5 backdrop-blur-md shadow-sm transition hover:bg-white/10">
              <div className="relative w-full h-[260px] md:h-[280px] lg:h-[320px] xl:h-[360px] overflow-hidden rounded-3xl">
                <img
                  src="/assets/images/skupinovka-image.jpg"
                  alt="Skupinové cvičenia"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  decoding="sync"
                  width="1280"
                  height="720"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/30 to-transparent backdrop-blur-0"
                  aria-hidden="true"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <h3 className="text-white text-xl md:text-2xl font-semibold tracking-tight [text-wrap:balance] drop-shadow">
                  {t('homepage.services.group.title')}
                </h3>
                <p className="mt-1 text-white/90 text-sm md:text-[15px] leading-relaxed max-w-[30ch]">
                  {t('homepage.services.group.desc')}
                </p>
                <a
                  href="/sluzby"
                  className="mt-4 inline-flex items-center rounded-xl bg-white text-brand-navy px-4 py-2 font-semibold shadow-sm transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  {t('homepage.services.more')}
                </a>
              </div>
            </div>

            {/* Športový tréning */}
            <div className="group relative overflow-hidden rounded-3xl ring-1 ring-white/15 bg-white/5 backdrop-blur-md shadow-sm transition hover:bg-white/10">
              <div className="relative w-full h-[260px] md:h-[280px] lg:h-[320px] xl:h-[360px] overflow-hidden rounded-3xl">
                <img
                  src="/assets/images/sport-image.jpg"
                  alt="Športový tréning"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  decoding="sync"
                  width="1280"
                  height="720"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/30 to-transparent backdrop-blur-0"
                  aria-hidden="true"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <h3 className="text-white text-xl md:text-2xl font-semibold tracking-tight [text-wrap:balance] drop-shadow">
                  {t('homepage.services.sport.title')}
                </h3>
                <p className="mt-1 text-white/90 text-sm md:text-[15px] leading-relaxed max-w-[30ch]">
                  {t('homepage.services.sport.desc')}
                </p>
                <a
                  href="/sluzby"
                  className="mt-4 inline-flex items-center rounded-xl bg-white text-brand-navy px-4 py-2 font-semibold shadow-sm transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  {t('homepage.services.more')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate py-20 px-4 bg-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            {t('homepage.cta.title')}
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90">
            {t('homepage.cta.desc')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton
              variant="phone"
              size="lg"
              href="tel:+421948525380"
              className="text-lg px-8"
            >
              {t('homepage.cta.phone')}
            </CTAButton>
            
            <CTAButton
              variant="whatsapp"
              size="lg"
              href="https://wa.me/421948525380"
              className="text-lg px-8"
            >
              {t('homepage.cta.whatsapp')}
            </CTAButton>
          </div>
          
        </div>
      </section>

      <section className="relative isolate py-20 px-4 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">
            {t('homepage.work.title')}
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="max-w-[400px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl">
              <video
                className="w-full h-full object-cover"
                src="https://smsystem.b-cdn.net/Sequence%2002_1.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            <a 
              href="https://www.instagram.com/spiralna_stabilizacia_cadca/"
              target="_blank"
              rel="noopener noreferrer"
              className="block max-w-[400px] aspect-square rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105"
            >
              <img
                src="/assets/images/spiralna-stabilizacia-cadca-qr.png"
                alt="QR kód"
                className="w-full h-full object-contain"
                decoding="sync"
                width="400"
                height="400"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Naši priatelia Section */}
      <section className="relative isolate py-16 sm:py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-white drop-shadow-sm mb-4">
            {t('homepage.friends.title')}
          </h2>
          <p className="text-center text-white/80 text-lg max-w-3xl mx-auto mb-12">
            {t('homepage.friends.desc')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Spiralista */}
            <a 
              href="https://www.spiralstabilization.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg ring-1 ring-white/10 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="shrink-0 rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                  <img
                    src="/assets/images/spiralista-logo.png"
                    alt="Spiralista – logo"
                    className="h-20 w-20 object-contain"
                    decoding="async"
                    sizes="(min-width: 1024px) 80px, (min-width: 640px) 80px, 80px"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-semibold text-white mb-2">{t('homepage.friends.spiralista.title')}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {t('homepage.friends.spiralista.desc')}
                  </p>
                </div>
              </div>
            </a>

            {/* Jablkový raj */}
            <a 
              href="https://www.jablkovyraj.sk/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg ring-1 ring-white/10 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="shrink-0 rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                  <img
                    src="/assets/images/jablkovyraj-logo.png"
                    alt="Jablkový raj – logo"
                    className="h-20 w-20 object-contain"
                    decoding="async"
                    sizes="(min-width: 1024px) 80px, (min-width: 640px) 80px, 80px"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-semibold text-white mb-2">{t('homepage.friends.jablkovyraj.title')}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {t('homepage.friends.jablkovyraj.desc')}
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

    </main>
    </div>
  );
};

export default HomePage;