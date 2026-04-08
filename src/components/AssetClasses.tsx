import React, { useState } from 'react';
import { TrendingUp, TrendingDown, ArrowUpRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface Asset {
  symbol: string;
  name: string;
  price: string;
  change: string;
  isPositive: boolean;
}

const assetClasses: Record<string, Asset[]> = {
  'Ações': [
    { symbol: 'PETR4', name: 'Petrobras', price: '38,42', change: '+1.2%', isPositive: true },
    { symbol: 'VALE3', name: 'Vale', price: '62,15', change: '-0.5%', isPositive: false },
    { symbol: 'ITUB4', name: 'Itaú Unibanco', price: '34,12', change: '+0.8%', isPositive: true },
    { symbol: 'BBDC4', name: 'Bradesco', price: '14,50', change: '+0.3%', isPositive: true },
  ],
  'FIIs': [
    { symbol: 'KNRI11', name: 'Kinea Renda', price: '162,45', change: '+0.1%', isPositive: true },
    { symbol: 'HGLG11', name: 'CGHG Logística', price: '168,12', change: '-0.2%', isPositive: false },
    { symbol: 'XPLG11', name: 'XP Log', price: '108,34', change: '+0.4%', isPositive: true },
    { symbol: 'VISC11', name: 'Vinci Shopping', price: '121,56', change: '+0.2%', isPositive: true },
  ],
  'Internacional': [
    { symbol: 'AAPL', name: 'Apple Inc.', price: '182,45', change: '+1.5%', isPositive: true },
    { symbol: 'MSFT', name: 'Microsoft', price: '415,12', change: '+0.9%', isPositive: true },
    { symbol: 'GOOGL', name: 'Alphabet', price: '152,34', change: '-0.4%', isPositive: false },
    { symbol: 'AMZN', name: 'Amazon', price: '178,56', change: '+1.2%', isPositive: true },
  ]
};

export const AssetClasses: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Ações');

  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
        <h2 className="text-caixa-blue text-3xl font-black tracking-tighter">Classes de Ativos</h2>
        
        <div className="flex bg-gray-100 p-1 rounded-2xl">
          {Object.keys(assetClasses).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-8 py-2.5 rounded-xl text-sm font-bold transition-all",
                activeTab === tab 
                  ? "bg-white text-caixa-blue shadow-lg" 
                  : "text-gray-500 hover:text-caixa-blue"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {assetClasses[activeTab].map((asset) => (
          <div key={asset.symbol} className="bg-white rounded-[2rem] p-8 shadow-xl border border-gray-50 hover:border-caixa-blue/20 transition-all group flex flex-col h-full">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-caixa-blue font-black text-xl tracking-tight">{asset.symbol}</h3>
              <div className={cn(
                "px-3 py-1 rounded-full text-[10px] font-black",
                asset.isPositive ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
              )}>
                {asset.change}
              </div>
            </div>
            
            <p className="text-gray-400 text-sm font-bold mb-2">{asset.name}</p>
            <div className="text-3xl font-black text-caixa-blue tracking-tighter mb-8">
              R$ {asset.price}
            </div>

            <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
              <button className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-caixa-blue transition-colors">
                Negociar
              </button>
              <ArrowUpRight size={16} className="text-gray-300 group-hover:text-caixa-blue transition-colors" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
