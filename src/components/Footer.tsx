import React from 'react';
import { Instagram, MessageSquare, MapPin, Clock, ArrowUp, Phone, Navigation, ArrowUpRight } from 'lucide-react';
import { BARBERSHOP_CONTACT } from '../data/barbershopData';

interface FooterProps {
  onOpenBooking: () => void;
}

// TikTok Icon SVG
const TikTokIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.87-4.49V8.6a8.28 8.28 0 0 0 5.2 1.84V7.01a4.84 4.84 0 0 1-1.3-.32Z" />
  </svg>
);

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050806] border-t border-[#D9A52B]/20 text-zinc-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Brand & Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          
          {/* Col 1: Logo, Slogan & Concept (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative h-12 w-20 flex items-center justify-center shrink-0">
                <img
                  src={BARBERSHOP_CONTACT.logoUrl}
                  alt="Logótipo Clássico Barber Shop"
                  className="h-full w-full object-contain filter drop-shadow-[0_0_8px_rgba(217,165,43,0.5)]"
                  loading="lazy"
                  decoding="async"
                  width={80}
                  height={48}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-['Cinzel',serif] text-base font-bold tracking-wider text-[#FFFFFF] leading-tight">
                  {BARBERSHOP_CONTACT.brandName}
                </span>
                <span className="text-[9px] tracking-widest text-[#D9A52B] font-mono">
                  {BARBERSHOP_CONTACT.companyLegal}
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed max-w-sm mb-4">
              «{BARBERSHOP_CONTACT.slogan}» — Excelência, tradição e sofisticação dedicadas à valorização da imagem masculina em Zango 2, Angola.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#F2C45A] font-mono">
              <span className="w-2 h-2 rounded-full bg-[#D9A52B] animate-pulse" />
              <span>{BARBERSHOP_CONTACT.positioning}</span>
            </div>
          </div>

          {/* Col 2: Navegação (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono tracking-widest text-[#FFFFFF] uppercase mb-4 font-bold">
              NAVEGAÇÃO
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => scrollTo('inicio')}
                  className="hover:text-[#F2C45A] transition-colors cursor-pointer text-zinc-300"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('sobre')}
                  className="hover:text-[#F2C45A] transition-colors cursor-pointer text-zinc-300"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('servicos')}
                  className="hover:text-[#F2C45A] transition-colors cursor-pointer text-zinc-300"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('equipe')}
                  className="hover:text-[#F2C45A] transition-colors cursor-pointer text-zinc-300"
                >
                  Barbeiros
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('localizacao')}
                  className="hover:text-[#F2C45A] transition-colors cursor-pointer text-zinc-300"
                >
                  Localização
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="hover:text-[#F2C45A] font-bold transition-colors cursor-pointer text-[#D9A52B]"
                >
                  Agendamento Online
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contatos & Redes (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono tracking-widest text-[#FFFFFF] uppercase mb-4 font-bold">
              CONTACTOS & REDES
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href={BARBERSHOP_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#F2C45A] transition-colors text-zinc-300"
                >
                  <MessageSquare className="w-4 h-4 text-[#D9A52B]" />
                  <span>WhatsApp: {BARBERSHOP_CONTACT.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={BARBERSHOP_CONTACT.telUrl}
                  className="flex items-center gap-2 hover:text-[#F2C45A] transition-colors text-zinc-300"
                >
                  <Phone className="w-4 h-4 text-[#D9A52B]" />
                  <span className="font-mono">Ligar: {BARBERSHOP_CONTACT.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={BARBERSHOP_CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#F2C45A] transition-colors text-zinc-300"
                >
                  <Instagram className="w-4 h-4 text-[#D9A52B]" />
                  <span>Instagram {BARBERSHOP_CONTACT.instagram}</span>
                </a>
              </li>
              <li>
                <a
                  href={BARBERSHOP_CONTACT.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#F2C45A] transition-colors text-zinc-300"
                >
                  <TikTokIcon className="w-4 h-4 text-[#D9A52B]" />
                  <span>TikTok Clássico Barber Shop</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Localização & Horários (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono tracking-widest text-[#FFFFFF] uppercase mb-4 font-bold">
              LOCALIZAÇÃO & HORÁRIOS
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D9A52B] shrink-0 mt-0.5" />
                <span className="text-zinc-300">
                  {BARBERSHOP_CONTACT.address}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#D9A52B] shrink-0 mt-0.5" />
                <span className="text-zinc-300">
                  Seg — Sáb: {BARBERSHOP_CONTACT.hoursWeekday}<br />
                  Domingo: {BARBERSHOP_CONTACT.hoursSunday}
                </span>
              </div>
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={BARBERSHOP_CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-[#D9A52B]/20 border border-[#D9A52B]/30 text-zinc-200 hover:text-[#FFFFFF] text-[11px] font-mono transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5 text-[#D9A52B]" />
                    <span>{BARBERSHOP_CONTACT.mapsLabel}</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#D9A52B]" />
                </a>

                <button
                  onClick={onOpenBooking}
                  className="w-full py-2 px-3 rounded-lg bg-gradient-to-r from-[#D9A52B] to-[#F2C45A] hover:brightness-110 text-[#050806] font-extrabold text-[11px] tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(217,165,43,0.3)] cursor-pointer text-center"
                >
                  AGENDAR AGORA
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} {BARBERSHOP_CONTACT.brandName}. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[11px] text-[#D9A52B]">
              PROFISSIONALISMO • EXCELÊNCIA • TRADIÇÃO
            </span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-[#D9A52B]/20 hover:border-[#D9A52B]/50 border border-white/[0.08] flex items-center justify-center text-zinc-300 hover:text-white transition-colors cursor-pointer"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
