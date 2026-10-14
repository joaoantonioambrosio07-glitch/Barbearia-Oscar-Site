export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  tag?: string;
  iconName: string;
}

export interface Barber {
  id: string;
  name: string;
  role: string;
  specialty: string;
  rating: number;
  reviewsCount: number;
  bio: string;
  experienceYears: number;
  placeholderLabel: string;
  accentColor?: string;
  image?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'cortes' | 'barba' | 'salao' | 'ferramentas';
  aspectRatio: string;
  specs: string;
  placeholderText: string;
  accentNote?: string;
}

export interface AppointmentBooking {
  serviceId: string;
  barberId: string;
  date: string;
  time: string;
  clientName: string;
  clientPhone: string;
  notes?: string;
}

export interface DashboardAppointment {
  id: string;
  clientName: string;
  service: string;
  barberName: string;
  time: string;
  status: 'confirmado' | 'em_atendimento' | 'proximo';
  price: string;
}

