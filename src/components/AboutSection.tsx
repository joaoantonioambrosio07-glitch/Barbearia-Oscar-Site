import React from 'react';
import { Scissors, Shield, Coffee, Award, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="sobre" className="relative py-14 sm:py-18 bg-[#080A0D]/80 backdrop-blur-sm border-t border-[#0757A5]/25">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Intro Text & Brand Philosophy (7 cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#082D8C]/20 border border-[#0757A5]/35 text-xs font-mono text-[#087FE8] mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>TRADIÇÃO & CONTEMPORANEIDADE</span>
            </div>

            <h2 className="font-['Syne',sans-serif] text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F7F7F5] uppercase tracking-tight mb-4">
              MAIS QUE UM CORTE.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087FE8] to-blue-200">
                UMA EXPERIÊNCIA DE PRECISÃO.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed mb-6">
              Fundada para resgatar a elegância da barbearia clássica com o rigor técnico contemporâneo, a <strong className="text-white">Barbearia Oscar</strong> combina visagismo personalizado, navalha afiada e produtos de primeira linha em um ambiente exclusivo e acolhedor.
            </p>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-[#0757A5]/20">
              <div className="p-3.5 rounded-xl bg-black/40 border border-[#0757A5]/25">
                <div className="w-8 h-8 rounded-lg bg-[#082D8C]/30 text-[#087FE8] flex items-center justify-center mb-2.5">
                  <Scissors className="w-4 h-4" />
                </div>
                <h3 className="font-['Syne',sans-serif] text-xs font-bold text-[#F7F7F5] uppercase mb-1">
                  Visagismo Real
                </h3>
                <p className="text-[11px] text-zinc-400 leading-normal">
                  Corte e barba alinhados à geometria e traços do seu rosto.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-[#0757A5]/25">
                <div className="w-8 h-8 rounded-lg bg-[#082D8C]/30 text-[#087FE8] flex items-center justify-center mb-2.5">
                  <Shield className="w-4 h-4" />
                </div>
                <h3 className="font-['Syne',sans-serif] text-xs font-bold text-[#F7F7F5] uppercase mb-1">
                  Sem Filas
                </h3>
                <p className="text-[11px] text-zinc-400 leading-normal">
                  Atendimento rigorosamente no horário reservado online.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-[#0757A5]/25">
                <div className="w-8 h-8 rounded-lg bg-[#082D8C]/30 text-[#087FE8] flex items-center justify-center mb-2.5">
                  <Coffee className="w-4 h-4" />
                </div>
                <h3 className="font-['Syne',sans-serif] text-xs font-bold text-[#F7F7F5] uppercase mb-1">
                  Lounge VIP
                </h3>
                <p className="text-[11px] text-zinc-400 leading-normal">
                  Espresso especial e cerveja artesanal inclusos na recepção.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Compact Visual Showcase Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-black/60 border border-[#0757A5]/35 p-5 sm:p-6 shadow-[0_15px_40px_rgba(0,0,0,0.8)] overflow-hidden">
              <div className="flex items-center justify-between pb-3.5 border-b border-[#0757A5]/25 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#087FE8] animate-pulse" />
                  <span className="text-xs font-mono text-zinc-300 uppercase font-semibold">
                    ESTÚDIO OSCAR
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#087FE8] px-2 py-0.5 rounded bg-[#087FE8]/15 border border-[#087FE8]/30 font-bold">
                  ABERTO HOJE
                </span>
              </div>

              {/* Compact Thumbnail Image Preview */}
              <div className="relative h-44 rounded-xl overflow-hidden border border-[#0757A5]/30 mb-4 group">
                <img
                  src="/src/assets/images/barbearia_oscar_hero_1791927923080.jpg"
                  alt="Interior Barbearia Oscar"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080A0D] via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                  <span className="font-mono text-[11px] font-semibold bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10">
                    Estúdio & Lounge Oscar
                  </span>
                  <span className="text-[#087FE8] font-mono text-[11px] font-bold">
                    Seg — Sáb
                  </span>
                </div>
              </div>

              {/* Direct Booking CTA - Compact */}
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 px-3.5 rounded-lg bg-[#087FE8] hover:bg-[#0757A5] text-[#F7F7F5] font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all shadow-[0_0_15px_rgba(8,127,232,0.3)] cursor-pointer border border-[#087FE8]/40"
              >
                <span>AGENDAR HORÁRIO</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
