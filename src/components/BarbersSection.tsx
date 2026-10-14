import React from 'react';
import { Star, ArrowRight, UserCheck, Scissors } from 'lucide-react';
import { BARBERS } from '../data/barbershopData';

interface BarbersSectionProps {
  onSelectBarber: (barberId: string) => void;
}

export const BarbersSection: React.FC<BarbersSectionProps> = ({ onSelectBarber }) => {
  return (
    <section id="equipe" className="relative py-12 sm:py-16 bg-[#080A0D]/85 backdrop-blur-sm border-t border-[#0757A5]/25">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-72 h-72 rounded-full bg-[#082D8C]/[0.07] blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
          <div>
            <div className="inline-flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[#087FE8] shadow-[0_0_8px_#087FE8]" />
              <span className="text-[11px] font-mono tracking-widest text-[#087FE8] uppercase font-semibold">
                MESTRES DA TESOURA & NAVALHA
              </span>
            </div>
            <h2 className="font-['Syne',sans-serif] text-2xl sm:text-3xl font-extrabold text-[#F7F7F5] tracking-tight uppercase">
              NOSSOS BARBEIROS
            </h2>
          </div>
          <p className="text-xs text-zinc-400 max-w-md font-normal leading-relaxed">
            Profissionais especializados com formação internacional e rigor em visagismo masculino.
          </p>
        </div>

        {/* 3 Compact Barber Cards in Reduced Proportion */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {BARBERS.map((barber) => (
            <div
              key={barber.id}
              className="group relative rounded-2xl bg-[#080A0D]/90 backdrop-blur-md border border-[#0757A5]/30 hover:border-[#087FE8]/60 p-3.5 sm:p-4 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(8,45,140,0.3)] overflow-hidden"
            >
              {/* Top ambient hover line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#087FE8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Reduced Proportion Barber Portrait Frame */}
                <div className="relative h-44 sm:h-48 w-full rounded-xl overflow-hidden mb-3 bg-black/60 border border-[#0757A5]/25">
                  <img
                    src={barber.image}
                    alt={barber.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080A0D]/95 via-transparent to-black/20" />

                  {/* Rating Badge */}
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-[#087FE8] flex items-center gap-1 font-bold">
                    <Star className="w-3 h-3 fill-[#087FE8] text-[#087FE8]" />
                    <span>{barber.rating}</span>
                  </div>

                  {/* Experience Years */}
                  <div className="absolute bottom-2 left-2 text-[10px] font-mono text-zinc-300 bg-black/75 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10">
                    {barber.experienceYears} anos exp.
                  </div>
                </div>

                {/* Info */}
                <div className="mb-2">
                  <h3 className="font-['Syne',sans-serif] text-sm sm:text-base font-bold text-[#F7F7F5] uppercase">
                    {barber.name}
                  </h3>
                  <span className="text-[10px] text-[#087FE8] font-mono block font-semibold mb-1">
                    {barber.role}
                  </span>
                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                    {barber.specialty}
                  </p>
                </div>
              </div>

              {/* Footer with Reviews & Compact Booking Button */}
              <div className="pt-2.5 border-t border-white/[0.06] flex items-center justify-between gap-2">
                <span className="text-[10px] font-mono text-zinc-500">
                  {barber.reviewsCount}+ avaliações
                </span>

                {/* Compact Appointment Button */}
                <button
                  id={`agendar-barbeiro-${barber.id}`}
                  onClick={() => onSelectBarber(barber.id)}
                  className="px-3 py-1.5 rounded-lg bg-[#087FE8] hover:bg-[#0757A5] text-[#F7F7F5] font-bold text-[11px] tracking-wider uppercase transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-sm hover:shadow-[0_0_12px_rgba(22,141,224,0.4)] border border-[#087FE8]/40"
                >
                  <span>AGENDAR</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
