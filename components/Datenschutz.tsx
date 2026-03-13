import React from 'react';

export default function Datenschutz() {
  return (
    <div className="text-left text-muted-foreground space-y-6 [&_h3]:text-foreground [&_p.font-medium]:text-foreground">
      <h2 className="text-2xl font-bold text-foreground">Datenschutzerklärung</h2>

      <section>
        <h3 className="text-base font-semibold text-foreground mb-2">1. Datenschutz auf einen Blick</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert,
          wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold text-foreground mb-2">2. Datenerfassung auf dieser Website</h3>
        <p className="font-medium text-foreground">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
        <p>
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem
          Impressum dieser Website entnehmen.
        </p>
        <p className="font-medium text-foreground mt-4">Wie erfassen wir Ihre Daten?</p>
        <p>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten
          handeln, die Sie in unser Kontaktformular eingeben. Andere Daten werden automatisch beim Besuch der Website
          durch unsere IT-Systeme erfasst (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold text-foreground mb-2">3. Cookies und Analyse-Tools</h3>
        <p>
          Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert.
          Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold text-foreground mb-2">4. Kontaktformular</h3>
        <p>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive
          der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen
          bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold text-foreground mb-2">5. Ihre Rechte</h3>
        <p>
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten
          personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten
          zu verlangen.
        </p>
      </section>
    </div>
  );
}
