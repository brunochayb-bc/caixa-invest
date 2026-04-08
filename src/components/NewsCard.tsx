import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

interface NewsCardProps {
  tag: string;
  title: string;
  description: string;
  imageUrl: string;
  ctaText: string;
}

export const NewsCard: React.FC<NewsCardProps> = ({ tag, title, description, imageUrl, ctaText }) => {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col h-full group"
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-[#FF8C00] text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg">
            {tag}
          </span>
        </div>
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-[#003366] text-2xl font-black mb-4 leading-tight">
          {title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
          {description}
        </p>
        <a 
          href="#" 
          className="text-[#FF8C00] font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all group/link"
        >
          {ctaText}
          <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
};
