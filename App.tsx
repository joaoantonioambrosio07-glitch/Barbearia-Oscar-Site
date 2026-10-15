import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { BarbersSection } from './components/BarbersSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { BookingQuizModal } from './components/BookingQuizModal';
import { AppointmentBooking } from './types';

export default function App() {
  const [isBookingQuizOpen, setIsBookingQuizOpen] = useState<boolean>(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | undefined>(undefined);
  const [preselectedBarberId, setPreselectedBarberId] = useState<string | undefined>(undefined);
  const [confirmedBooking, setConfirmedBooking] = useState<AppointmentBooking | null>(null);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBooking = (serviceId?: string, barberId?: string) => {
    setPreselectedServiceId(serviceId);
    setPreselectedBarberId(barberId);
    setIsBookingQuizOpen(true);
  };

  const handleSelectServiceFromCard = (serviceId: string) => {
    setPreselectedServiceId(serviceId);
    setPreselectedBarberId(undefined);
    setIsBookingQuizOpen(true);
  };

  const handleSelectBarberFromCard = (barberId: string) => {
    setPreselectedBarberId(barberId);
    setIsBookingQuizOpen(true);
  };

  const handleBookingConfirmed = (booking: AppointmentBooking) => {
    setConfirmedBooking(booking);
  };

  return (
    <div className="relative min-h-screen bg-[#080A0D] text-[#F7F7F5] flex flex-col selection:bg-[#087FE8] selection:text-white overflow-x-hidden">
      {/* Floating Capsule Header */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Essential Main Content Sections - Compact, Practical, Conversion-Focused */}
      <main className="relative z-10 flex-grow">
        {/* 1. Cinematic Hero with prominent "Agendar agora" CTA */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onViewServices={() => scrollToSection('servicos')}
        />

        {/* 2. Brief Introduction to Barbearia Oscar */}
        <AboutSection onOpenBooking={() => handleOpenBooking()} />

        {/* 3. 3 Prioritized Services (Corte, Barba, Combo) in Reduced Proportions */}
        <ServicesSection onSelectService={handleSelectServiceFromCard} />

        {/* 4. 3 Barbers with High-Res Photos in Reduced Proportions */}
        <BarbersSection onSelectBarber={handleSelectBarberFromCard} />

        {/* 5. Contact Information, Location & Opening Hours */}
        <LocationSection />
      </main>

      {/* 6. Compact Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Step-by-Step Booking Quiz Modal / Overlay */}
      <BookingQuizModal
        isOpen={isBookingQuizOpen}
        onClose={() => setIsBookingQuizOpen(false)}
        preselectedServiceId={preselectedServiceId}
        preselectedBarberId={preselectedBarberId}
        onBookingConfirmed={handleBookingConfirmed}
      />
    </div>
  );
}
