import Link from 'next/link';

export default function Exonerations() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <Link href="/" className="text-blue-600 hover:underline">&larr; Retour à l'accueil</Link>
      </div>
      
      <h1 className="section-title" id="exonerations">Exonérations fiscales pour les centres de dialyse</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          Les centres de dialyse au Maroc peuvent bénéficier de plusieurs exonérations fiscales importantes. Cette page détaille les principales exonérations disponibles et les conditions pour en bénéficier.
        </p>
        
        <section className="card mb-8" id="exonerations-tva-equipements">
          <h2 className="card-title">Exonérations de TVA pour les équipements d'hémodialyse</h2>
          <p className="mb-4">
            Selon l'article 8-21° de la loi relative à la TVA, les produits et équipements d'hémodialyse suivants sont exonérés de TVA :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <ul className="space-y-2">
              <li className="list-item">Dialyseurs, générateurs d'hémodialyse, générateurs à hémofiltration et leurs accessoires</li>
              <li className="list-item">Lignes veineuses, lignes artérielles, lignes péritonéales et leurs accessoires</li>
              <li className="list-item">Aiguilles à fistule</li>
              <li className="list-item">Connecteurs de cathéter</li>
              <li className="list-item">Capuchon protecteur stérile</li>
              <li className="list-item">Cathéter de Tenchkoff</li>
            </ul>
            <ul className="space-y-2">
              <li className="list-item">Corps de pompes d'hémodialyse</li>
              <li className="list-item">Poches de dialyse péritonéale</li>
              <li className="list-item">Concentrés et solutés de dialyse péritonéale</li>
              <li className="list-item">Concentrés d'hémodialyse</li>
              <li className="list-item">Solutés de dialyse péritonéale</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg mt-6">
            <p className="font-semibold text-yellow-800">Important :</p>
            <p>Cette exonération s'applique uniquement à l'acquisition de ces équipements, et non à leur location.</p>
          </div>
        </section>
        
        <section className="card mb-8" id="exonerations-tva-investissement">
          <h2 className="card-title">Exonérations de TVA pour les biens d'investissement</h2>
          <p className="mb-4">
            Les centres de dialyse peuvent bénéficier de l'exonération de TVA sur les biens d'investissement, sous certaines conditions :
          </p>
          
          <ol className="list-decimal pl-6 space-y-2 mb-4">
            <li>Les biens doivent être inscrits dans un compte d'immobilisation</li>
            <li>Les biens doivent ouvrir droit à déduction</li>
          </ol>
          
          <p className="mb-4">Cette exonération concerne notamment :</p>
          <ul className="space-y-2">
            <li className="list-item">Les installations techniques, matériels et outillages</li>
            <li className="list-item">Le mobilier de bureau</li>
            <li className="list-item">Le matériel informatique</li>
            <li className="list-item">Les véhicules utilitaires pour le transport du personnel</li>
          </ul>
        </section>
        
        <section className="card mb-8" id="procedure-exoneration">
          <h2 className="card-title">Procédure pour bénéficier de l'exonération de TVA</h2>
          <p className="mb-4">
            Pour bénéficier de ces exonérations, le centre de dialyse doit suivre la procédure suivante :
          </p>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <ol className="space-y-6">
              <li className="flex">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">1</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">Préparer les documents nécessaires</h3>
                  <ul className="mt-2 space-y-1">
                    <li>• Attestation fiscale prouvant la régularité de l'entreprise</li>
                    <li>• Engagement d'immobilisation des biens acquis</li>
                    <li>• Garanties suffisantes (caution bancaire, hypothèque, nantissement)</li>
                    <li>• Factures justificatives</li>
                  </ul>
                </div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">2</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">Déposer le dossier</h3>
                  <p className="mt-2">Auprès de la Direction Générale des Impôts (DGI)</p>
                </div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">3</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">Recevoir une attestation de dépôt</h3>
                  <p className="mt-2">Après examen du dossier par l'administration fiscale</p>
                </div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">4</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">Présenter cette attestation</h3>
                  <p className="mt-2">À l'Administration des Douanes et Impôts Indirects (ADII) pour valider l'exonération</p>
                </div>
              </li>
            </ol>
          </div>
        </section>
        
        <section className="card mb-8" id="autres-exonerations">
          <h2 className="card-title">Autres exonérations potentielles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-green-50 p-5 rounded-lg">
              <h3 className="font-semibold text-green-800 text-lg mb-3">Taxe Professionnelle</h3>
              <p>Les entreprises nouvellement créées peuvent bénéficier d'une exonération temporaire pendant les cinq premières années suivant le début de leur activité.</p>
            </div>
            <div className="bg-purple-50 p-5 rounded-lg">
              <h3 className="font-semibold text-purple-800 text-lg mb-3">Droits d'enregistrement</h3>
              <p>Des droits d'enregistrement réduits peuvent s'appliquer lors de l'acquisition de terrains ou de bâtiments destinés à l'exploitation professionnelle.</p>
            </div>
          </div>
        </section>
        
        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Conseils pour maximiser les exonérations</h3>
          <ul className="space-y-3">
            <li className="list-item">Planifier vos investissements en tenant compte des exonérations disponibles</li>
            <li className="list-item">Préparer soigneusement les dossiers de demande d'exonération</li>
            <li className="list-item">Conserver tous les justificatifs liés aux biens exonérés</li>
            <li className="list-item">Consulter un expert fiscal pour s'assurer de respecter toutes les conditions</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-12 flex justify-between">
        <Link href="/taxes" className="btn">&larr; Taxes applicables</Link>
        <Link href="/credits" className="btn btn-secondary">Déductibilité des crédits →</Link>
      </div>
    </div>
  );
}
