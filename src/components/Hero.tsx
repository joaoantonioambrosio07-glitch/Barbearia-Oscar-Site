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
  Calendar,
  UserCheck,
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
    name: 'CORTE MASCULINO',
    price: 'R$ 85',
    originalPrice: 'R$ 110',
    duration: '45 min',
    tag: 'Mais Procurado',
    benefits: ['Consultoria de Visagismo', 'Lavagem com massagem capilar', 'Finalização com pomada matte'],
  },
  {
    id: 'barba',
    name: 'BARBA TERAPIA',
    price: 'R$ 65',
    originalPrice: 'R$ 85',
    duration: '35 min',
    tag: 'Tradição & Cuidado',
    benefits: ['Toalha quente com óleos essenciais', 'Alinhamento preciso na navalha', 'Bálsamo hidratante pós-barba'],
  },
  {
    id: 'corte-barba',
    name: 'COMBO COMPLETO VIP',
    price: 'R$ 135',
    originalPrice: 'R$ 170',
    duration: '75 min',
    tag: 'Experiência Completa',
    benefits: ['Corte + Barboterapia completa', 'Design de sobrancelha cortesia', 'Bebida premium do bar'],
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onViewServices }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('corte-masculino');

  const selectedService = QUICK_SERVICES.find((s) => s.id === selectedServiceId) || QUICK_SERVICES[0];

  return (
    <section
      id="inicio"
      className="relative min-h-[85vh] lg:min-h-[90vh] pt-20 pb-8 sm:pt-24 sm:pb-10 lg:pt-28 lg:pb-14 flex flex-col justify-between overflow-hidden"
    >
      {/* Background: Authentic Barbearia Oscar Photograph - Adapted to Mobile & Desktop */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <picture className="w-full h-full block">
          {/* Mobile vertical 9:16 portrait view with authentic attached barbershop scene */}
          <source
            media="(max-width: 1024px) and (orientation: portrait), (max-width: 768px)"
            srcSet="/src/assets/images/barbearia_oscar_mobile_f2_1792011865990.jpg"
          />
          {/* Desktop widescreen 16:9 view */}
          <img
            src="/src/assets/images/barbearia_oscar_hero_1791927923080.jpg"
            alt="Barbearia Oscar Interior"
            className="w-full h-full object-cover object-[center_30%] sm:object-center transition-transform duration-700 ease-out"
            referrerPolicy="no-referrer"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width={1376}
            height={768}
          />
        </picture>

        {/* Cinematic Vignette & Dark Overlays adaptada ao mobile */}
        {/* On mobile: balanced vertical gradient preserves the vibrant neon sign, barber and client while keeping text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080A0D]/55 via-[#080A0D]/40 to-[#080A0D]/90 lg:bg-gradient-to-r lg:from-[#080A0D]/95 lg:via-[#080A0D]/85 lg:to-[#080A0D]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080A0D] via-transparent to-[#080A0D]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_40%,#080A0D_95%)] lg:bg-[radial-gradient(ellipse_at_center,transparent_20%,#080A0D_95%)]" />

        {/* Atmospheric Neon Blue Glows */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#087FE8]/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#082D8C]/25 blur-3xl pointer-events-none" />

        {/* Subtle technical grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#087FE8_1px,transparent_1px),linear-gradient(to_bottom,#087FE8_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ================= LEFT COLUMN: Brand Statement & Primary CTA ================= */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Top Badge with Official Logo */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#080A0D]/80 backdrop-blur-md border border-[#0757A5]/35 text-xs text-zinc-300 mb-6 w-fit shadow-md">
              <div className="w-5 h-5 rounded-full overflow-hidden border border-[#087FE8] shrink-0">
                <img
                  src="/src/assets/images/barbearia_oscar_logo_1791927922669.jpg"
                  alt="Barbearia Oscar"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  decoding="async"
                  width={20}
                  height={20}
                />
              </div>
              <span className="font-mono text-[11px] font-semibold text-[#F7F7F5] tracking-wider uppercase">
                BARBEARIA OSCAR • ITAIM BIBI
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#087FE8] animate-pulse" />
            </div>

            {/* Headline Principal */}
            <h1 className="font-['Syne',sans-serif] text-4xl sm:text-6xl lg:text-[4.2rem] font-extrabold text-[#F7F7F5] leading-[1.04] tracking-tight mb-5 uppercase">
              SEU ESTILO.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087FE8] to-blue-200">
                NOSSO PADRÃO.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-xl mb-8">
              Cortes precisos, barboterapia tradicional com toalha quente e uma experiência única criada para o homem contemporâneo que valoriza cada detalhe.
            </p>

            {/* Main Action Buttons - Refined & Compact */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-5 sm:mb-6">
              <button
                id="hero-agendar-cta"
                onClick={() => onOpenBooking(selectedServiceId)}
                className="group px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#087FE8] hover:bg-[#0757A5] text-[#F7F7F5] font-bold text-[11px] sm:text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_0_16px_rgba(8,127,232,0.4)] hover:shadow-[0_0_24px_rgba(22,141,224,0.55)] flex items-center gap-2 cursor-pointer border border-[#087FE8]/50 hover:scale-[1.01]"
              >
                <span>AGENDAR AGORA</span>
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
              </button>

              <button
                id="hero-servicos-cta"
                onClick={onViewServices}
                className="px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-white/[0.05] hover:bg-[#0757A5]/25 border border-[#0757A5]/40 hover:border-[#087FE8] text-zinc-200 hover:text-[#F7F7F5] font-semibold text-[11px] sm:text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer backdrop-blur-sm"
              >
                VER SERVIÇOS
              </button>
            </div>

            {/* Reassurance Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-5 border-t border-[#0757A5]/20 max-w-lg">
              <div className="flex items-center gap-1.5 text-xs text-zinc-300">
                <Shield className="w-3.5 h-3.5 text-[#087FE8] shrink-0" />
                <span>Sem Filas</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-zinc-300">
                <Clock className="w-3.5 h-3.5 text-[#087FE8] shrink-0" />
                <span>Horário Marcado</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-zinc-300 col-span-2 sm:col-span-1">
                <Star className="w-3.5 h-3.5 text-[#087FE8] shrink-0 fill-[#087FE8]" />
                <span>Nota 4.9 (600+ rev)</span>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: Quick Booking & CTA Section ================= */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded-xl sm:rounded-2xl bg-[#080A0D]/90 backdrop-blur-xl border border-[#0757A5]/35 p-4 sm:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.85)] overflow-hidden">
              
              {/* Subtle top ambient line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#082D8C] via-[#087FE8] to-[#0757A5]" />

              {/* Card Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#0757A5]/20 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-[#082D8C]/30 border border-[#087FE8]/40 flex items-center justify-center text-[#087FE8]">
                    <Scissors className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-[#087FE8] uppercase block font-bold">
                      RESERVA RÁPIDA
                    </span>
                    <h3 className="font-['Syne',sans-serif] text-xs sm:text-sm font-bold text-[#F7F7F5] uppercase">
                      Escolha seu Procedimento
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#087FE8]/15 border border-[#087FE8]/30 text-[9px] font-mono text-[#087FE8]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#087FE8] animate-ping" />
                  <span>HOJE DISPONÍVEL</span>
                </div>
              </div>

              {/* Quick Services Pill Buttons */}
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-4">
                {QUICK_SERVICES.map((srv) => {
                  const isSelected = selectedServiceId === srv.id;
                  return (
                    <button
                      key={srv.id}
                      onClick={() => setSelectedServiceId(srv.id)}
                      className={`p-2 rounded-lg text-left transition-all duration-200 cursor-pointer flex flex-col justify-between border ${
                        isSelected
                          ? 'bg-[#087FE8] text-white border-[#087FE8] shadow-[0_0_12px_rgba(8,127,232,0.4)] scale-[1.01]'
                          : 'bg-black/40 text-zinc-300 hover:text-white hover:bg-white/[0.04] border-[#0757A5]/25'
                      }`}
                    >
                      <span className={`text-[9px] font-bold block truncate uppercase ${isSelected ? 'text-white' : 'text-zinc-200'}`}>
                        {srv.name.split(' ')[0]}
                      </span>
                      <span className={`font-['Syne',sans-serif] text-[11px] font-extrabold mt-0.5 block ${isSelected ? 'text-white' : 'text-[#087FE8]'}`}>
                        {srv.price}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Service Detail Box */}
              <div className="rounded-lg bg-black/50 border border-[#0757A5]/25 p-3 sm:p-3.5 mb-4">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-['Syne',sans-serif] text-xs sm:text-sm font-bold text-[#F7F7F5] uppercase">
                    {selectedService.name}
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-['Syne',sans-serif] text-base font-bold text-[#F7F7F5]">
                      {selectedService.price}
                    </span>
                    <span className="text-[10px] text-zinc-500 line-through">
                      {selectedService.originalPrice}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 text-[10px] text-zinc-400 font-mono mb-2.5 pb-2 border-b border-white/[0.06]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#087FE8]" />
                    {selectedService.duration}
                  </span>
                  <span>•</span>
                  <span className="text-[#087FE8] font-bold">{selectedService.tag}</span>
                </div>

                {/* Benefits List */}
                <div className="space-y-1">
                  {selectedService.benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-zinc-300">
                      <Check className="w-3 h-3 text-[#087FE8] shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Agendar Agora inside the card - Compact */}
              <button
                id="hero-card-agendar-cta"
                onClick={() => onOpenBooking(selectedServiceId)}
                className="w-full py-2 px-3.5 rounded-lg bg-gradient-to-r from-[#082D8C] to-[#087FE8] hover:from-[#0757A5] hover:to-[#082D8C] text-[#F7F7F5] font-bold text-[11px] tracking-wider uppercase transition-all duration-300 shadow-[0_0_15px_rgba(8,127,232,0.35)] hover:shadow-[0_0_20px_rgba(22,141,224,0.5)] flex items-center justify-center gap-2 cursor-pointer border border-[#087FE8]/40"
              >
                <span>AGENDAR HORÁRIO AGORA</span>
                <ArrowRight className="w-3 h-3" />
              </button>

              {/* Card Footer reassurance */}
              <div className="mt-3.5 text-center">
                <span className="text-[10px] text-zinc-400 font-mono flex items-center justify-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#087FE8]" />
                  Confirmação instantânea direto no WhatsApp
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Socials, Phone, Email & Google Maps */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6 pt-6 border-t border-[#0757A5]/20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <a
              href={BARBERSHOP_CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#087FE8] transition-colors flex items-center gap-1.5 text-zinc-300"
            >
              <Instagram className="w-3.5 h-3.5 text-[#087FE8]" />
              <span className="font-medium tracking-wider">{BARBERSHOP_CONTACT.instagram}</span>
            </a>
            <span className="text-zinc-700 hidden sm:inline">|</span>
            <a
              href={BARBERSHOP_CONTACT.telUrl}
              className="hover:text-[#087FE8] transition-colors flex items-center gap-1.5 text-zinc-300"
            >
              <Phone className="w-3.5 h-3.5 text-[#087FE8]" />
              <span className="font-mono">{BARBERSHOP_CONTACT.phoneDisplay}</span>
            </a>
            <span className="text-zinc-700 hidden sm:inline">|</span>
            <a
              href={BARBERSHOP_CONTACT.emailUrl}
              className="hover:text-[#087FE8] transition-colors flex items-center gap-1.5 text-zinc-300"
            >
              <Mail className="w-3.5 h-3.5 text-[#087FE8]" />
              <span>{BARBERSHOP_CONTACT.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={BARBERSHOP_CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] hover:bg-[#087FE8]/20 border border-[#0757A5]/30 text-zinc-200 hover:text-[#087FE8] text-[11px] font-mono transition-colors"
            >
              <Navigation className="w-3 h-3 text-[#087FE8]" />
              <span>{BARBERSHOP_CONTACT.mapsLabel}</span>
            </a>
            <div className="flex items-center gap-2 text-zinc-300 font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-[#087FE8] animate-pulse" />
              <span>Seg — Sáb: 09h às 20h30</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
