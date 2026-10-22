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
  { id: "conclusoes", section: "6. Conclusões", title: "Conclusão" },
  { id: "limites", section: "6. Conclusões", title: "Cota inicial e implicações" },
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

export const CONCLUSOES = [
  {
    titulo: "Eficácia da modelagem com dados de satélite",
    texto:
      "A integração do HEC-HMS 4.12 com as estimativas de precipitação do IMERG Late Run mostrou-se uma alternativa viável para a modelagem chuva-vazão na bacia de Chapéu d’Uvas durante o evento extremo de fevereiro de 2026, contribuindo para suprir a carência de dados de monitoramento convencional.",
  },
  {
    titulo: "Heterogeneidade da resposta espacial",
    texto:
      "A divisão da bacia em 11 sub-bacias revelou respostas hidrológicas distintas. As vazões de pico foram influenciadas pela distribuição espaço-temporal da precipitação e pelos parâmetros de perdas e transformação, além da área de drenagem de cada unidade.",
  },
  {
    titulo: "Capacidade de amortecimento do reservatório",
    texto:
      "Para um pico afluente de 288,17 m³/s, as vazões máximas defluentes variaram entre 12,04 e 29,05 m³/s nos cenários simulados. Esses resultados evidenciam a capacidade do reservatório de armazenar temporariamente parte do volume afluente e atenuar os picos de cheia.",
  },
];

export const IMPLICACOES = [
  {
    titulo: "Influência da cota inicial",
    textos: [
      "A comparação entre as cotas iniciais de 736,70 m, 738,00 m, 739,00 m e 740,00 m demonstrou que o nível prévio do reservatório influencia diretamente a resposta da cheia a jusante.",
      "Níveis iniciais mais elevados produziram maiores vazões máximas de saída e menor intervalo entre os picos afluente e defluente, evidenciando a influência da disponibilidade inicial de armazenamento no amortecimento da cheia.",
    ],
  },
  {
    titulo: "Acionamento do vertedouro de serviço",
    textos: [
      "Sob os parâmetros adotados e a condição antecedente úmida ARC III, apenas o cenário com cota inicial de 740,00 m apresentou elevação do nível de água suficiente para ultrapassar a soleira do vertedouro de serviço do tipo Tulipa.",
    ],
  },
  {
    titulo: "Implicação dos resultados",
    textos: [
      "As simulações reforçam a importância de considerar conjuntamente a distribuição da chuva, as características das sub-bacias e o nível inicial do reservatório na avaliação de cheias e de seus efeitos a jusante. As conclusões se referem ao evento e às condições de modelagem analisados.",
    ],
  },
];

export const fmt = (n: number, digits = 2) =>
  n.toLocaleString("pt-BR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
