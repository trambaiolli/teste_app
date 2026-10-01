import React, { useState } from 'react';
import { DIRECT_IMAGE_LIST } from '../data/bjjData';
import { SafeImage } from './SafeImage';

interface ImageLinksModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ImageLinksModal: React.FC<ImageLinksModalProps> = ({ isOpen, onClose }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedScreen, setSelectedScreen] = useState<string>('Todas');

  if (!isOpen) return null;

  const screens = ['Todas', 'Geral', 'Início', 'Evolução', 'Técnicas'];
  const filteredImages =
    selectedScreen === 'Todas'
      ? DIRECT_IMAGE_LIST
      : DIRECT_IMAGE_LIST.filter((img) => img.screen === selectedScreen);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-surface-container-lowest/85 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-margin"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg max-h-[88vh] bg-surface-container rounded-t-2xl sm:rounded-2xl flex flex-col shadow-2xl border border-white/10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-space-md bg-surface-container-high flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px]">link</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Links Diretos das Imagens (HTML)
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Todas as {DIRECT_IMAGE_LIST.length} URLs originais extraídas do HTML
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar galeria de links"
            className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-bright transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Screen Filter Bar */}
        <div className="px-space-md py-2.5 bg-surface-container-low flex items-center gap-1.5 overflow-x-auto no-scrollbar border-b border-white/5">
          {screens.map((scr) => (
            <button
              key={scr}
              onClick={() => setSelectedScreen(scr)}
              className={`px-3 py-1.5 rounded-full font-label-sm text-label-sm whitespace-nowrap transition-all ${
                selectedScreen === scr
                  ? 'bg-primary-container text-on-primary-container font-bold'
                  : 'bg-surface-container text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {scr}
            </button>
          ))}
        </div>

        {/* List of Direct Image Links */}
        <div className="p-space-md overflow-y-auto flex flex-col gap-space-sm">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              className="bg-surface-container-low rounded-xl p-3 flex flex-col gap-2.5 border border-white/5"
            >
              <div className="flex items-center gap-3">
                <div className="w-16 h-14 rounded-lg overflow-hidden bg-surface-container-highest shrink-0">
                  <SafeImage
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-label-sm text-[10px] uppercase tracking-wider text-primary">
                      Tela: {img.screen}
                    </span>
                  </div>
                  <h4 className="font-label-lg text-label-lg text-on-surface truncate">
                    {img.title}
                  </h4>
                  <input
                    type="text"
                    readOnly
                    value={img.url}
                    onClick={(e) => (e.target as HTMLInputElement).select()}
                    className="mt-1 w-full bg-surface-container-lowest text-on-surface-variant font-mono text-[11px] px-2 py-1 rounded border border-white/5 focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-0.5">
                <button
                  onClick={() => handleCopy(img.id, img.url)}
                  className={`flex-1 h-9 rounded-lg font-label-sm text-label-sm flex items-center justify-center gap-1.5 transition-all ${
                    copiedId === img.id
                      ? 'bg-tertiary-container text-on-tertiary-container font-bold'
                      : 'bg-surface-container-high text-on-surface hover:bg-surface-bright'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {copiedId === img.id ? 'check' : 'content_copy'}
                  </span>
                  <span>{copiedId === img.id ? 'URL Copiada!' : 'Copiar URL Direta'}</span>
                </button>

                <button
                  onClick={() =>
                    handleCopy(`${img.id}-html`, `<img src="${img.url}" alt="${img.alt}" />`)
                  }
                  className={`px-3 h-9 rounded-lg font-label-sm text-label-sm flex items-center justify-center gap-1 transition-all ${
                    copiedId === `${img.id}-html`
                      ? 'bg-tertiary-container text-on-tertiary-container font-bold'
                      : 'bg-surface-container-high text-primary hover:bg-surface-bright'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">code</span>
                  <span>{copiedId === `${img.id}-html` ? 'Tag Copiada!' : 'Tag <img>'}</span>
                </button>

                <a
                  href={img.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir ${img.title} em nova guia`}
                  className="w-9 h-9 rounded-lg bg-primary-container/20 text-primary hover:bg-primary-container hover:text-on-primary-container flex items-center justify-center transition-colors shrink-0"
                >
                  <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
