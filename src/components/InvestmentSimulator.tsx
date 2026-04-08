import React, { useState } from 'react';
import { Calculator, ArrowRight, Info } from 'lucide-react';

export const InvestmentSimulator: React.FC = () => {
  const [amount, setAmount] = useState(1000);
  const [months, setMonths] = useState(12);
  const [rate, setRate] = useState(10.5);

  const calculateReturn = () => {
    const total = amount * Math.pow(1 + (rate / 100) / 12, months);
    return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <section className="py-16 bg-white rounded-[3rem] border border-gray-100 shadow-2xl overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-caixa-blue/5 rounded-full -mr-48 -mt-48"></div>
      
      <div className="max-w-6xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-caixa-orange p-3 rounded-2xl text-white">
              <Calculator size={24} />
            </div>
            <span className="text-caixa-orange font-black uppercase tracking-widest text-xs">Ferramenta Exclusiva</span>
          </div>
          <h2 className="text-caixa-blue text-5xl font-black tracking-tighter leading-none mb-8">
            Simulador de Investimentos CAIXA
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-10">
            Descubra quanto seu dinheiro pode render com a solidez do banco que mais entende de poupança e investimentos no Brasil.
          </p>
          
          <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-3xl border border-blue-100">
            <Info className="text-caixa-blue shrink-0 mt-1" size={20} />
            <p className="text-caixa-blue/70 text-sm font-medium leading-relaxed">
              Esta é uma simulação baseada em taxas médias de mercado. Para uma análise personalizada, consulte seu gerente ou acesse o Internet Banking.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
          <div className="space-y-8">
            <div>
              <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Valor Inicial</label>
              <div className="relative">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 font-bold">R$</span>
                <input 
                  type="number" 
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full bg-white border border-gray-200 rounded-2xl px-14 py-5 text-xl font-black text-caixa-blue focus:outline-none focus:border-caixa-blue transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Prazo (Meses)</label>
                <input 
                  type="number" 
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                  className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 text-xl font-black text-caixa-blue focus:outline-none focus:border-caixa-blue transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Taxa Anual (%)</label>
                <input 
                  type="number" 
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 text-xl font-black text-caixa-blue focus:outline-none focus:border-caixa-blue transition-all"
                />
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2 text-center">Resultado Estimado</p>
              <div className="text-5xl font-black text-caixa-orange tracking-tighter text-center mb-8">
                {calculateReturn()}
              </div>
              <button className="w-full bg-caixa-blue text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-[#004a8a] transition-all shadow-xl shadow-blue-900/20">
                Começar a investir <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
