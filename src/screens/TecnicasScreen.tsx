import React, { useState } from 'react';
import { INITIAL_TECHNIQUES, TechniqueVideo } from '../data/bjjData';
import { SafeImage } from '../components/SafeImage';

interface TecnicasScreenProps {
  onOpenTimer: () => void;
}

export const TecnicasScreen: React.FC<TecnicasScreenProps> = ({ onOpenTimer }) => {
  const [techniques, setTechniques] = useState<TechniqueVideo[]>(INITIAL_TECHNIQUES);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('todas');
  const [onlyBookmarked, setOnlyBookmarked] = useState<boolean>(false);
  const [selectedLevelFilter, setSelectedLevelFilter] = useState<string>('todos');
  const [showAdvancedFilter, setShowAdvancedFilter] = useState<boolean>(false);
  const [activeVideoModal, setActiveVideoModal] = useState<TechniqueVideo | null>(null);

  const categories = [
    { id: 'todas', label: 'Todas' },
    { id: 'guardas', label: 'Guardas' },
    { id: 'passagens', label: 'Passagens' },
    { id: 'finalizacoes', label: 'Finalizações' },
    { id: 'raspagens', label: 'Raspagens' },
    { id: 'quedas', label: 'Quedas (Takedowns)' },
    { id: 'defesa', label: 'Defesa Pessoal' },
  ];

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setTechniques((prev) =>
      prev.map((t) => (t.id === id ? { ...t, bookmarked: !t.bookmarked } : t))
    );
  };

  const featuredTechnique = techniques.find((t) => t.featured) || techniques[0];
  const feedTechniques = techniques.filter((t) => !t.featured);

  const filteredFeed = feedTechniques.filter((item) => {
    if (onlyBookmarked && !item.bookmarked) return false;
    if (selectedCategory !== 'todas' && item.category !== selectedCategory) return false;
    if (selectedLevelFilter === 'nogi' && item.badge1Style !== 'nogi') return false;
    if (selectedLevelFilter === 'gi' && item.badge1Style === 'nogi') return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      return (
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.instructor.toLowerCase().includes(q) ||
        item.badge1.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const bookmarkedCount =
    4 + techniques.filter((t) => t.bookmarked).length; // Starts at 5 (4 + 1 bookmarked by default)

  return (
    <div className="flex flex-col w-full pb-12">
      {/* Top Search & Exploration Block */}
      <section className="px-margin pt-space-md flex flex-col gap-space-sm">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              Currículo Técnico
            </span>
            <h1 className="font-headline-md text-headline-md text-on-surface">
              O que você quer treinar hoje?
            </h1>
          </div>
          <button
            onClick={() => {
              setSelectedCategory('todas');
              setOnlyBookmarked(false);
              setSearchQuery('');
            }}
            aria-label="Histórico de Treinos"
            className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors shadow-sm"
          >
            <span className="material-symbols-outlined text-[20px]">
              history_toggle_off
            </span>
          </button>
        </div>

        {/* Search input & filter button */}
        <div className="flex items-center gap-space-sm mt-space-xs">
          <div className="flex-1 relative flex items-center bg-surface-container rounded-xl px-3 py-3 shadow-inner">
            <span className="material-symbols-outlined text-outline text-[20px] mr-2.5">
              search
            </span>
            <input
              className="w-full bg-transparent text-on-surface placeholder:text-outline text-body-md font-body-md focus:outline-none"
              placeholder="Raspagem, emborcada, armlock..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery.length > 0 && (
              <button
                onClick={() => setSearchQuery('')}
                aria-label="Limpar busca"
                className="text-outline hover:text-on-surface"
              >
                <span className="material-symbols-outlined text-[18px]">cancel</span>
              </button>
            )}
          </div>
          <button
            onClick={() => setShowAdvancedFilter((prev) => !prev)}
            aria-label="Filtro avançado de técnicas"
            className={`w-12 h-12 rounded-xl flex items-center justify-center active:scale-95 transition-all shadow-sm relative ${
              showAdvancedFilter
                ? 'bg-primary text-on-primary'
                : 'bg-surface-container-high text-primary hover:bg-surface-bright'
            }`}
          >
            <span className="material-symbols-outlined text-[22px]">tune</span>
            <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-primary-container"></span>
          </button>
        </div>

        {showAdvancedFilter && (
          <div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between gap-2">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
              Modalidade:
            </span>
            <div className="flex items-center gap-1.5">
              {[
                { id: 'todos', label: 'Todas' },
                { id: 'gi', label: 'Com Kimono (Gi)' },
                { id: 'nogi', label: 'No-Gi' },
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setSelectedLevelFilter(m.id)}
                  className={`px-2.5 py-1 rounded-lg font-label-sm text-label-sm transition-colors ${
                    selectedLevelFilter === m.id
                      ? 'bg-primary-container text-on-primary-container font-bold'
                      : 'bg-surface-container text-on-surface-variant'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Horizontal Position Categories Pill Filter */}
      <section className="mt-space-md overflow-x-auto no-scrollbar py-1">
        <div className="flex items-center gap-space-xs px-margin min-w-max">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id && !onlyBookmarked;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setOnlyBookmarked(false);
                }}
                className={`px-4 py-2 rounded-full font-label-md text-label-md transition-all ${
                  isActive
                    ? 'bg-primary-container text-on-primary-container shadow-md'
                    : 'bg-surface-container text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Highlight of the Week: Curriculum Feature Card */}
      <section className="px-margin mt-space-lg">
        <div className="flex items-center justify-between mb-space-xs">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-primary text-[20px]">
              local_fire_department
            </span>
            <h2 className="font-headline-sm text-headline-sm text-on-surface">
              Técnica da Semana no Tatame
            </h2>
          </div>
          <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider">
            Ciclo Ativo
          </span>
        </div>

        <div
          onClick={() => setActiveVideoModal(featuredTechnique)}
          className="group relative rounded-xl overflow-hidden bg-surface-container shadow-xl transition-all duration-300 cursor-pointer"
        >
          {/* Media Aspect Card */}
          <div className="relative w-full aspect-[16/9] overflow-hidden">
            <SafeImage
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt={featuredTechnique.imageAlt}
              src={featuredTechnique.imageUrl}
            />
            {/* Vignette and Scrim Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/40 to-transparent"></div>
            {/* Badges on Preview */}
            <div className="absolute top-3 left-3 flex items-center gap-1.5">
              <span className="bg-surface-container-lowest/80 backdrop-blur-md text-primary font-label-sm text-label-sm px-2.5 py-1 rounded-md flex items-center gap-1 shadow-sm">
                <span className="material-symbols-outlined text-[14px]">stars</span>
                {featuredTechnique.badge1}
              </span>
              <span className="bg-secondary-container/90 text-on-secondary-container font-label-sm text-label-sm px-2 py-1 rounded-md">
                {featuredTechnique.badge2}
              </span>
            </div>
            {/* Play Trigger Overlay Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                aria-label="Assistir técnica da semana"
                className="w-14 h-14 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-[0_8px_24px_rgba(245,158,11,0.4)] transform group-hover:scale-110 active:scale-95 transition-all"
              >
                <span
                  className="material-symbols-outlined text-[32px] ml-1"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  play_arrow
                </span>
              </button>
            </div>
            {/* Duration Chip */}
            <div className="absolute bottom-3 right-3 bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface font-label-sm text-label-sm px-2 py-0.5 rounded">
              {featuredTechnique.duration}
            </div>
          </div>

          {/* Card Metadata Content */}
          <div className="p-space-md flex flex-col gap-2">
            <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-2">
              {featuredTechnique.title}
            </h3>
            <div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant pt-1">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center text-primary font-bold text-[10px]">
                  {featuredTechnique.instructorInitials || 'MA'}
                </div>
                <span>{featuredTechnique.instructor}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">
                    visibility
                  </span>
                  {featuredTechnique.views}
                </span>
                <button
                  onClick={(e) => toggleBookmark(featuredTechnique.id, e)}
                  aria-label="Favoritar técnica"
                  className={`transition-colors ${
                    featuredTechnique.bookmarked
                      ? 'text-primary'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  <span
                    className="material-symbols-outlined text-[20px]"
                    style={{
                      fontVariationSettings: featuredTechnique.bookmarked
                        ? "'FILL' 1"
                        : "'FILL' 0",
                    }}
                  >
                    {featuredTechnique.bookmarked ? 'bookmark' : 'bookmark_border'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Quick Open-Mat Bookmark Rail */}
      <section className="px-margin mt-space-lg">
        <div className="p-space-md rounded-xl bg-surface-container-low flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-space-sm min-w-0">
            <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[24px]">
                bookmark_added
              </span>
            </div>
            <div className="flex flex-col min-w-0">
              <h4 className="font-label-lg text-label-lg text-on-surface truncate">
                Salvos para o Open Mat
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                {bookmarkedCount} posições reservadas para testar hoje
              </p>
            </div>
          </div>
          <button
            onClick={() => setOnlyBookmarked((prev) => !prev)}
            className={`px-3 py-1.5 rounded-lg font-label-sm text-label-sm uppercase tracking-wider shrink-0 transition-all ${
              onlyBookmarked
                ? 'bg-primary text-on-primary font-bold'
                : 'bg-surface-container-high text-primary hover:bg-surface-bright'
            }`}
          >
            {onlyBookmarked ? 'Ver Todas' : 'Revisar'}
          </button>
        </div>
      </section>

      {/* Sparring Timer Tactical Utility Card */}
      <section className="px-margin mt-space-md">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-surface-container to-surface-container-high p-space-md flex items-center justify-between shadow-md">
          <div className="flex items-center gap-space-sm">
            <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-primary-container text-on-primary-container shrink-0">
              <span className="material-symbols-outlined text-[26px]">timer</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-label-lg text-label-lg text-on-surface">
                  Cronômetro de Rola
                </h4>
                <span className="px-1.5 py-0.2 rounded bg-tertiary/20 text-tertiary font-label-sm text-[10px] uppercase font-bold">
                  Dojo Timer
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Rounds 5 min / 1 min descanso
              </p>
            </div>
          </div>
          <button
            onClick={onOpenTimer}
            className="h-10 px-4 rounded-lg bg-surface-bright text-primary hover:bg-primary hover:text-on-primary font-label-md text-label-md flex items-center gap-1.5 transition-all active:scale-95 shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px]">play_circle</span>
            Iniciar
          </button>
        </div>
      </section>

      {/* Video Library Content Section */}
      <section className="px-margin mt-space-lg flex flex-col gap-space-md">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-headline-sm text-headline-sm text-on-surface">
              Aulas e Posições Recentes
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Metodologia oficial de graduação Laptop JJ
            </p>
          </div>
          <button
            onClick={() => {
              setSelectedCategory('todas');
              setOnlyBookmarked(false);
              setSearchQuery('');
            }}
            className="text-primary font-label-md text-label-md tracking-wide cursor-pointer hover:underline"
          >
            Ver todas (84)
          </button>
        </div>

        {/* Video Feed List */}
        <div className="flex flex-col gap-space-md">
          {filteredFeed.length === 0 ? (
            <div className="p-space-lg rounded-xl bg-surface-container text-center flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-[32px] text-outline">
                search_off
              </span>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Nenhuma posição encontrada para este filtro.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('todas');
                  setOnlyBookmarked(false);
                  setSearchQuery('');
                  setSelectedLevelFilter('todos');
                }}
                className="mt-1 px-4 py-2 rounded-lg bg-primary-container text-on-primary-container font-label-sm text-label-sm"
              >
                Limpar Filtros
              </button>
            </div>
          ) : (
            filteredFeed.map((video) => (
              <article
                key={video.id}
                onClick={() => setActiveVideoModal(video)}
                className="flex flex-col bg-surface-container rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
              >
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <SafeImage
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    alt={video.imageAlt}
                    src={video.imageUrl}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container/90 via-transparent to-transparent"></div>
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                    <span
                      className={`px-2 py-0.5 rounded font-label-sm text-label-sm uppercase tracking-wider ${
                        video.badge1Style === 'nogi'
                          ? 'bg-secondary-container/80 text-on-secondary-container font-bold'
                          : 'bg-surface-container-lowest/80 backdrop-blur-md text-on-surface'
                      }`}
                    >
                      {video.badge1}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded font-label-sm text-label-sm ${
                        video.badge2Style === 'amber'
                          ? 'bg-surface-tint/20 text-surface-tint font-bold'
                          : video.badge2Style === 'green'
                          ? 'bg-tertiary-container/30 text-tertiary font-bold'
                          : 'bg-surface-container-lowest/80 backdrop-blur-md text-on-surface uppercase tracking-wider'
                      }`}
                    >
                      {video.badge2}
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 bg-surface-container-lowest/90 px-2 py-0.5 rounded font-label-sm text-label-sm text-on-surface">
                    {video.duration}
                  </div>
                </div>

                <div className="p-space-md flex flex-col gap-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    <button
                      onClick={(e) => toggleBookmark(video.id, e)}
                      aria-label="Salvar vídeo"
                      className={`shrink-0 transition-colors p-1 ${
                        video.bookmarked
                          ? 'text-primary'
                          : 'text-on-surface-variant hover:text-primary'
                      }`}
                    >
                      <span
                        className="material-symbols-outlined text-[20px]"
                        style={{
                          fontVariationSettings: video.bookmarked
                            ? "'FILL' 1"
                            : "'FILL' 0",
                        }}
                      >
                        {video.bookmarked ? 'bookmark' : 'bookmark_border'}
                      </span>
                    </button>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between pt-space-xs text-body-sm font-body-sm text-on-surface-variant">
                    <span className="flex items-center gap-1.5 font-medium">
                      <span className="material-symbols-outlined text-[16px] text-primary">
                        person
                      </span>
                      {video.instructor}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-outline">
                      <span className="material-symbols-outlined text-[14px]">
                        thumb_up
                      </span>
                      {video.views}
                    </span>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </section>

      {/* Dojo Wisdom Quotation Footer */}
      <section className="px-margin mt-space-xl">
        <div className="rounded-xl p-space-md bg-surface-container-lowest flex items-start gap-space-sm">
          <span className="material-symbols-outlined text-primary text-[28px] shrink-0 opacity-80">
            format_quote
          </span>
          <div className="flex flex-col gap-1">
            <p className="font-body-md text-body-md text-on-surface-variant italic">
              "A faixa preta é apenas uma faixa branca que nunca desistiu."
            </p>
            <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
              Tradição Laptop JJ
            </span>
          </div>
        </div>
      </section>

      {/* Video Lesson Detail Modal */}
      {activeVideoModal && (
        <div
          className="fixed inset-0 z-50 bg-surface-container-lowest/85 backdrop-blur-md flex items-center justify-center p-margin"
          onClick={() => setActiveVideoModal(null)}
        >
          <div
            className="w-full max-w-md bg-surface-container rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-[16/9] bg-black">
              <SafeImage
                src={activeVideoModal.imageUrl}
                alt={activeVideoModal.imageAlt}
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-black/40"></div>
              <button
                onClick={() => setActiveVideoModal(null)}
                aria-label="Fechar aula"
                className="absolute top-3 right-3 w-10 h-10 rounded-full bg-surface-container-lowest/80 text-on-surface flex items-center justify-center hover:bg-surface-bright transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <span className="bg-primary text-on-primary font-label-sm text-label-sm px-2.5 py-1 rounded flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-[14px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    play_circle
                  </span>
                  Aula em Reprodução • {activeVideoModal.duration}
                </span>
              </div>
            </div>

            <div className="p-space-md flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-primary uppercase">
                  {activeVideoModal.badge1} • {activeVideoModal.badge2}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  {activeVideoModal.instructor}
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                {activeVideoModal.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {activeVideoModal.description}
              </p>

              {activeVideoModal.steps && (
                <div className="mt-1 p-3 rounded-xl bg-surface-container-low flex flex-col gap-2">
                  <span className="font-label-md text-label-md text-on-surface uppercase tracking-wider">
                    Passo a Passo Técnico:
                  </span>
                  {activeVideoModal.steps.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-body-sm text-on-surface-variant"
                    >
                      <span className="w-5 h-5 rounded-full bg-primary/15 text-primary font-label-sm text-label-sm flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={(e) => {
                    toggleBookmark(activeVideoModal.id, e);
                    setActiveVideoModal((prev) =>
                      prev ? { ...prev, bookmarked: !prev.bookmarked } : null
                    );
                  }}
                  className={`flex-1 h-11 rounded-xl font-label-md text-label-md flex items-center justify-center gap-1.5 transition-all ${
                    activeVideoModal.bookmarked
                      ? 'bg-primary text-on-primary font-bold'
                      : 'bg-surface-container-high text-on-surface hover:bg-surface-bright'
                  }`}
                >
                  <span
                    className="material-symbols-outlined text-[18px]"
                    style={{
                      fontVariationSettings: activeVideoModal.bookmarked
                        ? "'FILL' 1"
                        : "'FILL' 0",
                    }}
                  >
                    {activeVideoModal.bookmarked ? 'bookmark' : 'bookmark_border'}
                  </span>
                  {activeVideoModal.bookmarked
                    ? 'Salvo no Open Mat'
                    : 'Salvar para Open Mat'}
                </button>
                <a
                  href={activeVideoModal.imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 h-11 rounded-xl bg-surface-container-high text-primary hover:bg-surface-bright font-label-sm text-label-sm flex items-center justify-center gap-1"
                >
                  <span className="material-symbols-outlined text-[18px]">image</span>
                  Imagem
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
