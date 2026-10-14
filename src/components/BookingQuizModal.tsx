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
  FileText,
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
  // Step tracker: 1 to 6 (step 7 is final confirmation inside quiz)
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Selections
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    preselectedServiceId || SERVICES[0].id
  );
  const [selectedBarberId, setSelectedBarberId] = useState<string>(
    preselectedBarberId || BARBERS[0].id
  );

  // Generate real dynamic dates (next 7 days)
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
        isAvailable: !isSunday, // Barber shop closed on Sundays
      });
    }
    return dates;
  };

  const availableDates = generateDates();
  // Select first available non-Sunday date by default
  const defaultAvailableDate = availableDates.find((d) => d.isAvailable) || availableDates[0];
  const [selectedDate, setSelectedDate] = useState<string>(defaultAvailableDate.id);

  // Time slots with realistic status
  const timeSlots = [
    { time: '09:00', available: true, label: 'Manhã' },
    { time: '10:00', available: true, label: 'Manhã' },
    { time: '11:00', available: false, label: 'Manhã' },
    { time: '11:45', available: true, label: 'Manhã' },
    { time: '14:00', available: true, label: 'Tarde' },
    { time: '15:15', available: true, label: 'Tarde' },
    { time: '16:30', available: true, label: 'Tarde' },
    { time: '17:45', available: false, label: 'Fim de tarde' },
    { time: '18:30', available: true, label: 'Noite' },
    { time: '19:15', available: true, label: 'Noite' },
  ];

  const [selectedTime, setSelectedTime] = useState<string>('14:00');

  // Client Details
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientNotes, setClientNotes] = useState<string>('');
  const [validationError, setValidationError] = useState<string>('');

  // Final booked state inside quiz
  const [confirmedBookingData, setConfirmedBookingData] = useState<{
    code: string;
    booking: AppointmentBooking;
  } | null>(null);

  // Sync props when opening
  useEffect(() => {
    if (preselectedServiceId) {
      setSelectedServiceId(preselectedServiceId);
    }
    if (preselectedBarberId) {
      setSelectedBarberId(preselectedBarberId);
    }
  }, [preselectedServiceId, preselectedBarberId, isOpen]);

  // Reset or lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // Reset step to 1 when modal is reopened after closing
      if (confirmedBookingData) {
        setConfirmedBookingData(null);
        setCurrentStep(1);
      }
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, confirmedBookingData]);

  if (!isOpen) return null;

  const currentService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];
  const currentBarber = BARBERS.find((b) => b.id === selectedBarberId) || BARBERS[0];
  const currentDateObj = availableDates.find((d) => d.id === selectedDate) || availableDates[0];

  const stepsInfo = [
    { step: 1, title: 'Qual serviço deseja realizar?', subtitle: 'Selecione o procedimento de sua preferência' },
    { step: 2, title: 'Com qual barbeiro prefere ser atendido?', subtitle: 'Nossos mestres da tesoura e visagismo' },
    { step: 3, title: 'Qual a melhor data para você?', subtitle: 'Atendimento de segunda a sábado no Itaim Bibi' },
    { step: 4, title: 'Qual o melhor horário?', subtitle: 'Horários pontuais sem filas de espera' },
    { step: 5, title: 'Seus dados para confirmação', subtitle: 'Para envio do lembrete de agendamento' },
    { step: 6, title: 'Revise e confirme seu agendamento', subtitle: 'Verifique todos os detalhes antes de registrar' },
  ];

  const handleNextStep = () => {
    setValidationError('');

    if (currentStep === 1) {
      if (!selectedServiceId) {
        setValidationError('Por favor, selecione um serviço para continuar.');
        return;
      }
    } else if (currentStep === 2) {
      if (!selectedBarberId) {
        setValidationError('Por favor, selecione um barbeiro para continuar.');
        return;
      }
    } else if (currentStep === 3) {
      if (!selectedDate) {
        setValidationError('Por favor, escolha uma data disponível.');
        return;
      }
    } else if (currentStep === 4) {
      if (!selectedTime) {
        setValidationError('Por favor, escolha um horário para o corte.');
        return;
      }
    } else if (currentStep === 5) {
      if (!clientName.trim() || clientName.trim().length < 3) {
        setValidationError('Por favor, informe seu nome completo (mínimo 3 caracteres).');
        return;
      }
      const digits = clientPhone.replace(/\D/g, '');
      if (digits.length < 10) {
        setValidationError('Por favor, digite um número de WhatsApp válido com DDD (ex: 61 99999-9999).');
        return;
      }
    } else if (currentStep === 6) {
      // Confirm the booking
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

    const reservationCode = `BO-${Math.floor(1000 + Math.random() * 9000)}`;

    setConfirmedBookingData({
      code: reservationCode,
      booking,
    });

    // Notify parent for storage/state
    onBookingConfirmed(booking);
  };

  const formatPhoneInput = (val: string) => {
    const clean = val.replace(/\D/g, '');
    let formatted = clean;
    if (clean.length > 2) {
      formatted = `(${clean.slice(0, 2)}) ${clean.slice(2)}`;
    }
    if (clean.length > 7) {
      formatted = `(${clean.slice(0, 2)}) ${clean.slice(2, 7)}-${clean.slice(7, 11)}`;
    }
    setClientPhone(formatted);
  };

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Scissors':
        return <Scissors className="w-4 h-4" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4" />;
      case 'Crown':
        return <Crown className="w-4 h-4" />;
      default:
        return <CheckCircle2 className="w-4 h-4" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-[#080A0D] border border-[#0757A5]/40 rounded-xl sm:rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col max-h-[94vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gradient Line */}
        <div className="h-1 w-full bg-gradient-to-r from-[#082D8C] via-[#087FE8] to-[#0757A5] shrink-0" />

        {/* Modal Top Header Bar */}
        <div className="px-3.5 sm:px-5 py-2.5 sm:py-3 border-b border-[#0757A5]/25 flex items-center justify-between shrink-0 bg-[#080A0D]/95">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full overflow-hidden border border-[#087FE8]/50 shrink-0 bg-[#082D8C]">
              <img
                src="/src/assets/images/barbearia_oscar_logo_1791927922669.jpg"
                alt="Barbearia Oscar"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                width={24}
                height={24}
              />
            </div>
            <div>
              <span className="font-['Syne',sans-serif] text-xs font-bold tracking-wider text-[#F7F7F5] uppercase block leading-tight">
                BARBEARIA OSCAR
              </span>
              <span className="text-[9px] font-mono text-[#087FE8] font-semibold tracking-wider uppercase block leading-none">
                AGENDAMENTO ONLINE
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {!confirmedBookingData && (
              <span className="text-[9px] font-mono text-zinc-400 font-semibold px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08]">
                {currentStep}/6
              </span>
            )}
            <button
              onClick={onClose}
              className="w-6 h-6 rounded-full bg-white/[0.05] hover:bg-white/[0.12] border border-white/[0.1] text-zinc-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Progress Bar (Visible while navigating steps 1 to 6) */}
        {!confirmedBookingData && (
          <div className="w-full bg-black/60 h-0.5 shrink-0">
            <div
              className="h-full bg-gradient-to-r from-[#082D8C] to-[#087FE8] transition-all duration-300"
              style={{ width: `${(currentStep / 6) * 100}%` }}
            />
          </div>
        )}

        {/* Modal Body / Scrollable Content Area */}
        <div className="p-3 sm:p-4.5 overflow-y-auto flex-1 custom-scrollbar">
          {/* ================= FINAL CONFIRMATION SCREEN ================= */}
          {confirmedBookingData ? (
            <div className="py-2 animate-in fade-in duration-300">
              <div className="text-center mb-5">
                <div className="w-13 h-13 rounded-full bg-[#082D8C]/25 border border-[#087FE8]/50 flex items-center justify-center mx-auto mb-2.5 text-[#087FE8] shadow-[0_0_20px_rgba(8,127,232,0.3)]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <span className="text-[9px] font-mono tracking-widest text-[#087FE8] uppercase font-bold">
                  AGENDAMENTO REGISTRADO
                </span>
                <h3 className="font-['Syne',sans-serif] text-xl sm:text-2xl font-extrabold text-[#F7F7F5] uppercase mt-0.5">
                  HORÁRIO RESERVADO COM SUCESSO!
                </h3>
                <p className="text-xs text-zinc-300 mt-1 max-w-md mx-auto">
                  Seu agendamento foi registrado com prioridade para{' '}
                  <strong className="text-white">{confirmedBookingData.booking.clientName}</strong>.
                </p>
              </div>

              {/* Receipt / Voucher Card */}
              <div className="rounded-xl bg-black/60 border border-[#0757A5]/35 p-4 mb-4 space-y-3">
                <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.08]">
                  <span className="text-[11px] font-mono text-zinc-400">CÓDIGO DE RESERVA:</span>
                  <span className="font-mono text-base font-extrabold text-[#087FE8] tracking-wider">
                    {confirmedBookingData.code}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[9px] font-mono text-zinc-500 uppercase block">Procedimento</span>
                    <span className="font-bold text-[#F7F7F5] text-xs uppercase">
                      {currentService.name}
                    </span>
                    <span className="text-[10px] text-zinc-400 font-mono block">
                      Duração: {currentService.duration}
                    </span>
                  </div>

                  <div>
                    <span className="text-[9px] font-mono text-zinc-500 uppercase block">Profissional</span>
                    <span className="font-bold text-[#F7F7F5] text-xs">
                      {currentBarber.name}
                    </span>
                    <span className="text-[10px] text-zinc-400 block truncate">
                      {currentBarber.role}
                    </span>
                  </div>

                  <div>
                    <span className="text-[9px] font-mono text-zinc-500 uppercase block">Data e Horário</span>
                    <span className="font-bold text-[#087FE8] text-xs font-mono block">
                      {confirmedBookingData.booking.date}
                    </span>
                    <span className="font-bold text-[#F7F7F5] font-mono text-xs block">
                      às {confirmedBookingData.booking.time}
                    </span>
                  </div>

                  <div>
                    <span className="text-[9px] font-mono text-zinc-500 uppercase block">Localização</span>
                    <span className="font-bold text-[#F7F7F5] text-xs block">
                      {BARBERSHOP_CONTACT.name}
                    </span>
                    <a
                      href={BARBERSHOP_CONTACT.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-[#087FE8] hover:underline flex items-center gap-1 mt-0.5"
                    >
                      <Navigation className="w-2.5 h-2.5" />
                      <span>{BARBERSHOP_CONTACT.mapsLabel}</span>
                    </a>
                  </div>
                </div>

                <div className="pt-2.5 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-[11px] text-zinc-400">Total a pagar no salão:</span>
                  <span className="font-['Syne',sans-serif] text-xl font-black text-[#F7F7F5]">
                    {currentService.price}
                  </span>
                </div>
              </div>

              {/* Action Buttons - Compact */}
              <div className="space-y-2">
                <a
                  href={`https://wa.me/556137022104?text=${encodeURIComponent(
                    `Olá! Gostaria de confirmar meu agendamento na BARBEARIA OSCAR:\n\n` +
                      `• Código: ${confirmedBookingData.code}\n` +
                      `• Cliente: ${confirmedBookingData.booking.clientName}\n` +
                      `• Procedimento: ${currentService.name} (${currentService.price})\n` +
                      `• Profissional: ${currentBarber.name}\n` +
                      `• Data: ${confirmedBookingData.booking.date} às ${confirmedBookingData.booking.time}\n\n` +
                      `Obrigado!`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3.5 rounded-lg bg-[#087FE8] hover:bg-[#0757A5] text-[#F7F7F5] font-bold text-[11px] tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all shadow-[0_0_15px_rgba(8,127,232,0.35)] cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-white" />
                  <span>RECEBER COMPROVANTE NO WHATSAPP</span>
                </a>

                <button
                  onClick={onClose}
                  className="w-full py-1.5 px-3 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 text-zinc-200 hover:text-white font-semibold text-[11px] tracking-wider uppercase transition-colors cursor-pointer"
                >
                  CONCLUIR E FECHAR
                </button>
              </div>

              <div className="mt-5 text-center">
                <span className="text-[11px] text-zinc-400 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#087FE8]" />
                  Chegue com 10 minutos de antecedência para desfrutar do nosso lounge com café & bar.
                </span>
              </div>
            </div>
          ) : (
            /* ================= STEPS 1 TO 6 ================= */
            <div>
              {/* Question Header */}
              <div className="mb-2.5 sm:mb-3.5">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#087FE8]" />
                  <span className="text-[9px] font-mono uppercase text-[#087FE8] font-bold tracking-wider">
                    PASSO 0{currentStep} // {stepsInfo[currentStep - 1].subtitle}
                  </span>
                </div>
                <h3 className="font-['Syne',sans-serif] text-sm sm:text-base font-bold text-[#F7F7F5] uppercase tracking-tight">
                  {stepsInfo[currentStep - 1].title}
                </h3>
              </div>

              {/* Error Alert */}
              {validationError && (
                <div className="mb-2.5 p-2 rounded-lg bg-red-950/40 border border-red-500/40 text-red-200 text-[11px] flex items-center gap-1.5 animate-in fade-in">
                  <AlertCircle className="w-3.5 h-3.5 text-red-400 shrink-0" />
                  <span>{validationError}</span>
                </div>
              )}

              {/* STEP 1: Select Service - Mobile First Slim Buttons */}
              {currentStep === 1 && (
                <div className="space-y-1.5">
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
                        className={`w-full py-2 px-2.5 sm:py-2.5 sm:px-3 rounded-lg text-left border transition-all duration-150 cursor-pointer flex items-center justify-between gap-2 relative group ${
                          isSelected
                            ? 'bg-[#082D8C]/40 border-[#087FE8] shadow-[0_0_12px_rgba(8,127,232,0.3)] ring-1 ring-[#087FE8]'
                            : 'bg-black/40 border-[#0757A5]/25 hover:border-[#087FE8]/50 hover:bg-white/[0.02]'
                        }`}
                      >
                        <div className="flex items-center gap-2 min-w-0 flex-1">
                          <div
                            className={`w-6 h-6 sm:w-7 sm:h-7 rounded-md shrink-0 flex items-center justify-center transition-colors ${
                              isSelected
                                ? 'bg-[#087FE8] text-white shadow-sm'
                                : 'bg-white/[0.05] border border-[#0757A5]/30 text-zinc-300 group-hover:text-[#087FE8]'
                            }`}
                          >
                            {getServiceIcon(srv.iconName)}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5">
                              <h4 className="font-['Syne',sans-serif] text-[11px] sm:text-xs font-bold text-[#F7F7F5] uppercase truncate">
                                {srv.name}
                              </h4>
                              {srv.tag && (
                                <span className="text-[7px] sm:text-[8px] font-mono px-1.5 py-0.2 rounded bg-[#082D8C]/40 border border-[#0757A5]/40 text-blue-200 uppercase font-semibold shrink-0">
                                  {srv.tag}
                                </span>
                              )}
                            </div>
                            <span className="text-[9px] text-zinc-400 font-mono block">
                              {srv.duration}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <span className="font-['Syne',sans-serif] text-xs sm:text-sm font-extrabold text-[#F7F7F5]">
                            {srv.price}
                          </span>
                          <div
                            className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-colors ${
                              isSelected
                                ? 'bg-[#087FE8] border-[#087FE8] text-white'
                                : 'border-[#0757A5]/40 text-transparent group-hover:border-[#087FE8]/60'
                            }`}
                          >
                            <Check className="w-2 h-2" />
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* STEP 2: Choose Barber - Mobile First Slim Buttons */}
              {currentStep === 2 && (
                <div className="space-y-1.5">
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
                        className={`w-full py-1.5 px-2.5 sm:py-2 sm:px-3 rounded-lg text-left border transition-all duration-150 cursor-pointer flex items-center justify-between gap-2 relative group ${
                          isSelected
                            ? 'bg-[#082D8C]/40 border-[#087FE8] shadow-[0_0_12px_rgba(8,127,232,0.3)] ring-1 ring-[#087FE8]'
                            : 'bg-black/40 border-[#0757A5]/25 hover:border-[#087FE8]/50 hover:bg-white/[0.02]'
                        }`}
                      >
                        <div className="flex items-center gap-2 min-w-0 flex-1">
                          <div
                            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-md overflow-hidden shrink-0 border ${
                              isSelected
                                ? 'border-[#087FE8] shadow-[0_0_8px_rgba(8,127,232,0.5)]'
                                : 'border-[#0757A5]/35 group-hover:border-[#087FE8]/50'
                            }`}
                          >
                            {barber.image ? (
                              <img
                                src={barber.image}
                                alt={barber.name}
                                className="w-full h-full object-cover"
                                loading="lazy"
                                decoding="async"
                                width={28}
                                height={28}
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-[#082D8C]/30 text-white font-bold text-[9px]">
                                {barber.name.split(' ').map((n) => n[0]).join('')}
                              </div>
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5">
                              <h4 className="font-['Syne',sans-serif] text-[11px] sm:text-xs font-bold text-[#F7F7F5] truncate">
                                {barber.name}
                              </h4>
                              <span className="text-[8px] font-mono text-[#087FE8] px-1 py-0.2 rounded bg-[#087FE8]/10 border border-[#087FE8]/30 shrink-0">
                                ★ {barber.rating}
                              </span>
                            </div>
                            <span className="text-[9px] sm:text-[10px] text-zinc-400 block truncate">
                              {barber.role}
                            </span>
                          </div>
                        </div>

                        <div className="shrink-0">
                          <div
                            className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-colors ${
                              isSelected
                                ? 'bg-[#087FE8] border-[#087FE8] text-white'
                                : 'border-[#0757A5]/40 text-transparent group-hover:border-[#087FE8]/60'
                            }`}
                          >
                            <Check className="w-2 h-2" />
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* STEP 3: Select Date - Mobile First Compact Grid */}
              {currentStep === 3 && (
                <div>
                  <div className="grid grid-cols-4 sm:grid-cols-7 gap-1 sm:gap-1.5 mb-2.5">
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
                          className={`py-1.5 px-1 rounded-md text-center border transition-all duration-150 cursor-pointer flex flex-col items-center justify-center relative ${
                            isDisabled
                              ? 'opacity-35 cursor-not-allowed bg-black/20 border-white/[0.05]'
                              : isSelected
                              ? 'bg-[#087FE8] text-white border-[#087FE8] shadow-[0_0_10px_rgba(8,127,232,0.45)]'
                              : 'bg-black/40 text-zinc-300 border-[#0757A5]/25 hover:border-[#087FE8]/50 hover:bg-white/[0.04]'
                          }`}
                        >
                          <span
                            className={`text-[8px] sm:text-[9px] font-mono font-bold uppercase tracking-wider block ${
                              isSelected ? 'text-white' : 'text-zinc-400'
                            }`}
                          >
                            {dateObj.dayName}
                          </span>
                          <span
                            className={`font-['Syne',sans-serif] text-xs sm:text-sm font-extrabold my-0.2 block ${
                              isSelected ? 'text-white' : 'text-[#F7F7F5]'
                            }`}
                          >
                            {dateObj.dayNumber}
                          </span>
                          <span
                            className={`text-[7px] sm:text-[8px] font-mono uppercase block ${
                              isSelected ? 'text-blue-100' : 'text-zinc-500'
                            }`}
                          >
                            {dateObj.month}
                          </span>
                          {isDisabled && (
                            <span className="text-[7px] font-mono text-red-400 uppercase leading-none">
                              Off
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  <div className="p-2 rounded-md bg-black/50 border border-[#0757A5]/20 flex items-center justify-between text-[11px] text-zinc-300">
                    <span className="font-mono text-zinc-400 text-[10px]">Data:</span>
                    <span className="font-bold text-[#087FE8] font-mono text-[11px]">
                      {currentDateObj.fullFormatted}
                    </span>
                  </div>
                </div>
              )}

              {/* STEP 4: Choose Time - Mobile First Compact Pills */}
              {currentStep === 4 && (
                <div>
                  <div className="grid grid-cols-4 sm:grid-cols-5 gap-1 sm:gap-1.5 mb-2.5">
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
                          className={`py-1 px-1 rounded-md border text-center transition-all duration-150 cursor-pointer flex flex-col items-center justify-center ${
                            isDisabled
                              ? 'opacity-30 cursor-not-allowed bg-black/20 border-white/[0.05]'
                              : isSelected
                              ? 'bg-[#087FE8] text-white border-[#087FE8] shadow-[0_0_10px_rgba(8,127,232,0.4)]'
                              : 'bg-black/40 text-zinc-200 border-[#0757A5]/25 hover:border-[#087FE8]/50 hover:bg-white/[0.04]'
                          }`}
                        >
                          <span
                            className={`font-['Syne',sans-serif] text-[11px] sm:text-xs font-bold leading-tight ${
                              isSelected ? 'text-white' : 'text-[#F7F7F5]'
                            }`}
                          >
                            {slot.time}
                          </span>
                          <span
                            className={`text-[7px] font-mono uppercase mt-0.2 ${
                              isDisabled
                                ? 'text-red-400'
                                : isSelected
                                ? 'text-blue-100 font-semibold'
                                : 'text-zinc-500'
                            }`}
                          >
                            {isDisabled ? 'Ocupado' : slot.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="p-2 rounded-md bg-black/50 border border-[#0757A5]/20 flex items-center justify-between text-[11px] text-zinc-300">
                    <span className="font-mono text-zinc-400 text-[10px]">Horário:</span>
                    <span className="font-bold text-[#087FE8] font-mono text-[11px]">
                      {selectedTime} • {currentService.duration}
                    </span>
                  </div>
                </div>
              )}

              {/* STEP 5: Enter Customer Details - Mobile Compact */}
              {currentStep === 5 && (
                <div className="space-y-2">
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
                        placeholder="Ex: Rodrigo Albuquerque"
                        className="w-full px-3 py-1.5 rounded-md bg-black/60 border border-[#0757A5]/35 focus:border-[#087FE8] focus:ring-1 focus:ring-[#087FE8] text-white placeholder-zinc-500 text-xs outline-none transition-all pl-8"
                      />
                      <User className="w-3 h-3 text-[#087FE8] absolute left-2.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-zinc-300 uppercase tracking-wider mb-1">
                      WHATSAPP PARA CONFIRMAÇÃO *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        value={clientPhone}
                        onChange={(e) => {
                          formatPhoneInput(e.target.value);
                          setValidationError('');
                        }}
                        placeholder="(61) 99999-9999"
                        maxLength={15}
                        className="w-full px-3 py-1.5 rounded-md bg-black/60 border border-[#0757A5]/35 focus:border-[#087FE8] focus:ring-1 focus:ring-[#087FE8] text-white placeholder-zinc-500 text-xs outline-none transition-all pl-8 font-mono"
                      />
                      <Phone className="w-3 h-3 text-[#087FE8] absolute left-2.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-zinc-300 uppercase tracking-wider mb-1">
                      OBSERVAÇÕES (OPCIONAL)
                    </label>
                    <div className="relative">
                      <textarea
                        rows={2}
                        value={clientNotes}
                        onChange={(e) => setClientNotes(e.target.value)}
                        placeholder="Ex: Prefiro acabamento baixo nas laterais..."
                        className="w-full px-3 py-1.5 rounded-md bg-black/60 border border-[#0757A5]/35 focus:border-[#087FE8] focus:ring-1 focus:ring-[#087FE8] text-white placeholder-zinc-500 text-[11px] outline-none transition-all resize-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 6: Review & Final Confirmation */}
              {currentStep === 6 && (
                <div className="space-y-2">
                  <div className="rounded-lg bg-black/60 border border-[#0757A5]/35 p-3 space-y-2 text-xs">
                    <div className="flex items-center justify-between pb-1.5 border-b border-white/[0.08]">
                      <span className="text-[9px] font-mono text-zinc-400 uppercase">Resumo da Reserva</span>
                      <span className="px-1.5 py-0.2 rounded-full bg-[#087FE8]/20 text-[#087FE8] font-mono text-[8px] font-bold">
                        PRONTO
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div>
                        <span className="text-[8px] font-mono text-zinc-500 uppercase block">Serviço</span>
                        <span className="font-bold text-[#F7F7F5] uppercase block truncate">
                          {currentService.name}
                        </span>
                        <span className="text-[9px] text-zinc-400">
                          {currentService.duration}
                        </span>
                      </div>

                      <div>
                        <span className="text-[8px] font-mono text-zinc-500 uppercase block">Barbeiro</span>
                        <span className="font-bold text-[#F7F7F5] block truncate">
                          {currentBarber.name}
                        </span>
                        <span className="text-[9px] text-[#087FE8]">
                          ★ {currentBarber.rating}
                        </span>
                      </div>

                      <div>
                        <span className="text-[8px] font-mono text-zinc-500 uppercase block">Data e Horário</span>
                        <span className="font-bold text-[#087FE8] font-mono block text-[11px]">
                          {currentDateObj.fullFormatted}
                        </span>
                        <span className="font-bold text-white font-mono block text-[11px]">
                          às {selectedTime}
                        </span>
                      </div>

                      <div>
                        <span className="text-[8px] font-mono text-zinc-500 uppercase block">Cliente</span>
                        <span className="font-bold text-[#F7F7F5] block truncate">
                          {clientName}
                        </span>
                        <span className="text-[9px] font-mono text-zinc-400 block truncate">
                          {clientPhone}
                        </span>
                      </div>
                    </div>

                    <div className="pt-1.5 border-t border-white/[0.08] flex items-center justify-between">
                      <span className="text-zinc-400 text-[10px]">Valor:</span>
                      <span className="font-['Syne',sans-serif] text-base font-black text-[#F7F7F5]">
                        {currentService.price}
                      </span>
                    </div>
                  </div>

                  <div className="p-2 rounded-md bg-[#082D8C]/20 border border-[#0757A5]/30 text-[10px] text-zinc-300 flex items-center gap-1.5">
                    <ShieldCheck className="w-3 h-3 text-[#087FE8] shrink-0" />
                    <span>Pagamento efetuado no salão após o término.</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Navigation Buttons (Footer) */}
        {!confirmedBookingData && (
          <div className="px-3 sm:px-5 py-2 sm:py-2.5 border-t border-[#0757A5]/25 flex items-center justify-between shrink-0 bg-[#080A0D]/95">
            <button
              type="button"
              onClick={handlePrevStep}
              disabled={currentStep === 1}
              className={`px-2.5 sm:px-3 py-1.5 rounded-md text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase transition-all flex items-center gap-1 cursor-pointer ${
                currentStep === 1
                  ? 'opacity-30 cursor-not-allowed text-zinc-600'
                  : 'text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10'
              }`}
            >
              <ChevronLeft className="w-3 h-3" />
              <span>Voltar</span>
            </button>

            <button
              type="button"
              id="booking-quiz-continue-btn"
              onClick={handleNextStep}
              className="px-3 sm:px-4 py-1.5 rounded-md bg-[#087FE8] hover:bg-[#0757A5] text-[#F7F7F5] font-bold text-[10px] sm:text-[11px] tracking-wider uppercase transition-all shadow-[0_0_10px_rgba(8,127,232,0.4)] hover:shadow-[0_0_15px_rgba(22,141,224,0.55)] flex items-center gap-1 cursor-pointer border border-[#087FE8]/50"
            >
              <span>{currentStep === 6 ? 'Confirmar' : 'Continuar'}</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
