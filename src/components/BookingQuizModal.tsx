import React, { useState, useEffect } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Scissors,
  Sparkles,
  Crown,
  CheckCircle2,
  Calendar as CalendarIcon,
  Clock,
  User,
  Phone,
  ShieldCheck,
  Check,
  MessageSquare,
  AlertCircle,
  Navigation
} from 'lucide-react';
import { SERVICES, BARBERS, BARBERSHOP_CONTACT } from '../data/barbershopData';
import { AppointmentBooking } from '../types';

interface BookingQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
  preselectedBarberId?: string;
  onBookingConfirmed: (booking: AppointmentBooking) => void;
}

export const BookingQuizModal: React.FC<BookingQuizModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
  preselectedBarberId,
  onBookingConfirmed,
}) => {
  // Step tracker: 1 to 6 (step 7 is final confirmation)
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Selections
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    preselectedServiceId || SERVICES[0].id
  );
  const [selectedBarberId, setSelectedBarberId] = useState<string>(
    preselectedBarberId || BARBERS[0].id
  );

  // Generate dynamic dates (next 7 days)
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

    for (let i = 0; i < 7; i++) {
      const d = new Date();
      d.setDate(today.getDate() + i);
      const isSunday = d.getDay() === 0;
      const dayName = i === 0 ? 'Hoje' : i === 1 ? 'Amanhã' : daysOfWeek[d.getDay()];
      dates.push({
        id: d.toISOString().split('T')[0],
        dayName,
        dayNumber: d.getDate(),
        month: months[d.getMonth()],
        fullFormatted: `${dayName}, ${d.getDate()} de ${months[d.getMonth()]}`,
        isAvailable: !isSunday,
      });
    }
    return dates;
  };

  const availableDates = generateDates();
  const defaultAvailableDate = availableDates.find((d) => d.isAvailable) || availableDates[0];
  const [selectedDate, setSelectedDate] = useState<string>(defaultAvailableDate.id);

  const timeSlots = [
    { time: '08:30', available: true, label: 'Manhã' },
    { time: '09:30', available: true, label: 'Manhã' },
    { time: '10:30', available: false, label: 'Manhã' },
    { time: '11:30', available: true, label: 'Manhã' },
    { time: '14:00', available: true, label: 'Tarde' },
    { time: '15:15', available: true, label: 'Tarde' },
    { time: '16:30', available: true, label: 'Tarde' },
    { time: '17:45', available: false, label: 'Fim de tarde' },
    { time: '18:30', available: true, label: 'Noite' },
    { time: '19:30', available: true, label: 'Noite' },
  ];

  const [selectedTime, setSelectedTime] = useState<string>('14:00');

  // Client Details
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientNotes, setClientNotes] = useState<string>('');
  const [validationError, setValidationError] = useState<string>('');

  // Confirmation result
  const [confirmedBookingData, setConfirmedBookingData] = useState<{
    code: string;
    booking: AppointmentBooking;
  } | null>(null);

  useEffect(() => {
    if (preselectedServiceId) {
      setSelectedServiceId(preselectedServiceId);
    }
  }, [preselectedServiceId]);

  useEffect(() => {
    if (preselectedBarberId) {
      setSelectedBarberId(preselectedBarberId);
    }
  }, [preselectedBarberId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];
  const currentBarber = BARBERS.find((b) => b.id === selectedBarberId) || BARBERS[0];
  const currentDateObj = availableDates.find((d) => d.id === selectedDate) || availableDates[0];

  const stepsInfo = [
    { title: 'Selecione o Procedimento', subtitle: 'Serviços Clássicos' },
    { title: 'Escolha o Seu Barbeiro', subtitle: 'Profissionais de Excelência' },
    { title: 'Escolha a Data', subtitle: 'Disponibilidade Sem Filas' },
    { title: 'Escolha o Horário', subtitle: 'Pontualidade Garantida' },
    { title: 'Os Seus Dados', subtitle: 'Contacto & Confirmação' },
    { title: 'Revisão da Marcação', subtitle: 'Confirmação Final' },
  ];

  const handleNextStep = () => {
    setValidationError('');

    if (currentStep === 1) {
      if (!selectedServiceId) {
        setValidationError('Por favor, selecione um procedimento.');
        return;
      }
    } else if (currentStep === 2) {
      if (!selectedBarberId) {
        setValidationError('Por favor, selecione um barbeiro.');
        return;
      }
    } else if (currentStep === 3) {
      if (!selectedDate) {
        setValidationError('Por favor, selecione uma data válida.');
        return;
      }
    } else if (currentStep === 4) {
      if (!selectedTime) {
        setValidationError('Por favor, selecione um horário disponível.');
        return;
      }
    } else if (currentStep === 5) {
      if (!clientName.trim() || clientName.trim().length < 3) {
        setValidationError('Por favor, informe o seu nome completo (mínimo 3 caracteres).');
        return;
      }
      const digits = clientPhone.replace(/\D/g, '');
      if (digits.length < 9) {
        setValidationError('Por favor, digite um contacto de WhatsApp válido (ex: 929 741 161 ou com +244).');
        return;
      }
    } else if (currentStep === 6) {
      handleFinalConfirm();
      return;
    }

    setCurrentStep((prev) => Math.min(prev + 1, 6));
  };

  const handlePrevStep = () => {
    setValidationError('');
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleFinalConfirm = () => {
    const booking: AppointmentBooking = {
      serviceId: selectedServiceId,
      barberId: selectedBarberId,
      date: currentDateObj.fullFormatted,
      time: selectedTime,
      clientName: clientName.trim(),
      clientPhone: clientPhone.trim(),
      notes: clientNotes.trim() || undefined,
    };

    const reservationCode = `CB-${Math.floor(1000 + Math.random() * 9000)}`;

    setConfirmedBookingData({
      code: reservationCode,
      booking,
    });

    onBookingConfirmed(booking);
  };

  const formatPhoneInput = (val: string) => {
    const clean = val.replace(/[^\d+]/g, '');
    setClientPhone(clean);
  };

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Scissors':
        return <Scissors className="w-4 h-4 text-[#D9A52B]" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-[#D9A52B]" />;
      case 'Crown':
        return <Crown className="w-4 h-4 text-[#D9A52B]" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-[#D9A52B]" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-[#050806] border border-[#D9A52B]/40 rounded-xl sm:rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col max-h-[94vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gold Accent Line */}
        <div className="h-1 w-full bg-gradient-to-r from-[#D9A52B] via-[#F2C45A] to-[#D9A52B] shrink-0" />

        {/* Modal Header */}
        <div className="px-3.5 sm:px-6 py-2.5 sm:py-3.5 border-b border-[#D9A52B]/20 flex items-center justify-between shrink-0 bg-[#171A18]/80">
          <div className="flex items-center gap-2.5">
            <div className="h-7 w-11 flex items-center justify-center shrink-0">
              <img
                src={BARBERSHOP_CONTACT.logoUrl}
                alt="Clássico Barber Shop"
                className="h-full w-full object-contain filter drop-shadow-[0_0_4px_rgba(217,165,43,0.6)]"
              />
            </div>
            <div>
              <span className="font-['Cinzel',serif] text-xs sm:text-sm font-bold text-white block">
                {BARBERSHOP_CONTACT.brandName}
              </span>
              <span className="text-[9px] text-[#D9A52B] font-mono tracking-wider">
                MARCAÇÃO ONLINE • ZANGO 2
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/[0.05] hover:bg-[#D9A52B]/20 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Step Progress Dots */}
        {!confirmedBookingData && (
          <div className="px-4 sm:px-6 py-2 bg-[#171A18]/40 border-b border-[#D9A52B]/15 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-1 sm:gap-1.5 flex-1">
              {[1, 2, 3, 4, 5, 6].map((step) => {
                const isCompleted = currentStep > step;
                const isCurrent = currentStep === step;
                return (
                  <div
                    key={step}
                    className={`h-1.5 rounded-full transition-all duration-300 flex-1 ${
                      isCompleted
                        ? 'bg-[#F2C45A]'
                        : isCurrent
                        ? 'bg-gradient-to-r from-[#D9A52B] to-[#F2C45A] shadow-[0_0_8px_rgba(217,165,43,0.6)]'
                        : 'bg-white/10'
                    }`}
                  />
                );
              })}
            </div>
            <span className="text-[10px] font-mono text-[#F2C45A] font-bold ml-3 shrink-0">
              {currentStep}/6
            </span>
          </div>
        )}

        {/* Modal Scrollable Body */}
        <div className="p-3.5 sm:p-6 overflow-y-auto flex-1">
          {confirmedBookingData ? (
            /* ================= STEP 7: CONFIRMED SCREEN ================= */
            <div className="text-center py-2 animate-in zoom-in-95 duration-200">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#D9A52B] to-[#F2C45A] text-[#050806] flex items-center justify-center mx-auto mb-3 shadow-[0_0_20px_rgba(217,165,43,0.5)]">
                <Check className="w-6 h-6 stroke-[3]" />
              </div>

              <span className="text-[10px] font-mono uppercase tracking-widest text-[#F2C45A] block mb-1 font-bold">
                MARCAÇÃO RESERVADA COM SUCESSO
              </span>
              <h2 className="font-['Cinzel',serif] text-lg sm:text-xl font-bold text-white mb-1 uppercase">
                Aguardamos por Si na Clássico Barber
              </h2>
              <p className="text-xs text-zinc-300 max-w-sm mx-auto mb-4">
                «{BARBERSHOP_CONTACT.slogan}»
              </p>

              {/* Booking Summary Ticket */}
              <div className="rounded-xl bg-[#171A18] border border-[#D9A52B]/35 p-4 text-left mb-4 shadow-xl">
                <div className="flex items-center justify-between pb-2.5 border-b border-[#D9A52B]/20 mb-3">
                  <div>
                    <span className="text-[9px] font-mono text-zinc-400 uppercase block">Código da Marcação</span>
                    <span className="font-mono text-sm font-black text-[#F2C45A]">
                      {confirmedBookingData.code}
                    </span>
                  </div>
                  <div className="px-2.5 py-0.5 rounded-full bg-[#D9A52B]/15 border border-[#D9A52B]/40 text-[9px] font-mono text-[#F2C45A] font-bold">
                    RESERVADO
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                  <div>
                    <span className="text-[9px] font-mono text-zinc-400 uppercase block">Cliente</span>
                    <span className="font-bold text-white block truncate">
                      {confirmedBookingData.booking.clientName}
                    </span>
                    <span className="text-[10px] text-zinc-300 font-mono">
                      {confirmedBookingData.booking.clientPhone}
                    </span>
                  </div>

                  <div>
                    <span className="text-[9px] font-mono text-zinc-400 uppercase block">Barbeiro</span>
                    <span className="font-bold text-white block truncate">
                      {currentBarber.name}
                    </span>
                    <span className="text-[10px] text-[#F2C45A] font-mono">
                      {currentBarber.role}
                    </span>
                  </div>

                  <div>
                    <span className="text-[9px] font-mono text-zinc-400 uppercase block">Data e Horário</span>
                    <span className="font-bold text-[#F2C45A] text-xs font-mono block">
                      {confirmedBookingData.booking.date}
                    </span>
                    <span className="font-bold text-white font-mono text-xs block">
                      às {confirmedBookingData.booking.time}
                    </span>
                  </div>

                  <div>
                    <span className="text-[9px] font-mono text-zinc-400 uppercase block">Localização</span>
                    <span className="font-bold text-white text-xs block">
                      {BARBERSHOP_CONTACT.name}
                    </span>
                    <a
                      href={BARBERSHOP_CONTACT.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-[#F2C45A] hover:underline flex items-center gap-1 mt-0.5"
                    >
                      <Navigation className="w-2.5 h-2.5" />
                      <span>{BARBERSHOP_CONTACT.mapsLabel}</span>
                    </a>
                  </div>
                </div>

                <div className="pt-2.5 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-[11px] text-zinc-300">Total a pagar no salão:</span>
                  <span className="font-['Cinzel',serif] text-xl font-black text-[#F2C45A]">
                    {currentService.price}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <a
                  href={`https://wa.me/244929741161?text=${encodeURIComponent(
                    `Olá! Gostaria de confirmar a minha marcação na CLÁSSICO BARBER SHOP:\n\n` +
                      `• Código: ${confirmedBookingData.code}\n` +
                      `• Cliente: ${confirmedBookingData.booking.clientName}\n` +
                      `• Contacto: ${confirmedBookingData.booking.clientPhone}\n` +
                      `• Procedimento: ${currentService.name} (${currentService.price})\n` +
                      `• Barbeiro: ${currentBarber.name}\n` +
                      `• Data: ${confirmedBookingData.booking.date} às ${confirmedBookingData.booking.time}\n` +
                      `• Localização: Zango 2, Angola\n\n` +
                      `Muito obrigado!`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#D9A52B] via-[#F2C45A] to-[#D9A52B] hover:brightness-110 text-[#050806] font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(217,165,43,0.4)] cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#050806]" />
                  <span>RECEBER COMPROVATIVO NO WHATSAPP</span>
                </a>

                <button
                  onClick={onClose}
                  className="w-full py-2 px-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 text-zinc-200 hover:text-white font-semibold text-xs tracking-wider uppercase transition-colors cursor-pointer"
                >
                  CONCLUIR E FECHAR
                </button>
              </div>

              <div className="mt-4 text-center">
                <span className="text-[11px] text-zinc-400 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#D9A52B]" />
                  Atendimento rigorosamente por ordem de marcação no Zango 2.
                </span>
              </div>
            </div>
          ) : (
            /* ================= STEPS 1 TO 6 ================= */
            <div>
              {/* Question Header */}
              <div className="mb-3 sm:mb-4">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9A52B]" />
                  <span className="text-[9px] font-mono uppercase text-[#F2C45A] font-bold tracking-wider">
                    PASSO 0{currentStep} // {stepsInfo[currentStep - 1].subtitle}
                  </span>
                </div>
                <h3 className="font-['Cinzel',serif] text-sm sm:text-base font-bold text-white uppercase tracking-tight">
                  {stepsInfo[currentStep - 1].title}
                </h3>
              </div>

              {/* Error Alert */}
              {validationError && (
                <div className="mb-3 p-2 rounded-lg bg-red-950/50 border border-red-500/40 text-red-200 text-xs flex items-center gap-2 animate-in fade-in">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{validationError}</span>
                </div>
              )}

              {/* STEP 1: Select Service */}
              {currentStep === 1 && (
                <div className="space-y-2">
                  {SERVICES.map((srv) => {
                    const isSelected = selectedServiceId === srv.id;
                    return (
                      <button
                        key={srv.id}
                        type="button"
                        onClick={() => {
                          setSelectedServiceId(srv.id);
                          setValidationError('');
                        }}
                        className={`w-full py-2 px-3 sm:py-2.5 sm:px-3.5 rounded-xl text-left border transition-all duration-150 cursor-pointer flex items-center justify-between gap-2.5 relative group ${
                          isSelected
                            ? 'bg-[#171A18] border-[#F2C45A] shadow-[0_0_15px_rgba(217,165,43,0.35)] ring-1 ring-[#D9A52B]'
                            : 'bg-[#171A18]/60 border-[#D9A52B]/20 hover:border-[#D9A52B]/60 hover:bg-white/[0.02]'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0 flex-1">
                          <div
                            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg shrink-0 flex items-center justify-center transition-colors ${
                              isSelected
                                ? 'bg-gradient-to-r from-[#D9A52B] to-[#F2C45A] text-[#050806]'
                                : 'bg-black/50 border border-[#D9A52B]/30 text-zinc-300 group-hover:text-[#F2C45A]'
                            }`}
                          >
                            {getServiceIcon(srv.iconName)}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5">
                              <h4 className="font-['Cinzel',serif] text-xs sm:text-sm font-bold text-white uppercase truncate">
                                {srv.name}
                              </h4>
                              {srv.tag && (
                                <span className="text-[8px] font-mono px-1.5 py-0.2 rounded bg-[#D9A52B]/15 border border-[#D9A52B]/30 text-[#F2C45A] uppercase font-bold shrink-0">
                                  {srv.tag}
                                </span>
                              )}
                            </div>
                            <span className="text-[10px] text-zinc-400 font-mono block">
                              {srv.duration}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <span className="font-['Cinzel',serif] text-xs sm:text-sm font-extrabold text-[#F2C45A]">
                            {srv.price}
                          </span>
                          <div
                            className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                              isSelected
                                ? 'bg-gradient-to-r from-[#D9A52B] to-[#F2C45A] border-[#F2C45A] text-[#050806]'
                                : 'border-[#D9A52B]/30 text-transparent group-hover:border-[#D9A52B]/60'
                            }`}
                          >
                            <Check className="w-2.5 h-2.5" />
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* STEP 2: Choose Barber */}
              {currentStep === 2 && (
                <div className="space-y-2">
                  {BARBERS.map((barber) => {
                    const isSelected = selectedBarberId === barber.id;
                    return (
                      <button
                        key={barber.id}
                        type="button"
                        onClick={() => {
                          setSelectedBarberId(barber.id);
                          setValidationError('');
                        }}
                        className={`w-full py-2 px-3 rounded-xl text-left border transition-all duration-150 cursor-pointer flex items-center justify-between gap-2.5 relative group ${
                          isSelected
                            ? 'bg-[#171A18] border-[#F2C45A] shadow-[0_0_15px_rgba(217,165,43,0.35)] ring-1 ring-[#D9A52B]'
                            : 'bg-[#171A18]/60 border-[#D9A52B]/20 hover:border-[#D9A52B]/60 hover:bg-white/[0.02]'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0 flex-1">
                          <div
                            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg overflow-hidden shrink-0 border ${
                              isSelected
                                ? 'border-[#F2C45A] shadow-[0_0_8px_rgba(217,165,43,0.5)]'
                                : 'border-[#D9A52B]/30 group-hover:border-[#D9A52B]/60'
                            }`}
                          >
                            <img
                              src={barber.image}
                              alt={barber.name}
                              className="w-full h-full object-cover"
                              loading="lazy"
                              decoding="async"
                              width={36}
                              height={36}
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5">
                              <h4 className="font-['Cinzel',serif] text-xs sm:text-sm font-bold text-white truncate">
                                {barber.name}
                              </h4>
                              <span className="text-[8px] font-mono text-[#F2C45A] px-1.5 py-0.2 rounded bg-[#D9A52B]/10 border border-[#D9A52B]/30 shrink-0">
                                ★ {barber.rating}
                              </span>
                            </div>
                            <span className="text-[10px] text-zinc-400 block truncate">
                              {barber.role}
                            </span>
                          </div>
                        </div>

                        <div className="shrink-0">
                          <div
                            className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                              isSelected
                                ? 'bg-gradient-to-r from-[#D9A52B] to-[#F2C45A] border-[#F2C45A] text-[#050806]'
                                : 'border-[#D9A52B]/30 text-transparent group-hover:border-[#D9A52B]/60'
                            }`}
                          >
                            <Check className="w-2.5 h-2.5" />
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* STEP 3: Select Date */}
              {currentStep === 3 && (
                <div>
                  <div className="grid grid-cols-4 sm:grid-cols-7 gap-1.5 mb-3">
                    {availableDates.map((dateObj) => {
                      const isSelected = selectedDate === dateObj.id;
                      const isDisabled = !dateObj.isAvailable;

                      return (
                        <button
                          key={dateObj.id}
                          type="button"
                          disabled={isDisabled}
                          onClick={() => {
                            if (!isDisabled) {
                              setSelectedDate(dateObj.id);
                              setValidationError('');
                            }
                          }}
                          className={`py-2 px-1 rounded-lg text-center border transition-all duration-150 cursor-pointer flex flex-col items-center justify-center relative ${
                            isDisabled
                              ? 'opacity-30 cursor-not-allowed bg-black/20 border-white/[0.05]'
                              : isSelected
                              ? 'bg-gradient-to-r from-[#D9A52B] to-[#F2C45A] text-[#050806] border-[#F2C45A] shadow-[0_0_12px_rgba(217,165,43,0.4)]'
                              : 'bg-[#171A18] text-zinc-300 border-[#D9A52B]/25 hover:border-[#D9A52B]/60 hover:bg-white/[0.04]'
                          }`}
                        >
                          <span
                            className={`text-[9px] font-mono font-bold uppercase tracking-wider block ${
                              isSelected ? 'text-[#050806]' : 'text-zinc-400'
                            }`}
                          >
                            {dateObj.dayName}
                          </span>
                          <span
                            className={`font-['Cinzel',serif] text-sm font-black my-0.5 block ${
                              isSelected ? 'text-[#050806]' : 'text-white'
                            }`}
                          >
                            {dateObj.dayNumber}
                          </span>
                          <span
                            className={`text-[8px] font-mono uppercase block ${
                              isSelected ? 'text-[#050806] font-bold' : 'text-zinc-500'
                            }`}
                          >
                            {dateObj.month}
                          </span>
                          {isDisabled && (
                            <span className="text-[7px] font-mono text-red-400 uppercase leading-none mt-0.5">
                              Fechado
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#171A18] border border-[#D9A52B]/25 flex items-center justify-between text-xs text-zinc-300">
                    <span className="font-mono text-zinc-400 text-[10px]">Data selecionada:</span>
                    <span className="font-bold text-[#F2C45A] font-mono text-xs">
                      {currentDateObj.fullFormatted}
                    </span>
                  </div>
                </div>
              )}

              {/* STEP 4: Choose Time */}
              {currentStep === 4 && (
                <div>
                  <div className="grid grid-cols-4 sm:grid-cols-5 gap-1.5 mb-3">
                    {timeSlots.map((slot) => {
                      const isSelected = selectedTime === slot.time;
                      const isDisabled = !slot.available;

                      return (
                        <button
                          key={slot.time}
                          type="button"
                          disabled={isDisabled}
                          onClick={() => {
                            if (!isDisabled) {
                              setSelectedTime(slot.time);
                              setValidationError('');
                            }
                          }}
                          className={`py-1.5 px-1.5 rounded-lg border text-center transition-all duration-150 cursor-pointer flex flex-col items-center justify-center ${
                            isDisabled
                              ? 'opacity-30 cursor-not-allowed bg-black/20 border-white/[0.05]'
                              : isSelected
                              ? 'bg-gradient-to-r from-[#D9A52B] to-[#F2C45A] text-[#050806] border-[#F2C45A] shadow-[0_0_12px_rgba(217,165,43,0.4)]'
                              : 'bg-[#171A18] text-zinc-200 border-[#D9A52B]/25 hover:border-[#D9A52B]/60 hover:bg-white/[0.04]'
                          }`}
                        >
                          <span
                            className={`font-['Cinzel',serif] text-xs font-bold leading-tight ${
                              isSelected ? 'text-[#050806]' : 'text-white'
                            }`}
                          >
                            {slot.time}
                          </span>
                          <span
                            className={`text-[8px] font-mono uppercase mt-0.5 ${
                              isDisabled
                                ? 'text-red-400'
                                : isSelected
                                ? 'text-[#050806] font-bold'
                                : 'text-zinc-500'
                            }`}
                          >
                            {isDisabled ? 'Ocupado' : slot.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#171A18] border border-[#D9A52B]/25 flex items-center justify-between text-xs text-zinc-300">
                    <span className="font-mono text-zinc-400 text-[10px]">Horário selecionado:</span>
                    <span className="font-bold text-[#F2C45A] font-mono text-xs">
                      {selectedTime} • {currentService.duration}
                    </span>
                  </div>
                </div>
              )}

              {/* STEP 5: Enter Customer Details */}
              {currentStep === 5 && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-[10px] font-mono text-zinc-300 uppercase tracking-wider mb-1">
                      NOME COMPLETO *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={clientName}
                        onChange={(e) => {
                          setClientName(e.target.value);
                          setValidationError('');
                        }}
                        placeholder="Ex: Manuel de Oliveira"
                        className="w-full px-3 py-2 rounded-lg bg-[#171A18] border border-[#D9A52B]/35 focus:border-[#F2C45A] focus:ring-1 focus:ring-[#F2C45A] text-white placeholder-zinc-500 text-xs outline-none transition-all pl-8.5"
                      />
                      <User className="w-3.5 h-3.5 text-[#D9A52B] absolute left-2.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-zinc-300 uppercase tracking-wider mb-1">
                      CONTACTO DE WHATSAPP *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        value={clientPhone}
                        onChange={(e) => {
                          formatPhoneInput(e.target.value);
                          setValidationError('');
                        }}
                        placeholder="929 741 161 ou +244 ..."
                        maxLength={18}
                        className="w-full px-3 py-2 rounded-lg bg-[#171A18] border border-[#D9A52B]/35 focus:border-[#F2C45A] focus:ring-1 focus:ring-[#F2C45A] text-white placeholder-zinc-500 text-xs outline-none transition-all pl-8.5 font-mono"
                      />
                      <Phone className="w-3.5 h-3.5 text-[#D9A52B] absolute left-2.5 top-1/2 -translate-y-1/2" />
                    </div>
                    <span className="text-[10px] text-zinc-400 mt-1 block">
                      Enviaremos o comprovativo da marcação diretamente para este número.
                    </span>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-zinc-300 uppercase tracking-wider mb-1">
                      OBSERVAÇÕES OU PREFERÊNCIAS (OPCIONAL)
                    </label>
                    <textarea
                      rows={2}
                      value={clientNotes}
                      onChange={(e) => setClientNotes(e.target.value)}
                      placeholder="Ex: Prefiro navalha tradicional, barba bem alinhada..."
                      className="w-full px-3 py-2 rounded-lg bg-[#171A18] border border-[#D9A52B]/35 focus:border-[#F2C45A] focus:ring-1 focus:ring-[#F2C45A] text-white placeholder-zinc-500 text-xs outline-none transition-all resize-none"
                    />
                  </div>
                </div>
              )}

              {/* STEP 6: Review & Final Confirmation */}
              {currentStep === 6 && (
                <div className="space-y-3">
                  <div className="rounded-xl bg-[#171A18] border border-[#D9A52B]/35 p-3.5 space-y-2.5 text-xs">
                    <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
                      <span className="text-[10px] font-mono text-zinc-400 uppercase">Resumo da Sua Marcação</span>
                      <span className="px-2 py-0.5 rounded-full bg-[#D9A52B]/20 text-[#F2C45A] font-mono text-[9px] font-bold">
                        REVISÃO
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-[9px] font-mono text-zinc-400 uppercase block">Procedimento</span>
                        <span className="font-bold text-white uppercase block truncate">
                          {currentService.name}
                        </span>
                        <span className="text-[10px] text-zinc-400">
                          {currentService.duration}
                        </span>
                      </div>

                      <div>
                        <span className="text-[9px] font-mono text-zinc-400 uppercase block">Barbeiro</span>
                        <span className="font-bold text-white block truncate">
                          {currentBarber.name}
                        </span>
                        <span className="text-[10px] text-[#F2C45A]">
                          ★ {currentBarber.rating}
                        </span>
                      </div>

                      <div>
                        <span className="text-[9px] font-mono text-zinc-400 uppercase block">Data e Horário</span>
                        <span className="font-bold text-[#F2C45A] font-mono block text-xs">
                          {currentDateObj.fullFormatted}
                        </span>
                        <span className="font-bold text-white font-mono block text-xs">
                          às {selectedTime}
                        </span>
                      </div>

                      <div>
                        <span className="text-[9px] font-mono text-zinc-400 uppercase block">Cliente</span>
                        <span className="font-bold text-white block truncate">
                          {clientName}
                        </span>
                        <span className="text-[10px] font-mono text-zinc-400 block truncate">
                          {clientPhone}
                        </span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between">
                      <span className="text-zinc-300 text-xs">Valor Total:</span>
                      <span className="font-['Cinzel',serif] text-lg font-black text-[#F2C45A]">
                        {currentService.price}
                      </span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#D9A52B]/10 border border-[#D9A52B]/30 text-xs text-zinc-300 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#D9A52B] shrink-0" />
                    <span>Pagamento efetuado na barbearia no Zango 2 após o término do serviço.</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Navigation Buttons (Footer) */}
        {!confirmedBookingData && (
          <div className="px-3.5 sm:px-6 py-2.5 sm:py-3 border-t border-[#D9A52B]/20 flex items-center justify-between shrink-0 bg-[#171A18]">
            <button
              type="button"
              onClick={handlePrevStep}
              disabled={currentStep === 1}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-1 cursor-pointer ${
                currentStep === 1
                  ? 'opacity-30 cursor-not-allowed text-zinc-600'
                  : 'text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10'
              }`}
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Voltar</span>
            </button>

            <button
              type="button"
              id="booking-quiz-continue-btn"
              onClick={handleNextStep}
              className="px-4 py-1.5 sm:py-2 rounded-lg bg-gradient-to-r from-[#D9A52B] via-[#F2C45A] to-[#D9A52B] hover:brightness-110 text-[#050806] font-black text-xs tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(217,165,43,0.35)] flex items-center gap-1 cursor-pointer"
            >
              <span>{currentStep === 6 ? 'Confirmar Marcação' : 'Continuar'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
