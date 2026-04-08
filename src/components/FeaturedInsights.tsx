import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

export const FeaturedInsights: React.FC = () => {
  return (
    <section className="py-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1.5 h-8 bg-caixa-orange"></div>
        <h2 className="text-caixa-blue text-3xl font-black tracking-tighter">Análises e Insights</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Featured Article 1 */}
        <div className="lg:col-span-1 group cursor-pointer">
          <div className="rounded-3xl overflow-hidden mb-6 h-64 shadow-lg">
            <img 
              src="https://picsum.photos/seed/mountain/800/600" 
              alt="Gestão de Fundos" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-caixa-orange text-[10px] font-black uppercase tracking-widest mb-2 block">Gestão de Fundos</span>
          <h3 className="text-caixa-blue text-2xl font-black leading-tight mb-4 group-hover:text-caixa-orange transition-colors">
            Fundos de Crédito Privado da CAIXA batem CDI pelo 8º mês consecutivo
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
            A estratégia de alocação em títulos de alta qualidade creditícia tem garantido retornos consistentes acima do...
          </p>
          <div className="flex items-center gap-4 text-gray-400 text-[10px] font-bold">
            <span>08 Abr 2026</span>
            <span>•</span>
            <span>5 min de leitura</span>
          </div>
        </div>

        {/* Featured Article 2 */}
        <div className="lg:col-span-1 group cursor-pointer">
          <div className="rounded-3xl overflow-hidden mb-6 h-64 shadow-lg">
            <img 
              src="https://picsum.photos/seed/camera/800/600" 
              alt="Mercados" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-caixa-orange text-[10px] font-black uppercase tracking-widest mb-2 block">Mercados</span>
          <h3 className="text-caixa-blue text-2xl font-black leading-tight mb-4 group-hover:text-caixa-orange transition-colors">
            Ibovespa rompe 134 mil pontos: quais setores lideram a alta?
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
            Setor financeiro e de commodities impulsionam o índice para novas máximas históricas. Veja nossa análise setorial.
          </p>
          <div className="flex items-center gap-4 text-gray-400 text-[10px] font-bold">
            <span>07 Abr 2026</span>
            <span>•</span>
            <span>5 min de leitura</span>
          </div>
        </div>

        {/* Newsletter Block */}
        <div className="lg:col-span-1 bg-caixa-blue rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl flex flex-col">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
          
          <div className="bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-8">
            <Mail size={24} />
          </div>

          <h3 className="text-3xl font-black mb-4 tracking-tighter leading-tight">Newsletter Exclusiva</h3>
          <p className="text-white/70 text-sm mb-10 leading-relaxed">
            Receba análises diárias dos nossos especialistas diretamente no seu e-mail e não perca nenhuma oportunidade.
          </p>

          <div className="space-y-4 mt-auto">
            <input 
              type="text" 
              placeholder="Seu nome completo" 
              className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-white/40 placeholder:text-white/40 font-bold"
            />
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-white/40 placeholder:text-white/40 font-bold"
            />
            <button className="w-full bg-caixa-orange text-white py-4 rounded-2xl font-black text-sm hover:bg-white hover:text-caixa-blue transition-all shadow-xl">
              Quero me inscrever
            </button>
          </div>

          <p className="text-[10px] text-white/40 mt-6 text-center">
            Ao se inscrever, você concorda com nossa Política de Privacidade.
          </p>
        </div>
      </div>
    </section>
  );
};
