import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1>Fiscalité des Centres de Dialyse au Maroc</h1>
          <p>Guide complet sur les taxes, exonérations et déductibilité des crédits pour les centres de dialyse au Maroc</p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/taxes" className="btn">Découvrir les taxes applicables</Link>
            <Link href="/exonerations" className="btn btn-secondary">Explorer les exonérations</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Aperçu du régime fiscal</h2>
          <div className="grid-container">
            <div className="card">
              <h3 className="card-title">Impôt sur les Sociétés (IS)</h3>
              <p>Les centres de dialyse sont assujettis à l'IS selon un barème progressif allant de 17,5% à 34% en fonction du bénéfice net fiscal.</p>
              <Link href="/taxes#is" className="mt-4 inline-block text-blue-600 hover:underline">En savoir plus →</Link>
            </div>
            <div className="card">
              <h3 className="card-title">TVA</h3>
              <p>Taux standard de 20% avec des exonérations spécifiques pour certains équipements d'hémodialyse et biens d'investissement.</p>
              <Link href="/taxes#tva" className="mt-4 inline-block text-blue-600 hover:underline">En savoir plus →</Link>
            </div>
            <div className="card">
              <h3 className="card-title">Exonérations fiscales</h3>
              <p>Possibilités d'exonération pour les équipements d'hémodialyse et les biens d'investissement sous certaines conditions.</p>
              <Link href="/exonerations" className="mt-4 inline-block text-blue-600 hover:underline">En savoir plus →</Link>
            </div>
            <div className="card">
              <h3 className="card-title">Déductibilité des crédits</h3>
              <p>Les intérêts des crédits immobiliers et d'investissement sont généralement déductibles du résultat fiscal.</p>
              <Link href="/credits" className="mt-4 inline-block text-blue-600 hover:underline">En savoir plus →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50 py-16">
        <div className="container">
          <h2 className="section-title">Points clés à retenir</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Taxes applicables</h3>
              <ul className="space-y-2">
                <li className="list-item">Impôt sur les Sociétés avec barème progressif</li>
                <li className="list-item">TVA au taux standard de 20% sur la plupart des biens et services</li>
                <li className="list-item">Taxe Professionnelle calculée sur la valeur locative des immobilisations</li>
                <li className="list-item">Contribution Sociale de Solidarité sur les Bénéfices</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-700">Optimisation fiscale</h3>
              <ul className="space-y-2">
                <li className="list-item">Planifier les acquisitions d'équipements pour bénéficier des exonérations</li>
                <li className="list-item">Documenter le lien entre les emprunts et l'activité professionnelle</li>
                <li className="list-item">Maintenir un équilibre entre capital social et financement par emprunt</li>
                <li className="list-item">Consulter un expert-comptable spécialisé dans le secteur médical</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Pourquoi consulter ce guide ?</h2>
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Ce guide complet sur la fiscalité des centres de dialyse au Maroc vous permet de :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">1</div>
                <h3 className="font-semibold text-lg mb-2">Comprendre vos obligations</h3>
                <p>Identifiez clairement toutes les taxes auxquelles votre centre est soumis</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">2</div>
                <h3 className="font-semibold text-lg mb-2">Optimiser votre fiscalité</h3>
                <p>Découvrez les exonérations et déductions dont vous pouvez bénéficier</p>
              </div>
              <div className="text-center p-6 bg-amber-50 rounded-lg">
                <div className="text-3xl font-bold text-amber-600 mb-2">3</div>
                <h3 className="font-semibold text-lg mb-2">Planifier vos investissements</h3>
                <p>Structurez vos financements pour maximiser les avantages fiscaux</p>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact" className="btn btn-accent">Besoin d'une consultation personnalisée ?</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
