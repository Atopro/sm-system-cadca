import React from 'react';
import Section from '../components/ui/Section';

const PrivacyPolicyPage = () => {
  return (
    <main className="relative z-10 pt-20">
      <Section title="Ochrana osobných údajov">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            
            <h2 className="text-2xl font-bold text-brand-navy mb-4">1. Prevádzkovateľ</h2>
            <p className="mb-2"><strong>Prevádzkovateľom tejto webovej stránky je:</strong></p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p>Ctibor Koža</p>
              <p>A. Bernoláka 2588/1, 02201 Čadca, Slovensko</p>
              <p>IČO: 56452705</p>
              <p>DIČ: 1129739380</p>
              <p>E-mail: <a href="mailto:info@spiralnastabilizaciacadca.sk" className="text-brand-navy hover:text-brand-aqua transition-colors">info@spiralnastabilizaciacadca.sk</a></p>
              <p>Telefón: <a href="tel:+421948525380" className="text-brand-navy hover:text-brand-aqua transition-colors">+421 948 525 380</a></p>
            </div>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">2. Zber osobných údajov</h2>
            <p className="mb-6">
              Naša webová stránka nezhromažďuje osobné údaje prostredníctvom kontaktných formulárov alebo registrácie.
              Kontaktovať nás môžete výhradne prostredníctvom e-mailu alebo telefónneho čísla uvedeného vyššie.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">3. Cookies</h2>
            <p className="mb-4">
              Táto webová stránka používa súbory cookies v súlade s nariadením (EÚ) 2016/679 (GDPR), zákonom č. 18/2018 Z. z. a zákonom č. 452/2021 Z. z. o elektronických komunikáciách.
              Cookies sú spravované prostredníctvom služby Cookie Script.
            </p>
            <p className="mb-4"><strong>Rozlišujeme tieto kategórie cookies:</strong></p>
            <p className="mb-2">
              <strong>Nevyhnutné cookies</strong> – sú potrebné pre základné fungovanie webovej stránky a nevyžadujú si váš súhlas. Ich spracúvanie prebieha na základe oprávneného záujmu podľa čl. 6 ods. 1 písm. f) nariadenia (EÚ) 2016/679 (GDPR).
            </p>
            <p className="mb-2">
              <strong>Analytické cookies</strong> – používajú sa na meranie návštevnosti a zlepšovanie obsahu webu. Spracúvanie prebieha na základe súhlasu podľa čl. 6 ods. 1 písm. a) GDPR.
            </p>
            <p className="mb-6">
              <strong>Marketingové cookies</strong> – môžu byť využívané tretími stranami (napr. Google) na prispôsobenie reklamy. Spracúvanie prebieha na základe súhlasu podľa čl. 6 ods. 1 písm. a) GDPR.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">4. Účely spracúvania údajov</h2>
            <p className="mb-2"><strong>Spracúvanie údajov prostredníctvom cookies prebieha na tieto účely:</strong></p>
            <ul className="list-disc pl-6 mb-6">
              <li>zabezpečenie funkčnosti a bezpečnosti webovej stránky,</li>
              <li>analýza návštevnosti a optimalizácia obsahu (len na základe súhlasu),</li>
              <li>marketing a personalizácia reklamy (len na základe súhlasu).</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">5. Právny základ spracúvania</h2>
            <p className="mb-2">
              <strong>Nevyhnutné cookies:</strong> oprávnený záujem prevádzkovateľa podľa čl. 6 ods. 1 písm. f) GDPR.
            </p>
            <p className="mb-6">
              <strong>Analytické a marketingové cookies:</strong> súhlas dotknutej osoby podľa čl. 6 ods. 1 písm. a) GDPR.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">6. Doba uchovávania údajov</h2>
            <p className="mb-6">
              Cookies sú uchovávané po dobu uvedenú v nastaveniach služby Cookie Script alebo do odvolania súhlasu zo strany používateľa.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">7. Práva dotknutej osoby</h2>
            <p className="mb-4">
              Ako dotknutá osoba máte podľa nariadenia (EÚ) 2016/679 (GDPR) a zákona č. 18/2018 Z. z. o ochrane osobných údajov tieto práva:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>právo na prístup k osobným údajom,</li>
              <li>právo na opravu údajov,</li>
              <li>právo na vymazanie údajov („právo byť zabudnutý"),</li>
              <li>právo na obmedzenie spracúvania,</li>
              <li>právo na prenosnosť údajov,</li>
              <li>právo namietať proti spracúvaniu,</li>
              <li>právo odvolať súhlas,</li>
              <li>právo podať sťažnosť na dozorný orgán.</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">8. Dozorný orgán</h2>
            <p className="mb-4">
              Ak sa domnievate, že spracúvanie vašich údajov je v rozpore s právnymi predpismi, máte právo obrátiť sa na dozorný orgán:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p><strong>Úrad na ochranu osobných údajov Slovenskej republiky</strong></p>
              <p>Hraničná 12, 820 07 Bratislava 27</p>
              <p>Tel.: +421 2 3231 3220</p>
              <p>Web: <a href="https://www.dataprotection.gov.sk" target="_blank" rel="noopener noreferrer" className="text-brand-navy hover:text-brand-aqua transition-colors">www.dataprotection.gov.sk</a></p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default PrivacyPolicyPage;