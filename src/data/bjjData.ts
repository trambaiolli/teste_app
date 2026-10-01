export interface DirectImageAsset {
  id: string;
  title: string;
  screen: 'Geral' | 'Início' | 'Horários' | 'Evolução' | 'Técnicas';
  alt: string;
  url: string;
}

export const HTML_IMAGES = {
  logo: "https://lh3.googleusercontent.com/aida/AEtjO1WUDcO02YluIn3_ZaP1KXvNC5_VrskeQ80LiJIIx3wv0EV43ETa3Eprv4lvdVFBLwzhxfr-H8m1OdL1SzYqrfQS-2sYbLe4B14ibPDzvCqM_CuZvzuRxzI8L6J83ZrTZbo2j7TWR8IKpUDnIPCUvpvXxVt9rK2UW1G_CM_Hu4l0SUsOEzpJ1PNLuVuwskIDLr1NYkj3wSZmpMppQoVUVgwdiXf7yBBtJBV69P2PaD_rUh-_PEE9Ytzv46Y",
  headerProfile: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3oplmzNxa4BnGpZKIfk_WL0n6h5j9Ec4yQukQPb4rXkHTPxzLbwPT1mbPLv7xlFiuvEYW7ftbgOTrareCQh7-uusalT_Ph3GZiRky1Z0uiUn03kOgky_jwQ9XJ7raa4d5aaojaz5Wyoj31i08l9TLUYKhgx-DVaQ3wYzcPbeoXqu_fWIGR7GpR-Svk5y6AJBngLmR1tcVnUGRlv94mD2LgGsdnIJSdawjRzKrNO7zHGL71-3ZI6mf",
  mestreAlmeida: "https://lh3.googleusercontent.com/aida-public/AB6AXuDi5GF-Hv_d3Pccuk1okeN0LdAuq66aGk9pm0Bdi81vTlQ3vS_1E4c8ajPC4_vGl6tQa5cuyea1DJKMdiy9ZyPpUme27bumBsnfNZZQM9b5Zj40XXuJeyLshTcz4IzMmEhWvGCClJWzey5sd71Utdo3eaQVYYURYInwInnRAF8qO3Fq8QRp3exqEfzDGft4EJgQasqGps6C3pEmVzmncRwqZh745O3U5t06UHH-zrc4enaAGtAd24Qx",
  seminarioEspecial: "https://lh3.googleusercontent.com/aida-public/AB6AXuC252wpgQrdJnyQ5pKRAkU1_g-w0DB3mocuk_zmSXcJ48M67CYQIn5HZtgodTtBWR5TdIGR7-BohrXF0R3H3k_OREMOP8cwNaAvbTdhBINS-V3EjF_AztdHBKbRSmfgSPWpYyUCELBZURPibkKszovZu_AfykIQxAtqXxzgNBmSfB6lQ6ZRD44J3XXQxspM-4lJFbCsH7ECts1a0l20VA63J-teTgT3GlSH0prJzIgg_FFRu9vV6zTm",
  kimonoLoja: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtc-SY_tqDTm9i7e23xrwkfVhq1ij0kW85kXP-V4MU3qa0CZJmdy6Gzi4txaVkSqZjW1HejftH4n5op24iH_W5lds4Dqdr_QLl3wLHvtcE4kR6xL_SQcYjB45iT1z6fAyYrUMDJlVuUduSVsPjpsFVj-K65L7x23jPQ5MW1KGHtKRsLgHaNrAe_-fJX3dz0uX1ZgGHJmeaB_k9Wgnz2XSsSyXeBcTQRSzUuI1t7iQ-K950FKanOVPp",
  gabrielPortrait: "https://lh3.googleusercontent.com/aida-public/AB6AXuCF3cAi6-rckUpQuuktKyp-JrFAxUDwXyoOhiwBAyz-1ryzymch5JLyCxfwgXMmjtvXgeABwlmER-XaRgJ3KX67hEieholhS0Sa66Of4a2TjPYYgHYl9QGRiUWtK2NnexlUmSgEJGiBJpSQ6B0u2hmapa4YkuYaKDON9QIUdFKkeeV8FqkbbZyQlt9F3GeL52RCPSqNr0pWR14zQKE8ZQEEfDq7YJtrw4Eh2_ZR4KCuBNgDYUO_GTYv",
  tecnicaSemana: "https://lh3.googleusercontent.com/aida-public/AB6AXuDObOkLHb5FdwRbZuO2e1wlDk4X4fXQyVdjRYNOP4uJjNX65IZrj11UCrwG174lFpa7NPOkc-qx9px1wjKpGuONTooIi6tkIrdiBRUo9XeR-JQmQDY0Knyl5HHOBGoGO6rYdPuhKxGtILPYuRzTAjywSrUyNE1MvOg33Qahn-ouggnlcgKYUCjKnaiapwmbJynb6-Og49HVCJn-H7j_rIEWlnBafrzfYBYCEOPVJ8nNnMyARaN166Hb",
  videoPassagemEmborcada: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVqiZOTTMYBQP-7VpIhP9pThe28ulISacYjj34_rd4jpJTAWBiOPCv8pxWD_orxyxjBUj57Ulazeqnjf-nSlfySikhMFnptAF-ammT5l-KkOY95wfVIJ4TAdMaIL36W11K2JR0uM72IiJzoXRgc8WJUVVBBQyh6dml6v2BhfZwoMLrEPyDoRnp7MMXF9pqv4UrQuZnimzNoyXm5FvD9rvFdmXyEALAyECU2AbMd0R_ylQ0JLaXwT4D",
  videoRaspagemGancho: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFLpuwm5Mg6vXXAkGQc097xQGNQsU9yR3EVI51sbBsB8CszGdkPuBleeu7BrDiSVWzEDOVcCUOY6kvSPAMoEwWfUXYs-k1czTmrHGWqxVDeenq7J8iVG3zztJF4-j-dm2knrXeySN9Zpk3tM5tf9ASK4Bvlj90gnesU1P312nVRNlwciYuWB1NXxmN-IhKXNDq_ap6Eswsuze61SI1_SoVozffeB7ei_R0WWQXeFqYzv3yBQKMaEjp",
  videoDefesaGuilhotina: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6MRKCCp5VyZ2zt0LWnv6MKnalpeuhjuwa-jUklSaZ7GfEBdEStiymcIVxLgGp6NWQFr3zaFIYH30IcmMzqd1yRGqfUCqwfYVWrLuQWkwnOfVgA5KpmOu5MGZyJHUZsJZ0nWJDAy_t_Eehzd4lUGVGg3t5QFEA23OLeZQ2Tgte8PC4L75VtnRWXrKZGcRLOs1C1FGxkwRutmUdM5YvyQ4wikubpEzZJySX3DWTK6IT-QA0NRv-tXDj",
  videoMataLeao: "https://lh3.googleusercontent.com/aida-public/AB6AXuAorS8h6E_659CXGi0m51qNbPF80ljH_3YxfzQ_C4QK2knGR3HVw5DDkOTH7nfl-tjqDto_qq6fZPOSbN5-vXUQC1Z2VsFlh_fHfNsFhbdtoo5MTPAYtty7AUQfI27L7yrKmLdqwmkhKfe-c8SY6Xeu0-7c5Uj68pwrXMAeI_hb6MmD8qG5Qnea2cNb_vABzfb6qde54QZ0gj78u6yEBrGFzmr-Cq8FLtdo_Og9-gkVYKK6Kw-nelav",
};

export const DIRECT_IMAGE_LIST: DirectImageAsset[] = [
  {
    id: 'logo',
    title: 'Logo Laptop JJ Dojo',
    screen: 'Geral',
    alt: 'Laptop JJ Dojo Logo',
    url: HTML_IMAGES.logo,
  },
  {
    id: 'headerProfile',
    title: 'Avatar do Topo (Faixa)',
    screen: 'Geral',
    alt: 'Profile Avatar Header',
    url: HTML_IMAGES.headerProfile,
  },
  {
    id: 'mestreAlmeida',
    title: 'Mestre Almeida (Faixa Preta 4º Grau)',
    screen: 'Início',
    alt: 'A portrait of an experienced Brazilian Jiu-Jitsu black belt instructor in a clean white kimono',
    url: HTML_IMAGES.mestreAlmeida,
  },
  {
    id: 'seminarioEspecial',
    title: 'Banner Seminário Especial (Passagem de Guarda)',
    screen: 'Início',
    alt: 'High-intensity Brazilian Jiu-Jitsu tournament scene with two athletes grappling aggressively',
    url: HTML_IMAGES.seminarioEspecial,
  },
  {
    id: 'kimonoLoja',
    title: 'Loja Oficial - Novo Lote de Kimonos Laptop JJ',
    screen: 'Início',
    alt: 'Premium navy and black Laptop JJ academy kimono uniform folded',
    url: HTML_IMAGES.kimonoLoja,
  },
  {
    id: 'gabrielPortrait',
    title: 'Foto de Perfil do Aluno (Gabriel Santos Almeida)',
    screen: 'Evolução',
    alt: 'Close up athletic portrait of a focused Brazilian Jiu-Jitsu male practitioner wearing a dark charcoal gi',
    url: HTML_IMAGES.gabrielPortrait,
  },
  {
    id: 'tecnicaSemana',
    title: 'Técnica da Semana: Ataques da Guarda Fechada',
    screen: 'Técnicas',
    alt: 'Brazilian Jiu Jitsu master demonstrating a clean closed guard armbar transition on dark tatami mats',
    url: HTML_IMAGES.tecnicaSemana,
  },
  {
    id: 'videoPassagemEmborcada',
    title: 'Aula 1: Passagem Emborcada com Ajuste de Lapela',
    screen: 'Técnicas',
    alt: 'Intense Brazilian Jiu Jitsu guard pass action shot, practitioner gripping gi lapel',
    url: HTML_IMAGES.videoPassagemEmborcada,
  },
  {
    id: 'videoRaspagemGancho',
    title: 'Aula 2: Raspagem de Gancho com Domínio de Tríceps',
    screen: 'Técnicas',
    alt: 'Two Brazilian Jiu Jitsu athletes executing a technical butterfly guard hook sweep',
    url: HTML_IMAGES.videoRaspagemGancho,
  },
  {
    id: 'videoDefesaGuilhotina',
    title: 'Aula 3: Defesa de Guilhotina e Saída para as Costas',
    screen: 'Técnicas',
    alt: 'No-Gi Submission grappling match showing guillotine choke escape and back take transition',
    url: HTML_IMAGES.videoDefesaGuilhotina,
  },
  {
    id: 'videoMataLeao',
    title: 'Aula 4: Mata-Leão e Estrangulamento Arco e Flecha',
    screen: 'Técnicas',
    alt: 'Athletes performing high technical bow and arrow collar choke on the back',
    url: HTML_IMAGES.videoMataLeao,
  },
];

export interface TechniqueVideo {
  id: string;
  title: string;
  description: string;
  instructor: string;
  instructorInitials?: string;
  duration: string;
  views: string;
  category: 'guardas' | 'passagens' | 'finalizacoes' | 'raspagens' | 'quedas' | 'defesa';
  badge1: string;
  badge1Style?: 'default' | 'nogi' | 'oficial';
  badge2: string;
  badge2Style?: 'purple' | 'green' | 'amber' | 'red' | 'dark';
  imageUrl: string;
  imageAlt: string;
  bookmarked: boolean;
  featured?: boolean;
  steps?: string[];
}

export const INITIAL_TECHNIQUES: TechniqueVideo[] = [
  {
    id: 'featured-closed-guard',
    title: 'Ataques da Guarda Fechada: Variação Triângulo para Chave de Braço',
    description: 'Domine a conexão de quadril na guarda fechada combinando o desequilíbrio postural com a transição fluida entre o triângulo e o armlock clássico.',
    instructor: 'Mestre Almeida',
    instructorInitials: 'MA',
    duration: '4:35 min',
    views: '2.8k',
    category: 'guardas',
    badge1: 'OFICIAL DOJO',
    badge1Style: 'oficial',
    badge2: 'Faixa Branca & Azul',
    badge2Style: 'red',
    imageUrl: HTML_IMAGES.tecnicaSemana,
    imageAlt: 'Brazilian Jiu Jitsu master demonstrating a clean closed guard armbar transition on dark tatami mats inside a high-end black dojo',
    bookmarked: false,
    featured: true,
    steps: [
      'Quebre a postura do oponente puxando a gola cruzada e dominando o punho.',
      'Escale os quadris mantendo os joelhos fechados na linha do ombro adversário.',
      'Ao defender o encaixe do triângulo, gire o quadril 90 graus passando a perna sobre a nuca para finalizar no armlock.'
    ]
  },
  {
    id: 'passagem-emborcada',
    title: 'Passagem Emborcada com Ajuste de Lapela',
    description: 'Aprenda a anular a guarda aranha e laço com pressão axial e domínio profundo da saia do kimono adversário.',
    instructor: 'Prof. Rodrigo Cavalcanti',
    duration: '6:12 min',
    views: '1.4k visualizações',
    category: 'passagens',
    badge1: 'Passagem',
    badge1Style: 'default',
    badge2: 'Faixa Roxa+',
    badge2Style: 'amber',
    imageUrl: HTML_IMAGES.videoPassagemEmborcada,
    imageAlt: 'Intense Brazilian Jiu Jitsu guard pass action shot, practitioner gripping gi lapel applying dynamic pressure against guard player',
    bookmarked: false,
    steps: [
      'Estoure a pegada do pé no bíceps avançando o joelho em diagonal.',
      'Passe a lapela por baixo do quadril adversário entregando para a mão da gola.',
      'Empilhe os quadris do guardeiro com pressão de ombro até estabilizar os 100kg.'
    ]
  },
  {
    id: 'raspagem-gancho',
    title: 'Raspagem de Gancho com Domínio de Tríceps (Butterfly Guard)',
    description: 'Alavanca postural clássica para desequilibrar passadores pesados e cair diretamente na montada lateral.',
    instructor: 'Instrutor Gabriel Ramos',
    duration: '5:20 min',
    views: '3.1k visualizações',
    category: 'raspagens',
    badge1: 'Raspagem',
    badge1Style: 'default',
    badge2: 'Todas as Faixas',
    badge2Style: 'green',
    imageUrl: HTML_IMAGES.videoRaspagemGancho,
    imageAlt: 'Two Brazilian Jiu Jitsu athletes executing a technical butterfly guard hook sweep inside a professional dark martial arts academy',
    bookmarked: true,
    steps: [
      'Mantenha a cabeça mais baixa que o queixo do passador com esgrima ativa.',
      'Trave o tríceps oposto evitando o apoio de mão no tatame.',
      'Caia sobre o ombro elevando o gancho com extensão da perna de apoio.'
    ]
  },
  {
    id: 'defesa-guilhotina',
    title: 'Defesa de Guilhotina e Saída para as Costas',
    description: 'Desbloqueie o queixo, controle o quadril adversário em pé e execute o giro explosivo pegando as costas sem esforço.',
    instructor: 'Mestre Almeida',
    duration: '3:45 min',
    views: '980 visualizações',
    category: 'defesa',
    badge1: 'No-Gi',
    badge1Style: 'nogi',
    badge2: 'Defesa & Contra-ataque',
    badge2Style: 'dark',
    imageUrl: HTML_IMAGES.videoDefesaGuilhotina,
    imageAlt: 'No-Gi Submission grappling match showing guillotine choke escape and back take transition',
    bookmarked: false,
    steps: [
      'Proteja a traqueia imediatamente fazendo pegada mão-com-mão no punho estrangulador.',
      'Caminhe o quadril para o lado oposto ao braço que envolve o pescoço.',
      'Salte ou circule por trás do cotovelo adversário conectando o seatbelt.'
    ]
  },
  {
    id: 'mata-leao-arco-flecha',
    title: 'Mata-Leão e Estrangulamento Arco e Flecha',
    description: 'Sequência implacável de finalização partindo dos ganchos traseiros com transição suave da lapela para o pescoço.',
    instructor: 'Prof. Rodrigo Cavalcanti',
    duration: '7:10 min',
    views: '4.5k visualizações',
    category: 'finalizacoes',
    badge1: 'Finalização',
    badge1Style: 'default',
    badge2: 'Avançado',
    badge2Style: 'amber',
    imageUrl: HTML_IMAGES.videoMataLeao,
    imageAlt: 'Athletes performing high technical bow and arrow collar choke on the back in a dark Japanese influenced martial arts jiu jitsu dojo',
    bookmarked: false,
    steps: [
      'Estabeleça o domínio de seatbelt com ganchos ativos e abra a gola oposta.',
      'Se o adversário defender o mata-leão com as duas mãos, domine a calça na altura do joelho.',
      'Cruze a perna sobre o ombro e estenda o tronco puxando a gola em arco.'
    ]
  }
];
