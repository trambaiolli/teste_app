import React, { useState } from 'react';
import { HTML_IMAGES } from '../data/bjjData';
import { SafeImage } from '../components/SafeImage';

interface InicioScreenProps {
  onNavigate: (tab: 'inicio' | 'horarios' | 'evolucao' | 'tecnicas') => void;
  onOpenTimer: () => void;
  onOpenImageLinks: () => void;
}

export const InicioScreen: React.FC<InicioScreenProps> = ({
  onNavigate,
  onOpenTimer,
  onOpenImageLinks,
}) => {
  const [checkinState, setCheckinState] = useState<'idle' | 'loading' | 'done'>('idle');
  const [showHistoryLog, setShowHistoryLog] = useState(false);
  const [showClassDetails, setShowClassDetails] = useState(false);
  const [classCancelled, setClassCancelled] = useState(false);
  const [seminarReserved, setSeminarReserved] = useState(false);
  const [showShopModal, setShowShopModal] = useState(false);

  const handleCheckin = () => {
    if (checkinState !== 'idle') return;
    setCheckinState('loading');
    setTimeout(() => {
      setCheckinState('done');
    }, 800);
  };

  return (
    <div className="flex flex-col w-full pb-8">
      {/* Top Greeting & Belt Summary Banner */}
      <section className="px-margin pt-space-sm pb-space-md">
        <div className="flex items-center justify-between">
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
                Pronto para o Tatame
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-tertiary"></span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-0.5">
              Oss, Gabriel!
            </h1>
            <div className="flex items-center gap-2 mt-1 flex-wrap">
              <span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#8b5cf6]"></span>
                Faixa Roxa (2º Grau)
              </span>
              <span className="text-on-surface-variant/40 text-xs">•</span>
              <span className="font-label-sm text-label-sm text-tertiary px-1.5 py-0.5 rounded bg-tertiary-container/20">
                Membro Ativo
              </span>
            </div>
          </div>
          <button
            onClick={() => onNavigate('evolucao')}
            aria-label="Ver evolução de faixa"
            className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary shadow-sm active:scale-95 transition-transform"
          >
            <span
              className="material-symbols-outlined text-[28px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              workspace_premium
            </span>
          </button>
        </div>
      </section>

      {/* Hero Card: Check-in no Tatame */}
      <section className="px-margin mb-space-lg">
        <div className="relative overflow-hidden rounded-xl bg-surface-container-high p-space-md shadow-lg">
          <div className="absolute -right-8 -top-8 w-36 h-36 rounded-full bg-primary-container/10 blur-2xl pointer-events-none"></div>
          <div className="flex items-center justify-between mb-space-sm">
            <div className="flex items-center gap-space-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-tertiary"></span>
              </span>
              <span className="font-label-md text-label-md text-tertiary uppercase tracking-wider">
                Tatame Aberto
              </span>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-0.5 rounded">
              Treino das 19h00
            </span>
          </div>
          <div className="mb-space-md">
            <h2 className="font-headline-md text-headline-md text-on-surface">
              Check-in de Presença
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              Aproxime-se do tatame ou escaneie o QR da recepção para confirmar seu rola.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleCheckin}
              disabled={checkinState !== 'idle'}
              className={`flex-1 h-14 font-label-lg text-label-lg rounded-xl flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all ${
                checkinState === 'done'
                  ? 'bg-tertiary-container text-on-tertiary-container'
                  : 'bg-gradient-to-r from-primary-container to-primary text-on-primary-container'
              } ${checkinState === 'loading' ? 'opacity-75' : ''}`}
            >
              {checkinState === 'idle' && (
                <>
                  <span className="material-symbols-outlined text-[24px]">qr_code_scanner</span>
                  <span>Fazer Check-in Agora</span>
                </>
              )}
              {checkinState === 'loading' && (
                <>
                  <span className="material-symbols-outlined text-[24px] animate-spin">refresh</span>
                  <span>Validando Presença...</span>
                </>
              )}
              {checkinState === 'done' && (
                <>
                  <span className="material-symbols-outlined text-[24px]">verified</span>
                  <span>Check-in Realizado!</span>
                </>
              )}
            </button>
            <button
              onClick={() => setShowHistoryLog((prev) => !prev)}
              aria-label="Histórico de presença"
              className={`w-14 h-14 rounded-xl flex items-center justify-center active:scale-95 transition-all ${
                showHistoryLog
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-[22px]">how_to_reg</span>
            </button>
          </div>

          {/* Feedback container */}
          {checkinState === 'done' && (
            <div className="mt-3 p-3 rounded-lg bg-tertiary-container/20 text-tertiary flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px]">check_circle</span>
              <span className="font-label-sm text-label-sm">
                Presença confirmada no treino de hoje! Bom rola!
              </span>
            </div>
          )}

          {/* Recent check-in log toggle */}
          {showHistoryLog && (
            <div className="mt-3 p-3 rounded-lg bg-surface-container flex flex-col gap-1.5 text-body-sm">
              <div className="flex items-center justify-between text-on-surface font-medium">
                <span>Últimos Check-ins Validados</span>
                <span className="text-tertiary font-label-sm">18 este mês</span>
              </div>
              <div className="flex items-center justify-between text-on-surface-variant text-xs">
                <span>Hoje • 07:00 - BJJ Matinal (Gi)</span>
                <span className="text-tertiary">✓ Validado</span>
              </div>
              <div className="flex items-center justify-between text-on-surface-variant text-xs">
                <span>Ontem • 19:30 - BJJ Avançado (Gi)</span>
                <span className="text-tertiary">✓ Validado</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Progress Bar: Belt Graduation Path */}
      <section className="px-margin mb-space-lg">
        <div
          onClick={() => onNavigate('evolucao')}
          className="rounded-xl bg-surface-container p-space-md shadow-sm cursor-pointer hover:bg-surface-container-high/60 transition-colors"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px] text-primary">
                military_tech
              </span>
              <span className="font-headline-sm text-headline-sm text-on-surface">
                Rumo ao 3º Grau
              </span>
            </div>
            <span className="font-label-lg text-label-lg text-primary">70%</span>
          </div>
          {/* Visual BJJ Belt Component */}
          <div className="relative w-full h-8 rounded-lg bg-[#6d28d9] shadow-inner flex items-center justify-end overflow-hidden mb-3">
            <div className="absolute inset-x-0 top-1 border-t border-white/20"></div>
            <div className="absolute inset-x-0 bottom-1 border-b border-black/30"></div>
            <div className="h-full w-24 bg-surface-container-lowest flex items-center justify-evenly px-1.5 shadow-md">
              <div className="w-1.5 h-6 bg-surface-bright rounded-sm shadow-sm"></div>
              <div className="w-1.5 h-6 bg-surface-bright rounded-sm shadow-sm"></div>
              <div className="w-1.5 h-6 bg-surface-bright/20 rounded-sm"></div>
              <div className="w-1.5 h-6 bg-surface-bright/20 rounded-sm"></div>
            </div>
          </div>
          {/* Progression Stats Grid */}
          <div className="grid grid-cols-2 gap-space-sm pt-1">
            <div className="bg-surface-container-low p-2.5 rounded-lg flex flex-col">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                Aulas Concluídas
              </span>
              <span className="font-headline-sm text-headline-sm text-on-surface mt-0.5 tabular-nums">
                {checkinState === 'done' ? 85 : 84}{' '}
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  / 120 treinos
                </span>
              </span>
            </div>
            <div className="bg-surface-container-low p-2.5 rounded-lg flex flex-col">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                Meta Semanal
              </span>
              <div className="flex items-center justify-between mt-0.5">
                <span className="font-headline-sm text-headline-sm text-on-surface tabular-nums">
                  {checkinState === 'done' ? 5 : 4}{' '}
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    / 5 dias
                  </span>
                </span>
                <span className="text-tertiary text-xs font-semibold flex items-center">
                  <span className="material-symbols-outlined text-[16px]">
                    local_fire_department
                  </span>
                  Firme
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Scheduled Class Card */}
      <section className="px-margin mb-space-lg">
        <div className="flex items-center justify-between mb-space-sm">
          <h2 className="font-headline-sm text-headline-sm text-on-surface">Próxima Aula</h2>
          <button
            onClick={() => onNavigate('horarios')}
            className="font-label-md text-label-md text-primary hover:underline"
          >
            Ver Grade
          </button>
        </div>
        <div className="rounded-xl bg-surface-container p-space-md shadow-sm flex flex-col gap-space-sm">
          <div className="flex items-start justify-between">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-primary-container/20 text-primary-container uppercase font-bold tracking-wide">
                  Com Kimono (Gi)
                </span>
                <span className="font-label-sm text-label-sm text-tertiary">Hoje • 19:30</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface">
                BJJ Avançado & Sparring
              </h3>
              <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Foco: Passagem de Guarda Emborcando
              </span>
            </div>
            <span className="material-symbols-outlined text-primary text-[28px]">
              sports_martial_arts
            </span>
          </div>
          {/* Instructor & Capacity Rail */}
          <div className="flex items-center justify-between bg-surface-container-low p-space-sm rounded-lg mt-1">
            <div className="flex items-center gap-space-xs">
              <SafeImage
                className="w-9 h-9 rounded-full object-cover"
                alt="Mestre Almeida"
                src={HTML_IMAGES.mestreAlmeida}
              />
              <div className="flex flex-col min-w-0">
                <span className="font-label-md text-label-md text-on-surface truncate">
                  Mestre Almeida
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Faixa Preta 4º Grau
                </span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Tatame Lotando
              </span>
              <span className="font-label-md text-label-md text-on-surface font-semibold tabular-nums">
                {classCancelled ? 17 : 18} / 25{' '}
                <span className="font-normal text-on-surface-variant text-xs">vagas</span>
              </span>
            </div>
          </div>

          {showClassDetails && (
            <div className="p-3 rounded-lg bg-surface-container-low text-body-sm text-on-surface-variant flex flex-col gap-1">
              <span className="text-on-surface font-semibold">Estrutura do Treino (90 min):</span>
              <span>• 15 min: Aquecimento específico de quadril e reposição</span>
              <span>• 35 min: Estudo técnico de Passagem Emborcando com ajuste de lapela</span>
              <span>• 40 min: 6 rounds de 6 min (Sparring específico e livre)</span>
            </div>
          )}

          {/* Class Actions */}
          <div className="flex items-center gap-space-sm pt-1">
            <button
              onClick={() => setShowClassDetails((prev) => !prev)}
              className="flex-1 h-11 bg-surface-container-highest text-on-surface font-label-md text-label-md rounded-lg flex items-center justify-center gap-1 active:scale-95 transition-transform"
            >
              <span className="material-symbols-outlined text-[18px]">info</span>
              {showClassDetails ? 'Ocultar Detalhes' : 'Ver Detalhes'}
            </button>
            <button
              onClick={() => setClassCancelled((prev) => !prev)}
              className={`px-4 h-11 font-label-md text-label-md rounded-lg flex items-center justify-center gap-1 active:scale-95 transition-transform ${
                classCancelled
                  ? 'bg-tertiary-container/20 text-tertiary'
                  : 'bg-surface-container-low text-error'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">
                {classCancelled ? 'undo' : 'close'}
              </span>
              {classCancelled ? 'Reativar Vaga' : 'Cancelar'}
            </button>
          </div>
        </div>
      </section>

      {/* Quick Tactical Tools */}
      <section className="px-margin mb-space-lg">
        <h2 className="font-headline-sm text-headline-sm text-on-surface mb-space-sm">
          Acesso Rápido
        </h2>
        <div className="grid grid-cols-2 gap-space-sm">
          <button
            onClick={onOpenTimer}
            className="bg-surface-container p-space-md rounded-xl flex flex-col justify-between h-28 shadow-sm cursor-pointer active:scale-95 transition-transform text-left hover:bg-surface-container-high"
          >
            <div className="flex items-center justify-between w-full">
              <div className="w-9 h-9 rounded-lg bg-primary-container/20 text-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">timer</span>
              </div>
              <span className="font-label-sm text-label-sm text-primary uppercase">Treino</span>
            </div>
            <div>
              <span className="font-headline-sm text-headline-sm text-on-surface block">
                Timer de Rola
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                5 min + 1 min descanso
              </span>
            </div>
          </button>
          <button
            onClick={() => onNavigate('evolucao')}
            className="bg-surface-container p-space-md rounded-xl flex flex-col justify-between h-28 shadow-sm cursor-pointer active:scale-95 transition-transform text-left hover:bg-surface-container-high"
          >
            <div className="flex items-center justify-between w-full">
              <div className="w-9 h-9 rounded-lg bg-tertiary-container/20 text-tertiary flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">menu_book</span>
              </div>
              <span className="font-label-sm text-label-sm text-tertiary uppercase">Anotações</span>
            </div>
            <div>
              <span className="font-headline-sm text-headline-sm text-on-surface block">
                Caderno BJJ
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                42 técnicas salvas
              </span>
            </div>
          </button>
        </div>
      </section>

      {/* Dojo Announcements & Seminars */}
      <section className="px-margin">
        <div className="flex items-center justify-between mb-space-sm">
          <h2 className="font-headline-sm text-headline-sm text-on-surface">Avisos do Dojo</h2>
          <button
            onClick={onOpenImageLinks}
            className="font-label-sm text-label-sm text-primary uppercase tracking-wider flex items-center gap-1 hover:underline"
          >
            <span className="material-symbols-outlined text-[14px]">link</span>
            Quadro Geral • Links HTML
          </button>
        </div>
        <div className="flex flex-col gap-space-sm">
          {/* Seminar Banner Card */}
          <div className="relative overflow-hidden rounded-xl bg-surface-container shadow-sm flex flex-col">
            <div className="relative h-28 w-full bg-surface-container-high">
              <SafeImage
                className="w-full h-full object-cover"
                alt="High-intensity Brazilian Jiu-Jitsu tournament scene with two athletes grappling aggressively on modern mat"
                src={HTML_IMAGES.seminarioEspecial}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/60 to-transparent"></div>
              <span className="absolute top-2 left-2 bg-secondary-container text-on-secondary-container font-label-sm text-label-sm px-2 py-0.5 rounded uppercase font-bold tracking-wider">
                Seminário Especial
              </span>
              <span className="absolute bottom-2 left-3 font-label-sm text-label-sm text-primary font-bold">
                25 de Novembro • Sábado
              </span>
            </div>
            <div className="p-space-md">
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Passagem de Guarda Moderna com Campeão Mundial
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Aprenda os segredos da pressão moderna e ajustes milimétricos. Inscrições abertas na secretaria.
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="font-label-md text-label-md text-on-surface font-semibold">
                  Lote Promocional: R$ 120
                </span>
                <button
                  onClick={() => setSeminarReserved((prev) => !prev)}
                  className={`h-9 px-3.5 font-label-sm text-label-sm rounded-lg active:scale-95 transition-all font-bold flex items-center gap-1 ${
                    seminarReserved
                      ? 'bg-tertiary-container text-on-tertiary-container'
                      : 'bg-primary-container text-on-primary-container'
                  }`}
                >
                  {seminarReserved ? (
                    <>
                      <span className="material-symbols-outlined text-[16px]">check</span>
                      Vaga Pré-Reservada
                    </>
                  ) : (
                    'Garantir Vaga'
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Gear / Pro Shop Notice */}
          <div
            onClick={() => setShowShopModal((prev) => !prev)}
            className="rounded-xl bg-surface-container p-space-md flex flex-col gap-space-sm shadow-sm cursor-pointer hover:bg-surface-container-high transition-colors"
          >
            <div className="flex items-center gap-space-md">
              <div className="w-16 h-16 rounded-lg bg-surface-container-low overflow-hidden flex-shrink-0">
                <SafeImage
                  className="w-full h-full object-cover"
                  alt="Premium navy and black Laptop JJ academy kimono uniform folded"
                  src={HTML_IMAGES.kimonoLoja}
                />
              </div>
              <div className="flex flex-col flex-1 min-w-0">
                <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                  Loja Oficial
                </span>
                <h4 className="font-headline-sm text-headline-sm text-on-surface truncate">
                  Novo lote de Kimonos Laptop JJ
                </h4>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  Edição limitada 2024 disponível na recepção.
                </span>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant text-[20px]">
                {showShopModal ? 'expand_less' : 'chevron_right'}
              </span>
            </div>

            {showShopModal && (
              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-body-sm text-on-surface-variant">
                <span>Tamanhos disponíveis: A0, A1, A2, A3 (Trançado 450g/m²)</span>
                <span className="text-primary font-bold">R$ 580</span>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
