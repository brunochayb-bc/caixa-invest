import React, { useState } from 'react';
import { LineChart, Line, ResponsiveContainer, YAxis } from 'recharts';
import { TrendingUp, TrendingDown, ChevronRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface AssetData {
  symbol: string;
  name: string;
  price: string;
  change: string;
  isPositive: boolean;
  history: { value: number }[];
}

const marketData: Record<string, AssetData[]> = {
  'Ações': [
    { symbol: 'PETR4', name: 'Petrobras PN', price: '38,42', change: '+1,25%', isPositive: true, history: Array.from({ length: 10 }, () => ({ value: Math.random() * 100 })) },
    { symbol: 'VALE3', name: 'Vale ON', price: '62,15', change: '-0,85%', isPositive: false, history: Array.from({ length: 10 }, () => ({ value: Math.random() * 100 })) },
    { symbol: 'ITUB4', name: 'Itaú Unibanco PN', price: '34,12', change: '+0,45%', isPositive: true, history: Array.from({ length: 10 }, () => ({ value: Math.random() * 100 })) },
    { symbol: 'BBDC4', name: 'Bradesco PN', price: '14,25', change: '+0,15%', isPositive: true, history: Array.from({ length: 10 }, () => ({ value: Math.random() * 100 })) },
  ],
  'Moedas': [
    { symbol: 'USDBRL', name: 'Dólar Comercial', price: '5,1234', change: '-0,39%', isPositive: false, history: Array.from({ length: 10 }, () => ({ value: Math.random() * 100 })) },
    { symbol: 'EURBRL', name: 'Euro', price: '5,5421', change: '+0,12%', isPositive: true, history: Array.from({ length: 10 }, () => ({ value: Math.random() * 100 })) },
    { symbol: 'GBPBRL', name: 'Libra Esterlina', price: '6,4512', change: '+0,05%', isPositive: true, history: Array.from({ length: 10 }, () => ({ value: Math.random() * 100 })) },
    { symbol: 'BTCBRL', name: 'Bitcoin', price: '345.200', change: '+1,32%', isPositive: true, history: Array.from({ length: 10 }, () => ({ value: Math.random() * 100 })) },
  ],
  'Índices': [
    { symbol: 'IBOV', name: 'Ibovespa', price: '134.250', change: '+0,94%', isPositive: true, history: Array.from({ length: 10 }, () => ({ value: Math.random() * 100 })) },
    { symbol: 'IFIX', name: 'Índice FIIs', price: '3.412', change: '+0,22%', isPositive: true, history: Array.from({ length: 10 }, () => ({ value: Math.random() * 100 })) },
    { symbol: 'SPX', name: 'S&P 500', price: '5.204', change: '+0,48%', isPositive: true, history: Array.from({ length: 10 }, () => ({ value: Math.random() * 100 })) },
    { symbol: 'IXIC', name: 'NASDAQ', price: '16.380', change: '+0,69%', isPositive: true, history: Array.from({ length: 10 }, () => ({ value: Math.random() * 100 })) },
  ]
};

export const MarketWidgets: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Ações');

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-caixa-blue text-2xl font-black uppercase tracking-tighter">Mercado em Tempo Real</h2>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">Acompanhe as principais cotações</p>
        </div>
        <div className="flex bg-gray-100 p-1 rounded-xl">
          {Object.keys(marketData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-6 py-2 rounded-lg text-sm font-bold transition-all",
                activeTab === tab 
                  ? "bg-white text-caixa-blue shadow-sm" 
                  : "text-gray-500 hover:text-caixa-blue"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {marketData[activeTab].map((asset) => (
          <div key={asset.symbol} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-caixa-blue/30 transition-all group">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-xs font-black text-gray-400 uppercase tracking-widest">{asset.symbol}</span>
                <h3 className="text-caixa-blue font-bold text-sm truncate max-w-[120px]">{asset.name}</h3>
              </div>
              <div className={cn(
                "flex items-center gap-0.5 text-xs font-bold",
                asset.isPositive ? "text-green-600" : "text-red-600"
              )}>
                {asset.isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                {asset.change}
              </div>
            </div>

            <div className="flex items-end justify-between gap-4">
              <div className="text-2xl font-black text-caixa-blue tracking-tighter">
                {asset.price}
              </div>
              <div className="h-12 w-24">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={asset.history}>
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke={asset.isPositive ? "#16a34a" : "#dc2626"} 
                      strokeWidth={2} 
                      dot={false} 
                    />
                    <YAxis hide domain={['dataMin', 'dataMax']} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-8 w-full flex items-center justify-center gap-2 text-caixa-blue font-bold text-sm hover:underline group">
        Ver painel completo de mercado
        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};
