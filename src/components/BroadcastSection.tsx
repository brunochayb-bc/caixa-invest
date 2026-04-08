import React from 'react';
import { Globe, Play, Radio } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const BroadcastSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
      <div className="lg:col-span-2 relative rounded-[2.5rem] overflow-hidden h-[450px] group shadow-2xl border-4 border-white">
        <img 
          src="https://picsum.photos/seed/invest/1200/800" 
          alt="Investimento Sustentável" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-caixa-blue/90 via-caixa-blue/20 to-transparent"></div>
        <div className="absolute bottom-10 left-10 text-white max-w-xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-caixa-orange text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Destaque Institucional</span>
          </div>
          <h2 className="text-5xl font-black mb-4 tracking-tighter leading-none">Liderança em Investimentos Sustentáveis</h2>
          <p className="text-white/80 text-lg font-medium leading-relaxed">A CAIXA reafirma seu compromisso com o futuro, direcionando recursos para projetos que transformam a sociedade e o meio ambiente.</p>
          <button className="mt-8 bg-white text-caixa-blue px-8 py-3 rounded-full font-black text-sm hover:bg-caixa-orange hover:text-white transition-all shadow-xl">
            Conheça nossas iniciativas
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-2xl flex flex-col relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-caixa-blue/5 rounded-full -mr-16 -mt-16"></div>
        
        <div className="flex items-center justify-between mb-10 relative z-10">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-4 h-4 bg-red-500 rounded-full animate-ping absolute"></div>
              <div className="w-4 h-4 bg-red-500 rounded-full relative"></div>
            </div>
            <h3 className="text-caixa-blue font-black text-2xl uppercase tracking-tighter">Broadcast</h3>
          </div>
          <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest border border-gray-200 px-4 py-2 rounded-full hover:bg-gray-50 transition-colors bg-white shadow-sm">
            <Globe size={14} className="text-caixa-light-blue" />
            Live Feed
          </button>
        </div>

        <div className="space-y-8 overflow-y-auto max-h-[280px] pr-4 custom-scrollbar relative z-10">
          <BroadcastItem 
            time="16:45" 
            title="Mercado reage positivamente aos novos dados de inflação nos EUA." 
          />
          <BroadcastItem 
            time="16:30" 
            title="CAIXA anuncia novas taxas para crédito imobiliário e consórcios." 
            isNew
          />
          <BroadcastItem 
            time="16:15" 
            title="Dólar apresenta leve queda após pronunciamento do FED nesta tarde." 
          />
          <BroadcastItem 
            time="15:50" 
            title="Ibovespa atinge nova máxima histórica no pregão de hoje com otimismo." 
          />
          <BroadcastItem 
            time="15:30" 
            title="Setor de agronegócio projeta crescimento recorde para a próxima safra." 
          />
        </div>

        <button className="mt-10 w-full bg-caixa-blue text-white py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-3 hover:bg-[#004a8a] transition-all shadow-lg shadow-blue-900/20">
          <Radio size={18} />
          Acompanhar ao vivo
        </button>
      </div>
    </div>
  );
};

const BroadcastItem: React.FC<{ time: string; title: string; isNew?: boolean }> = ({ time, title, isNew }) => (
  <div className="flex gap-5 group cursor-pointer border-l-2 border-transparent hover:border-caixa-orange pl-4 transition-all">
    <span className="text-gray-400 font-mono text-xs pt-1 shrink-0">{time}</span>
    <div className="flex flex-col gap-1">
      <p className={cn(
        "text-sm font-bold leading-tight group-hover:text-caixa-blue transition-colors",
        isNew ? "text-caixa-blue" : "text-gray-600"
      )}>
        {title}
      </p>
      {isNew && (
        <div className="flex items-center gap-1 mt-1">
          <span className="w-1.5 h-1.5 bg-caixa-orange rounded-full"></span>
          <span className="text-[10px] text-caixa-orange font-black uppercase tracking-widest">Urgente</span>
        </div>
      )}
    </div>
  </div>
);
