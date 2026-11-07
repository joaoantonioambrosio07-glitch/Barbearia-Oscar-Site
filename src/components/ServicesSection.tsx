import React from 'react';
import { ArrowRight, Scissors, Sparkles, Crown, Clock } from 'lucide-react';
import { BARBERSHOP_CONTACT } from '../data/barbershopData';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

const PRIORITIZED_SERVICES = [
  {
    id: 'corte-masculino',
    name: 'CORTE CLÁSSICO',
    subtitle: 'Visagismo & Acabamento Perfeito',
    description: 'Análise morfológica do rosto, corte com tesoura e máquina, lavagem relaxante e finalização com pomada clássica.',
    price: '3.500 Kz',
    duration: '45 min',
    tag: 'Mais Solicitado',
    image: '/src/assets/images/service_corte_oscar_1791930113710.jpg',
    icon: Scissors,
  },
  {
    id: 'barba',
    name: 'BARBOTERAPIA',
    subtitle: 'Toalha Quente & Navalha Tradicional',
    description: 'Abertura de poros com toalha a vapor quente, óleos aromáticos, desenho escultural na navalha e bálsamo pós-barba.',
    price: '2.500 Kz',
    duration: '35 min',
    tag: 'Tradição & Cuidado',
    image: '/src/assets/images/service_barba_oscar_1791930131600.jpg',
    icon: Sparkles,
  },
  {
    id: 'corte-barba',
    name: 'COMBO COMPLETO VIP',
    subtitle: 'Corte Clássico + Barba + Sobrancelha',
    description: 'A renovação total da imagem masculina: corte completo, barboterapia, alinhamento de sobrancelhas e atendimento VIP.',
    price: '5.500 Kz',
    duration: '75 min',
    tag: 'Experiência Completa',
    image: '/src/assets/images/service_combo_oscar_1791930149630.jpg',
    icon: Crown,
  },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="servicos" className="relative py-14 sm:py-20 bg-[#050806] border-t border-[#D9A52B]/20">
      {/* Background radial gold glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-[#D9A52B]/[0.05] blur-3xl" />
        <div className="absolute bottom-6 left-10 w-80 h-80 rounded-full bg-[#F2C45A]/[0.04] blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#D9A52B] shadow-[0_0_8px_#D9A52B]" />
              <span className="text-[11px] font-mono tracking-widest text-[#F2C45A] uppercase font-bold">
                PROCEDIMENTOS DE EXCELÊNCIA
              </span>
            </div>
            <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FFFFFF] tracking-tight uppercase">
              SERVIÇOS EM DESTAQUE
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-normal leading-relaxed">
            Selecione o procedimento desejado para abrir o agendamento instantâneo com a equipa da Clássico Barber Shop em Zango 2.
          </p>
        </div>

        {/* 3 Compact Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {PRIORITIZED_SERVICES.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-[#171A18] border border-[#D9A52B]/30 hover:border-[#D9A52B] p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.9)] overflow-hidden"
              >
                {/* Top ambient hover line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F2C45A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Photo frame */}
                  <div className="relative h-40 sm:h-44 w-full rounded-xl overflow-hidden mb-4 bg-black/60 border border-[#D9A52B]/20">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171A18] via-transparent to-black/30" />

                    {/* Tag badge */}
                    <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-[#050806]/85 backdrop-blur-sm border border-[#D9A52B]/40 text-[10px] font-mono text-[#F2C45A] font-bold">
                      {service.tag}
                    </div>

                    {/* Price in image corner */}
                    <div className="absolute bottom-2.5 left-2.5">
                      <span className="font-['Cinzel',serif] text-lg font-black text-[#FFFFFF] drop-shadow-md">
                        {service.price}
                      </span>
                    </div>
                  </div>

                  {/* Service info */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="w-4 h-4 text-[#D9A52B]" />
                      <h3 className="font-['Cinzel',serif] text-sm sm:text-base font-bold text-[#FFFFFF] uppercase">
                        {service.name}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-[#D9A52B] block mb-2 font-semibold">
                      {service.subtitle}
                    </span>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Footer with Duration & Action CTA */}
                <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                    <Clock className="w-3.5 h-3.5 text-[#D9A52B]" />
                    <span>{service.duration}</span>
                  </div>

                  <button
                    onClick={() => onSelectService(service.id)}
                    className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#D9A52B] to-[#F2C45A] hover:brightness-110 text-[#050806] font-extrabold text-[11px] tracking-wider uppercase transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-[0_0_12px_rgba(217,165,43,0.3)]"
                  >
                    <span>AGENDAR</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
