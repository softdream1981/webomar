'use client';

import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <Link href="/" className="text-blue-600 hover:underline">&larr; Retour à l'accueil</Link>
      </div>
      
      <h1 className="section-title" id="contact">Contactez-nous</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          Vous avez des questions spécifiques concernant la fiscalité de votre centre de dialyse au Maroc ? 
          Notre équipe d'experts est à votre disposition pour vous accompagner dans l'optimisation de votre situation fiscale.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="card">
            <h2 className="card-title">Formulaire de contact</h2>
            <ContactForm />
          </div>
          
          <div>
            <div className="card mb-6">
              <h2 className="card-title">Nos coordonnées</h2>
              <div className="mt-4 space-y-3">
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+212 5XX-XXXXXX</span>
                </p>
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>contact@fiscalite-dialyse.ma</span>
                </p>
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>123 Avenue Mohammed V, Casablanca, Maroc</span>
                </p>
              </div>
            </div>
            
            <div className="card">
              <h2 className="card-title">Horaires de disponibilité</h2>
              <div className="mt-4 space-y-2">
                <p className="flex justify-between">
                  <span className="font-medium">Lundi - Vendredi:</span>
                  <span>9h00 - 17h00</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Samedi:</span>
                  <span>9h00 - 12h00</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Dimanche:</span>
                  <span>Fermé</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg mt-12">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Pourquoi nous consulter ?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center text-center p-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h4 className="font-semibold mb-2">Expertise spécialisée</h4>
              <p>Notre équipe est spécialisée dans la fiscalité des établissements de santé au Maroc.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h4 className="font-semibold mb-2">Économies fiscales</h4>
              <p>Nous vous aidons à identifier toutes les opportunités d'optimisation fiscale légales.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <h4 className="font-semibold mb-2">Conformité fiscale</h4>
              <p>Nous vous accompagnons pour assurer la conformité de votre centre avec la législation fiscale.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <Link href="/credits" className="btn">&larr; Déductibilité des crédits</Link>
      </div>
    </div>
  );
}
