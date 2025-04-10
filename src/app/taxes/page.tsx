'use client';

import Link from 'next/link';
import TaxCalculator from '@/components/TaxCalculator';
import Tabs from '@/components/Tabs';

export default function Taxes() {
  const taxTabs = [
    {
      id: 'impot-societes',
      title: 'Impôt sur les Sociétés',
      content: (
        <div>
          <h2 className="card-title">Impôt sur les Sociétés (IS)</h2>
          <p className="mb-4">
            Les centres de dialyse constitués sous forme de sociétés sont assujettis à l'Impôt sur les Sociétés selon un barème progressif. Pour l'année 2025, les taux applicables sont les suivants :
          </p>
          
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Tranche de bénéfice net fiscal</th>
                  <th>Taux d'imposition</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>≤ 300 000 DH</td>
                  <td>17,5%</td>
                </tr>
                <tr>
                  <td>300 000 DH - 1 MDH</td>
                  <td>20%</td>
                </tr>
                <tr>
                  <td>1 MDH - 100 MDH</td>
                  <td>22,75%</td>
                </tr>
                <tr>
                  <td>≥ 100 MDH</td>
                  <td>34%</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mt-4">
            Si le centre de dialyse est considéré comme un établissement de santé assimilé à une activité industrielle, des taux spécifiques peuvent s'appliquer :
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Pour la tranche de bénéfice entre 1 MDH et 100 MDH : 21,5%</li>
            <li>Pour la tranche de bénéfice supérieure à 100 MDH : 31,5%</li>
          </ul>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Calculez votre impôt</h3>
            <TaxCalculator />
          </div>
        </div>
      )
    },
    {
      id: 'tva',
      title: 'TVA',
      content: (
        <div>
          <h2 className="card-title">Taxe sur la Valeur Ajoutée (TVA)</h2>
          <p className="mb-4">
            La TVA s'applique aux opérations suivantes :
          </p>
          
          <ul className="space-y-2">
            <li className="list-item"><strong>Taux standard de 20%</strong> sur la plupart des biens et services</li>
            <li className="list-item"><strong>Location d'équipements d'hémodialyse</strong> : soumise au taux normal de 20%</li>
            <li className="list-item"><strong>Produits consommables</strong> autres que les produits pharmaceutiques (compresses, champs stériles, gants et seringues) : soumis au taux normal de 20%</li>
          </ul>
          
          <div className="bg-blue-50 p-4 rounded-lg mt-6">
            <p className="font-semibold text-blue-800">Bon à savoir :</p>
            <p>Certains équipements d'hémodialyse sont exonérés de TVA. Consultez la page <Link href="/exonerations" className="text-blue-600 hover:underline">Exonérations</Link> pour plus de détails.</p>
          </div>
        </div>
      )
    },
    {
      id: 'taxe-professionnelle',
      title: 'Taxe Professionnelle',
      content: (
        <div>
          <h2 className="card-title">Taxe Professionnelle</h2>
          <p>
            Les centres de dialyse sont également soumis à la taxe professionnelle, un impôt local calculé sur la valeur locative des immobilisations corporelles dont dispose le contribuable. Le taux varie selon les collectivités locales.
          </p>
          
          <p className="mt-4">
            Cette taxe est due annuellement et doit être déclarée auprès de l'administration fiscale locale.
          </p>
          
          <div className="bg-yellow-50 p-4 rounded-lg mt-6">
            <p className="font-semibold text-yellow-800">Important :</p>
            <p>Les entreprises nouvellement créées peuvent bénéficier d'une exonération temporaire pendant les cinq premières années suivant le début de leur activité.</p>
          </div>
        </div>
      )
    },
    {
      id: 'css',
      title: 'Contribution Sociale',
      content: (
        <div>
          <h2 className="card-title">Contribution Sociale de Solidarité sur les Bénéfices</h2>
          <p>
            Cette contribution s'applique aux sociétés soumises à l'IS, avec des taux variables selon le montant du bénéfice net. Elle constitue une charge supplémentaire à prendre en compte dans la planification fiscale du centre de dialyse.
          </p>
          
          <p className="mt-4">
            La contribution sociale de solidarité est calculée sur la base du même bénéfice net utilisé pour le calcul de l'IS.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="container py-8">
      <div className="mb-8">
        <Link href="/" className="text-blue-600 hover:underline">&larr; Retour à l'accueil</Link>
      </div>
      
      <h1 className="section-title" id="taxes">Taxes applicables aux centres de dialyse</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          Les centres de dialyse au Maroc sont soumis à plusieurs taxes et impôts. Cette page détaille les principales obligations fiscales auxquelles ces établissements doivent se conformer.
        </p>
        
        <div className="card mb-8">
          <Tabs tabs={taxTabs} defaultTab="impot-societes" />
        </div>
        
        <div className="bg-amber-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold text-amber-800 mb-4">Recommandations pour la gestion des taxes</h3>
          <ul className="space-y-3">
            <li className="list-item">Tenir une comptabilité rigoureuse pour faciliter les déclarations fiscales</li>
            <li className="list-item">Respecter les délais de déclaration et de paiement pour éviter les pénalités</li>
            <li className="list-item">Consulter régulièrement un expert-comptable pour optimiser votre situation fiscale</li>
            <li className="list-item">Effectuer une veille fiscale pour rester informé des évolutions législatives</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-12 flex justify-between">
        <Link href="/" className="btn">Retour à l'accueil</Link>
        <Link href="/exonerations" className="btn btn-secondary">Découvrir les exonérations →</Link>
      </div>
    </div>
  );
}
