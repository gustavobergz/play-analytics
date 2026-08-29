export type PlayEvent = {
  id: string;
  name: string;
  city: string;
  neighborhood: string;
  dateLabel: string;
  status: "Em atividade" | "Em breve";
  isLive: boolean;
  description: string;
  audience: string;
  organizers: string[];
  tags: string[];
  highlights: string[];
  schedule: Array<{ label: string; time: string; detail: string }>;
  metrics: Array<{ label: string; value: string }>;
};

export const playEvents: PlayEvent[] = [
  {
    id: "festival-play-curitiba",
    name: "Festival Play Curitiba",
    city: "Curitiba",
    neighborhood: "Centro Cívico",
    dateLabel: "18 ago 2026",
    status: "Em atividade",
    isLive: true,
    description:
      "Festival de rua com música, workshops de esporte e experiências interativas para comunidade local e visitantes.",
    audience: "1.2 mil pessoas",
    organizers: ["Play Sports", "Prefeitura de Curitiba", "AABB Curitiba"],
    tags: ["Street Festival", "Esporte urbano", "Família"],
    highlights: [
      "Trilha de atividades de corrida e mobilidade urbana.",
      "Área de convivência com música ao vivo e exposição esportiva.",
      "Pontos de hidratação, apoio e atendimento para participantes.",
    ],
    schedule: [
      { label: "Abertura", time: "08:00", detail: "Check-in e entrega de pulseiras" },
      { label: "Atividades principais", time: "10:30", detail: "Corrida, yoga e demonstrações" },
      { label: "Show final", time: "19:00", detail: "Apresentação musical e premiações" },
    ],
    metrics: [
      { label: "Participantes online", value: "862" },
      { label: "Engajamento", value: "94%" },
      { label: "Foco de público", value: "Famílias" },
    ],
  },
  {
    id: "arena-night-race",
    name: "Arena Night Race",
    city: "Londrina",
    neighborhood: "Parque Arthur Thomas",
    dateLabel: "21 ago 2026",
    status: "Em atividade",
    isLive: true,
    description:
      "Corrida noturna com iluminação artística, circuito de performance e espaço para socialização entre atletas e público.",
    audience: "780 pessoas",
    organizers: ["Run Up", "Câmara Municipal", "Academia Pulse"],
    tags: ["Corrida", "Noite", "Performance"],
    highlights: [
      "Circuito com iluminação dinâmica e marcações visuais.",
      "Pódio para categorias por faixa etária e modalidade.",
      "Área de fotos e branding com parceiros locais.",
    ],
    schedule: [
      { label: "Warm-up", time: "18:30", detail: "Alongamento e ativação coletiva" },
      { label: "Largada", time: "19:15", detail: "Corrida principal na pista iluminada" },
      { label: "Premiação", time: "21:30", detail: "Entrega de troféus e fotos finais" },
    ],
    metrics: [
      { label: "Atletas ativos", value: "604" },
      { label: "Acompanhamento em tempo real", value: "12.8k" },
      { label: "Tempo médio por volta", value: "6m 14s" },
    ],
  },
  {
    id: "beach-volley-summer",
    name: "Beach Volley Summer",
    city: "Pontal do Paraná",
    neighborhood: "Praia de Superagüi",
    dateLabel: "25 ago 2026",
    status: "Em atividade",
    isLive: true,
    description:
      "Torneio de vôlei de praia com disputas emocionantes, atrações culturais e uma programação de alto nível para público local.",
    audience: "940 pessoas",
    organizers: ["Play Beach", "Esporte PR", "Hotel Praia Mar"],
    tags: ["Vôlei", "Praia", "Torneio"],
    highlights: [
      "Duplas em disputa em quadra principal e quadra secundária.",
      "Pontos de apoio para hidratação e descanso.",
      "Programa de música e feira gastronômica para o público.",
    ],
    schedule: [
      { label: "Inscrições", time: "08:00", detail: "Check-in de equipes" },
      { label: "Disputas", time: "10:00", detail: "Primeiras partidas da fase principal" },
      { label: "Final", time: "17:30", detail: "Gran final e premiação" },
    ],
    metrics: [
      { label: "Equipes ativas", value: "26" },
      { label: "Taxa de retenção", value: "83%" },
      { label: "Público no local", value: "1.8k" },
    ],
  },
  {
    id: "river-run-2026",
    name: "River Run 2026",
    city: "Maringá",
    neighborhood: "Parque do Ingá",
    dateLabel: "06 set 2026",
    status: "Em breve",
    isLive: false,
    description:
      "Eventual corrida de rua que reúne atletas amadores e profissionais em uma experiência de percurso acolhedor e bem estruturada.",
    audience: "640 pessoas",
    organizers: ["Maringá Move", "Secretaria da Juventude", "Runners Club"],
    tags: ["Corrida", "Parque", "Abertura"],
    highlights: [
      "Mapa do percurso com pontos de hidratação e apoio.",
      "Abertura para categorias por idade e nível.",
      "Ponto de interação com parceiros locais e patrocinadores.",
    ],
    schedule: [
      { label: "Chegada dos atletas", time: "07:30", detail: "Recepção e check-in" },
      { label: "Largada", time: "08:30", detail: "Abertura da corrida principal" },
      { label: "Premiação", time: "10:30", detail: "Entrega de medalhas e conquistas" },
    ],
    metrics: [
      { label: "Inscrições", value: "510" },
      { label: "Capacidade", value: "800" },
      { label: "Data prevista", value: "06 set" },
    ],
  },
];

export function getPlayEventById(eventId: string) {
  return playEvents.find((event) => event.id === eventId) ?? null;
}
