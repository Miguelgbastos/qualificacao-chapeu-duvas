import { useState } from "react";
import {
  ACIONAMENTOS,
  ANEXO_DESCARGA,
  CENARIOS,
  CONCLUSOES,
  CRONOGRAMA,
  CRONOGRAMA_MESES,
  IMPLICACOES,
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
          <p>Orientanda · PEC/UFJF</p>
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
        <div style={{ width: "48%" }}>
          <table className="table">
            <thead>
              <tr>
                <th>Cota inicial</th>
                <th>Cota máxima</th>
                <th>Dispositivo acionado</th>
              </tr>
            </thead>
            <tbody>
              {CENARIOS.map((c) => {
                const acao = ACIONAMENTOS.find((a) => a.id === c.id);
                return (
                  <tr
                    key={c.id}
                    className={ativo === c.id ? "on" : ""}
                    onClick={() => setAtivo(c.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <td>{fmt(c.cotaInicial)} m</td>
                    <td>{fmt(c.cotaMaxima)} m</td>
                    <td>{acao?.dispositivo}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <p className="note">
            {ACIONAMENTOS.find((a) => a.id === ativo)?.detalhe} Fonte: dissertação,
            seções 4.5.1 a 4.5.5 e conclusão.
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
      <div className="cta-wrap">
        <a
          className="cta"
          href="https://projeto-sub-bacias.vercel.app/#afluencia"
          target="_blank"
          rel="noopener noreferrer"
        >
          Abrir o painel de afluência
        </a>
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
      <div className="chart-row">
        <div className="grow">
          <BarrasCenarios ativo={ativo} onSelect={setAtivo} />
        </div>
        <article className="stat chart-stat">
          <b>{fmt(cenario.picoSaida)} m³/s</b>
          <span>Pico de saída · cenário {cenario.id} · intervalo {cenario.intervalo}</span>
        </article>
      </div>
      <p className="note note-foot">
        Fonte: dissertação, Tabela 7 e seção 4.5 (pp. 63–64). Os picos de entrada e saída não são simultâneos.
      </p>
    </>
  );
}

export function SlideAnexo() {
  return (
    <>
      <p className="kicker">5. Resultados · anexo</p>
      <h2>Acionamento das estruturas de descarga</h2>
      <table className="table table-anexo mt">
        <thead>
          <tr>
            <th>Cota inicial (m)</th>
            <th>Cota máxima atingida (m)</th>
            <th>Pico de saída total (m³/s)</th>
            <th>Tomada d’água</th>
            <th>Vertedouro Tulipa</th>
          </tr>
        </thead>
        <tbody>
          {ANEXO_DESCARGA.map((linha) => (
            <tr key={linha.cotaInicial}>
              <td>{fmt(linha.cotaInicial)}</td>
              <td>{fmt(linha.cotaMaxima)}</td>
              <td>{fmt(linha.picoSaida)}</td>
              <td>{linha.tomada}</td>
              <td>{linha.tulipa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export function SlideConclusoes() {
  return (
    <>
      <p className="kicker">6. Conclusões</p>
      <h2>Conclusão</h2>
      <div className="conclusoes">
        {CONCLUSOES.map((item, i) => (
          <article key={item.titulo} className="conclusao">
            <span>0{i + 1}</span>
            <h3>{item.titulo}</h3>
            <p>{item.texto}</p>
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
      <h2>Cota inicial e implicações</h2>
      <div className="conclusoes">
        {IMPLICACOES.map((item, i) => (
          <article key={item.titulo} className="conclusao">
            <span>0{i + 1}</span>
            <h3>{item.titulo}</h3>
            {item.textos.map((texto) => (
              <p key={texto}>{texto}</p>
            ))}
          </article>
        ))}
      </div>
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
  const [ativo, setAtivo] = useState<number | null>(null);
  const quinzenas = CRONOGRAMA_MESES.flatMap((mes) => [
    { mes: mes.label, label: "1ª" },
    { mes: mes.label, label: "2ª" },
  ]);

  return (
    <>
      <p className="kicker">7. Capítulo 2</p>
      <h2>Cronograma</h2>
      <div className="gantt" role="table" aria-label="Cronograma da dissertação de outubro de 2026 a março de 2027">
        <div className="gantt-row gantt-months" role="row">
          <span>Atividade</span>
          {CRONOGRAMA_MESES.map((mes) => (
            <span key={mes.id} className={mes.atual ? "now" : ""}>
              {mes.label}
            </span>
          ))}
        </div>
        <div className="gantt-row gantt-quinz" role="row">
          <span />
          {quinzenas.map((q) => (
            <span key={`${q.mes}-${q.label}`}>{q.label}</span>
          ))}
        </div>
        {CRONOGRAMA.map((item, i) => (
          <button
            key={item.tarefa}
            type="button"
            className={`gantt-row ${ativo === i ? "on" : ""}`}
            onClick={() => setAtivo(i === ativo ? null : i)}
          >
            <span className="gantt-task" title={item.tarefa}>{item.tarefa}</span>
            {quinzenas.map((q, j) => {
              const on = j >= item.inicio && j <= item.fim;
              return (
                <i
                  key={`${item.tarefa}-${q.mes}-${q.label}`}
                  className={`cell ${on ? "on" : ""}`}
                  aria-label={on ? `${q.mes}, ${q.label} quinzena` : undefined}
                />
              );
            })}
          </button>
        ))}
      </div>
    </>
  );
}

export function SlideObrigada() {
  return (
    <div className="thanks">
      <div>
        <h1>Obrigada!</h1>
        <div className="gold-line" style={{ marginInline: "auto" }} />
        <p>Mariana Martins Marcelino · PEC/UFJF</p>
      </div>
    </div>
  );
}
