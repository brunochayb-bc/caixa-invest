import React from 'react';
import { Play, ListMusic, Mic, ArrowRight, Clock } from 'lucide-react';

interface MediaItem {
  id: number;
  type: 'video' | 'podcast' | 'playlist';
  title: string;
  duration: string;
  thumbnail: string;
  category: string;
}

const mediaItems: MediaItem[] = [
  {
    id: 1,
    type: 'video',
    title: 'Perspectivas Econômicas: O que esperar do COPOM?',
    duration: '12:45',
    thumbnail: 'https://picsum.photos/seed/finance1/600/400',
    category: 'Análise Semanal'
  },
  {
    id: 2,
    type: 'podcast',
    title: 'CAIXA Invest Cast #42: Diversificação em Renda Fixa',
    duration: '24:10',
    thumbnail: 'https://picsum.photos/seed/podcast1/600/400',
    category: 'Podcasts'
  },
  {
    id: 3,
    type: 'video',
    title: 'Como investir no Agronegócio através de LCAs',
    duration: '08:20',
    thumbnail: 'https://picsum.photos/seed/agro1/600/400',
    category: 'Educação'
  },
  {
    id: 4,
    type: 'playlist',
    title: 'Guia do Investidor Iniciante: Primeiros Passos',
    duration: '5 vídeos',
    thumbnail: 'https://picsum.photos/seed/guide1/600/400',
    category: 'Playlists'
  }
];

export const MultimediaSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-8 bg-caixa-orange"></div>
          <h2 className="text-caixa-blue text-3xl font-black tracking-tighter">Conteúdo Multimídia</h2>
        </div>
        <button className="flex items-center gap-2 text-caixa-blue font-black text-sm hover:text-caixa-orange transition-colors">
          Ver todos <ArrowRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {mediaItems.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            <div className="relative rounded-[2rem] overflow-hidden aspect-video mb-6 shadow-xl">
              <img 
                src={item.thumbnail} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border border-white/30">
                  {item.type === 'video' && <Play className="text-white fill-white ml-1" size={24} />}
                  {item.type === 'podcast' && <Mic className="text-white" size={24} />}
                  {item.type === 'playlist' && <ListMusic className="text-white" size={24} />}
                </div>
              </div>
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-full flex items-center gap-1.5">
                <Clock size={10} />
                {item.duration}
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-caixa-orange text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-lg shadow-lg">
                  {item.category}
                </span>
              </div>
            </div>
            <h3 className="text-caixa-blue font-black text-lg leading-tight group-hover:text-caixa-orange transition-colors line-clamp-2">
              {item.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Featured Podcast Banner */}
      <div className="mt-12 bg-caixa-blue rounded-[3rem] p-8 md:p-12 text-white flex flex-col md:flex-row items-center gap-10 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48"></div>
        <div className="relative z-10 w-full md:w-1/3 aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
          <img 
            src="https://picsum.photos/seed/podcast-main/600/600" 
            alt="Podcast Destaque" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <div className="w-20 h-20 bg-caixa-orange rounded-full flex items-center justify-center shadow-2xl animate-pulse">
              <Mic size={32} />
            </div>
          </div>
        </div>
        <div className="relative z-10 flex-1">
          <span className="text-caixa-orange font-black uppercase tracking-widest text-xs mb-4 block">Podcast em Destaque</span>
          <h3 className="text-4xl font-black tracking-tighter mb-6 leading-none">
            O Futuro dos Investimentos Digitais e Criptoativos na CAIXA
          </h3>
          <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-2xl">
            Neste episódio especial, conversamos com os diretores de tecnologia e investimentos sobre a nova era dos ativos digitais.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-caixa-blue px-8 py-4 rounded-2xl font-black text-sm flex items-center gap-2 hover:bg-caixa-orange hover:text-white transition-all">
              Ouvir agora <Play size={16} fill="currentColor" />
            </button>
            <button className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-2xl font-black text-sm hover:bg-white/20 transition-all">
              Ver episódios anteriores
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
