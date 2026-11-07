import React, { useState, useEffect } from 'react';
import { Calendar, MessageSquare, Menu, X, ArrowUpRight, Phone, Instagram } from 'lucide-react';
import { BARBERSHOP_CONTACT } from '../data/barbershopData';

interface NavbarProps {
  onOpenBooking: (serviceId?: string, barberId?: string) => void;
}

// Custom TikTok icon for precision branding
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

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['inicio', 'sobre', 'servicos', 'equipe', 'localizacao'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'inicio', label: 'INÍCIO', href: '#inicio' },
    { id: 'sobre', label: 'SOBRE', href: '#sobre' },
    { id: 'servicos', label: 'SERVIÇOS', href: '#servicos' },
    { id: 'equipe', label: 'BARBEIROS', href: '#equipe' },
    { id: 'localizacao', label: 'LOCALIZAÇÃO', href: '#localizacao' },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pt-3 sm:pt-5 pointer-events-none transition-all duration-300">
      <div
        className={`pointer-events-auto flex items-center justify-between gap-2 sm:gap-6 px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-300 w-full max-w-7xl ${
          scrolled
            ? 'bg-[#050806]/95 backdrop-blur-xl border border-[#D9A52B]/40 shadow-[0_12px_40px_rgba(0,0,0,0.85)] ring-1 ring-[#D9A52B]/20'
            : 'bg-[#050806]/80 backdrop-blur-md border border-[#D9A52B]/25'
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('#inicio');
          }}
          className="flex items-center gap-2.5 sm:gap-3 text-white group"
        >
          {/* Logo container preserving exact proportions */}
          <div className="relative h-10 w-16 sm:h-11 sm:w-20 flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
            <img
              src={BARBERSHOP_CONTACT.logoUrl}
              alt="Logótipo Oficial Clássico Barber Shop"
              className="h-full w-full object-contain filter drop-shadow-[0_0_8px_rgba(217,165,43,0.5)]"
              loading="eager"
              decoding="async"
              width={80}
              height={44}
            />
          </div>

          <div className="flex flex-col">
            <span className="font-['Cinzel',serif] text-xs sm:text-sm font-bold tracking-wider text-[#FFFFFF] leading-tight group-hover:text-[#F2C45A] transition-colors">
              CLÁSSICO BARBER SHOP
            </span>
            <span className="text-[8px] sm:text-[9px] tracking-[0.2em] text-[#D9A52B] font-semibold uppercase">
              ZANGO 2 • ANGOLA
            </span>
          </div>
        </a>

        {/* Center Desktop Floating Capsule Menu */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#171A18]/80 p-1 rounded-full border border-[#D9A52B]/25">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 uppercase whitespace-nowrap ${
                  isActive
                    ? 'bg-gradient-to-r from-[#D9A52B] to-[#F2C45A] text-[#050806] font-bold shadow-[0_0_15px_rgba(217,165,43,0.4)]'
                    : 'text-zinc-300 hover:text-[#FFFFFF] hover:bg-white/[0.06]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* WhatsApp Direct */}
          <a
            href={BARBERSHOP_CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={`Atendimento via WhatsApp: ${BARBERSHOP_CONTACT.phoneDisplay}`}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/[0.05] hover:bg-[#D9A52B]/20 border border-[#D9A52B]/30 hover:border-[#D9A52B] flex items-center justify-center text-[#D9A52B] hover:text-[#FFFFFF] transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
          </a>

          {/* Instagram */}
          <a
            href={BARBERSHOP_CONTACT.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={`Instagram ${BARBERSHOP_CONTACT.instagram}`}
            className="hidden sm:flex w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/[0.05] hover:bg-[#D9A52B]/20 border border-[#D9A52B]/30 hover:border-[#D9A52B] items-center justify-center text-[#D9A52B] hover:text-[#FFFFFF] transition-colors"
          >
            <Instagram className="w-4 h-4" />
          </a>

          {/* TikTok */}
          <a
            href={BARBERSHOP_CONTACT.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="TikTok Clássico Barber Shop"
            className="hidden md:flex w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/[0.05] hover:bg-[#D9A52B]/20 border border-[#D9A52B]/30 hover:border-[#D9A52B] items-center justify-center text-[#D9A52B] hover:text-[#FFFFFF] transition-colors"
          >
            <TikTokIcon className="w-3.5 h-3.5" />
          </a>

          {/* Direct Phone Call */}
          <a
            href={BARBERSHOP_CONTACT.telUrl}
            title={`Ligar: ${BARBERSHOP_CONTACT.phoneDisplay}`}
            className="hidden xs:flex sm:flex w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/[0.05] hover:bg-[#D9A52B]/20 border border-[#D9A52B]/30 hover:border-[#D9A52B] items-center justify-center text-[#D9A52B] hover:text-[#FFFFFF] transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
          </a>

          {/* Main CTA: Agendar Agora */}
          <button
            id="nav-agendar-cta"
            onClick={() => onOpenBooking()}
            className="group flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[#D9A52B] via-[#F2C45A] to-[#D9A52B] hover:brightness-110 text-[#050806] font-extrabold text-[11px] sm:text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(217,165,43,0.35)] cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#050806]" />
            <span className="hidden xs:inline">AGENDAR AGORA</span>
            <span className="xs:hidden">AGENDAR</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-8 h-8 rounded-full bg-white/[0.05] border border-[#D9A52B]/30 flex items-center justify-center text-[#D9A52B] hover:text-[#FFFFFF] transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto fixed inset-x-3 top-18 sm:top-20 bg-[#050806]/98 backdrop-blur-2xl border border-[#D9A52B]/40 rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.95)] flex flex-col gap-4 lg:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          
          {/* Mobile Drawer Header with Emblem */}
          <div className="flex items-center gap-3 pb-3 border-b border-[#D9A52B]/20">
            <img
              src={BARBERSHOP_CONTACT.logoUrl}
              alt="Clássico Barber Shop"
              className="h-9 w-14 object-contain filter drop-shadow-[0_0_6px_rgba(217,165,43,0.5)]"
            />
            <div>
              <span className="font-['Cinzel',serif] text-xs font-bold text-white block">
                CLÁSSICO BARBER SHOP
              </span>
              <span className="text-[9px] text-[#D9A52B] font-mono">
                ZANGO 2 • ANGOLA
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold tracking-wider uppercase flex items-center justify-between ${
                  activeSection === link.id
                    ? 'bg-gradient-to-r from-[#D9A52B] to-[#F2C45A] text-[#050806] font-bold shadow-[0_0_15px_rgba(217,165,43,0.3)]'
                    : 'text-zinc-300 hover:bg-white/[0.05]'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-xs opacity-60">→</span>
              </a>
            ))}
          </div>

          {/* Mobile Contact Quick Actions */}
          <div className="py-2.5 px-3 rounded-xl bg-[#171A18] border border-[#D9A52B]/25 flex flex-col gap-2 text-xs">
            <a
              href={BARBERSHOP_CONTACT.telUrl}
              className="flex items-center gap-2 text-zinc-300 hover:text-[#F2C45A] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span className="font-mono">{BARBERSHOP_CONTACT.phoneDisplay}</span>
            </a>
            <a
              href={BARBERSHOP_CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-300 hover:text-[#F2C45A] transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>{BARBERSHOP_CONTACT.instagram}</span>
            </a>
            <a
              href={BARBERSHOP_CONTACT.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-300 hover:text-[#F2C45A] transition-colors"
            >
              <TikTokIcon className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>TikTok Clássico Barber Shop</span>
            </a>
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <span className="text-[11px] text-zinc-400">Seg - Sáb: 08h às 20h30</span>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-[#D9A52B] to-[#F2C45A] text-[#050806] font-bold text-xs tracking-wider uppercase shadow-[0_0_15px_rgba(217,165,43,0.3)]"
            >
              AGENDAR AGORA
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
