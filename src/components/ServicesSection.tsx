import React from 'react';
import { ArrowRight, Scissors, Sparkles, Crown, Clock } from 'lucide-react';
import { SERVICES } from '../data/barbershopData';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

// 3 prioritized services with authentic photographic assets
const PRIORITIZED_SERVICES = [
  {
    id: 'corte-masculino',
    name: 'CORTE MASCULINO',
    subtitle: 'Visagismo & Acabamento Navalhado',
    description: 'Análise geométrica facial, lavagem relaxante e finalização personalizada.',
    price: 'R$ 85',
    duration: '45 min',
    tag: 'Mais Pedido',
    image: '/src/assets/images/service_corte_oscar_1791930113710.jpg',
    icon: Scissors,
  },
  {
    id: 'barba',
    name: 'BARBOTERAPIA',
    subtitle: 'Toalha Quente & Alinhamento',
    description: 'Hidratação com óleos essenciais, desenho preciso na navalha e bálsamo refrescante.',
    price: 'R$ 65',
    duration: '35 min',
    tag: 'Tradição',
    image: '/src/assets/images/service_barba_oscar_1791930131600.jpg',
    icon: Sparkles,
  },
  {
    id: 'corte-barba',
    name: 'COMBO COMPLETO VIP',
    subtitle: 'Corte + Barba + Bar Exclusivo',
    description: 'A experiência completa de transformação com sobrancelha cortesia e bebida no lounge.',
    price: 'R$ 135',
    duration: '75 min',
    tag: 'Experiência VIP',
    image: '/src/assets/images/service_combo_oscar_1791930149630.jpg',
    icon: Crown,
  },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="servicos" className="relative py-12 sm:py-16 bg-[#080A0D]/75 backdrop-blur-sm border-t border-[#0757A5]/25">
      {/* Background glow accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-[#082D8C]/[0.08] blur-3xl" />
        <div className="absolute bottom-6 left-10 w-72 h-72 rounded-full bg-[#087FE8]/[0.04] blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Compact Spacing */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[#087FE8] shadow-[0_0_8px_#087FE8]" />
              <span className="text-[11px] font-mono tracking-widest text-[#087FE8] uppercase font-semibold">
                PROCEDIMENTOS PRINCIPAIS
              </span>
            </div>
            <h2 className="font-['Syne',sans-serif] text-2xl sm:text-3xl font-extrabold text-[#F7F7F5] tracking-tight uppercase">
              CORTE, BARBA & COMBO VIP
            </h2>
          </div>
          <p className="text-xs text-zinc-400 max-w-md font-normal leading-relaxed">
            Selecione o procedimento para abrir o agendamento instantâneo com os mestres da Barbearia Oscar.
          </p>
        </div>

        {/* 3 Compact Reduced-Proportion Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {PRIORITIZED_SERVICES.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-[#080A0D]/90 backdrop-blur-md border border-[#0757A5]/30 hover:border-[#087FE8]/60 p-3.5 sm:p-4 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(8,45,140,0.3)] overflow-hidden"
              >
                {/* Top indicator hover line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#087FE8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Reduced Proportion Thumbnail Frame */}
                  <div className="relative h-36 sm:h-40 w-full rounded-xl overflow-hidden mb-3 bg-black/60 border border-[#0757A5]/25">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080A0D]/90 via-transparent to-black/20" />

                    {/* Tag badge */}
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-[#080A0D]/85 backdrop-blur-sm border border-[#0757A5]/40 text-[9px] font-mono font-bold text-blue-200 tracking-wider uppercase">
                      {service.tag}
                    </span>

                    {/* Number */}
                    <span className="absolute top-2 right-2 font-mono text-[11px] font-bold text-white/80 bg-black/70 px-1.5 py-0.5 rounded border border-white/10">
                      0{index + 1}
                    </span>

                    {/* Quick Duration Overlay on thumbnail bottom */}
                    <div className="absolute bottom-2 left-2 flex items-center gap-1 text-[10px] font-mono text-zinc-300 bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10">
                      <Clock className="w-3 h-3 text-[#087FE8]" />
                      <span>{service.duration}</span>
                    </div>
                  </div>

                  {/* Header: Title and Subtitle */}
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div>
                      <h3 className="font-['Syne',sans-serif] text-sm sm:text-base font-bold text-[#F7F7F5] tracking-wide uppercase">
                        {service.name}
                      </h3>
                      <span className="text-[10px] text-[#087FE8] font-mono block font-medium">
                        {service.subtitle}
                      </span>
                    </div>
                    <div className="w-6 h-6 rounded-lg bg-white/[0.04] border border-[#0757A5]/30 flex items-center justify-center shrink-0 text-[#087FE8]">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Concise Description */}
                  <p className="text-xs text-zinc-400 font-normal leading-relaxed line-clamp-2 mb-3">
                    {service.description}
                  </p>
                </div>

                {/* Footer Strip with Price & Compact Appointment Button */}
                <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[9px] font-mono text-zinc-400 uppercase block leading-none mb-0.5">
                      VALOR
                    </span>
                    <span className="font-['Syne',sans-serif] text-base sm:text-lg font-extrabold text-[#F7F7F5]">
                      {service.price}
                    </span>
                  </div>

                  {/* Compact Appointment Button */}
                  <button
                    id={`agendar-${service.id}`}
                    onClick={() => onSelectService(service.id)}
                    className="px-3 py-1.5 rounded-lg bg-[#087FE8] hover:bg-[#0757A5] text-[#F7F7F5] font-bold text-[11px] tracking-wider uppercase transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-sm hover:shadow-[0_0_12px_rgba(22,141,224,0.4)] border border-[#087FE8]/40"
                  >
                    <span>AGENDAR</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact Strip */}
        <div className="mt-6 py-2.5 px-4 rounded-xl bg-[#080A0D]/90 border border-[#0757A5]/25 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-400">
          <span className="text-[11px]">
            ✓ Todos os serviços contam com consulta visagista, toalhas quentes e café/cerveja cortesia.
          </span>
          <span className="text-[10px] font-mono text-[#087FE8] font-bold uppercase tracking-wider shrink-0">
            • HORÁRIOS DISPONÍVEIS HOJE
          </span>
        </div>
      </div>
    </section>
  );
};
