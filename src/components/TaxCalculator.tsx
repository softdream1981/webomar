'use client';

import { useState, useEffect } from 'react';

export default function TaxCalculator() {
  const [benefice, setBenefice] = useState<number>(0);
  const [impot, setImpot] = useState<number>(0);
  const [tauxMoyen, setTauxMoyen] = useState<number>(0);
  const [isIndustrial, setIsIndustrial] = useState<boolean>(false);

  const calculateTax = () => {
    let tax = 0;
    
    if (benefice <= 300000) {
      tax = benefice * 0.175;
    } else if (benefice <= 1000000) {
      tax = 300000 * 0.175 + (benefice - 300000) * 0.2;
    } else if (benefice <= 100000000) {
      tax = 300000 * 0.175 + 700000 * 0.2;
      
      // Appliquer le taux différent selon le type d'établissement
      if (isIndustrial) {
        tax += (benefice - 1000000) * 0.215;
      } else {
        tax += (benefice - 1000000) * 0.2275;
      }
    } else {
      tax = 300000 * 0.175 + 700000 * 0.2;
      
      if (isIndustrial) {
        tax += 99000000 * 0.215 + (benefice - 100000000) * 0.315;
      } else {
        tax += 99000000 * 0.2275 + (benefice - 100000000) * 0.34;
      }
    }
    
    setImpot(tax);
    setTauxMoyen((tax / benefice) * 100);
  };

  useEffect(() => {
    if (benefice > 0) {
      calculateTax();
    } else {
      setImpot(0);
      setTauxMoyen(0);
    }
  }, [benefice, isIndustrial]);

  const handleBeneficeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setBenefice(value);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('fr-MA', { 
      style: 'currency', 
      currency: 'MAD',
      maximumFractionDigits: 2
    }).format(num);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Calculateur d'Impôt sur les Sociétés (IS)</h3>
      <p className="text-gray-600 mb-6">
        Estimez l'impôt sur les sociétés pour votre centre de dialyse selon le barème fiscal 2025.
      </p>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="benefice" className="block text-sm font-medium text-gray-700 mb-1">
            Bénéfice net fiscal (en DH)
          </label>
          <input
            type="number"
            id="benefice"
            value={benefice || ''}
            onChange={handleBeneficeChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Entrez votre bénéfice net fiscal"
          />
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="isIndustrial"
            checked={isIndustrial}
            onChange={(e) => setIsIndustrial(e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="isIndustrial" className="ml-2 block text-sm text-gray-700">
            Centre de dialyse considéré comme activité industrielle
          </label>
        </div>
        
        <div className="pt-4 border-t border-gray-200">
          <div className="flex justify-between mb-2">
            <span className="font-medium">Impôt sur les Sociétés estimé :</span>
            <span className="font-bold text-blue-700">{formatNumber(impot)}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Taux moyen d'imposition :</span>
            <span className="font-bold text-blue-700">
              {tauxMoyen ? tauxMoyen.toFixed(2) + '%' : '0.00%'}
            </span>
          </div>
        </div>
      </div>
      
      <div className="mt-6 bg-blue-50 p-4 rounded-md text-sm text-blue-800">
        <p className="font-semibold">Note :</p>
        <p>Ce calculateur est fourni à titre indicatif. Pour une évaluation précise, veuillez consulter un expert-comptable.</p>
      </div>
    </div>
  );
}
