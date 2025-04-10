'use client';

import { useState } from 'react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center p-2 text-white"
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-blue-700 z-50">
          <div className="px-4 py-2 space-y-2">
            <a href="/" className="block py-2 text-white hover:bg-blue-800 px-3 rounded">Accueil</a>
            <a href="/taxes" className="block py-2 text-white hover:bg-blue-800 px-3 rounded">Taxes</a>
            <a href="/exonerations" className="block py-2 text-white hover:bg-blue-800 px-3 rounded">Exonérations</a>
            <a href="/credits" className="block py-2 text-white hover:bg-blue-800 px-3 rounded">Crédits</a>
            <a href="/contact" className="block py-2 text-white hover:bg-blue-800 px-3 rounded">Contact</a>
          </div>
        </div>
      )}
    </div>
  );
}
