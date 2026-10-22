import { CENARIOS, type Cenario } from "./data";

export function PerfilReservatorio({ cenario }: { cenario: Cenario }) {
  const min = 735.5;
  const max = 746.2;
  const y = (cota: number) => 268 - ((cota - min) / (max - min)) * 220;
  const waterY = y(cenario.cotaMaxima);
  const initY = y(cenario.cotaInicial);
  const tulipa = y(741);
  const emergencia = y(744.25);
  const fusivel = y(744.5);
  const principal = y(745.5);
  const tomada = y(736.7);

  return (
    <svg viewBox="0 0 640 320" className="profile-svg" role="img" aria-label="Perfil do reservatório">
      <defs>
        <linearGradient id="water" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#4A7FA6" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#10294A" stopOpacity="0.35" />
        </linearGradient>
      </defs>
      <line x1="56" y1={principal} x2="610" y2={principal} className="guide" />
      <line x1="56" y1={fusivel} x2="610" y2={fusivel} className="guide" />
      <line x1="56" y1={emergencia} x2="610" y2={emergencia} className="guide" />
      <line x1="56" y1={tulipa} x2="610" y2={tulipa} className="guide gold" />
      <line x1="56" y1={tomada} x2="610" y2={tomada} className="guide" />

      <rect x="56" y={waterY} width="360" height={268 - waterY} fill="url(#water)" />
      <line x1="56" y1={initY} x2="416" y2={initY} className="init-line" />

      <rect x="248" y={tulipa} width="22" height={268 - tulipa} fill="#D5D9DF" stroke="#10294A" />
      <rect x="368" y={fusivel} width="18" height={268 - fusivel} fill="#E2E1DC" stroke="#10294A" />
      <path d="M430,268 L430,48 L610,48 L610,268 Z" fill="#E8E6DF" stroke="#10294A" />

      <line x1="48" y1="48" x2="48" y2="268" stroke="#10294A" />
      <line x1="48" y1="268" x2="610" y2="268" stroke="#10294A" />

      <text x="8" y={principal + 4} className="axis">745,5</text>
      <text x="8" y={tulipa + 4} className="axis">741,0</text>
      <text x="8" y={tomada + 4} className="axis">736,7</text>

      <text x="438" y="40" className="annot">Barragem principal</text>
      <text x="380" y={fusivel - 6} className="annot">Fusível</text>
      <text x="196" y={tulipa - 6} className="annot gold">Tulipa 741,00 m</text>
      <text x="62" y={initY - 6} className="annot navy">
        Cota inicial {cenario.cotaInicial.toLocaleString("pt-BR", { minimumFractionDigits: 2 })} m
      </text>
      <text x="62" y={waterY + 16} className="annot navy">
        Máxima {cenario.cotaMaxima.toLocaleString("pt-BR", { minimumFractionDigits: 2 })} m
      </text>
    </svg>
  );
}

export function BarrasCenarios({
  ativo,
  onSelect,
}: {
  ativo: number;
  onSelect: (id: number) => void;
}) {
  const maxOut = 32;
  return (
    <div className="bars">
      {CENARIOS.map((c) => (
        <button
          key={c.id}
          type="button"
          className={`bar-col ${ativo === c.id ? "on" : ""}`}
          onClick={() => onSelect(c.id)}
        >
          <span className="bar-val">
            {c.picoSaida.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </span>
          <span
            className="bar"
            style={{ height: `${(c.picoSaida / maxOut) * 100}%` }}
          />
          <span className="bar-lab">
            C{c.id}
            <small>{c.cotaInicial.toLocaleString("pt-BR", { minimumFractionDigits: 2 })} m</small>
          </span>
        </button>
      ))}
    </div>
  );
}
