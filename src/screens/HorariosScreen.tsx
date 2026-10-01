import React, { useState } from 'react';

interface ToastData {
  visible: boolean;
  title: string;
  subtitle: string;
}

export const HorariosScreen: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<number>(19);
  const [activeTag, setActiveTag] = useState<string>('all');
  const [nogiChecked, setNogiChecked] = useState<boolean>(false);
  const [fundamentosReserved, setFundamentosReserved] = useState<boolean>(false);
  const [mainCheckedIn, setMainCheckedIn] = useState<boolean>(false);
  const [openMatReserved, setOpenMatReserved] = useState<boolean>(false);
  const [toast, setToast] = useState<ToastData>({
    visible: false,
    title: 'Presença Confirmada!',
    subtitle: 'Bom treino no tatame. Oss!',
  });

  const triggerToast = (title: string, subtitle: string) => {
    setToast({ visible: true, title, subtitle });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 3200);
  };

  const days = [
    { label: 'Seg', num: 18, dot: 'bg-surface-container-highest', isToday: false },
    { label: 'Ter', num: 19, dot: 'bg-on-primary', isToday: true },
    { label: 'Qua', num: 20, dot: 'bg-primary/40', isToday: false },
    { label: 'Qui', num: 21, dot: 'bg-primary/40', isToday: false },
    { label: 'Sex', num: 22, dot: 'bg-surface-container-highest', isToday: false },
    { label: 'Sáb', num: 23, dot: 'bg-primary/40', isToday: false },
    { label: 'Dom', num: 24, dot: 'bg-transparent', isToday: false, muted: true },
  ];

  const tags = [
    { id: 'all', label: 'Todos' },
    { id: 'gi', label: 'Com Kimono (Gi)', dotColor: 'bg-outline' },
    { id: 'nogi', label: 'Sem Kimono (No-Gi)', dotColor: 'bg-secondary-container' },
    { id: 'fundamentos', label: 'Fundamentos' },
    { id: 'avancado', label: 'Avançado' },
    { id: 'openmat', label: 'Open Mat' },
    { id: 'kids', label: 'Kids' },
  ];

  const matchesFilter = (cardTags: string[]) => {
    if (activeTag === 'all') return true;
    return cardTags.includes(activeTag);
  };

  return (
    <div className="flex flex-col w-full pb-8">
      {/* Interactive Feedback Banner Notification */}
      <div
        className={`fixed top-20 inset-x-4 max-w-md mx-auto z-50 transform transition-all duration-300 ease-out bg-primary text-on-primary p-space-md rounded-xl shadow-2xl flex items-center justify-between ${
          toast.visible
            ? 'translate-y-0 opacity-100'
            : '-translate-y-24 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-space-sm">
          <span
            className="material-symbols-outlined text-headline-sm"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            check_circle
          </span>
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-on-primary leading-tight">
              {toast.title}
            </span>
            <span className="font-body-sm text-body-sm text-on-primary-container">
              {toast.subtitle}
            </span>
          </div>
        </div>
        <span className="material-symbols-outlined text-[20px] opacity-75">
          sports_martial_arts
        </span>
      </div>

      {/* Weekly Horizontal Date Picker */}
      <div className="flex flex-col pt-space-md pb-space-sm">
        <div className="flex items-center justify-between px-margin mb-space-sm">
          <div className="flex items-center gap-space-xs">
            <span className="font-headline-sm text-headline-sm text-on-surface">
              Outubro 2024
            </span>
            <span className="font-label-md text-label-md px-2 py-0.5 rounded-full bg-surface-container-high text-primary">
              Semana 42
            </span>
          </div>
          <button
            onClick={() => setSelectedDay(19)}
            aria-label="Calendário completo"
            className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">calendar_month</span>
          </button>
        </div>

        {/* Date Scroller */}
        <div className="flex gap-space-xs overflow-x-auto px-margin scrollbar-none py-1">
          {days.map((day) => {
            const isActive = selectedDay === day.num;
            if (isActive) {
              return (
                <button
                  key={day.num}
                  onClick={() => setSelectedDay(day.num)}
                  className="relative flex flex-col items-center justify-center min-w-[58px] h-[72px] rounded-xl bg-primary text-on-primary shadow-lg shadow-primary-container/20 ring-0 transition-transform active:scale-95"
                >
                  <span className="font-label-sm text-label-sm uppercase font-bold tracking-wider text-on-primary-container">
                    {day.label}
                  </span>
                  <span className="font-headline-md text-headline-md text-on-primary font-bold mt-0.5 tabular-nums">
                    {day.num}
                  </span>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-on-primary"></span>
                    <span className="font-label-sm text-[9px] uppercase tracking-tighter font-extrabold text-on-primary">
                      {day.isToday ? 'Hoje' : 'Ativo'}
                    </span>
                  </div>
                </button>
              );
            }
            return (
              <button
                key={day.num}
                onClick={() => setSelectedDay(day.num)}
                className={`flex flex-col items-center justify-center min-w-[52px] h-[72px] rounded-xl bg-surface-container-low text-on-surface-variant hover:bg-surface-container transition-all ${
                  day.muted ? 'opacity-60' : ''
                }`}
              >
                <span className="font-label-sm text-label-sm uppercase opacity-75">
                  {day.label}
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface mt-1 tabular-nums">
                  {day.num}
                </span>
                <span className={`w-1.5 h-1.5 rounded-full ${day.dot} mt-1.5`}></span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tag Category Filter Chips */}
      <div className="flex gap-space-xs overflow-x-auto px-margin py-space-sm scrollbar-none">
        {tags.map((tag) => {
          const isActive = activeTag === tag.id;
          return (
            <button
              key={tag.id}
              onClick={() => setActiveTag(tag.id)}
              className={`px-3.5 py-1.5 rounded-full font-label-md text-label-md whitespace-nowrap transition-all flex items-center gap-1.5 ${
                isActive
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'bg-surface-container text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {tag.dotColor && (
                <span
                  className={`w-2 h-2 rounded-full ${
                    isActive ? 'bg-on-primary' : tag.dotColor
                  }`}
                ></span>
              )}
              {tag.label}
            </button>
          );
        })}
      </div>

      {/* Class Schedule Feed */}
      <div className="flex flex-col px-margin gap-space-md mt-space-xs">
        {/* Card 1: BJJ Matinal (Concluído) */}
        {matchesFilter(['gi', 'fundamentos', 'avancado']) && (
          <div className="class-card bg-surface-container-low rounded-xl p-space-md flex flex-col gap-space-sm opacity-75 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-sm">
                <span className="font-headline-sm text-headline-sm text-on-surface tabular-nums">
                  07:00 - 08:15
                </span>
                <span className="px-2 py-0.5 rounded-full bg-surface-container text-outline font-label-sm text-label-sm uppercase">
                  GI
                </span>
              </div>
              <div className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm bg-tertiary-container/20 px-2.5 py-1 rounded-full">
                <span
                  className="material-symbols-outlined text-[14px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
                <span>Presença Confirmada</span>
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                BJJ Matinal - Todas as Faixas
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-5 h-5 rounded-full bg-surface-container-highest flex items-center justify-center text-[10px] text-primary font-bold">
                  LS
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Prof. Lucas Silveira • Faixa Preta 2º Grau
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between pt-space-xs border-t-0 bg-surface-container/40 p-2.5 rounded-lg mt-1">
              <div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
                <span className="material-symbols-outlined text-[16px] text-tertiary">
                  check_circle
                </span>
                <span>Sua presença foi validada no tatame</span>
              </div>
              <span className="font-label-sm text-label-sm text-outline-variant font-mono">
                18 ALUNOS
              </span>
            </div>
          </div>
        )}

        {/* Card 2: No-Gi Express (Check-in Feito) */}
        {matchesFilter(['nogi']) && (
          <div className="class-card bg-surface-container rounded-xl p-space-md flex flex-col gap-space-sm shadow-md transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-sm">
                <span className="font-headline-sm text-headline-sm text-on-surface tabular-nums">
                  12:15 - 13:15
                </span>
                <span className="px-2 py-0.5 rounded-full bg-secondary-container/30 text-secondary font-label-sm text-label-sm uppercase tracking-wide">
                  NO-GI
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-on-surface-variant font-label-sm text-label-sm tabular-nums">
                <span className="material-symbols-outlined text-[16px] text-primary">
                  group
                </span>
                <span className="text-on-surface font-semibold">14</span>/20 inscritos
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                No-Gi Express / Luta Livre
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-5 h-5 rounded-full bg-surface-container-highest flex items-center justify-center text-[10px] text-secondary font-bold">
                  RC
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Prof. Rafael Costa • Rashguard obrigatória
                </span>
              </div>
            </div>
            {/* Capacity Progress Meter */}
            <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-secondary-container h-full rounded-full"
                style={{ width: '70%' }}
              ></div>
            </div>
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px]">how_to_reg</span>
                <span>Você está na lista</span>
              </div>
              <button
                onClick={() => {
                  const nextState = !nogiChecked;
                  setNogiChecked(nextState);
                  if (nextState) {
                    triggerToast('Presença Registrada', 'No-Gi Express atualizado.');
                  }
                }}
                className={`px-4 py-2 rounded-lg font-label-md text-label-md flex items-center gap-1.5 active:scale-95 transition-all ${
                  nogiChecked
                    ? 'bg-tertiary-container text-on-tertiary-container'
                    : 'bg-surface-container-high text-on-surface hover:bg-surface-container-highest'
                }`}
              >
                <span
                  className={`material-symbols-outlined text-[16px] ${
                    nogiChecked ? '' : 'text-tertiary'
                  }`}
                >
                  {nogiChecked ? 'check_circle' : 'check'}
                </span>
                <span>{nogiChecked ? 'Confirmado' : 'Check-in Feito'}</span>
              </button>
            </div>
          </div>
        )}

        {/* Card 3: Fundamentos & Defesa Pessoal */}
        {matchesFilter(['gi', 'fundamentos']) && (
          <div className="class-card bg-surface-container rounded-xl p-space-md flex flex-col gap-space-sm shadow-md transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-sm">
                <span className="font-headline-sm text-headline-sm text-on-surface tabular-nums">
                  18:00 - 19:15
                </span>
                <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-tertiary font-label-sm text-label-sm uppercase">
                  Fundamentos
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-on-surface-variant font-label-sm text-label-sm tabular-nums">
                <span className="material-symbols-outlined text-[16px] text-outline">
                  group
                </span>
                <span className="text-on-surface font-semibold">
                  {fundamentosReserved ? 13 : 12}
                </span>
                /25 vagas
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Fundamentos & Defesa Pessoal
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-5 h-5 rounded-full bg-surface-container-highest flex items-center justify-center text-[10px] text-primary font-bold">
                  MA
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Mestre Almeida • Foco: Passagem de Guarda
                </span>
              </div>
            </div>
            {/* Capacity Progress Meter */}
            <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-tertiary-container h-full rounded-full transition-all"
                style={{ width: fundamentosReserved ? '52%' : '48%' }}
              ></div>
            </div>
            <div className="flex items-center justify-between pt-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Kimono branco ou azul
              </span>
              <button
                onClick={() => {
                  const nextState = !fundamentosReserved;
                  setFundamentosReserved(nextState);
                  if (nextState) {
                    triggerToast(
                      'Vaga Reservada!',
                      'Aula de Fundamentos adicionada à sua agenda.'
                    );
                  }
                }}
                className={`px-5 py-2.5 rounded-lg font-label-md text-label-md flex items-center gap-1 active:scale-95 transition-all ${
                  fundamentosReserved
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container-high hover:bg-surface-bright text-primary'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">
                  {fundamentosReserved ? 'check' : 'bookmark_add'}
                </span>
                <span>{fundamentosReserved ? 'Reservado' : 'Reservar Vaga'}</span>
              </button>
            </div>
          </div>
        )}

        {/* Card 4 (DESTAQUE): Jiu-Jitsu Avançado & Sparring (Rola) */}
        {matchesFilter(['gi', 'avancado']) && (
          <div className="class-card relative overflow-hidden bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-low rounded-2xl p-space-md shadow-xl flex flex-col gap-space-md">
            {/* Glow Accent Ring */}
            <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/10 blur-2xl pointer-events-none"></div>
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-space-sm">
                <span className="font-headline-md text-headline-md text-primary tabular-nums">
                  19:30 - 21:00
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm uppercase tracking-wider font-extrabold">
                  GI • AVANÇADO
                </span>
              </div>
              <div className="flex items-center gap-1 text-primary bg-primary/15 px-2.5 py-1 rounded-full font-label-sm text-label-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                <span>Quase Lotado</span>
              </div>
            </div>
            <div className="flex flex-col relative z-10">
              <div className="flex items-center justify-between">
                <h3 className="font-headline-md text-headline-md text-on-surface font-extrabold tracking-tight">
                  Jiu-Jitsu Avançado & Sparring
                </h3>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Estudo situacional de Berimbolo + 6 rounds de 6 minutos.
              </p>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-6 h-6 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-stat-counter text-[11px] font-black">
                  MA
                </div>
                <span className="font-body-sm text-body-sm text-on-surface font-medium">
                  Mestre Almeida • Tatame Principal A
                </span>
              </div>
            </div>
            {/* Capacity Visual Indicator */}
            <div className="flex flex-col gap-1 relative z-10 bg-surface-container-lowest/60 p-space-sm rounded-xl">
              <div className="flex items-center justify-between text-body-sm">
                <span className="text-on-surface-variant font-label-sm text-label-sm uppercase">
                  Ocupação do Tatame
                </span>
                <span className="font-label-md text-label-md text-primary font-bold tabular-nums">
                  {mainCheckedIn
                    ? '23 / 25 Atletas (2 Vagas)'
                    : '22 / 25 Atletas (3 Vagas)'}
                </span>
              </div>
              <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden flex">
                <div
                  className="bg-gradient-to-r from-primary to-primary-container h-full rounded-full transition-all duration-500"
                  style={{ width: mainCheckedIn ? '92%' : '88%' }}
                ></div>
              </div>
            </div>
            {/* CTA Principal Prominente */}
            <button
              onClick={() => {
                if (mainCheckedIn) return;
                setMainCheckedIn(true);
                triggerToast(
                  'Check-in Confirmado!',
                  'Tatame Avançado • 19:30. Bom rola!'
                );
              }}
              disabled={mainCheckedIn}
              className={`w-full h-14 rounded-xl font-headline-sm text-headline-sm font-extrabold flex items-center justify-center gap-2 shadow-lg transition-all relative z-10 ${
                mainCheckedIn
                  ? 'bg-tertiary-container text-on-tertiary-container'
                  : 'bg-gradient-to-r from-primary-container to-primary hover:brightness-110 active:scale-[0.98] text-on-primary-container shadow-primary-container/30'
              }`}
            >
              <span className="material-symbols-outlined text-[24px]">
                {mainCheckedIn ? 'check_circle' : 'sports_martial_arts'}
              </span>
              <span>
                {mainCheckedIn
                  ? 'Presença Confirmada!'
                  : 'Confirmar Presença (Check-in)'}
              </span>
            </button>
          </div>
        )}

        {/* Card 5: Open Mat Livre */}
        {matchesFilter(['gi', 'nogi', 'openmat']) && (
          <div className="class-card bg-surface-container rounded-xl p-space-md flex flex-col gap-space-sm shadow-md transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-sm">
                <span className="font-headline-sm text-headline-sm text-on-surface tabular-nums">
                  21:00 - 22:00
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-primary/20 text-primary font-label-sm text-label-sm uppercase tracking-wide">
                  OPEN MAT
                </span>
              </div>
              <div className="flex items-center gap-1 font-label-sm text-label-sm text-tertiary">
                <span className="material-symbols-outlined text-[16px]">
                  all_inclusive
                </span>
                <span>Livre p/ Todos</span>
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Open Mat Livre Supervisionado
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Tatame aberto para treino de finalizações, repetições técnicas ou rolas livres. Válido para todas as faixas.
              </p>
            </div>
            <div className="flex items-center justify-between pt-space-xs mt-1">
              <div className="flex items-center gap-2">
                <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant">
                  Gi & No-Gi
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Supervisão: Monitores
                </span>
              </div>
              <button
                onClick={() => {
                  const nextState = !openMatReserved;
                  setOpenMatReserved(nextState);
                  if (nextState) {
                    triggerToast(
                      'Vaga Reservada!',
                      'Aula de Open Mat adicionada à sua agenda.'
                    );
                  }
                }}
                className={`px-5 py-2.5 rounded-lg font-label-md text-label-md flex items-center gap-1.5 active:scale-95 transition-all ${
                  openMatReserved
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container-high hover:bg-surface-bright text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">
                  {openMatReserved ? 'check' : 'event_available'}
                </span>
                <span>{openMatReserved ? 'Reservado' : 'Reservar'}</span>
              </button>
            </div>
          </div>
        )}

        {/* Kids class when Kids tag is selected */}
        {activeTag === 'kids' && (
          <div className="class-card bg-surface-container rounded-xl p-space-md flex flex-col gap-space-sm shadow-md transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-sm">
                <span className="font-headline-sm text-headline-sm text-on-surface tabular-nums">
                  16:30 - 17:30
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm uppercase tracking-wide">
                  KIDS (6 A 12 ANOS)
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                15 / 20 inscritos
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">
              BJJ Kids • Disciplina & Coordenação
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Prof. Lucas Silveira • Jogos educativos de solo e defesa anti-bullying.
            </p>
          </div>
        )}
      </div>

      {/* Mat Rules & Etiquette Card Footer */}
      <div className="mx-margin mt-space-lg p-space-md rounded-xl bg-surface-container-low flex items-start gap-space-sm shadow-sm">
        <div className="w-8 h-8 rounded-full bg-surface-container-high text-primary flex items-center justify-center shrink-0 mt-0.5">
          <span className="material-symbols-outlined text-[18px]">verified_user</span>
        </div>
        <div className="flex flex-col">
          <span className="font-label-md text-label-md text-on-surface uppercase tracking-wide">
            Políticas do Tatame & Check-in
          </span>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
            Check-in liberado com até{' '}
            <strong className="text-on-surface">30 min de antecedência</strong> na
            geolocalização da academia. Cancelamento sem cômputo de falta até{' '}
            <strong className="text-on-surface">1h antes</strong> do início do treino.
          </p>
        </div>
      </div>
    </div>
  );
};
