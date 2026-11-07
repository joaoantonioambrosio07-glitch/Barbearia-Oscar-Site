import React, { useState } from 'react';
import {
  ArrowRight,
  Instagram,
  Sparkles,
  Scissors,
  Check,
  Shield,
  MapPin,
  Clock,
  Star,
  Phone,
  Mail,
  Navigation
} from 'lucide-react';
import { BARBERSHOP_CONTACT } from '../data/barbershopData';

interface HeroProps {
  onOpenBooking: (serviceId?: string) => void;
  onViewServices: () => void;
}

interface QuickService {
  id: string;
  name: string;
  price: string;
  originalPrice: string;
  duration: string;
  tag: string;
  benefits: string[];
}

const QUICK_SERVICES: QuickService[] = [
  {
    id: 'corte-masculino',
    name: 'CORTE CLÁSSICO',
    price: '3.500 Kz',
    originalPrice: '4.500 Kz',
    duration: '45 min',
    tag: 'Mais Solicitado',
    benefits: ['Consultoria de Visagismo Masculino', 'Lavagem e higienização capilar', 'Finalização clássica impecável'],
  },
  {
    id: 'barba',
    name: 'BARBOTERAPIA',
    price: '2.500 Kz',
    originalPrice: '3.200 Kz',
    duration: '35 min',
    tag: 'Tradição & Cuidado',
    benefits: ['Toalha quente com óleos essenciais', 'Alinhamento na navalha afiada', 'Bálsamo calmante e refrescante'],
  },
  {
    id: 'corte-barba',
    name: 'COMBO VIP CLÁSSICO',
    price: '5.500 Kz',
    originalPrice: '7.000 Kz',
    duration: '75 min',
    tag: 'Experiência Completa',
    benefits: ['Corte Clássico + Barboterapia completa', 'Alinhamento escultural de sobrancelha', 'Atendimento prioritário VIP'],
  },
];

// TikTok Icon SVG
const TikTokIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.87-4.49V8.6a8.28 8.28 0 0 0 5.2 1.84V7.01a4.84 4.84 0 0 1-1.3-.32Z" />
  </svg>
);

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onViewServices }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('corte-masculino');

  const selectedService = QUICK_SERVICES.find((s) => s.id === selectedServiceId) || QUICK_SERVICES[0];

  return (
    <section
      id="inicio"
      className="relative min-h-[88vh] lg:min-h-[92vh] pt-20 pb-8 sm:pt-24 sm:pb-10 lg:pt-28 lg:pb-12 flex flex-col justify-between overflow-hidden bg-[#050806]"
    >
      {/* Background with authentic Clássico Barber Shop interior photograph */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <picture className="w-full h-full block">
          <source
            media="(max-width: 1024px)"
            srcSet="/assets/aistudio/Interior_Luxuoso_da_Cl_ssico_Barber_Shop_dfceb02d.png"
          />
          <img
            src="/assets/aistudio/Interior_Luxuoso_da_Cl_ssico_Barber_Shop_dfceb02d.png"
            alt="Interior Luxuoso Clássico Barber Shop — Zango 2"
            className="w-full h-full object-cover object-[center_25%] lg:object-[right_center] opacity-60 sm:opacity-70 transition-transform duration-700 ease-out"
            referrerPolicy="no-referrer"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width={941}
            height={1672}
          />
        </picture>

        {/* Cinematic Vignettes: Dark over text on mobile and desktop, revealing the golden chair and salon */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050806]/85 via-[#050806]/60 to-[#050806] lg:bg-gradient-to-r lg:from-[#050806]/95 lg:via-[#050806]/80 lg:to-[#050806]/35" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_30%,#050806_90%)] lg:bg-[radial-gradient(ellipse_at_center,transparent_40%,#050806_95%)]" />

        {/* Classic Gold Atmospheric Glows */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#D9A52B]/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#F2C45A]/10 blur-3xl pointer-events-none" />

        {/* Subtle Ornamental Geometric Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#D9A52B_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* ================= LEFT COLUMN: Brand Statement & Slogan ================= */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Top Badge with Official Logo Emblem */}
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#171A18]/90 backdrop-blur-md border border-[#D9A52B]/40 text-xs text-zinc-200 mb-5 w-fit shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
              <div className="h-6 w-10 flex items-center justify-center shrink-0">
                <img
                  src={BARBERSHOP_CONTACT.logoUrl}
                  alt="Clássico Barber Shop"
                  className="h-full w-full object-contain filter drop-shadow-[0_0_4px_rgba(217,165,43,0.6)]"
                  loading="eager"
                  decoding="async"
                  width={40}
                  height={24}
                />
              </div>
              <span className="font-['Cinzel',serif] text-[11px] font-bold text-[#F2C45A] tracking-wider uppercase">
                REFERÊNCIA EM ZANGO 2 • ANGOLA
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D9A52B] animate-pulse" />
            </div>

            {/* Slogan Destacado - "Mais que um corte, uma nova imagem." */}
            <h1 className="font-['Cinzel',serif] text-3xl sm:text-5xl lg:text-[3.8rem] font-black text-[#FFFFFF] leading-[1.08] tracking-tight mb-4 uppercase">
              MAIS QUE UM CORTE,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2C45A] via-[#D9A52B] to-[#F2C45A] filter drop-shadow-[0_2px_12px_rgba(217,165,43,0.3)]">
                UMA NOVA IMAGEM.
              </span>
            </h1>

            {/* Subheadline & Values: Profissionalismo, excelência e tradição */}
            <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed max-w-xl mb-7">
              Bem-vindo à <strong className="text-white font-semibold">Clássico Barber Shop</strong>. A sua referência de excelência, elegância e cuidado masculino em Zango 2. Combinamos a nobreza da barbearia tradicional com a precisão dos melhores acabamentos contemporâneos.
            </p>

            {/* Main Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <button
                id="hero-agendar-cta"
                onClick={() => onOpenBooking(selectedServiceId)}
                className="group px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-[#D9A52B] via-[#F2C45A] to-[#D9A52B] hover:brightness-110 text-[#050806] font-black text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_24px_rgba(217,165,43,0.45)] hover:shadow-[0_0_32px_rgba(217,165,43,0.65)] flex items-center gap-2 cursor-pointer hover:scale-[1.02]"
              >
                <span>AGENDAR AGORA</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                id="hero-servicos-cta"
                onClick={onViewServices}
                className="px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-[#171A18]/80 hover:bg-[#D9A52B]/15 border border-[#D9A52B]/35 hover:border-[#F2C45A] text-zinc-200 hover:text-[#FFFFFF] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 cursor-pointer backdrop-blur-sm"
              >
                VER SERVIÇOS & PREÇOS
              </button>
            </div>

            {/* Reassurance Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-5 border-t border-[#D9A52B]/20 max-w-lg">
              <div className="flex items-center gap-2 text-xs text-zinc-300">
                <Shield className="w-4 h-4 text-[#D9A52B] shrink-0" />
                <span>Profissionalismo</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-300">
                <Clock className="w-4 h-4 text-[#D9A52B] shrink-0" />
                <span>Pontualidade</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-300 col-span-2 sm:col-span-1">
                <Star className="w-4 h-4 text-[#D9A52B] shrink-0 fill-[#D9A52B]" />
                <span>Tradição & Excelência</span>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: Quick Booking Showcase Card ================= */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded-2xl bg-[#171A18]/95 backdrop-blur-xl border border-[#D9A52B]/35 p-5 sm:p-6 shadow-[0_25px_60px_rgba(0,0,0,0.95)] overflow-hidden">
              
              {/* Top ambient gold accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D9A52B] via-[#F2C45A] to-[#D9A52B]" />

              {/* Card Header with Scissors and Brand Badge */}
              <div className="flex items-center justify-between pb-3.5 border-b border-[#D9A52B]/20 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#D9A52B]/20 border border-[#D9A52B]/40 flex items-center justify-center text-[#F2C45A]">
                    <Scissors className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-[#D9A52B] uppercase block font-bold">
                      RESERVA RÁPIDA ONLINE
                    </span>
                    <h3 className="font-['Cinzel',serif] text-xs sm:text-sm font-bold text-[#FFFFFF] uppercase">
                      Escolha o Procedimento
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D9A52B]/15 border border-[#D9A52B]/30 text-[9px] font-mono text-[#F2C45A] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F2C45A] animate-ping" />
                  <span>ZANGO 2</span>
                </div>
              </div>

              {/* Quick Services Pill Buttons */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {QUICK_SERVICES.map((srv) => {
                  const isSelected = selectedServiceId === srv.id;
                  return (
                    <button
                      key={srv.id}
                      onClick={() => setSelectedServiceId(srv.id)}
                      className={`p-2.5 rounded-xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between border ${
                        isSelected
                          ? 'bg-gradient-to-r from-[#D9A52B] to-[#F2C45A] text-[#050806] border-[#F2C45A] shadow-[0_0_15px_rgba(217,165,43,0.4)] scale-[1.01]'
                          : 'bg-[#050806]/60 text-zinc-300 hover:text-white hover:bg-white/[0.04] border-[#D9A52B]/20'
                      }`}
                    >
                      <span className={`text-[9px] font-bold block truncate uppercase ${isSelected ? 'text-[#050806]' : 'text-zinc-300'}`}>
                        {srv.name.split(' ')[0]}
                      </span>
                      <span className={`font-['Cinzel',serif] text-[11px] font-black mt-1 block ${isSelected ? 'text-[#050806]' : 'text-[#F2C45A]'}`}>
                        {srv.price}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Service Detail Box */}
              <div className="rounded-xl bg-[#050806]/70 border border-[#D9A52B]/25 p-3.5 sm:p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-['Cinzel',serif] text-xs sm:text-sm font-bold text-[#FFFFFF] uppercase">
                    {selectedService.name}
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-['Cinzel',serif] text-base font-extrabold text-[#F2C45A]">
                      {selectedService.price}
                    </span>
                    <span className="text-[10px] text-zinc-500 line-through">
                      {selectedService.originalPrice}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 text-[10px] text-zinc-400 font-mono mb-2.5 pb-2 border-b border-white/[0.06]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#D9A52B]" />
                    {selectedService.duration}
                  </span>
                  <span>•</span>
                  <span className="text-[#F2C45A] font-bold">{selectedService.tag}</span>
                </div>

                {/* Benefits List */}
                <div className="space-y-1.5">
                  {selectedService.benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-zinc-300">
                      <Check className="w-3 h-3 text-[#D9A52B] shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main CTA inside card */}
              <button
                id="hero-card-agendar-cta"
                onClick={() => onOpenBooking(selectedServiceId)}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#D9A52B] via-[#F2C45A] to-[#D9A52B] hover:brightness-110 text-[#050806] font-black text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(217,165,43,0.4)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>AGENDAR AGORA</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Card Footer reassurance */}
              <div className="mt-3 text-center">
                <span className="text-[10px] text-zinc-400 font-mono flex items-center justify-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#D9A52B]" />
                  Confirmação instantânea direto no WhatsApp
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Socials, Phone, TikTok & Google Maps */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6 pt-5 border-t border-[#D9A52B]/20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            {/* Instagram */}
            <a
              href={BARBERSHOP_CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F2C45A] transition-colors flex items-center gap-1.5 text-zinc-300"
            >
              <Instagram className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span className="font-medium tracking-wider">{BARBERSHOP_CONTACT.instagram}</span>
            </a>
            <span className="text-zinc-700 hidden sm:inline">|</span>

            {/* TikTok */}
            <a
              href={BARBERSHOP_CONTACT.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F2C45A] transition-colors flex items-center gap-1.5 text-zinc-300"
            >
              <TikTokIcon className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>TikTok Clássico</span>
            </a>
            <span className="text-zinc-700 hidden sm:inline">|</span>

            {/* Phone */}
            <a
              href={BARBERSHOP_CONTACT.telUrl}
              className="hover:text-[#F2C45A] transition-colors flex items-center gap-1.5 text-zinc-300"
            >
              <Phone className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span className="font-mono">{BARBERSHOP_CONTACT.phoneDisplay}</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={BARBERSHOP_CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] hover:bg-[#D9A52B]/20 border border-[#D9A52B]/30 text-zinc-200 hover:text-[#F2C45A] text-[11px] font-mono transition-colors"
            >
              <Navigation className="w-3 h-3 text-[#D9A52B]" />
              <span>{BARBERSHOP_CONTACT.mapsLabel}</span>
            </a>
            <div className="flex items-center gap-2 text-zinc-300 font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-[#D9A52B] animate-pulse" />
              <span>Zango 2 • Seg — Sáb</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
