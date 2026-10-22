import { useState } from "react";
import {
  CENARIOS,
  ESTRUTURAS,
  LIMITES,
  METODO_PASSOS,
  OBJETIVOS,
  TOC,
  fmt,
} from "./data";
import { BarrasCenarios, PerfilReservatorio } from "./visuals";

export function SlideCapa() {
  return (
    <div className="cover-inner">
      <div className="cover-top">
        <div className="brand">
          <img src="/img/logo-ufjf.png" alt="Brasão da UFJF" />
          <p>
            Universidade Federal de Juiz de Fora
            <br />
            Programa de Pós-Graduação em Engenharia Civil
          </p>
        </div>
        <p className="kicker">Exame de qualificação · 22 de outubro de 2026</p>
      </div>
      <h1>Modelagem hidrológica da barragem Chapéu d’Uvas para eventos extremos</h1>
      <div className="gold-line" />
      <div className="cover-meta">
        <div>
          <strong>Mariana Martins Marcelino</strong>
          <p>Orientanda · PPGEC/UFJF</p>
        </div>
        <div>
          <strong>Prof. Dr. Celso Bandeira de Melo Ribeiro</strong>
          <p>Orientador</p>
        </div>
      </div>
    </div>
  );
}

export function SlideSumario({ go }: { go: (i: number) => void }) {
  return (
    <>
      <p className="kicker">Roteiro</p>
      <h2>Sumário</h2>
      <div className="toc">
        {TOC.map((item) => (
          <button key={item.n} type="button" onClick={() => go(item.slide)}>
            <b>{item.n}</b>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </>
  );
}

export function SlideIntro() {
  return (
    <>
      <p className="kicker">1. Introdução</p>
      <h2>Eventos extremos de precipitação</h2>
      <p className="lede">
        Eventos extremos de precipitação podem causar cheias e danos à população e à infraestrutura.
        Em fevereiro de 2026, chuvas intensas atingiram Juiz de Fora e a Zona da Mata Mineira.
      </p>
      <div className="photos">
        <figure>
          <img src="/img/foto-enchente.png" alt="Rua alagada em Juiz de Fora" />
        </figure>
        <figure>
          <img src="/img/foto-deslizamento.png" alt="Deslizamento e destruição de edificações" />
        </figure>
      </div>
      <p className="note">
        O evento reforça a necessidade de estudar a resposta das bacias e o amortecimento de cheias em reservatórios.
        Imagem: elaborada pela autora (2026). Fontes: Prefeitura de Juiz de Fora (2026); IPCC (2021).
      </p>
    </>
  );
}

export function SlideObjetivos() {
  return (
    <>
      <p className="kicker">2. Objetivos</p>
      <h2>Capítulo 1 · concluído</h2>
      <div className="goals">
        {OBJETIVOS.map((texto, i) => (
          <article key={texto} className="goal">
            <span>0{i + 1}</span>
            <p>{texto}</p>
          </article>
        ))}
      </div>
    </>
  );
}

export function SlideArea() {
  return (
    <>
      <p className="kicker">3. Área de estudo</p>
      <h2>Localização da barragem Chapéu d’Uvas</h2>
      <figure className="figure-full">
        <img src="/img/mapa-localizacao.png" alt="Mapa de localização da barragem Chapéu d’Uvas" />
      </figure>
    </>
  );
}

export function SlideFluxo() {
  return (
    <>
      <p className="kicker">4. Metodologia</p>
      <h2>Fluxo de modelagem</h2>
      <p className="lede">Reservatório no HEC-HMS 4.12: Outflow Structures, com Elevation-Storage.</p>
      <figure className="figure-full">
        <img src="/img/fluxo.png" alt="Fluxograma da modelagem hidrológica" />
      </figure>
    </>
  );
}

export function SlideModelo() {
  const [ativo, setAtivo] = useState("1");
  return (
    <>
      <p className="kicker">4. Metodologia</p>
      <h2>Configuração do modelo</h2>
      <div className="steps">
        {METODO_PASSOS.map((p) => (
          <button
            key={p.n}
            type="button"
            className={`step ${ativo === p.n ? "on" : ""}`}
            onClick={() => setAtivo(p.n)}
          >
            <b>{p.n}</b>
            <h3>{p.titulo}</h3>
            <p className="mt-sm">{p.detalhe}</p>
          </button>
        ))}
      </div>
      <div className="row mt">
        <article className="stat grow">
          <b>11 sub-bacias</b>
          <span>Área total de 312,6 km²</span>
        </article>
        <article className="stat grow">
          <b>21 a 28/02/2026</b>
          <span>Passo de tempo de 2 minutos</span>
        </article>
      </div>
    </>
  );
}

export function SlideSubBacias() {
  return (
    <>
      <p className="kicker">4. Metodologia</p>
      <h2>Divisão em sub-bacias</h2>
      <figure className="figure-full">
        <img src="/img/mapa-subbacias.png" alt="Mapa das sub-bacias da bacia de contribuição de Chapéu d’Uvas" />
      </figure>
    </>
  );
}

export function SlideEstruturas() {
  return (
    <>
      <p className="kicker">4. Metodologia</p>
      <h2>Estruturas do reservatório</h2>
      <p className="lede">Esquema sem escala. A configuração das estruturas no modelo aparece no slide seguinte.</p>
      <figure className="figure-full">
        <img src="/img/perfil.png" alt="Corte esquemático da barragem e do reservatório Chapéu d’Uvas" />
      </figure>
    </>
  );
}

export function SlideCotas() {
  const [ativo, setAtivo] = useState(1);
  const cenario = CENARIOS.find((c) => c.id === ativo) ?? CENARIOS[0];
  return (
    <>
      <p className="kicker">4. Metodologia</p>
      <h2>Cotas iniciais</h2>
      <p className="lede">
        Os quatro cenários usam a mesma chuva e os mesmos parâmetros. Apenas a cota inicial varia.
      </p>
      <div className="row mt" style={{ flex: 1, minHeight: 0 }}>
        <div className="grow">
          <PerfilReservatorio cenario={cenario} />
        </div>
        <div style={{ width: "44%" }}>
          <table className="table">
            <thead>
              <tr>
                <th>Estrutura</th>
                <th>Soleira</th>
                <th>Largura</th>
              </tr>
            </thead>
            <tbody>
              {ESTRUTURAS.map((e) => (
                <tr key={e.nome}>
                  <td>{e.nome}</td>
                  <td>{e.soleira}</td>
                  <td>{e.largura}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row mt-sm">
            {CENARIOS.map((c) => (
              <button
                key={c.id}
                type="button"
                className={`card grow ${ativo === c.id ? "on" : ""}`}
                onClick={() => setAtivo(c.id)}
              >
                <strong>{fmt(c.cotaInicial)} m</strong>
              </button>
            ))}
          </div>
          <p className="note">
            736,70 m é o nível de controle normal. Tomada d’água: largura hidráulica equivalente de 2,50 m,
            sem representar a dimensão física real.
          </p>
        </div>
      </div>
    </>
  );
}

export function SlideAfluencia() {
  return (
    <>
      <p className="kicker">5. Resultados</p>
      <h2>Afluência ao reservatório</h2>
      <div className="row mt">
        <article className="stat grow">
          <b>288,17 m³/s</b>
          <span>Pico afluente em 26/02/2026, às 06h22, igual nos quatro cenários</span>
        </article>
        <article className="stat grow">
          <b>S1 · 59,11 m³/s</b>
          <span>Maior pico entre as sub-bacias · 20,0 km²</span>
        </article>
      </div>
      <div className="row mt">
        <article className="card grow">
          <p className="kicker">S2, S4 e S7</p>
          <strong>50,9 a 52,9 m³/s</strong>
          <p>Áreas de 65,7 a 69,6 km²</p>
        </article>
        <article className="card grow">
          <p className="kicker">Picos no evento</p>
          <strong>23, 24 e 26/02</strong>
          <p>A área não explica sozinha a resposta</p>
        </article>
      </div>
    </>
  );
}

export function SlideCenarios() {
  const [ativo, setAtivo] = useState(1);
  const cenario = CENARIOS.find((c) => c.id === ativo) ?? CENARIOS[0];
  return (
    <>
      <p className="kicker">5. Resultados</p>
      <h2>Comparação dos cenários</h2>
      <p className="lede">Pico afluente comum: 288,17 m³/s em 26/02/2026, às 06h22. Clique para destacar um cenário.</p>
      <table className="table mt">
        <thead>
          <tr>
            <th>Cenário</th>
            <th>Cota inicial (m)</th>
            <th>Pico de saída (m³/s)</th>
            <th>Cota máxima (m)</th>
            <th>Intervalo entre os picos</th>
          </tr>
        </thead>
        <tbody>
          {CENARIOS.map((c) => (
            <tr
              key={c.id}
              className={ativo === c.id ? "on" : ""}
              onClick={() => setAtivo(c.id)}
              style={{ cursor: "pointer" }}
            >
              <td>{c.id}</td>
              <td>{fmt(c.cotaInicial)}</td>
              <td>{fmt(c.picoSaida)}</td>
              <td>{fmt(c.cotaMaxima)}</td>
              <td>{c.intervalo}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="row mt" style={{ flex: 1, minHeight: 0 }}>
        <div className="grow">
          <BarrasCenarios ativo={ativo} onSelect={setAtivo} />
        </div>
        <article className="stat" style={{ width: "28%" }}>
          <b>{fmt(cenario.picoSaida)} m³/s</b>
          <span>Pico de saída · cenário {cenario.id} · intervalo {cenario.intervalo}</span>
        </article>
      </div>
      <p className="note">
        Fonte: dissertação, Tabela 7 e seção 4.5 (pp. 63–64). Os picos de entrada e saída não são simultâneos.
      </p>
    </>
  );
}

export function SlideConclusoes() {
  const itens = [
    "O reservatório apresentou amortecimento expressivo dos picos de vazão nas condições simuladas.",
    "Cotas iniciais mais altas resultaram em maiores vazões defluentes e menor intervalo entre os picos afluente e defluente.",
    "Somente o cenário iniciado na cota de 740,00 m ultrapassou a soleira do vertedouro Tulipa durante o evento.",
    "Os resultados evidenciam a importância das condições iniciais de armazenamento para a resposta hidrológica do reservatório.",
  ];
  return (
    <>
      <p className="kicker">6. Conclusões</p>
      <h2>Síntese dos resultados</h2>
      <div className="goals">
        {itens.map((texto, i) => (
          <article key={texto} className="goal">
            <span>0{i + 1}</span>
            <p>{texto}</p>
          </article>
        ))}
      </div>
    </>
  );
}

export function SlideLimites() {
  return (
    <>
      <p className="kicker">6. Conclusões</p>
      <h2>Alcance e limitações dos resultados</h2>
      <div className="row mt" style={{ flex: 1 }}>
        {LIMITES.map((item) => (
          <article key={item.titulo} className="card grow">
            <h3>{item.titulo}</h3>
            <p className="mt-sm">{item.texto}</p>
          </article>
        ))}
      </div>
      <p className="note">Fonte: dissertação, seções 3.4.2 e 4.6, conclusão e Apêndice B.</p>
    </>
  );
}

export function SlideCapitulo2() {
  return (
    <>
      <p className="kicker">7. Capítulo 2</p>
      <h2>Capítulo 2 · proposta</h2>
      <div className="goals">
        <article className="goal">
          <span>01</span>
          <p>Simular o rompimento hipotético da barragem fusível no HEC-RAS e avaliar as consequências.</p>
        </article>
        <article className="goal">
          <span>02</span>
          <p>Comparar a mancha de inundação com a do rompimento da barragem principal, analisado em trabalhos anteriores.</p>
        </article>
      </div>
    </>
  );
}

export function SlideCronograma() {
  return (
    <>
      <p className="kicker">7. Capítulo 2</p>
      <h2>Cronograma</h2>
      <figure className="figure-full">
        <img src="/img/cronograma.png" alt="Cronograma da dissertação de outubro de 2026 a março de 2027" />
      </figure>
    </>
  );
}

export function SlideObrigada() {
  return (
    <div className="thanks">
      <div>
        <h1>Obrigada!</h1>
        <div className="gold-line" style={{ marginInline: "auto" }} />
        <p>Mariana Martins Marcelino · PPGEC/UFJF</p>
      </div>
    </div>
  );
}
