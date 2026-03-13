import React from 'react';

export default function Impressum() {
  return (
    <div className="text-left text-muted-foreground space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Impressum</h2>

      <section>
        <h3 className="text-base font-semibold text-foreground mb-2">Angaben gemäß § 5 TMG</h3>
        <p>
          Andres Penaranda<br />
          Stralsunder Str. 27<br />
          13355 Berlin
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold text-foreground mb-2">Kontakt</h3>
        <p>
          E-Mail: info@ai-xplorers.de<br />
          Telefon: [Ihre Telefonnummer]
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold text-foreground mb-2">Umsatzsteuer-ID</h3>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
          [Ihre USt-ID, falls vorhanden]
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold text-foreground mb-2">EU-Streitschlichtung</h3>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
            https://ec.europa.eu/consumers/odr/
          </a>.<br />
          Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold text-foreground mb-2">Verbraucherstreitbeilegung</h3>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>
    </div>
  );
}
