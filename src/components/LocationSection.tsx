import React from 'react';
import {
  MapPin,
  Clock,
  Navigation,
  Phone,
  ArrowUpRight,
  Instagram,
  MessageSquare
} from 'lucide-react';
import { BARBERSHOP_CONTACT } from '../data/barbershopData';

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

export const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="relative py-14 sm:py-20 bg-[#050806] border-t border-[#D9A52B]/20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171A18] border border-[#D9A52B]/35 text-xs font-mono text-[#F2C45A] mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#D9A52B]" />
            <span className="uppercase tracking-wider">LOCALIZAÇÃO & CONTACTOS OFICIAIS</span>
          </div>
          <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FFFFFF] tracking-tight uppercase mb-3">
            VISITE A NOSSA BARBEARIA
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
            Localizada no Zango 2, a Clássico Barber Shop está pronta para recebê-lo com conforto e excelência.
          </p>
        </div>

        {/* Location & Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left: Contact & Info Cards (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Contact Channels Card */}
            <div className="p-5 rounded-2xl bg-[#171A18] border border-[#D9A52B]/30 shadow-xl">
              <span className="text-[10px] font-mono tracking-widest text-[#D9A52B] uppercase block mb-3.5 font-bold">
                CANAIS DE CONTACTO DIRECTO
              </span>

              <div className="space-y-3">
                {/* Contacto Telefónico & WhatsApp */}
                <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-[#050806]/70 border border-[#D9A52B]/20">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#D9A52B]/15 border border-[#D9A52B]/35 flex items-center justify-center text-[#F2C45A] shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-zinc-400 block font-mono">CONTACTO</span>
                      <span className="text-xs sm:text-sm font-bold text-[#FFFFFF] font-mono">
                        {BARBERSHOP_CONTACT.phoneDisplay}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <a
                      href={BARBERSHOP_CONTACT.telUrl}
                      className="px-2.5 py-1.5 rounded-lg bg-white/[0.06] hover:bg-[#D9A52B]/20 text-zinc-200 hover:text-[#FFFFFF] text-[11px] font-semibold transition-colors flex items-center gap-1 border border-white/10"
                      title="Ligar agora"
                    >
                      <Phone className="w-3 h-3 text-[#D9A52B]" />
                      <span>Ligar</span>
                    </a>
                    <a
                      href={BARBERSHOP_CONTACT.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1.5 rounded-lg bg-[#D9A52B]/20 hover:bg-gradient-to-r hover:from-[#D9A52B] hover:to-[#F2C45A] text-[#F2C45A] hover:text-[#050806] text-[11px] font-bold transition-all flex items-center gap-1 border border-[#D9A52B]/40"
                      title="Enviar mensagem no WhatsApp"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-[#050806]/70 border border-[#D9A52B]/20">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#D9A52B]/15 border border-[#D9A52B]/35 flex items-center justify-center text-[#F2C45A] shrink-0">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-zinc-400 block font-mono">INSTAGRAM</span>
                      <span className="text-xs sm:text-sm font-semibold text-[#FFFFFF]">
                        {BARBERSHOP_CONTACT.instagram}
                      </span>
                    </div>
                  </div>
                  <a
                    href={BARBERSHOP_CONTACT.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-[#D9A52B]/20 text-zinc-200 hover:text-[#FFFFFF] text-[11px] font-semibold transition-colors shrink-0 flex items-center gap-1 border border-white/10"
                  >
                    <span>Seguir</span>
                    <ArrowUpRight className="w-3 h-3 text-[#D9A52B]" />
                  </a>
                </div>

                {/* TikTok */}
                <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-[#050806]/70 border border-[#D9A52B]/20">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#D9A52B]/15 border border-[#D9A52B]/35 flex items-center justify-center text-[#F2C45A] shrink-0">
                      <TikTokIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-zinc-400 block font-mono">TIKTOK</span>
                      <span className="text-xs sm:text-sm font-semibold text-[#FFFFFF]">
                        {BARBERSHOP_CONTACT.tiktok}
                      </span>
                    </div>
                  </div>
                  <a
                    href={BARBERSHOP_CONTACT.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-[#D9A52B]/20 text-zinc-200 hover:text-[#FFFFFF] text-[11px] font-semibold transition-colors shrink-0 flex items-center gap-1 border border-white/10"
                  >
                    <span>Ver Vídeos</span>
                    <ArrowUpRight className="w-3 h-3 text-[#D9A52B]" />
                  </a>
                </div>

              </div>
            </div>

            {/* Horário de Atendimento Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#171A18] border border-[#D9A52B]/30 shadow-xl">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#D9A52B]/15 border border-[#D9A52B]/35 flex items-center justify-center text-[#F2C45A] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="w-full">
                  <span className="text-[10px] font-mono tracking-widest text-[#D9A52B] uppercase block mb-1.5 font-bold">
                    HORÁRIO DE FUNCIONAMENTO
                  </span>
                  
                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-center justify-between pb-1.5 border-b border-white/[0.05]">
                      <span className="text-zinc-300">Segunda a Sexta:</span>
                      <span className="font-mono font-bold text-white">{BARBERSHOP_CONTACT.hoursWeekday}</span>
                    </div>
                    <div className="flex items-center justify-between pb-1.5 border-b border-white/[0.05]">
                      <span className="text-zinc-300">Sábado:</span>
                      <span className="font-mono font-bold text-white">{BARBERSHOP_CONTACT.hoursSaturday}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-400">Domingo:</span>
                      <span className="font-mono font-semibold text-[#D9A52B]">{BARBERSHOP_CONTACT.hoursSunday}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Primary CTA Button: Ver localização no Google Maps */}
            <a
              id="btn-ver-localizacao-maps"
              href={BARBERSHOP_CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-5 rounded-xl bg-gradient-to-r from-[#D9A52B] via-[#F2C45A] to-[#D9A52B] hover:brightness-110 text-[#050806] font-black text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(217,165,43,0.35)] flex items-center justify-center gap-2 cursor-pointer group"
            >
              <Navigation className="w-4 h-4" />
              <span>{BARBERSHOP_CONTACT.mapsLabel}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

          </div>

          {/* Right: Stylized Dark Mode Map Display (7 columns) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#171A18] border border-[#D9A52B]/35 p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden min-h-[390px] shadow-2xl">
            
            {/* Architectural Stylized Dark Gold Map Canvas */}
            <div className="absolute inset-0 opacity-40">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="map-grid-gold" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(217,165,43,0.12)" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#map-grid-gold)" />
                {/* Stylized Avenue Lines */}
                <path d="M-50 180 L800 240" stroke="#D9A52B" strokeWidth="10" opacity="0.25" />
                <path d="M-50 180 L800 240" stroke="#F2C45A" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.6" />
                <path d="M220 -50 L310 500" stroke="#D9A52B" strokeWidth="8" opacity="0.2" />
                <path d="M500 -50 L420 500" stroke="#252b27" strokeWidth="10" />
                <path d="M50 320 L750 340" stroke="#252b27" strokeWidth="8" />
              </svg>
            </div>

            {/* Top Map Bar */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="px-3 py-1 rounded-full bg-[#050806]/85 backdrop-blur-md border border-[#D9A52B]/35 text-[10px] font-mono text-zinc-200 flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[#D9A52B]" />
                <span>{BARBERSHOP_CONTACT.city}</span>
              </div>
              <div className="px-3 py-1 rounded-full bg-[#D9A52B]/15 border border-[#D9A52B]/40 text-[10px] font-mono text-[#F2C45A] font-bold">
                ABERTO HOJE
              </div>
            </div>

            {/* Central Animated Neon Map Pin with Official Emblem */}
            <div className="relative z-10 my-auto flex flex-col items-center justify-center py-6">
              <div className="relative">
                {/* Radar pulse rings */}
                <div className="absolute -inset-4 rounded-full bg-[#D9A52B]/20 animate-ping" />
                <div className="absolute -inset-8 rounded-full bg-[#F2C45A]/15 animate-pulse" />
                
                {/* Pin Head with logo emblem */}
                <div className="relative w-20 h-14 sm:w-24 sm:h-16 rounded-xl overflow-hidden border-2 border-[#D9A52B] shadow-[0_0_25px_rgba(217,165,43,0.6)] bg-[#050806] flex items-center justify-center p-1">
                  <img
                    src={BARBERSHOP_CONTACT.logoUrl}
                    alt="Clássico Barber Shop"
                    className="w-full h-full object-contain filter drop-shadow-[0_0_6px_rgba(217,165,43,0.6)]"
                  />
                </div>
              </div>

              {/* Pin Tag */}
              <div className="mt-3.5 px-4 py-2 rounded-xl bg-[#050806]/95 backdrop-blur-md border border-[#D9A52B]/40 text-center shadow-2xl">
                <span className="text-sm font-bold text-[#FFFFFF] block uppercase font-['Cinzel',serif]">
                  {BARBERSHOP_CONTACT.brandName}
                </span>
                <span className="text-[11px] text-[#F2C45A] block font-mono font-semibold">
                  {BARBERSHOP_CONTACT.positioning}
                </span>
                <span className="text-[10px] text-zinc-300 font-mono">
                  {BARBERSHOP_CONTACT.phoneDisplay}
                </span>
              </div>
            </div>

            {/* Bottom Route Fast Links */}
            <div className="relative z-10 pt-3 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="text-zinc-400 text-[11px]">Rotas & Direções:</span>
              <div className="flex items-center gap-2">
                <a
                  href={BARBERSHOP_CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#D9A52B] to-[#F2C45A] text-[#050806] text-xs font-bold font-mono transition-all flex items-center gap-1 shadow-sm"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Ver localização no Google Maps</span>
                </a>
                <a
                  href={BARBERSHOP_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded-lg bg-white/[0.06] hover:bg-[#D9A52B]/20 text-zinc-200 hover:text-[#FFFFFF] text-xs font-mono transition-colors flex items-center gap-1 border border-white/10"
                >
                  <MessageSquare className="w-3 h-3 text-[#D9A52B]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
