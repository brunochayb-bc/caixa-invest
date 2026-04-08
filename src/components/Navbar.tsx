import React, { useState } from 'react';
import { Search, User, ChevronDown, Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const Navbar: React.FC = () => {
  const [isInvestMenuOpen, setIsInvestMenuOpen] = useState(false);

  const investmentThemes = [
    'Ações', 'Renda Fixa', 'Agro', 'Fundos de Investimentos', 'Fundos Imobiliários', 'Internacional'
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-8">
            <div className="flex items-center">
              <div className="flex items-center">
                <span className="text-caixa-blue font-black text-4xl tracking-tighter italic">CAI</span>
                <div className="relative w-10 h-10 flex items-center justify-center -mx-1.5">
                  {/* Blue diagonal \ */}
                  <div className="absolute w-full h-2.5 bg-caixa-blue transform rotate-45 rounded-sm"></div>
                  {/* Orange diagonal / */}
                  <div className="absolute w-full h-2.5 bg-caixa-orange transform -rotate-45 rounded-sm"></div>
                </div>
                <span className="text-caixa-blue font-black text-4xl tracking-tighter italic">A</span>
              </div>
              <div className="h-10 w-[1px] bg-gray-200 mx-6 hidden md:block"></div>
              <div className="hidden md:flex flex-col leading-none">
                <span className="text-caixa-blue font-bold text-lg uppercase tracking-tight">InvestInfo</span>
                <span className="text-gray-400 text-[9px] uppercase font-bold tracking-widest">Inteligência Financeira</span>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-6">
              <NavLink href="#" active>Notícias</NavLink>
              <div 
                className="relative"
                onMouseEnter={() => setIsInvestMenuOpen(true)}
                onMouseLeave={() => setIsInvestMenuOpen(false)}
              >
                <NavLink href="#" hasDropdown>Investimentos</NavLink>
                {isInvestMenuOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-2xl border border-gray-100 rounded-xl py-4 mt-0 animate-in fade-in slide-in-from-top-2 duration-200">
                    {investmentThemes.map((theme) => (
                      <a 
                        key={theme} 
                        href="#" 
                        className="block px-6 py-3 text-sm font-bold text-gray-600 hover:text-caixa-blue hover:bg-blue-50 transition-colors"
                      >
                        {theme}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <NavLink href="#">Gestão de Fundos</NavLink>
              <button className="bg-blue-50 text-caixa-blue px-4 py-2 rounded-lg font-bold text-sm hover:bg-blue-100 transition-colors">
                Cotações
              </button>
              <NavLink href="#">Análises</NavLink>
              <NavLink href="#">Agenda</NavLink>
              <NavLink href="#">Relatórios</NavLink>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-500 hover:text-caixa-blue transition-colors">
              <Search size={22} />
            </button>
            <button className="bg-caixa-blue text-white px-6 py-2.5 rounded-full font-bold flex items-center gap-2 hover:bg-[#004a8a] transition-all shadow-lg shadow-blue-900/20">
              <User size={18} />
              <span>Acessar</span>
            </button>
            <button className="lg:hidden p-2 text-gray-600">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode; active?: boolean; hasDropdown?: boolean }> = ({ 
  href, 
  children, 
  active, 
  hasDropdown 
}) => (
  <a 
    href={href} 
    className={cn(
      "text-sm font-bold flex items-center gap-1 transition-colors py-8",
      active ? "text-caixa-blue border-b-2 border-caixa-blue" : "text-gray-600 hover:text-caixa-blue"
    )}
  >
    {children}
    {hasDropdown && <ChevronDown size={14} className="opacity-50" />}
  </a>
);
