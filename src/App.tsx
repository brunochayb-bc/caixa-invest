/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TopTicker } from './components/TopTicker';
import { Navbar } from './components/Navbar';
import { BroadcastSection } from './components/BroadcastSection';
import { MarketWidgets } from './components/MarketWidgets';
import { LatestNews } from './components/LatestNews';
import { FeaturedInsights } from './components/FeaturedInsights';
import { AssetClasses } from './components/AssetClasses';
import { InvestmentSimulator } from './components/InvestmentSimulator';
import { MultimediaSection } from './components/MultimediaSection';
import { MessageCircle, ArrowRight, ShieldCheck, Zap, BarChart3 } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-gray-900">
      <TopTicker />
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 1. Mercado em tempo real e destaques no começo */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          <div className="lg:col-span-3">
            <MarketWidgets />
          </div>
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="bg-caixa-blue rounded-[2rem] p-8 text-white relative overflow-hidden group shadow-xl flex-grow">
              <Zap className="text-caixa-orange mb-4" size={24} />
              <h3 className="text-xl font-black mb-2 tracking-tighter">Crédito Imobiliário</h3>
              <p className="text-white/60 text-xs mb-6 leading-relaxed">Taxas exclusivas para sua casa própria.</p>
              <button className="flex items-center gap-2 font-black text-xs text-caixa-orange hover:gap-3 transition-all">
                Simular <ArrowRight size={14} />
              </button>
            </div>
            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-lg relative overflow-hidden group flex-grow">
              <ShieldCheck className="text-caixa-blue mb-4" size={24} />
              <h3 className="text-xl font-black text-caixa-blue mb-2 tracking-tighter">Consórcio</h3>
              <p className="text-gray-400 text-xs mb-6 leading-relaxed">Planeje seu futuro sem juros.</p>
              <button className="flex items-center gap-2 font-black text-xs text-caixa-blue hover:gap-3 transition-all">
                Ver planos <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        <FeaturedInsights />

        {/* 2. Notícias no meio da página */}
        <LatestNews />

        {/* 3. Classes de ativos e demais informações abaixo */}
        <AssetClasses />
        
        <InvestmentSimulator />

        <MultimediaSection />

        <BroadcastSection />

        {/* Lead Gen Section */}
        <section className="mt-20 bg-white rounded-[3rem] p-12 border border-gray-100 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-64 h-64 bg-caixa-blue/5 rounded-full -ml-32 -mt-32"></div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-caixa-blue text-4xl font-black tracking-tighter mb-6">Pronto para começar a investir com a CAIXA?</h2>
            <p className="text-gray-500 text-lg leading-relaxed">Receba análises exclusivas dos nossos especialistas e fique por dentro das melhores oportunidades do mercado financeiro.</p>
          </div>
          <div className="relative z-10 w-full md:w-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              className="px-8 py-4 rounded-full bg-gray-50 border border-gray-200 focus:outline-none focus:border-caixa-blue w-full sm:w-80 font-bold"
            />
            <button className="bg-caixa-blue text-white px-10 py-4 rounded-full font-black hover:bg-[#004a8a] transition-all shadow-xl shadow-blue-900/20 whitespace-nowrap">
              Cadastrar agora
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-caixa-blue text-white py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-8">
                <span className="text-white font-black text-4xl tracking-tighter italic">CAI</span>
                <div className="relative w-10 h-10 flex items-center justify-center -mx-1.5">
                  {/* White diagonal \ (footer uses white instead of blue) */}
                  <div className="absolute w-full h-2.5 bg-white transform rotate-45 rounded-sm"></div>
                  {/* Orange diagonal / */}
                  <div className="absolute w-full h-2.5 bg-caixa-orange transform -rotate-45 rounded-sm"></div>
                </div>
                <span className="text-white font-black text-4xl tracking-tighter italic">A</span>
              </div>
              <p className="text-white/60 text-sm max-w-md leading-relaxed">
                A CAIXA Econômica Federal é o banco da habitação, do saneamento, da infraestrutura e do desenvolvimento urbano. Com o InvestInfo, trazemos inteligência financeira para o seu dia a dia.
              </p>
            </div>
            <div>
              <h4 className="font-black uppercase tracking-widest text-xs mb-8 text-caixa-orange">Links Úteis</h4>
              <ul className="space-y-4 text-sm text-white/70 font-bold">
                <li><a href="#" className="hover:text-white transition-colors">Sobre a CAIXA</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Relações com Investidores</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Trabalhe Conosco</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Segurança e Privacidade</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black uppercase tracking-widest text-xs mb-8 text-caixa-orange">Atendimento</h4>
              <ul className="space-y-4 text-sm text-white/70 font-bold">
                <li><a href="#" className="hover:text-white transition-colors">SAC: 0800 726 0101</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ouvidoria: 0800 725 7474</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Canais Digitais</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Encontre uma Agência</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-xs text-white/40 font-medium">© 2026 CAIXA Econômica Federal. Todos os direitos reservados. CNPJ 00.360.305/0001-04</p>
            <div className="flex gap-6 grayscale opacity-50">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="Partner" className="h-4" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1024px-Google_2015_logo.svg.png" alt="Partner" className="h-4" />
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <button className="fixed bottom-8 right-8 bg-caixa-blue text-white p-5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all z-50 group">
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 bg-white text-caixa-blue px-4 py-2 rounded-xl shadow-xl font-black text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Fale com um especialista
        </span>
      </button>
    </div>
  );
}

