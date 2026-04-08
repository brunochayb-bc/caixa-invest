import React, { useState } from 'react';
import { cn } from '@/src/lib/utils';
import { TrendingUp, TrendingDown, Filter, Newspaper, Landmark, Sprout, Zap } from 'lucide-react';

interface NewsItem {
  category: string;
  date: string;
  time: string;
  title: string;
  author: string;
  location: string;
  excerpt: string;
}

const newsData: NewsItem[] = [
  {
    category: 'Financeiro',
    date: '08/04/26',
    time: '16:40',
    title: 'Fed/ata: inflação nos EUA deve retornar à meta de 2% no final do próximo ano',
    author: 'Darlan de Azevedo e Patricia Lara',
    location: 'São Paulo',
    excerpt: 'A ata da última reunião de política monetária do Federal Reserve (Fed), revelou nesta quarta-feira, 8, que...'
  },
  {
    category: 'Financeiro',
    date: '08/04/26',
    time: '16:40',
    title: 'Durigan: Nos comprometemos a providenciar resposta para endividamento do agro',
    author: 'Cícero Cotrim, Naomi Matsui e Mateus Maia',
    location: 'Brasília',
    excerpt: 'O ministro da Fazenda, Dario Durigan, afirmou, nesta quarta-feira, que o governo está trabalhando em...'
  },
  {
    category: 'Financeiro',
    date: '08/04/26',
    time: '16:36',
    title: 'Após Cade instaurar inquérito contra 99Food, Keeta pede avaliação urgente da medida preventiva',
    author: 'Redação',
    location: 'Brasília',
    excerpt: 'A Keeta apresentou um recurso voluntário ao tribunal do Conselho Administrativo de Defesa Econômica (Cade)...'
  },
  {
    category: 'Política',
    date: '08/04/26',
    time: '16:09',
    title: 'Flávio Bolsonaro anuncia apoio a Soraya Santos (PL-RJ) na disputa por vaga do TCU',
    author: 'Naomi Matsui',
    location: 'Brasília',
    excerpt: 'O senador Flávio Bolsonaro (PL-RJ), pré-candidato à Presidência, anunciou nesta quarta-feira o apoio...'
  },
  {
    category: 'Financeiro',
    date: '08/04/26',
    time: '16:02',
    title: 'ANP não identificou para abril nenhum risco de abastecimento no Brasil, reitera diretor',
    author: 'Redação',
    location: 'Rio de Janeiro',
    excerpt: 'O diretor da Agência Nacional do Petróleo, Gás Natural e Biocombustíveis (ANP), Pietro Mendes, reiterou...'
  },
  {
    category: 'Política',
    date: '08/04/26',
    time: '15:59',
    title: 'Meio/Ideia: mais da metade dos eleitores diz que pode trocar de candidato no pleito de 2026',
    author: 'Pedro Penteado',
    location: 'São Paulo',
    excerpt: 'A pesquisa Meio/Ideia de abril revela um eleitorado que pode mudar sua intenção de voto até o dia...'
  },
  {
    category: 'Financeiro',
    date: '08/04/26',
    time: '15:56',
    title: 'Não há nada que indique culpa de Campos Neto no caso Master, diz Galípolo',
    author: 'Redação',
    location: 'Brasília',
    excerpt: 'O presidente do Banco Central, Gabriel Galípolo, disse nesta quarta-feira, 8, que não há nenhum processo...'
  },
  {
    category: 'Agronegócio',
    date: '08/04/26',
    time: '15:43',
    title: 'Agricultura: acordo com Etiópia permitirá exportar carnes e subprodutos',
    author: 'Redação',
    location: 'São Paulo',
    excerpt: 'O Ministério da Agricultura informou hoje, em nota, ter concluído negociações com a Etiópia que permitirão...'
  }
];

const categories = [
  { id: 'Todas', icon: Newspaper },
  { id: 'Financeiro', icon: Landmark },
  { id: 'Agronegócio', icon: Sprout },
  { id: 'Política', icon: Filter },
  { id: 'Energia', icon: Zap }
];

export const LatestNews: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Todas');

  const filteredNews = activeCategory === 'Todas' 
    ? newsData 
    : newsData.filter(item => item.category === activeCategory);

  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
        <h2 className="text-caixa-blue text-4xl font-black tracking-tighter">Últimas notícias</h2>
        
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all border",
                activeCategory === cat.id 
                  ? "bg-caixa-light-blue text-white border-caixa-light-blue shadow-lg shadow-blue-400/30" 
                  : "bg-gray-100 text-gray-600 border-transparent hover:bg-gray-200"
              )}
            >
              <cat.icon size={16} />
              {cat.id}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {filteredNews.map((news, index) => (
          <div key={index} className="flex flex-col group cursor-pointer">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-caixa-blue text-xs font-black uppercase tracking-widest">{news.category}</span>
              <span className="text-gray-400 text-xs font-bold">•</span>
              <span className="text-gray-400 text-xs font-bold">{news.date} {news.time}</span>
            </div>
            <h3 className="text-caixa-blue text-xl font-black leading-tight mb-4 group-hover:text-caixa-orange transition-colors line-clamp-3">
              {news.title}
            </h3>
            <p className="text-gray-500 text-xs font-bold mb-4">
              Por {news.author} {news.location}, {news.date}
            </p>
            <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
              {news.excerpt}
            </p>
            <div className="mt-6 h-[1px] bg-gray-100 w-full group-hover:bg-caixa-orange transition-colors"></div>
          </div>
        ))}
      </div>
    </section>
  );
};
