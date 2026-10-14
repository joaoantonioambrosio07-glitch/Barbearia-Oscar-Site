import React from 'react';
import {
  MapPin,
  Clock,
  Navigation,
  Phone,
  ArrowUpRight,
  Mail,
  Instagram,
  MessageSquare
} from 'lucide-react';
import { BARBERSHOP_CONTACT } from '../data/barbershopData';

export const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="relative py-14 sm:py-18 bg-[#080A0D]/70 backdrop-blur-sm border-t border-[#0757A5]/25">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#082D8C]/20 border border-[#0757A5]/30 text-xs font-mono text-[#087FE8] mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>CONTATO & LOCALIZAÇÃO</span>
          </div>
          <h2 className="font-['Syne',sans-serif] text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F7F7F5] tracking-tight uppercase mb-3">
            ESTAMOS PERTO DE VOCÊ
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
            Agende seu horário, tire dúvidas ou venha nos visitar. Estamos prontos para oferecer a melhor experiência em barbearia.
          </p>
        </div>

        {/* Location & Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left: Contact & Info Cards (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Contato Direto Card (Telefone, E-mail, Instagram) */}
            <div className="p-5 rounded-2xl bg-[#080A0D]/85 backdrop-blur-md border border-[#0757A5]/25 shadow-lg">
              <span className="text-[10px] font-mono tracking-widest text-[#087FE8] uppercase block mb-3">
                CANAIS DE CONTATO OFICIAL
              </span>

              <div className="space-y-3.5">
                {/* Telefone */}
                <div className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#082D8C]/30 border border-[#0757A5]/40 flex items-center justify-center text-[#087FE8] shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-zinc-400 block font-mono">TELEFONE</span>
                      <span className="text-xs sm:text-sm font-bold text-[#F7F7F5] font-mono">
                        {BARBERSHOP_CONTACT.phoneDisplay}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <a
                      href={BARBERSHOP_CONTACT.telUrl}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.06] hover:bg-[#0757A5]/30 text-zinc-200 hover:text-white text-[11px] font-semibold transition-colors flex items-center gap-1"
                      title="Ligar agora"
                    >
                      <Phone className="w-3 h-3 text-[#087FE8]" />
                      <span>Ligar</span>
                    </a>
                    <a
                      href={BARBERSHOP_CONTACT.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded-lg bg-[#087FE8]/20 hover:bg-[#087FE8] text-[#087FE8] hover:text-white text-[11px] font-semibold transition-colors flex items-center gap-1 border border-[#087FE8]/30"
                      title="Enviar mensagem no WhatsApp"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* E-mail */}
                <div className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-[#082D8C]/30 border border-[#0757A5]/40 flex items-center justify-center text-[#087FE8] shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] text-zinc-400 block font-mono">E-MAIL</span>
                      <span className="text-xs sm:text-sm font-semibold text-[#F7F7F5] truncate block">
                        {BARBERSHOP_CONTACT.email}
                      </span>
                    </div>
                  </div>
                  <a
                    href={BARBERSHOP_CONTACT.emailUrl}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.06] hover:bg-[#0757A5]/30 text-zinc-200 hover:text-white text-[11px] font-semibold transition-colors shrink-0 flex items-center gap-1"
                  >
                    <span>Enviar</span>
                    <ArrowUpRight className="w-3 h-3 text-[#087FE8]" />
                  </a>
                </div>

                {/* Instagram */}
                <div className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#082D8C]/30 border border-[#0757A5]/40 flex items-center justify-center text-[#087FE8] shrink-0">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-zinc-400 block font-mono">INSTAGRAM</span>
                      <span className="text-xs sm:text-sm font-semibold text-[#F7F7F5]">
                        {BARBERSHOP_CONTACT.instagram}
                      </span>
                    </div>
                  </div>
                  <a
                    href={BARBERSHOP_CONTACT.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-lg bg-[#082D8C]/30 hover:bg-[#087FE8] text-zinc-200 hover:text-white text-[11px] font-semibold transition-colors shrink-0 flex items-center gap-1 border border-[#0757A5]/30"
                  >
                    <span>Seguir</span>
                    <ArrowUpRight className="w-3 h-3 text-[#087FE8]" />
                  </a>
                </div>

              </div>
            </div>

            {/* Horário de Funcionamento Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#080A0D]/85 border border-[#0757A5]/25 shadow-lg">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#082D8C]/20 border border-[#0757A5]/30 flex items-center justify-center text-[#087FE8] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="w-full">
                  <span className="text-[10px] font-mono tracking-widest text-[#087FE8] uppercase block mb-1">
                    HORÁRIO DE ATENDIMENTO
                  </span>
                  
                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-center justify-between pb-1.5 border-b border-white/[0.04]">
                      <span className="text-zinc-400">Segunda a Sexta:</span>
                      <span className="font-mono font-bold text-white">{BARBERSHOP_CONTACT.hoursWeekday}</span>
                    </div>
                    <div className="flex items-center justify-between pb-1.5 border-b border-white/[0.04]">
                      <span className="text-zinc-400">Sábado:</span>
                      <span className="font-mono font-bold text-white">{BARBERSHOP_CONTACT.hoursSaturday}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-400">Domingo:</span>
                      <span className="font-mono font-bold text-zinc-500">{BARBERSHOP_CONTACT.hoursSunday}</span>
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
              className="py-3 px-5 rounded-xl bg-[#087FE8] hover:bg-[#0757A5] text-[#F7F7F5] font-extrabold text-xs tracking-wider uppercase transition-all duration-200 shadow-[0_0_20px_rgba(22,141,224,0.3)] hover:shadow-[0_0_25px_rgba(22,141,224,0.5)] flex items-center justify-center gap-2 cursor-pointer group"
            >
              <Navigation className="w-4 h-4" />
              <span>{BARBERSHOP_CONTACT.mapsLabel}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

          </div>

          {/* Right: Stylized Dark Mode Map Display (7 columns) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#080A0D]/85 backdrop-blur-md border border-[#0757A5]/30 p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden min-h-[380px] shadow-2xl">
            
            {/* Architectural Stylized Dark Vector Map Canvas */}
            <div className="absolute inset-0 opacity-40">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(7,87,165,0.15)" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#map-grid)" />
                {/* Stylized Avenue Lines */}
                <path d="M-50 180 L800 240" stroke="#082D8C" strokeWidth="14" opacity="0.3" />
                <path d="M-50 180 L800 240" stroke="#087FE8" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.6" />
                <path d="M220 -50 L310 500" stroke="#0757A5" strokeWidth="12" opacity="0.25" />
                <path d="M500 -50 L420 500" stroke="#1c2126" strokeWidth="10" />
                <path d="M50 320 L750 340" stroke="#1c2126" strokeWidth="8" />
              </svg>
            </div>

            {/* Top Map Bar */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#0757A5]/30 text-[10px] font-mono text-zinc-300 flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[#087FE8]" />
                <span>{BARBERSHOP_CONTACT.city}</span>
              </div>
              <div className="px-3 py-1 rounded-full bg-[#087FE8]/15 border border-[#087FE8]/40 text-[10px] font-mono text-[#087FE8] font-bold">
                ABERTO HOJE
              </div>
            </div>

            {/* Central Animated Neon Map Pin */}
            <div className="relative z-10 my-auto flex flex-col items-center justify-center py-6">
              <div className="relative">
                {/* Radar pulse rings */}
                <div className="absolute -inset-4 rounded-full bg-[#087FE8]/25 animate-ping" />
                <div className="absolute -inset-8 rounded-full bg-[#082D8C]/30 animate-pulse" />
                
                {/* Pin Head with logo */}
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#087FE8] shadow-[0_0_25px_rgba(22,141,224,0.6)] bg-[#082D8C]">
                  <img
                    src="/src/assets/images/barbearia_oscar_logo_1791927922669.jpg"
                    alt="Barbearia Oscar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Pin Tag */}
              <div className="mt-3.5 px-4 py-2 rounded-xl bg-[#080A0D]/95 backdrop-blur-md border border-[#0757A5]/40 text-center shadow-xl">
                <span className="text-sm font-bold text-[#F7F7F5] block uppercase font-['Syne',sans-serif]">
                  {BARBERSHOP_CONTACT.name}
                </span>
                <span className="text-[11px] text-zinc-300 block font-mono">
                  {BARBERSHOP_CONTACT.phoneDisplay}
                </span>
                <span className="text-[10px] text-[#087FE8]">
                  {BARBERSHOP_CONTACT.instagram}
                </span>
              </div>
            </div>

            {/* Bottom Route Fast Links */}
            <div className="relative z-10 pt-3 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="text-zinc-400 text-[11px]">Acesso rápido:</span>
              <div className="flex items-center gap-2">
                <a
                  href={BARBERSHOP_CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#087FE8]/20 hover:bg-[#087FE8] text-white text-xs font-mono transition-colors flex items-center gap-1 border border-[#087FE8]/30"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Ver localização no Google Maps</span>
                </a>
                <a
                  href={BARBERSHOP_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded-lg bg-white/[0.06] hover:bg-[#0757A5]/25 hover:text-[#087FE8] text-zinc-200 text-xs font-mono transition-colors flex items-center gap-1"
                >
                  <MessageSquare className="w-3 h-3 text-[#087FE8]" />
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
