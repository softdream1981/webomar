import Link from 'next/link';

export default function Credits() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <Link href="/" className="text-blue-600 hover:underline">&larr; Retour à l'accueil</Link>
      </div>
      
      <h1 className="section-title" id="credits">Déductibilité des crédits pour les centres de dialyse</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          Les centres de dialyse au Maroc peuvent déduire fiscalement les intérêts des crédits immobiliers et d'investissement sous certaines conditions. Cette page détaille les règles de déductibilité et les stratégies d'optimisation.
        </p>
        
        <section className="card mb-8" id="principes-generaux">
          <h2 className="card-title">Principes généraux de déductibilité des intérêts d'emprunt</h2>
          <p className="mb-4">
            Les intérêts des emprunts contractés par les centres de dialyse sont généralement déductibles du résultat fiscal pour le calcul de l'IS, sous réserve de respecter les conditions suivantes :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-blue-50 p-5 rounded-lg">
              <h3 className="font-semibold text-blue-800 text-lg mb-3">1. Lien avec l'activité professionnelle</h3>
              <p>Les emprunts doivent être contractés pour les besoins de l'exploitation du centre de dialyse.</p>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg">
              <h3 className="font-semibold text-blue-800 text-lg mb-3">2. Comptabilisation régulière</h3>
              <p>Les intérêts doivent être correctement comptabilisés dans les charges financières.</p>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg">
              <h3 className="font-semibold text-blue-800 text-lg mb-3">3. Justification</h3>
              <p>L'entreprise doit disposer de pièces justificatives probantes (contrat de prêt, tableau d'amortissement, etc.).</p>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg">
              <h3 className="font-semibold text-blue-800 text-lg mb-3">4. Taux d'intérêt</h3>
              <p>Le taux ne doit pas dépasser le taux des intérêts déductibles fixé annuellement par arrêté ministériel.</p>
            </div>
          </div>
        </section>
        
        <section className="card mb-8" id="credits-immobiliers">
          <h2 className="card-title">Déductibilité des crédits immobiliers</h2>
          <p className="mb-4">
            Les intérêts des crédits immobiliers contractés pour l'acquisition, la construction ou l'aménagement des locaux du centre de dialyse sont déductibles du résultat fiscal.
          </p>
          
          <p className="mb-4">
            Cette déductibilité s'applique pendant toute la durée du crédit, ce qui permet de réduire significativement la base imposable à l'IS.
          </p>
          
          <div className="bg-green-50 p-4 rounded-lg mt-4">
            <p className="font-semibold text-green-800">Exemple :</p>
            <p>Un centre de dialyse qui contracte un crédit immobilier de 5 millions de dirhams sur 15 ans à un taux de 5% pourra déduire environ 250 000 dirhams d'intérêts la première année, réduisant ainsi sa base imposable et son impôt sur les sociétés.</p>
          </div>
        </section>
        
        <section className="card mb-8" id="credits-investissement">
          <h2 className="card-title">Déductibilité des crédits d'investissement</h2>
          <p className="mb-4">
            Les intérêts des crédits d'investissement contractés pour l'acquisition d'équipements médicaux, de matériel informatique ou pour le financement de projets d'expansion sont également déductibles.
          </p>
          
          <p className="mb-4">
            Cette déduction permet d'alléger la charge fiscale pendant la phase d'investissement et de développement du centre de dialyse.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <p className="font-semibold text-blue-800">Bon à savoir :</p>
            <p>La déductibilité des intérêts se cumule avec l'amortissement des biens acquis, offrant ainsi un double avantage fiscal.</p>
          </div>
        </section>
        
        <section className="card mb-8" id="limites-deductibilite">
          <h2 className="card-title">Limites à la déductibilité</h2>
          <p className="mb-4">
            Certaines restrictions peuvent s'appliquer à la déductibilité des intérêts :
          </p>
          
          <div className="bg-yellow-50 p-5 rounded-lg mb-4">
            <h3 className="font-semibold text-yellow-800 text-lg mb-3">Sous-capitalisation</h3>
            <p>Des limitations peuvent être imposées lorsque les avances des associés dépassent le capital social. Il est recommandé de maintenir un ratio équilibré entre capitaux propres et dettes.</p>
          </div>
          
          <div className="bg-yellow-50 p-5 rounded-lg">
            <h3 className="font-semibold text-yellow-800 text-lg mb-3">Prêts entre entreprises liées</h3>
            <p>Des règles spécifiques s'appliquent aux prêts entre entreprises ayant des liens de dépendance. Les taux d'intérêt pratiqués doivent correspondre aux conditions du marché.</p>
          </div>
        </section>
        
        <section className="card mb-8" id="credit-bail">
          <h2 className="card-title">Traitement fiscal des crédits-bails</h2>
          <p className="mb-4">
            Pour les équipements médicaux acquis en crédit-bail (leasing) :
          </p>
          
          <ul className="space-y-2">
            <li className="list-item">Les redevances de crédit-bail sont intégralement déductibles du résultat fiscal.</li>
            <li className="list-item">À la fin du contrat, si l'option d'achat est levée, l'équipement est inscrit à l'actif du bilan pour sa valeur résiduelle et peut faire l'objet d'amortissements déductibles.</li>
          </ul>
          
          <div className="bg-purple-50 p-4 rounded-lg mt-6">
            <p className="font-semibold text-purple-800">Comparaison crédit-bail vs crédit classique :</p>
            <p>Le crédit-bail peut offrir une déductibilité plus rapide des charges par rapport à un crédit classique, où seuls les intérêts et l'amortissement sont déductibles. Une analyse au cas par cas est recommandée.</p>
          </div>
        </section>
        
        <section className="card mb-8" id="amortissement">
          <h2 className="card-title">Amortissement des biens financés par crédit</h2>
          <p className="mb-4">
            Les biens acquis par crédit peuvent faire l'objet d'amortissements déductibles selon les règles suivantes :
          </p>
          
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Type de bien</th>
                  <th>Durée d'amortissement</th>
                  <th>Taux annuel</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bâtiments</td>
                  <td>20 à 25 ans</td>
                  <td>4% à 5%</td>
                </tr>
                <tr>
                  <td>Équipements médicaux</td>
                  <td>5 à 10 ans</td>
                  <td>10% à 20%</td>
                </tr>
                <tr>
                  <td>Matériel informatique</td>
                  <td>3 à 5 ans</td>
                  <td>20% à 33,33%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        
        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Recommandations pour optimiser la déductibilité des crédits</h3>
          <ul className="space-y-3">
            <li className="list-item">Documenter rigoureusement le lien entre les emprunts et l'activité professionnelle</li>
            <li className="list-item">Maintenir un équilibre entre capital social et financement par emprunt</li>
            <li className="list-item">Évaluer l'opportunité du crédit-bail par rapport à l'acquisition directe avec crédit</li>
            <li className="list-item">Tenir une comptabilité précise des intérêts d'emprunt et des amortissements</li>
            <li className="list-item">Consulter un expert-comptable pour optimiser la structure de financement</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-12 flex justify-between">
        <Link href="/exonerations" className="btn">&larr; Exonérations fiscales</Link>
        <Link href="/contact" className="btn btn-secondary">Nous contacter →</Link>
      </div>
    </div>
  );
}
