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
        <p className="mt-3">
          Sie können beim Besuch unserer Website wählen, ob Sie nur technisch notwendige Cookies akzeptieren oder auch
          Analyse-Cookies zustimmen. Ihre Einwilligung können Sie jederzeit durch Löschen des Browser-Speichers (localStorage)
          widerrufen.
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold text-foreground mb-2">3a. Google Analytics</h3>
        <p>
          Diese Website nutzt Google Analytics, einen Webanalysedienst der Google Ireland Limited, Gordon House,
          Barrow Street, Dublin 4, Irland. Google Analytics wird nur aktiviert, wenn Sie im Cookie-Banner
          „Alle akzeptieren" auswählen.
        </p>
        <p className="mt-3">
          Google Analytics verwendet Cookies, die eine Analyse Ihrer Benutzung der Website ermöglichen. Die durch
          das Cookie erzeugten Informationen über Ihre Nutzung dieser Website (einschließlich Ihrer IP-Adresse) werden
          in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Wir haben die
          IP-Anonymisierung aktiviert, sodass Ihre IP-Adresse von Google innerhalb der EU gekürzt wird.
        </p>
        <p className="mt-3">
          Die Nutzung von Google Analytics erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
          Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie im Cookie-Banner „Nur notwendige" wählen oder
          den localStorage-Eintrag „cookie-consent" in Ihrem Browser löschen. Weitere Informationen zum Datenschutz
          bei Google finden Sie unter <span className="text-primary">https://policies.google.com/privacy</span>.
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
