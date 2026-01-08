"use client";

import React, { useState } from 'react';
import { 
  Calendar, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Stethoscope, 
  CreditCard,
  Menu,
  X,
  ChevronRight,
  User
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">

      <div className="bg-blue-900 text-white text-sm py-2 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-2">
          <p className="flex items-center gap-2">
            <span className="bg-emerald-500 text-xs font-bold px-2 py-0.5 rounded text-blue-900">OUVERT</span>
            <span>Aujourd'hui : 08h30 - 19h00</span>
          </p>
          <div className="flex gap-4 text-blue-200 text-xs sm:text-sm">
            <span>Urgence : 15 (SAMU)</span>
            <span>Conventionné Secteur 1</span>
          </div>
        </div>
      </div>

      {/* Navigation Sticky */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <ShieldCheck className="text-white h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-900 leading-none">Cabinet Santé</h1>
              <p className="text-xs text-slate-500 tracking-wider">CASTANET-TOLOSAN</p>
            </div>
          </div>

          {/* Desktop Nav  */}
          <nav className="hidden lg:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#accueil" className="hover:text-blue-600 transition">Accueil</a>
            <a href="#equipe" className="hover:text-blue-600 transition">L'Équipe</a>
            <a href="#specialites" className="hover:text-blue-600 transition">Spécialités</a>
            <a href="#infos" className="hover:text-blue-600 transition">Infos Pratiques</a>
          </nav>

          {/* CTA Button */}
          <button className="hidden lg:flex bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-medium transition shadow-lg shadow-blue-200 items-center gap-2">
            <Calendar className="h-4 w-4" />
            Prendre rendez-vous
          </button>

          {/* Mobile Menu Button - Visible hasta pantallas grandes */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition"
            aria-label="Ouvrir le menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t p-4 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-5 absolute w-full left-0 z-50">
            <a href="#accueil" onClick={handleLinkClick} className="py-2 border-b block text-slate-700 font-medium">Accueil</a>
            <a href="#equipe" onClick={handleLinkClick} className="py-2 border-b block text-slate-700 font-medium">L'Équipe</a>
            <a href="#specialites" onClick={handleLinkClick} className="py-2 border-b block text-slate-700 font-medium">Spécialités</a>
            <a href="#infos" onClick={handleLinkClick} className="py-2 border-b block text-slate-700 font-medium">Infos Pratiques</a>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg flex justify-center items-center gap-2 font-medium mt-2 shadow-md">
              <Calendar className="h-4 w-4" />
              Prendre rendez-vous
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden scroll-mt-28" id="accueil">
        <div className="max-w-6xl mx-auto px-4 py-12 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="relative z-10 order-1">
            <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
              Médecine Générale & Soins Infirmiers
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Votre santé au cœur de <br className="hidden sm:block" />
              <span className="text-blue-600">Castanet-Tolosan</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              Une prise en charge globale et humaine. Notre équipe pluridisciplinaire vous accueille du lundi au samedi dans un cadre moderne et accessible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg font-medium transition flex items-center justify-center gap-2 shadow-xl shadow-blue-100 transform hover:-translate-y-1">
                Prendre RDV sur Doctolib
                <ChevronRight className="h-4 w-4" />
              </button>
              <button className="border border-slate-300 hover:bg-slate-50 text-slate-700 px-8 py-3.5 rounded-lg font-medium transition flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                05 61 00 00 00
              </button>
            </div>
            
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-emerald-500" />
                <span>Tiers payant accepté</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                <span>Carte Vitale</span>
              </div>
            </div>
          </div>
          
          {/* Image Content  */}
          <div className="relative z-0 mt-4 lg:mt-0 order-2 w-full max-w-md mx-auto lg:max-w-full">
             <div className="absolute top-4 right-4 sm:top-10 sm:right-10 w-full h-full bg-blue-100 rounded-3xl -z-10 transform rotate-6"></div>
             
             {/* Tarjeta de imagen */}
             <div className="bg-white p-3 rounded-2xl shadow-2xl transform rotate-1 hover:rotate-0 transition duration-500 border border-slate-100">
                  <div className="relative h-64 sm:h-80 w-full bg-slate-100 rounded-xl overflow-hidden">
                    <img 
                      src="doctora.png" 
                      alt="Dr. Sophie MARTIN"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                     <h3 className="text-xl font-bold text-slate-800 mb-1">Dr. Sophie MARTIN</h3>
                     <p className="text-teal-600 font-medium mb-3 text-sm">Directrice Médicale</p>
                     <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-semibold text-slate-600">Médecine Générale</span>
                        <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-semibold text-slate-600">Nutrition</span>
                     </div>
                  </div>
               </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 bg-slate-50 scroll-mt-28" id="specialites">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-blue-900 font-bold text-sm uppercase tracking-wider mb-2">NOS COMPÉTENCES</h3>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Un parcours de soins complet</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "Médecine Générale", icon: User, desc: "Suivi des adultes et enfants, vaccinations, certificats médicaux." },
              { title: "Pédiatrie", icon: Stethoscope, desc: "Suivi du développement des nourrissons et des enfants." },
              { title: "Soins Infirmiers", icon:  ShieldCheck, desc: "Injections, pansements, prises de sang sur rendez-vous." },
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-slate-100 group">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition duration-300">
                  <service.icon className="h-6 w-6 text-blue-600 group-hover:text-white transition duration-300" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h4>
                <p className="text-slate-500 leading-relaxed text-sm sm:text-base">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* L'Equipe */}
      <section className="py-16 sm:py-20 bg-white scroll-mt-28" id="equipe">
        <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">Notre Équipe</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Une équipe de professionnels de santé passionnés et à votre écoute pour vous garantir les meilleurs soins.
            </p>
        </div>
      </section>

      {/* Info Pratiques Section */}
      <section className="bg-slate-50 py-16 sm:py-20 border-t border-slate-100 scroll-mt-28" id="infos">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Map Placeholder */}
            <div className="bg-slate-200 rounded-2xl h-[300px] sm:h-[400px] w-full relative overflow-hidden shadow-lg order-2 lg:order-1">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.263659267987!2d1.5097887766986226!3d43.51347697110903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebcf7254f26bf%3A0x406f69c2f3e8c40!2sCastanet-Tolosan!5e0!3m2!1sfr!2sfr!4v1709900000000!5m2!1sfr!2sfr"
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen={true} 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 className="absolute inset-0 grayscale hover:grayscale-0 transition duration-500"
                 title="Carte Castanet-Tolosan"
               ></iframe>
            </div>

            <div className="flex flex-col justify-center order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Informations Pratiques</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-blue-50 p-3 rounded-full h-fit shrink-0">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Adresse</h4>
                    <p className="text-slate-600">12 Avenue de la République<br/>31320 Castanet-Tolosan</p>
                    <p className="text-sm text-slate-500 mt-1">Parking gratuit à 50m</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-blue-50 p-3 rounded-full h-fit shrink-0">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Horaires d'ouverture</h4>
                    <div className="text-slate-600 grid grid-cols-2 gap-x-8 mt-1 text-sm">
                      <span>Lundi - Vendredi</span>
                      <span className="font-medium">08:30 - 19:00</span>
                      <span>Samedi</span>
                      <span className="font-medium">09:00 - 12:00</span>
                      <span>Dimanche</span>
                      <span className="text-red-500">Fermé</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-blue-50 p-3 rounded-full h-fit shrink-0">
                    <CreditCard className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Tarifs et Remboursements</h4>
                    <p className="text-slate-600 text-sm">
                      Médecins conventionnés Secteur 1.<br/>
                      Carte Vitale acceptée. Tiers payant intégral sur la part obligatoire.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-sm">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 mb-8 border-b border-slate-800 pb-8">
          <div>
            <h5 className="text-white font-bold mb-4">Cabinet Santé Castanet</h5>
            <p>Votre santé est notre métier. Une équipe dévouée pour des soins de proximité.</p>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4">Liens Utiles</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Mentions Légales</a></li>
              <li><a href="#" className="hover:text-white">Politique de confidentialité</a></li>
              <li><a href="https://www.ameli.fr/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Ameli.fr</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4">En cas d'urgence</h5>
            <p className="mb-2">Contactez le 15 (SAMU) ou rendez-vous aux urgences les plus proches :</p>
            <p className="text-slate-300">CHU Toulouse Purpan ou Rangueil</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 text-center flex justify-between flex-col md:flex-row items-center">
          <p>&copy; 2026 Cabinet Médical Castanet. Tous droits réservés.</p>
          <div className="mt-4 md:mt-0 flex items-center gap-2 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
               <span className="text-xs text-slate-400">Digitalizado por:</span>
               <a href="https://qualitysl.com" target="_blank" rel="noopener noreferrer" className="font-bold text-teal-400 hover:text-white transition">
                  Quality and Service Levante
               </a>
            </div>
        </div>
      </footer>
    </div>
  );
}
