"use client";
import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Menu, 
  X, 
  ChevronRight, 
  Star,
  Activity,
  Heart,
  Brain,
  Stethoscope,
  CheckCircle2
} from 'lucide-react';
import Image from "next/image";

const ClinicDemo = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-600">
      
      {/* --- TOP BAR (Información Urgente) --- */}
      <div className="bg-teal-700 text-white text-sm py-2 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Lun-Vie: 9:00 - 20:00</span>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Av. Jean Jaurès, Toulouse</span>
          </div>
          <div className="flex gap-4 font-medium">
            <a href="#" className="hover:text-teal-200 transition">Portal Paciente</a>
            <a href="#" className="hover:text-teal-200 transition">Seguros Médicos</a>
          </div>
        </div>
      </div>

      {/* --- NAVBAR --- */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo Ficticio */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white">
                <Heart className="w-6 h-6 fill-current" />
              </div>
              <div className="leading-tight">
                <h1 className="text-xl font-bold text-slate-800 tracking-tight">CLÍNICA SALUD</h1>
                <p className="text-xs text-teal-600 font-semibold tracking-widest uppercase">Integral & Familiar</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#especialidades" className="text-slate-600 hover:text-teal-600 font-medium transition">Especialidades</a>
              <a href="#equipo" className="text-slate-600 hover:text-teal-600 font-medium transition">Equipo Médico</a>
              <a href="#instalaciones" className="text-slate-600 hover:text-teal-600 font-medium transition">Instalaciones</a>
              <a href="#contacto" className="bg-teal-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-teal-700 transition shadow-lg hover:shadow-teal-200 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Pedir Cita Online
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 hover:text-teal-600 p-2">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#especialidades" className="block px-3 py-3 text-slate-700 font-medium hover:bg-teal-50 rounded-lg">Especialidades</a>
              <a href="#equipo" className="block px-3 py-3 text-slate-700 font-medium hover:bg-teal-50 rounded-lg">Equipo</a>
              <a href="#contacto" className="block px-3 py-3 text-white font-bold bg-teal-600 rounded-lg text-center mt-4">Pedir Cita Ahora</a>
            </div>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative bg-slate-50 pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wide">
                <span className="w-2 h-2 bg-teal-600 rounded-full animate-pulse"></span>
                Abiertos nuevos pacientes 2024
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                Cuidamos de tu salud con <span className="text-teal-600">cercanía y tecnología</span>.
              </h1>
              <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                Somos un centro médico multidisciplinar enfocado en el bienestar integral. 
                Sin esperas, con cita online y los mejores especialistas de Toulouse.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-3 px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold text-lg shadow-xl shadow-teal-100 transition transform hover:-translate-y-1">
                  <Calendar className="w-5 h-5" />
                  Reservar Cita
                </button>
                <button className="flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 hover:border-teal-600 hover:text-teal-600 rounded-xl font-bold text-lg transition">
                  <Phone className="w-5 h-5" />
                  Llamar ahora
                </button>
              </div>

              <div className="flex items-center gap-4 pt-4 text-sm font-medium text-slate-500">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs overflow-hidden`}>
                       {/* Placeholder avatars would go here */}
                       <span className="bg-slate-300 w-full h-full block"></span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-slate-800 ml-1">4.9/5 (120+ Reseñas)</span>
                </div>
              </div>
            </div>

            {/* Hero Image / Illustration Placeholder */}
            <div className="relative lg:h-[600px] w-full hidden lg:block">
               {/* Abstract decorative shapes */}
               <div className="absolute top-0 right-0 w-3/4 h-full bg-teal-100 rounded-tl-[100px] rounded-br-[100px] -z-10 opacity-60"></div>
               <div className="absolute bottom-10 left-10 w-24 h-24 bg-amber-100 rounded-full z-0"></div>
               
               {/* Main Card */}
               <div className="absolute top-10 right-10 w-full max-w-md bg-white p-2 rounded-2xl shadow-2xl transform rotate-1 hover:rotate-0 transition duration-500">
                  <div className="relative h-64 w-full bg-slate-100 rounded-xl overflow-hidden">
                    <Image 
                      src="/doctora.png" 
                      alt="Dra. Clara Méndez"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-6">
                     <h3 className="text-xl font-bold text-slate-800 mb-2">Dra. Clara Méndez</h3>
                     <p className="text-teal-600 font-medium mb-4">Directora Médica</p>
                     <div className="flex gap-2">
                        <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-semibold text-slate-600">Medicina General</span>
                        <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-semibold text-slate-600">Nutrición</span>
                     </div>
                  </div>
               </div>

               {/* Floating Card: Cita Confirmada */}
               <div className="absolute bottom-20 left-0 bg-white p-4 rounded-xl shadow-xl border-l-4 border-green-500 animate-bounce-slow max-w-xs">
                  <div className="flex items-center gap-3">
                     <div className="bg-green-100 p-2 rounded-full">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                     </div>
                     <div>
                        <p className="text-sm font-bold text-slate-800">Cita Confirmada</p>
                        <p className="text-xs text-slate-500">Hoy, 15:30h - Fisioterapia</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section id="especialidades" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-bold tracking-wider uppercase text-sm">Nuestras Áreas</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2 sm:text-4xl">Especialidades Médicas</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Activity className="w-8 h-8"/>, title: "Fisioterapia", desc: "Rehabilitación deportiva, masajes terapéuticos y punción seca." },
              { icon: <Brain className="w-8 h-8"/>, title: "Psicología", desc: "Terapia cognitivo-conductual, gestión del estrés y ansiedad." },
              { icon: <Heart className="w-8 h-8"/>, title: "Cardiología", desc: "Revisiones completas, electrocardiogramas y pruebas de esfuerzo." },
              { icon: <Stethoscope className="w-8 h-8"/>, title: "Medicina General", desc: "Atención primaria, chequeos anuales y vacunación." }
            ].map((service, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition duration-300 border border-transparent hover:border-teal-100 group">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-4">{service.desc}</p>
                <a href="#" className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-800 transition">
                  Saber más <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY US (Beneficios) --- */}
      <section className="py-20 bg-teal-900 text-white relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute right-0 top-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
            <div className="absolute left-0 bottom-0 w-96 h-96 bg-teal-400 rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Por qué elegir Clínica Salud?</h2>
                <p className="text-teal-100 text-lg mb-8">
                   Entendemos que tu tiempo es valioso y tu salud prioritaria. Hemos digitalizado nuestros procesos para que tú solo te preocupes de recuperarte.
                </p>
                <ul className="space-y-6">
                   {[
                      "Cita Online 24/7 sin llamadas",
                      "Historia Clínica Digital accesible",
                      "Recordatorios automáticos por WhatsApp",
                      "Resultados de pruebas en 24h"
                   ].map((item, i) => (
                      <li key={i} className="flex items-center gap-4">
                         <div className="w-8 h-8 bg-teal-800 rounded-full flex items-center justify-center flex-shrink-0 border border-teal-600">
                            <CheckCircle2 className="w-5 h-5 text-teal-400" />
                         </div>
                         <span className="font-medium text-lg">{item}</span>
                      </li>
                   ))}
                </ul>
             </div>
             
             {/* CTA Box */}
             <div className="bg-white text-slate-800 p-8 rounded-2xl shadow-2xl">
                <h3 className="text-2xl font-bold mb-2">Primera Visita Gratuita</h3>
                <p className="text-slate-500 mb-6">Para valoración de Fisioterapia y Odontología.</p>
                <form className="space-y-4">
                   <input type="text" placeholder="Tu Nombre" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none" />
                   <input type="tel" placeholder="Tu Teléfono" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none" />
                   <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 rounded-lg transition shadow-lg">
                      Solicitar Valoración
                   </button>
                </form>
                <p className="text-xs text-center text-slate-400 mt-4">
                   Tus datos están protegidos. No enviamos spam.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
               <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-6 h-6 text-teal-500 fill-current" />
                  <span className="text-xl font-bold text-white">CLÍNICA SALUD</span>
               </div>
               <p className="text-slate-400 max-w-sm">
                  Cuidando de ti y de tu familia desde 2010. Tu centro médico de confianza en el corazón de Toulouse.
               </p>
            </div>
            <div>
               <h4 className="text-white font-bold mb-4">Servicios</h4>
               <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-teal-400 transition">Medicina General</a></li>
                  <li><a href="#" className="hover:text-teal-400 transition">Fisioterapia</a></li>
                  <li><a href="#" className="hover:text-teal-400 transition">Psicología</a></li>
                  <li><a href="#" className="hover:text-teal-400 transition">Pediatría</a></li>
               </ul>
            </div>
            <div>
               <h4 className="text-white font-bold mb-4">Contacto</h4>
               <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-teal-500"/> Av. Jean Jaurès, 12</li>
                  <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-teal-500"/> +33 5 61 00 00 00</li>
                  <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-teal-500"/> Lun-Vie: 9h-20h</li>
               </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; 2026 Clínica Salud. Todos los derechos reservados.</p>
         
            <div className="mt-4 md:mt-0 flex items-center gap-2 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
               <span className="text-xs text-slate-400">Digitalizado por:</span>
               <a href="https://qualitysl.com" className="font-bold text-teal-400 hover:text-white transition">
                  Quality and Service Levante
               </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ClinicDemo;