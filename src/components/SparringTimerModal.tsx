import React, { useState, useEffect } from 'react';

interface SparringTimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SparringTimerModal: React.FC<SparringTimerModalProps> = ({ isOpen, onClose }) => {
  const [roundDuration, setRoundDuration] = useState(300); // 5 min default
  const [restDuration] = useState(60); // 1 min rest
  const [remainingSeconds, setRemainingSeconds] = useState(300);
  const [isRunning, setIsRunning] = useState(false);
  const [isRestPhase, setIsRestPhase] = useState(false);
  const [currentRound, setCurrentRound] = useState(1);

  useEffect(() => {
    if (isOpen) {
      setIsRunning(true);
    } else {
      setIsRunning(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev > 1) {
          return prev - 1;
        }
        // Switch phase
        if (!isRestPhase) {
          setIsRestPhase(true);
          return restDuration;
        } else {
          setIsRestPhase(false);
          setCurrentRound((r) => r + 1);
          return roundDuration;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, isRestPhase, roundDuration, restDuration]);

  if (!isOpen) return null;

  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const handleReset = () => {
    setIsRunning(false);
    setIsRestPhase(false);
    setRemainingSeconds(roundDuration);
  };

  const handlePresetChange = (mins: number) => {
    const secs = mins * 60;
    setRoundDuration(secs);
    setIsRestPhase(false);
    setRemainingSeconds(secs);
    setIsRunning(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-surface-container-lowest/85 backdrop-blur-md flex items-center justify-center p-margin"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm bg-surface-container rounded-2xl p-space-lg flex flex-col items-center gap-space-md shadow-2xl relative border border-white/5"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Fechar cronômetro"
          className="absolute top-3 right-3 w-11 h-11 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div
          className={`w-14 h-14 rounded-full flex items-center justify-center ${
            isRestPhase ? 'bg-tertiary/20 text-tertiary' : 'bg-primary/20 text-primary'
          }`}
        >
          <span className="material-symbols-outlined text-[32px]">
            {isRestPhase ? 'self_improvement' : 'sports_kabaddi'}
          </span>
        </div>

        <div className="text-center">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">
            Cronômetro de Sparring • Round {currentRound}
          </span>
          <h3 className="font-headline-lg text-headline-lg text-on-surface mt-0.5">
            {isRestPhase ? 'Intervalo de Descanso' : 'Round de Combate'}
          </h3>
        </div>

        {/* Preset selector */}
        <div className="flex items-center gap-1.5 bg-surface-container-lowest p-1 rounded-xl">
          {[5, 6, 8].map((mins) => (
            <button
              key={mins}
              onClick={() => handlePresetChange(mins)}
              className={`px-3 py-1.5 rounded-lg font-label-sm text-label-sm transition-all ${
                roundDuration === mins * 60
                  ? 'bg-primary-container text-on-primary-container font-bold'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {mins} min
            </button>
          ))}
        </div>

        {/* Large Digits */}
        <div className="py-2">
          <span
            className={`font-stat-counter text-[56px] tracking-tight font-extrabold tabular-nums ${
              isRestPhase ? 'text-tertiary' : 'text-primary'
            }`}
          >
            {formattedTime}
          </span>
        </div>

        <div className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md">
          <span
            className={`w-2.5 h-2.5 rounded-full ${
              isRunning ? 'bg-tertiary animate-ping' : 'bg-outline'
            }`}
          ></span>
          <span>
            Modo: {Math.floor(roundDuration / 60)} min rola • 1 min intervalo
          </span>
        </div>

        <div className="flex items-center gap-space-sm w-full mt-2">
          <button
            onClick={() => setIsRunning((prev) => !prev)}
            className="flex-1 h-12 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">
              {isRunning ? 'pause' : 'play_arrow'}
            </span>
            {isRunning ? 'Pausar' : 'Continuar'}
          </button>
          <button
            onClick={handleReset}
            aria-label="Reiniciar cronômetro"
            className="w-12 h-12 rounded-xl bg-surface-bright text-on-surface flex items-center justify-center hover:bg-surface-container-highest active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">restart_alt</span>
          </button>
        </div>
      </div>
    </div>
  );
};
