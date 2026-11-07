import React from 'react';
import { Star, ArrowRight, UserCheck } from 'lucide-react';
import { BARBERS } from '../data/barbershopData';

interface BarbersSectionProps {
  onSelectBarber: (barberId: string) => void;
}

export const BarbersSection: React.FC<BarbersSectionProps> = ({ onSelectBarber }) => {
  return (
    <section id="equipe" className="relative py-14 sm:py-20 bg-[#050806] border-t border-[#D9A52B]/20">
      {/* Background ambient radiance */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-[#D9A52B]/[0.05] blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#D9A52B] shadow-[0_0_8px_#D9A52B]" />
              <span className="text-[11px] font-mono tracking-widest text-[#F2C45A] uppercase font-bold">
                MESTRES DA ARTE & TRADIÇÃO
              </span>
            </div>
            <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FFFFFF] tracking-tight uppercase">
              A NOSSA EQUIPA
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-normal leading-relaxed">
            Profissionais dedicados à excelência, com técnica apurada em cortes clássicos, barboterapia e visagismo masculino em Zango 2.
          </p>
        </div>

        {/* 3 Compact Barber Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {BARBERS.map((barber) => (
            <div
              key={barber.id}
              className="group relative rounded-2xl bg-[#171A18] border border-[#D9A52B]/30 hover:border-[#D9A52B] p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.9)] overflow-hidden"
            >
              {/* Top ambient hover line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F2C45A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Barber Portrait Frame */}
                <div className="relative h-48 sm:h-52 w-full rounded-xl overflow-hidden mb-4 bg-black/60 border border-[#D9A52B]/20">
                  <img
                    src={barber.image}
                    alt={barber.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171A18] via-transparent to-black/25" />

                  {/* Rating Badge */}
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-[#050806]/85 backdrop-blur-sm border border-[#D9A52B]/40 text-[10px] font-mono text-[#F2C45A] flex items-center gap-1 font-bold">
                    <Star className="w-3 h-3 fill-[#D9A52B] text-[#D9A52B]" />
                    <span>{barber.rating}</span>
                  </div>

                  {/* Experience Years */}
                  <div className="absolute bottom-2.5 left-2.5 text-[10px] font-mono text-zinc-300 bg-[#050806]/80 backdrop-blur-sm px-2.5 py-0.5 rounded-md border border-[#D9A52B]/20 font-semibold">
                    {barber.experienceYears} anos de exp.
                  </div>
                </div>

                {/* Info */}
                <div className="mb-3">
                  <h3 className="font-['Cinzel',serif] text-base font-bold text-[#FFFFFF] uppercase">
                    {barber.name}
                  </h3>
                  <span className="text-[11px] text-[#F2C45A] font-mono block font-semibold mb-1.5">
                    {barber.role}
                  </span>
                  <p className="text-xs text-zinc-300 line-clamp-2 leading-relaxed">
                    {barber.bio}
                  </p>
                </div>
              </div>

              {/* Footer with Reviews & Compact Booking Button */}
              <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between gap-3">
                <span className="text-[11px] font-mono text-zinc-400">
                  {barber.reviewsCount}+ clientes
                </span>

                <button
                  id={`agendar-barbeiro-${barber.id}`}
                  onClick={() => onSelectBarber(barber.id)}
                  className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#D9A52B] to-[#F2C45A] hover:brightness-110 text-[#050806] font-extrabold text-[11px] tracking-wider uppercase transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-[0_0_12px_rgba(217,165,43,0.3)]"
                >
                  <span>AGENDAR</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
