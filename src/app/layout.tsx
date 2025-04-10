'use client';

import Link from 'next/link';
import { Inter } from "next/font/google";
import MobileMenu from '@/components/MobileMenu';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <header className="header">
          <div className="container">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold">Fiscalité des Centres de Dialyse</h1>
                <p className="text-sm opacity-80">Guide fiscal complet pour le Maroc</p>
              </div>
              <nav className="hidden md:block">
                <Link href="/" className="nav-link">Accueil</Link>
                <Link href="/taxes" className="nav-link">Taxes</Link>
                <Link href="/exonerations" className="nav-link">Exonérations</Link>
                <Link href="/credits" className="nav-link">Crédits</Link>
                <Link href="/contact" className="nav-link">Contact</Link>
              </nav>
              <MobileMenu />
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">À propos</h3>
                <p>Ce site présente une analyse détaillée du régime fiscal applicable aux centres de dialyse au Maroc, basée sur le Code Général des Impôts 2025.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
                <ul>
                  <li className="mb-2"><Link href="/" className="hover:underline">Accueil</Link></li>
                  <li className="mb-2"><Link href="/taxes" className="hover:underline">Taxes applicables</Link></li>
                  <li className="mb-2"><Link href="/exonerations" className="hover:underline">Exonérations fiscales</Link></li>
                  <li className="mb-2"><Link href="/credits" className="hover:underline">Déductibilité des crédits</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Mentions légales</h3>
                <p>Les informations présentées sur ce site sont susceptibles d'évoluer en fonction des modifications législatives. Dernière mise à jour : Avril 2025.</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20 text-center">
              <p>&copy; 2025 Fiscalité des Centres de Dialyse au Maroc. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
        <ScrollToTopButton />
      </body>
    </html>
  );
}
