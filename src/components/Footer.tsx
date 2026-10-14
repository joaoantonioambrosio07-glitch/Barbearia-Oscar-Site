import React from 'react';
import { Instagram, MessageSquare, MapPin, Clock, ArrowUp, Scissors, Phone, Mail, Navigation, ArrowUpRight } from 'lucide-react';
import { BARBERSHOP_CONTACT } from '../data/barbershopData';

interface FooterProps {
  onOpenBooking: () => void;
}

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
    <footer className="relative bg-[#080A0D]/95 backdrop-blur-md border-t border-[#0757A5]/25 text-zinc-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Brand & Quick Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          
          {/* Col 1: Logo & Concept (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#087FE8]/60 shadow-[0_0_15px_rgba(8,127,232,0.4)] shrink-0 bg-[#082D8C]">
                <img
                  src="/src/assets/images/barbearia_oscar_logo_1791927922669.jpg"
                  alt="Logo Barbearia Oscar"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  width={36}
                  height={36}
                />
              </div>
              <span className="font-['Syne',sans-serif] text-lg font-bold tracking-widest uppercase text-[#F7F7F5]">
                BARBEARIA OSCAR
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm mb-6">
              Precisão, estilo, experiência e profissionalismo reunidos em um salão pensado para o homem contemporâneo que valoriza cada detalhe.
            </p>
            <div className="flex items-center gap-2 text-xs text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-[#087FE8] animate-pulse" />
              <span>Aberto hoje até às 20:30</span>
            </div>
          </div>

          {/* Col 2: Navegação (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono tracking-widest text-[#F7F7F5] uppercase mb-4">
              NAVEGAÇÃO
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => scrollTo('inicio')}
                  className="hover:text-[#087FE8] transition-colors cursor-pointer"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('sobre')}
                  className="hover:text-[#087FE8] transition-colors cursor-pointer"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('servicos')}
                  className="hover:text-[#087FE8] transition-colors cursor-pointer"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('equipe')}
                  className="hover:text-[#087FE8] transition-colors cursor-pointer"
                >
                  Barbeiros
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('localizacao')}
                  className="hover:text-[#087FE8] transition-colors cursor-pointer"
                >
                  Localização
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="hover:text-[#087FE8] font-semibold transition-colors cursor-pointer text-[#087FE8]"
                >
                  Agendamento Online
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contato & Social (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono tracking-widest text-[#F7F7F5] uppercase mb-4">
              CONTATOS & REDES
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href={BARBERSHOP_CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#087FE8] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#087FE8]" />
                  <span>Instagram {BARBERSHOP_CONTACT.instagram}</span>
                </a>
              </li>
              <li>
                <a
                  href={BARBERSHOP_CONTACT.telUrl}
                  className="flex items-center gap-2 hover:text-[#087FE8] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#087FE8]" />
                  <span className="font-mono">Telefone: {BARBERSHOP_CONTACT.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={BARBERSHOP_CONTACT.emailUrl}
                  className="flex items-center gap-2 hover:text-[#087FE8] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#087FE8]" />
                  <span>{BARBERSHOP_CONTACT.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={BARBERSHOP_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#087FE8] transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#087FE8]" />
                  <span>WhatsApp de Atendimento</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Localização & Horários (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono tracking-widest text-[#F7F7F5] uppercase mb-4">
              LOCALIZAÇÃO & HORÁRIOS
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#087FE8] shrink-0 mt-0.5" />
                <span className="text-zinc-300">
                  {BARBERSHOP_CONTACT.address}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#087FE8] shrink-0 mt-0.5" />
                <span>
                  Seg — Sáb: {BARBERSHOP_CONTACT.hoursWeekday}<br />
                  Domingo: {BARBERSHOP_CONTACT.hoursSunday}
                </span>
              </div>
              <div className="pt-1.5 flex flex-col gap-2">
                <a
                  href={BARBERSHOP_CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-[#0757A5]/30 border border-[#0757A5]/30 text-zinc-200 hover:text-[#087FE8] text-[11px] font-mono transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5 text-[#087FE8]" />
                    <span>{BARBERSHOP_CONTACT.mapsLabel}</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <button
                  onClick={onOpenBooking}
                  className="w-full py-2 px-3 rounded-lg bg-[#087FE8] hover:bg-[#0757A5] text-[#F7F7F5] font-bold text-[11px] tracking-wider uppercase transition-colors shadow-[0_0_12px_rgba(22,141,224,0.3)] cursor-pointer text-center"
                >
                  RESERVAR HORÁRIO ONLINE
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} BARBEARIA OSCAR. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[11px] text-zinc-400">
              PRECISÃO • ESTILO • EXPERIÊNCIA
            </span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-[#0757A5]/30 hover:border-[#087FE8]/50 border border-white/[0.08] flex items-center justify-center text-zinc-300 hover:text-white transition-colors cursor-pointer"
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
