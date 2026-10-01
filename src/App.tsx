import React, { useState } from 'react';
import { HTML_IMAGES } from './data/bjjData';
import { SafeImage } from './components/SafeImage';
import { InicioScreen } from './screens/InicioScreen';
import { HorariosScreen } from './screens/HorariosScreen';
import { EvolucaoScreen } from './screens/EvolucaoScreen';
import { TecnicasScreen } from './screens/TecnicasScreen';
import { SparringTimerModal } from './components/SparringTimerModal';
import { ImageLinksModal } from './components/ImageLinksModal';

type TabType = 'inicio' | 'horarios' | 'evolucao' | 'tecnicas';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('inicio');
  const [isTimerOpen, setIsTimerOpen] = useState<boolean>(false);
  const [isImageLinksOpen, setIsImageLinksOpen] = useState<boolean>(false);
  const [showNotifications, setShowNotifications] = useState<boolean>(false);
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState<boolean>(true);

  const tabLabels: Record<TabType, string> = {
    inicio: 'Início',
    horarios: 'Horários',
    evolucao: 'Evolução',
    tecnicas: 'Técnicas',
  };

  const handleNavigate = (tab: TabType) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased flex flex-col min-h-screen selection:bg-primary-container selection:text-on-primary-container">
      {/* Top Fixed App Bar */}
      <header className="fixed top-0 inset-x-0 z-40 bg-surface/85 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.35)] pt-safe">
        <div className="max-w-md mx-auto h-16 px-margin flex items-center justify-between">
          <button
            onClick={() => handleNavigate('inicio')}
            className="flex items-center gap-space-sm text-left focus:outline-none"
          >
            <SafeImage
              alt="Laptop JJ Dojo Logo"
              className="h-8 w-8 rounded-lg object-contain"
              src={HTML_IMAGES.logo}
            />
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-space-xs">
                <span className="font-headline-sm text-headline-sm text-on-surface tracking-wider leading-none">
                  LAPTOP JJ
                </span>
                <span className="font-label-sm text-label-sm text-primary uppercase">
                  {tabLabels[activeTab]}
                </span>
              </div>
              <span className="font-label-sm text-label-sm tracking-widest text-on-surface-variant uppercase opacity-80">
                BJJ Academy
              </span>
            </div>
          </button>

          <div className="flex items-center gap-1">
            {/* Direct HTML Image Links Trigger Button */}
            <button
              onClick={() => setIsImageLinksOpen(true)}
              aria-label="Links diretos das imagens do HTML"
              title="Ver links diretos das imagens do HTML"
              className="h-9 px-2.5 rounded-full bg-surface-container-high text-primary hover:bg-surface-bright transition-colors flex items-center gap-1 font-label-sm text-[10px] uppercase tracking-wider"
            >
              <span className="material-symbols-outlined text-[16px]">image</span>
              <span className="hidden xs:inline">Links HTML</span>
            </button>

            {/* Notifications Button */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowNotifications((prev) => !prev);
                  setHasUnreadNotifications(false);
                }}
                aria-label="Notificações"
                className="relative w-11 h-11 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors"
              >
                <span className="material-symbols-outlined text-[22px]">
                  notifications
                </span>
                {hasUnreadNotifications && (
                  <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-primary-container ring-2 ring-surface"></span>
                )}
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-72 rounded-xl bg-surface-container-high p-3 shadow-2xl border border-white/10 z-50 flex flex-col gap-2">
                  <div className="flex items-center justify-between pb-1 border-b border-white/5">
                    <span className="font-label-md text-label-md text-on-surface">
                      Notificações do Dojo
                    </span>
                    <button
                      onClick={() => setShowNotifications(false)}
                      className="text-on-surface-variant hover:text-on-surface"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        close
                      </span>
                    </button>
                  </div>
                  <div
                    onClick={() => {
                      setShowNotifications(false);
                      handleNavigate('horarios');
                    }}
                    className="p-2 rounded-lg bg-surface-container hover:bg-surface-bright cursor-pointer transition-colors"
                  >
                    <span className="font-label-sm text-label-sm text-primary block">
                      Treino das 19:30 • Quase Lotado
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      Restam apenas 3 vagas no tatame para o treino avançado de hoje.
                    </p>
                  </div>
                  <div
                    onClick={() => {
                      setShowNotifications(false);
                      handleNavigate('tecnicas');
                    }}
                    className="p-2 rounded-lg bg-surface-container hover:bg-surface-bright cursor-pointer transition-colors"
                  >
                    <span className="font-label-sm text-label-sm text-tertiary block">
                      Nova Técnica da Semana
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      Mestre Almeida publicou: Ataques da Guarda Fechada.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Avatar */}
            <button
              onClick={() => handleNavigate('evolucao')}
              aria-label="Perfil e Evolução de Faixa"
              className="relative flex items-center justify-center p-0.5 rounded-full bg-gradient-to-tr from-primary-container via-surface-variant to-outline-variant focus:outline-none active:scale-95 transition-transform"
            >
              <SafeImage
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover"
                src={HTML_IMAGES.headerProfile}
              />
              <div className="absolute -bottom-1 -right-0.5 bg-primary-container text-on-primary-container font-label-sm text-[9px] px-1 py-0.2 rounded-full font-bold flex items-center justify-center shadow-sm ring-1 ring-surface">
                FAIXA
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative w-full max-w-md mx-auto pt-16 pb-24 bg-surface min-h-screen">
        {activeTab === 'inicio' && (
          <InicioScreen
            onNavigate={handleNavigate}
            onOpenTimer={() => setIsTimerOpen(true)}
            onOpenImageLinks={() => setIsImageLinksOpen(true)}
          />
        )}
        {activeTab === 'horarios' && <HorariosScreen />}
        {activeTab === 'evolucao' && <EvolucaoScreen />}
        {activeTab === 'tecnicas' && (
          <TecnicasScreen onOpenTimer={() => setIsTimerOpen(true)} />
        )}
      </main>

      {/* Bottom Tab Bar Navigation */}
      <nav className="fixed bottom-0 inset-x-0 z-40 pb-safe bg-surface-container-low/90 backdrop-blur-xl shadow-[0_-4px_24px_rgba(0,0,0,0.45)]">
        <div className="max-w-md mx-auto flex justify-around items-center h-20 px-space-xs">
          <button
            onClick={() => handleNavigate('inicio')}
            className={`flex flex-col items-center justify-center gap-1 w-16 h-14 transition-colors ${
              activeTab === 'inicio'
                ? 'text-primary font-bold'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span
              className="material-symbols-outlined text-[24px]"
              style={{
                fontVariationSettings:
                  activeTab === 'inicio' ? "'FILL' 1" : "'FILL' 0",
              }}
            >
              sports_martial_arts
            </span>
            <span className="font-label-sm text-label-sm tracking-wide">Início</span>
          </button>

          <button
            onClick={() => handleNavigate('horarios')}
            className={`flex flex-col items-center justify-center gap-1 w-16 h-14 transition-colors ${
              activeTab === 'horarios'
                ? 'text-primary font-bold'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span
              className="material-symbols-outlined text-[24px]"
              style={{
                fontVariationSettings:
                  activeTab === 'horarios' ? "'FILL' 1" : "'FILL' 0",
              }}
            >
              calendar_today
            </span>
            <span className="font-label-sm text-label-sm tracking-wide">
              Horários
            </span>
          </button>

          <button
            onClick={() => handleNavigate('evolucao')}
            className={`flex flex-col items-center justify-center gap-1 w-16 h-14 transition-colors ${
              activeTab === 'evolucao'
                ? 'text-primary font-bold'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span
              className="material-symbols-outlined text-[24px]"
              style={{
                fontVariationSettings:
                  activeTab === 'evolucao' ? "'FILL' 1" : "'FILL' 0",
              }}
            >
              workspace_premium
            </span>
            <span className="font-label-sm text-label-sm tracking-wide">
              Evolução
            </span>
          </button>

          <button
            onClick={() => handleNavigate('tecnicas')}
            className={`flex flex-col items-center justify-center gap-1 w-16 h-14 transition-colors ${
              activeTab === 'tecnicas'
                ? 'text-primary font-bold'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span
              className="material-symbols-outlined text-[24px]"
              style={{
                fontVariationSettings:
                  activeTab === 'tecnicas' ? "'FILL' 1" : "'FILL' 0",
              }}
            >
              video_library
            </span>
            <span className="font-label-sm text-label-sm tracking-wide">
              Técnicas
            </span>
          </button>
        </div>
      </nav>

      {/* Interactive Sparring Timer Modal */}
      <SparringTimerModal
        isOpen={isTimerOpen}
        onClose={() => setIsTimerOpen(false)}
      />

      {/* Direct HTML Image Links Modal */}
      <ImageLinksModal
        isOpen={isImageLinksOpen}
        onClose={() => setIsImageLinksOpen(false)}
      />
    </div>
  );
}
