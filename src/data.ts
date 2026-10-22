export const SLIDE_META = [
  { id: "capa", section: "Abertura", title: "Capa" },
  { id: "sumario", section: "Roteiro", title: "Sumário" },
  { id: "introducao", section: "1. Introdução", title: "Eventos extremos" },
  { id: "objetivos", section: "2. Objetivos", title: "Capítulo 1" },
  { id: "area", section: "3. Área de estudo", title: "Chapéu d’Uvas" },
  { id: "fluxo", section: "4. Metodologia", title: "Fluxo de modelagem" },
  { id: "modelo", section: "4. Metodologia", title: "Configuração do modelo" },
  { id: "subbacias", section: "4. Metodologia", title: "Sub-bacias" },
  { id: "estruturas", section: "4. Metodologia", title: "Estruturas do reservatório" },
  { id: "cotas", section: "4. Metodologia", title: "Cotas iniciais" },
  { id: "afluencia", section: "5. Resultados", title: "Afluência" },
  { id: "cenarios", section: "5. Resultados", title: "Comparação dos cenários" },
  { id: "conclusoes", section: "6. Conclusões", title: "Síntese" },
  { id: "limites", section: "6. Conclusões", title: "Alcance e limitações" },
  { id: "capitulo2", section: "7. Capítulo 2", title: "Objetivos" },
  { id: "cronograma", section: "7. Capítulo 2", title: "Cronograma" },
  { id: "obrigada", section: "Encerramento", title: "Obrigada" },
] as const;

export const TOC = [
  { n: "1", label: "Introdução", slide: 2 },
  { n: "2", label: "Objetivos", slide: 3 },
  { n: "3", label: "Área de estudo", slide: 4 },
  { n: "4", label: "Metodologia", slide: 5 },
  { n: "5", label: "Resultados", slide: 10 },
  { n: "6", label: "Conclusões", slide: 12 },
  { n: "7", label: "Capítulo 2 e cronograma", slide: 14 },
];

export const OBJETIVOS = [
  "Parametrizar o modelo hidrológico da bacia Chapéu d’Uvas no HEC-HMS",
  "Simular a bacia no período de 21 a 28/02/2026",
  "Estimar a vazão de pico do evento",
  "Avaliar o amortecimento da cheia em quatro cotas iniciais do reservatório",
];

export const METODO_PASSOS = [
  {
    n: "1",
    titulo: "Chuva",
    detalhe: "IMERG Late Run, séries horárias por sub-bacia",
  },
  {
    n: "2",
    titulo: "Perdas",
    detalhe: "SCS-CN com GCN250, condição úmida ARC III",
  },
  {
    n: "3",
    titulo: "Transformação",
    detalhe: "Hidrograma unitário do SCS; lag = 0,6 × Tc (Kirpich)",
  },
  {
    n: "4",
    titulo: "Propagação",
    detalhe: "Muskingum-Cunge nos trechos",
  },
  {
    n: "5",
    titulo: "Reservatório",
    detalhe: "Outflow Structures, com curva de cota e armazenamento",
  },
];

export const ACIONAMENTOS = [
  {
    id: 1,
    dispositivo: "Somente a tomada d’água",
    detalhe: "Cota máxima 1,62 m abaixo da soleira da Tulipa. Sem descarga pelo vertedouro de serviço nem pelo de emergência.",
  },
  {
    id: 2,
    dispositivo: "Somente a tomada d’água",
    detalhe: "Cota máxima de 740,22 m, ainda abaixo da soleira de 741,00 m da Tulipa.",
  },
  {
    id: 3,
    dispositivo: "Somente a tomada d’água",
    detalhe: "Cota máxima de 740,68 m, abaixo da soleira da Tulipa durante todo o evento.",
  },
  {
    id: 4,
    dispositivo: "Tomada d’água e Tulipa",
    detalhe: "Nível máximo de 741,16 m, 0,16 m acima da soleira. A Tulipa descarregou cerca de 3 m³/s. A emergência não foi acionada.",
  },
];

export type Cenario = {
  id: number;
  cotaInicial: number;
  picoSaida: number;
  cotaMaxima: number;
  intervalo: string;
};

export const CENARIOS: Cenario[] = [
  { id: 1, cotaInicial: 736.7, picoSaida: 12.04, cotaMaxima: 739.38, intervalo: "25h48" },
  { id: 2, cotaInicial: 738.0, picoSaida: 18.18, cotaMaxima: 740.22, intervalo: "24h40" },
  { id: 3, cotaInicial: 739.0, picoSaida: 21.82, cotaMaxima: 740.68, intervalo: "24h18" },
  { id: 4, cotaInicial: 740.0, picoSaida: 29.05, cotaMaxima: 741.16, intervalo: "23h44" },
];

export const LIMITES = [
  {
    titulo: "Representação conceitual",
    texto:
      "As estruturas de descarga incluem uma tomada d’água equivalente, sem calibração hidráulica com dados observados.",
  },
  {
    titulo: "Validação e sensibilidade",
    texto:
      "Confrontar níveis e vazões com observações, avaliar as condições operacionais e os avisos de discretização dos trechos R1 a R4.",
  },
  {
    titulo: "Efeitos a jusante",
    texto:
      "A redução dos picos simulados não quantifica a redução de inundações urbanas. Essa análise depende dos tributários e da propagação hidráulica.",
  },
];

export const fmt = (n: number, digits = 2) =>
  n.toLocaleString("pt-BR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
