import React from 'react';
import { Scissors, Shield, Award, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { BARBERSHOP_CONTACT } from '../data/barbershopData';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="sobre" className="relative py-14 sm:py-20 bg-[#050806] border-t border-[#D9A52B]/20">
      {/* Decorative Gold ambient elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#D9A52B]/[0.06] blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Intro Text & Brand Philosophy (7 cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171A18] border border-[#D9A52B]/35 text-xs font-mono text-[#F2C45A] mb-4 shadow-sm">
              <Award className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span className="uppercase tracking-wider">PROFISSIONALISMO • EXCELÊNCIA • TRADIÇÃO</span>
            </div>

            <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FFFFFF] uppercase tracking-tight mb-4">
              REFERÊNCIA EM ZANGO 2.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2C45A] via-[#D9A52B] to-[#F2C45A]">
                MAIS QUE UM CORTE, UMA NOVA IMAGEM.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed mb-6">
              A <strong className="text-white font-semibold">Clássico Barber Shop</strong> nasceu para elevar o padrão da barbearia em Zango 2, Angola. Criamos um espaço onde a tradição da navalha clássica se une ao visagismo contemporâneo para valorizar a confiança e a presença de cada homem. Aqui, cada detalhe é executado com rigor técnico, atendimento exclusivo e produtos de prestígio.
            </p>

            {/* 3 Pillars of Clássico Barber Shop */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2 border-t border-[#D9A52B]/20">
              <div className="p-3.5 rounded-xl bg-[#171A18] border border-[#D9A52B]/25 hover:border-[#D9A52B]/50 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#D9A52B]/20 text-[#F2C45A] flex items-center justify-center mb-2.5">
                  <Scissors className="w-4 h-4" />
                </div>
                <h3 className="font-['Cinzel',serif] text-xs font-bold text-[#FFFFFF] uppercase mb-1">
                  Profissionalismo
                </h3>
                <p className="text-[11px] text-zinc-400 leading-normal">
                  Barbeiros dedicados e técnicas refinadas de corte e barba com acabamento milimétrico.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#171A18] border border-[#D9A52B]/25 hover:border-[#D9A52B]/50 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#D9A52B]/20 text-[#F2C45A] flex items-center justify-center mb-2.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="font-['Cinzel',serif] text-xs font-bold text-[#FFFFFF] uppercase mb-1">
                  Excelência
                </h3>
                <p className="text-[11px] text-zinc-400 leading-normal">
                  Toalhas quentes, esterilização hospitalar e os melhores cosméticos para o seu cabelo.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#171A18] border border-[#D9A52B]/25 hover:border-[#D9A52B]/50 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#D9A52B]/20 text-[#F2C45A] flex items-center justify-center mb-2.5">
                  <Shield className="w-4 h-4" />
                </div>
                <h3 className="font-['Cinzel',serif] text-xs font-bold text-[#FFFFFF] uppercase mb-1">
                  Tradição
                </h3>
                <p className="text-[11px] text-zinc-400 leading-normal">
                  O respeito ao ritual genuíno da barbearia clássica em um ambiente acolhedor e distinto.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Visual Showcase with Official Emblem & Brand Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#171A18] border border-[#D9A52B]/35 p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden">
              <div className="flex items-center justify-between pb-3.5 border-b border-[#D9A52B]/20 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D9A52B] animate-pulse" />
                  <span className="text-xs font-mono text-zinc-200 uppercase font-semibold">
                    CLÁSSICO BARBER SHOP
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#050806] px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#D9A52B] to-[#F2C45A] font-extrabold uppercase">
                  ZANGO 2 • ANGOLA
                </span>
              </div>

              {/* Central Emblem Showcase */}
              <div className="relative rounded-xl overflow-hidden border border-[#D9A52B]/30 mb-4 bg-gradient-to-b from-[#050806] to-[#171A18] p-5 flex flex-col items-center justify-center text-center group">
                <div className="relative h-36 w-full max-w-[260px] flex items-center justify-center mb-2">
                  <img
                    src={BARBERSHOP_CONTACT.logoUrl}
                    alt="Emblema Oficial Clássico Barber Shop"
                    className="h-full w-full object-contain filter drop-shadow-[0_0_15px_rgba(217,165,43,0.5)] group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="w-full pt-3 border-t border-[#D9A52B]/20 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D9A52B]" />
                    <span className="font-mono text-[11px]">Marca Registada</span>
                  </div>
                  <span className="text-[#F2C45A] font-mono text-[11px] font-bold">
                    Segunda a Sábado
                  </span>
                </div>
              </div>

              {/* Direct Booking CTA */}
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#D9A52B] via-[#F2C45A] to-[#D9A52B] hover:brightness-110 text-[#050806] font-black text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(217,165,43,0.35)] cursor-pointer"
              >
                <span>AGENDAR AGORA</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
