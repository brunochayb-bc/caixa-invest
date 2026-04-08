import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface TickerItem {
  symbol: string;
  value: string;
  change: string;
  isPositive: boolean;
}

const tickerData: TickerItem[] = [
  { symbol: 'IBOV', value: '134.250', change: '0.94%', isPositive: true },
  { symbol: 'DOL', value: '5,12', change: '-0.39%', isPositive: false },
  { symbol: 'EUR', value: '5,54', change: '0.12%', isPositive: true },
  { symbol: 'PETR4', value: '38,42', change: '1.25%', isPositive: true },
  { symbol: 'VALE3', value: '62,15', change: '-0.85%', isPositive: false },
  { symbol: 'ITUB4', value: '34,12', change: '0.45%', isPositive: true },
  { symbol: 'BTC', value: '345.200', change: '1.32%', isPositive: true },
  { symbol: 'ETH', value: '18.450', change: '2.15%', isPositive: true },
  { symbol: 'S&P 500', value: '5.204', change: '0.48%', isPositive: true },
  { symbol: 'NASDAQ', value: '16.380', change: '0.69%', isPositive: true },
];

export const TopTicker: React.FC = () => {
  return (
    <div className="bg-caixa-blue text-white py-2 px-4 flex items-center overflow-hidden whitespace-nowrap text-[11px] font-bold relative">
      <div className="flex items-center gap-2 pr-6 shrink-0 bg-caixa-blue z-20 relative shadow-[10px_0_15px_-5px_rgba(0,92,169,1)]">
        <span className="bg-caixa-orange text-white px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest flex items-center gap-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
          Mercado Live
        </span>
      </div>
      <div className="flex items-center gap-8 animate-marquee z-10">
        {[...tickerData, ...tickerData, ...tickerData].map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="opacity-60">{item.symbol}</span>
            <span className="font-bold">{item.value}</span>
            <span className={`flex items-center gap-0.5 ${item.isPositive ? 'text-green-400' : 'text-red-400'}`}>
              {item.isPositive ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
              {item.change}
            </span>
          </div>
        ))}
      </div>
      <div className="ml-auto flex items-center gap-4 border-l border-white/20 pl-4 shrink-0 bg-caixa-blue z-10">
        <span className="opacity-60 uppercase tracking-tighter">B3: Aberta</span>
        <span className="font-mono text-caixa-light-blue">16:37</span>
      </div>
    </div>
  );
};
