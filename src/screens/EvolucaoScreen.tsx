import React, { useState } from 'react';
import { HTML_IMAGES } from '../data/bjjData';
import { SafeImage } from '../components/SafeImage';

export const EvolucaoScreen: React.FC = () => {
  const [reps, setReps] = useState({
    delariva: 94,
    triangulo: 76,
    toureando: 52,
  });

  const incrementRep = (key: keyof typeof reps) => {
    setReps((prev) => ({ ...prev, [key]: prev[key] + 1 }));
  };

  return (
    <div className="flex flex-col w-full px-margin pt-space-md pb-10 gap-space-lg">
      {/* Perfil do Aluno */}
      <div className="relative overflow-hidden rounded-xl bg-surface-container p-space-md shadow-xl">
        <div className="absolute -right-10 -top-10 w-44 h-44 rounded-full bg-primary-container/10 blur-3xl pointer-events-none"></div>
        <div className="flex items-start gap-space-md relative z-10">
          <div className="relative shrink-0">
            <SafeImage
              className="w-20 h-20 rounded-xl object-cover shadow-md"
              alt="Gabriel Santos Almeida"
              src={HTML_IMAGES.gabrielPortrait}
            />
            <div className="absolute -bottom-2 -right-1 bg-surface-container-highest px-2 py-0.5 rounded-full shadow flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-tertiary"></span>
              <span className="font-label-sm text-label-sm text-on-surface">ATIVO</span>
            </div>
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
                Matrícula #BJJ-1048
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-high px-2 py-0.5 rounded-md">
                Matriz
              </span>
            </div>
            <h1 className="font-headline-sm text-headline-sm text-on-surface truncate mt-0.5">
              Gabriel Santos Almeida
            </h1>
            <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              Laptop JJ Matriz • Carlson Team
            </span>
            <div className="flex items-center gap-1.5 mt-2 text-on-surface-variant">
              <span className="material-symbols-outlined text-[16px] text-primary">
                schedule
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Tempo de Tatame:{' '}
                <strong className="text-on-surface">4 anos e 8 meses</strong>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Faixa Atual & Meta de Graduação */}
      <div className="relative rounded-xl bg-surface-container p-space-md shadow-xl flex flex-col gap-space-md overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_rgba(245,158,11,0.6)]"></div>
            <span className="font-label-lg text-label-lg text-on-surface">
              Graduação Atual
            </span>
          </div>
          <span className="font-label-sm text-label-sm text-primary-fixed-dim bg-surface-container-highest px-2.5 py-1 rounded-full">
            Faixa Roxa • 2º Grau
          </span>
        </div>

        {/* Renderizador Tátil da Faixa Roxa BJJ */}
        <div className="relative w-full py-2">
          <div className="relative w-full h-12 rounded-lg bg-[#581c87] shadow-inner overflow-hidden flex items-center justify-end px-3">
            {/* Textura de trama de algodão grossa */}
            <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:6px_6px]"></div>
            {/* Costuras horizontais duplas da faixa */}
            <div className="absolute inset-x-0 top-2.5 h-[1px] bg-black/30"></div>
            <div className="absolute inset-x-0 bottom-2.5 h-[1px] bg-black/30"></div>
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-black/20"></div>
            {/* Ponteira Tradicional Preta com frisos vermelhos de instrutor */}
            <div className="relative z-10 w-28 h-full bg-[#0c0e12] flex items-center justify-around px-2 shadow-2xl">
              {/* Friso de ponta vermelho carmesim */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#b91c1c]"></div>
              <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#b91c1c]"></div>
              {/* Graus bordados brancos (2 graus) */}
              <div className="flex items-center justify-center gap-1.5 pl-1">
                <span className="w-1.5 h-8 bg-surface-bright shadow-[0_0_2px_rgba(255,255,255,0.8)] rounded-[1px]"></span>
                <span className="w-1.5 h-8 bg-surface-bright shadow-[0_0_2px_rgba(255,255,255,0.8)] rounded-[1px]"></span>
                {/* Espaços vazios para 3º e 4º graus */}
                <span className="w-1.5 h-8 bg-surface-container-highest/30 rounded-[1px]"></span>
                <span className="w-1.5 h-8 bg-surface-container-highest/30 rounded-[1px]"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-on-surface-variant text-[11px] pt-1">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px] text-tertiary">
              verified
            </span>
            Graduado em 14/Maio/2023
          </span>
          <span className="text-on-surface">Mestre Carlos Almeida</span>
        </div>

        {/* Progresso Próximo Grau */}
        <div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px] text-primary">
                flag
              </span>
              <span className="font-label-md text-label-md text-on-surface">
                Próximo Marco: 3º Grau da Faixa Roxa
              </span>
            </div>
            <span className="font-label-lg text-label-lg text-primary tabular-nums">
              70%
            </span>
          </div>
          {/* Barra Linear Fluida */}
          <div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary-container to-primary rounded-full"
              style={{ width: '70%' }}
            ></div>
          </div>
          <div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm pt-0.5 gap-2">
            <span className="flex items-center gap-1 text-on-surface shrink-0">
              <span className="material-symbols-outlined text-[14px] text-primary">
                fitness_center
              </span>
              Faltam <strong>36 treinos</strong>
            </span>
            <span className="text-on-surface-variant text-[11px] text-right">
              Avaliação: Guarda Aranha & Berimbolo
            </span>
          </div>
        </div>
      </div>

      {/* Métricas e Frequência do Guerreiro */}
      <div className="flex flex-col gap-space-sm">
        <div className="flex items-center justify-between">
          <span className="font-headline-sm text-headline-sm text-on-surface">
            Desempenho & Presença
          </span>
          <span className="font-label-sm text-label-sm text-primary uppercase">
            Mês Vigente
          </span>
        </div>
        <div className="grid grid-cols-2 gap-space-sm">
          {/* Card 1: Total Aulas */}
          <div className="bg-surface-container rounded-xl p-space-md flex flex-col justify-between shadow-md active:scale-[0.985] transition-transform">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                Total no Dojo
              </span>
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[18px]">
                  sports_martial_arts
                </span>
              </div>
            </div>
            <div className="mt-2">
              <span className="font-stat-counter text-stat-counter text-on-surface tabular-nums">
                348
              </span>
              <span className="block font-body-sm text-body-sm text-on-surface-variant">
                Aulas registradas
              </span>
            </div>
          </div>

          {/* Card 2: Aulas no Mês */}
          <div className="bg-surface-container rounded-xl p-space-md flex flex-col justify-between shadow-md active:scale-[0.985] transition-transform">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                Este Mês
              </span>
              <div className="w-8 h-8 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined text-[18px]">
                  calendar_month
                </span>
              </div>
            </div>
            <div className="mt-2">
              <span className="font-stat-counter text-stat-counter text-on-surface tabular-nums">
                18
              </span>
              <span className="block font-body-sm text-body-sm text-tertiary">
                Média 4.2 / semana
              </span>
            </div>
          </div>

          {/* Card 3: Taxa de Frequência */}
          <div className="bg-surface-container rounded-xl p-space-md flex flex-col justify-between shadow-md active:scale-[0.985] transition-transform">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                Constância
              </span>
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[18px]">
                  trending_up
                </span>
              </div>
            </div>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="font-stat-counter text-stat-counter text-on-surface tabular-nums">
                92%
              </span>
              <span className="font-label-sm text-label-sm text-tertiary font-bold">
                Meta batida
              </span>
            </div>
            <span className="block font-body-sm text-body-sm text-on-surface-variant">
              Presença mensal
            </span>
          </div>

          {/* Card 4: Seminários */}
          <div className="bg-surface-container rounded-xl p-space-md flex flex-col justify-between shadow-md active:scale-[0.985] transition-transform">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                Seminários
              </span>
              <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[18px]">
                  military_tech
                </span>
              </div>
            </div>
            <div className="mt-2">
              <span className="font-stat-counter text-stat-counter text-on-surface tabular-nums">
                14
              </span>
              <span className="block font-body-sm text-body-sm text-on-surface-variant">
                Workshops e Camps
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Linha do Tempo de Graduações */}
      <div className="flex flex-col gap-space-sm">
        <div className="flex items-center justify-between">
          <span className="font-headline-sm text-headline-sm text-on-surface">
            Jornada das Faixas
          </span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">
            Histórico Oficial
          </span>
        </div>
        <div className="bg-surface-container rounded-xl p-space-md shadow-md flex flex-col gap-space-md">
          {/* Item 1: Faixa Roxa (Atual) */}
          <div className="flex items-start gap-3 relative">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-[#a855f7] shadow-[0_0_8px_rgba(168,85,247,0.6)]"></div>
              <div className="w-0.5 h-14 bg-surface-container-highest my-1"></div>
            </div>
            <div className="flex-1 pb-1">
              <div className="flex items-center justify-between">
                <span className="font-label-lg text-label-lg text-on-surface">
                  Faixa Roxa (Atual)
                </span>
                <span className="font-label-sm text-label-sm bg-[#581c87] text-white px-2 py-0.5 rounded-full">
                  2 Graus
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Conquistada em Maio de 2023 • Foco em transições e finalizações na
                guarda aberta.
              </p>
            </div>
          </div>

          {/* Item 2: Faixa Azul */}
          <div className="flex items-start gap-3 relative">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-[#3b82f6]"></div>
              <div className="w-0.5 h-14 bg-surface-container-highest my-1"></div>
            </div>
            <div className="flex-1 pb-1">
              <div className="flex items-center justify-between">
                <span className="font-label-lg text-label-lg text-on-surface">
                  Faixa Azul
                </span>
                <span className="font-label-sm text-label-sm bg-surface-container-highest text-on-surface px-2 py-0.5 rounded-full">
                  4 Graus Concluídos
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Graduado em Outubro de 2021 • 18 meses de consolidação de guarda e
                passagens de pressão.
              </p>
            </div>
          </div>

          {/* Item 3: Faixa Branca */}
          <div className="flex items-start gap-3">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-slate-100"></div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-label-lg text-label-lg text-on-surface">
                  Faixa Branca
                </span>
                <span className="font-label-sm text-label-sm bg-surface-container-highest text-on-surface px-2 py-0.5 rounded-full">
                  Início da Jornada
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Fevereiro de 2019 • Fundamentos, sobrevivência, postura e defesa básica.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Caderno de Técnicas do Aluno & Golpes Favoritos */}
      <div className="flex flex-col gap-space-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[20px] text-primary">
              menu_book
            </span>
            <span className="font-headline-sm text-headline-sm text-on-surface">
              Caderno de Técnicas
            </span>
          </div>
          <span className="font-label-sm text-label-sm text-primary uppercase">
            Especialidades
          </span>
        </div>
        <div className="flex flex-col gap-2">
          {/* Técnica 1 */}
          <button
            onClick={() => incrementRep('delariva')}
            className="bg-surface-container rounded-xl p-space-sm flex items-center justify-between shadow-sm text-left hover:bg-surface-container-high active:scale-[0.99] transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[20px]">
                  all_inclusive
                </span>
              </div>
              <div>
                <h4 className="font-label-lg text-label-lg text-on-surface">
                  Guarda De La Riva
                </h4>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Raspagem de Gancho & Tomada de Costas
                </span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1 shrink-0 ml-2">
              <span className="font-label-sm text-label-sm text-tertiary bg-tertiary/10 px-2 py-0.5 rounded-md font-bold">
                Maestria A+
              </span>
              <span className="font-label-sm text-[10px] text-on-surface-variant tabular-nums">
                {reps.delariva} repetições
              </span>
            </div>
          </button>

          {/* Técnica 2 */}
          <button
            onClick={() => incrementRep('triangulo')}
            className="bg-surface-container rounded-xl p-space-sm flex items-center justify-between shadow-sm text-left hover:bg-surface-container-high active:scale-[0.99] transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[20px]">
                  change_circle
                </span>
              </div>
              <div>
                <h4 className="font-label-lg text-label-lg text-on-surface">
                  Triângulo da Montada
                </h4>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Finalização / Controle Superior
                </span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1 shrink-0 ml-2">
              <span className="font-label-sm text-label-sm text-primary bg-primary/10 px-2 py-0.5 rounded-md font-bold">
                Maestria A
              </span>
              <span className="font-label-sm text-[10px] text-on-surface-variant tabular-nums">
                {reps.triangulo} repetições
              </span>
            </div>
          </button>

          {/* Técnica 3 */}
          <button
            onClick={() => incrementRep('toureando')}
            className="bg-surface-container rounded-xl p-space-sm flex items-center justify-between shadow-sm text-left hover:bg-surface-container-high active:scale-[0.99] transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[20px]">
                  fast_forward
                </span>
              </div>
              <div>
                <h4 className="font-label-lg text-label-lg text-on-surface">
                  Passagem Toureando
                </h4>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Passagem Rápida & Domínio Lateral
                </span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1 shrink-0 ml-2">
              <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-highest px-2 py-0.5 rounded-md font-bold">
                Em Evolução
              </span>
              <span className="font-label-sm text-[10px] text-on-surface-variant tabular-nums">
                {reps.toureando} repetições
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Status Financeiro & Mensalidade */}
      <div className="rounded-xl bg-surface-container-low p-space-md flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-tertiary-container/20 flex items-center justify-center text-tertiary shrink-0">
            <span className="material-symbols-outlined text-[20px]">check_circle</span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-lg text-label-lg text-on-surface">
              Plano Black Belt Anual
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Próxima renovação: 15/Dez • Em dia
            </span>
          </div>
        </div>
        <span className="font-label-sm text-label-sm text-tertiary bg-surface-container px-2.5 py-1 rounded-full font-bold">
          PAGO ✓
        </span>
      </div>
    </div>
  );
};
