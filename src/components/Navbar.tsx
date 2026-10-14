import React, { useState, useEffect } from 'react';
import { Calendar, MessageSquare, Menu, X, ArrowUpRight, Phone, Instagram, Mail } from 'lucide-react';
import { BARBERSHOP_CONTACT } from '../data/barbershopData';

interface NavbarProps {
  onOpenBooking: (serviceId?: string, barberId?: string) => void;
}

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
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none transition-all duration-300">
      <div
        className={`pointer-events-auto flex items-center justify-between gap-2 sm:gap-6 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#080A0D]/90 backdrop-blur-xl border border-[#0757A5]/30 shadow-[0_16px_40px_rgba(8,45,140,0.25)]'
            : 'bg-[#080A0D]/70 backdrop-blur-md border border-[#0757A5]/20'
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('#inicio');
          }}
          className="flex items-center gap-3 text-white group"
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-[#087FE8]/60 shadow-[0_0_15px_rgba(8,127,232,0.5)] transition-transform group-hover:scale-105 shrink-0 bg-[#082D8C]">
            <img
              src="/src/assets/images/barbearia_oscar_logo_1791927922669.jpg"
              alt="Logo Barbearia Oscar"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="eager"
              decoding="async"
              width={40}
              height={40}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-['Syne',sans-serif] text-sm font-bold tracking-widest uppercase text-[#F7F7F5] leading-none">
              BARBEARIA OSCAR
            </span>
            <span className="text-[9px] tracking-[0.25em] text-[#087FE8] font-semibold uppercase mt-0.5">
              TRADIÇÃO & ESTILO
            </span>
          </div>
        </a>

        {/* Center Desktop Floating Capsule Menu */}
        <nav className="hidden md:flex items-center gap-1 bg-black/50 p-1 rounded-full border border-[#0757A5]/20">
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
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 uppercase whitespace-nowrap ${
                  isActive
                    ? 'bg-[#087FE8] text-[#F7F7F5] shadow-[0_0_15px_rgba(8,127,232,0.35)]'
                    : 'text-zinc-400 hover:text-[#F7F7F5] hover:bg-white/[0.06]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <a
            href={BARBERSHOP_CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={`Atendimento via WhatsApp: ${BARBERSHOP_CONTACT.phoneDisplay}`}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/[0.05] hover:bg-[#087FE8]/20 border border-white/[0.08] hover:border-[#087FE8]/40 flex items-center justify-center text-zinc-300 hover:text-[#087FE8] transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
          </a>

          <a
            href={BARBERSHOP_CONTACT.telUrl}
            title={`Ligar: ${BARBERSHOP_CONTACT.phoneDisplay}`}
            className="hidden sm:flex w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/[0.05] hover:bg-[#087FE8]/20 border border-white/[0.08] hover:border-[#087FE8]/40 items-center justify-center text-zinc-300 hover:text-[#087FE8] transition-colors"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            id="nav-agendar-cta"
            onClick={() => onOpenBooking()}
            className="group flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#087FE8] hover:bg-[#0757A5] text-[#F7F7F5] font-semibold text-xs tracking-wider uppercase transition-all duration-200 shadow-[0_0_20px_rgba(22,141,224,0.3)] hover:shadow-[0_0_25px_rgba(22,141,224,0.5)] cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#F7F7F5]" />
            <span className="hidden xs:inline">AGENDAR</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto fixed inset-x-4 top-20 bg-[#080A0D]/95 backdrop-blur-2xl border border-[#0757A5]/30 rounded-2xl p-5 shadow-2xl flex flex-col gap-4 md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
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
                    ? 'bg-[#087FE8] text-[#F7F7F5] shadow-[0_0_15px_rgba(22,141,224,0.3)]'
                    : 'text-zinc-300 hover:bg-white/[0.05]'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-xs opacity-60">→</span>
              </a>
            ))}
          </div>

          {/* Mobile Contact Quick Actions */}
          <div className="py-2.5 px-3 rounded-xl bg-black/40 border border-[#0757A5]/25 flex flex-col gap-2 text-xs">
            <a
              href={BARBERSHOP_CONTACT.telUrl}
              className="flex items-center gap-2 text-zinc-300 hover:text-[#087FE8] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#087FE8]" />
              <span className="font-mono">{BARBERSHOP_CONTACT.phoneDisplay}</span>
            </a>
            <a
              href={BARBERSHOP_CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-300 hover:text-[#087FE8] transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-[#087FE8]" />
              <span>{BARBERSHOP_CONTACT.instagram}</span>
            </a>
            <a
              href={BARBERSHOP_CONTACT.emailUrl}
              className="flex items-center gap-2 text-zinc-300 hover:text-[#087FE8] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#087FE8]" />
              <span className="truncate">{BARBERSHOP_CONTACT.email}</span>
            </a>
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <span className="text-[11px] text-zinc-400">Seg - Sáb: 09h às 20h30</span>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="px-4 py-2 rounded-full bg-[#087FE8] hover:bg-[#0757A5] text-[#F7F7F5] font-semibold text-xs tracking-wider uppercase"
            >
              AGENDAR AGORA
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
