export default function Ticker() {
  const items = [
    "QUERO O Q-INDICA NA MINHA FARMÁCIA",
    "QUERO PARA MINHA EQUIPE",
    "QUERO ACELERAR MINHAS VENDAS",
    "QUERO COMEÇAR AGORA",
  ];

  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div
      style={{
        background: "#1DB954",
        overflow: "hidden",
        padding: "12px 0",
        borderTop: "1px solid rgba(0,0,0,0.1)",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
      }}
    >
      <div
        className="ticker-track"
        style={{
          display: "flex",
          width: "max-content",
          gap: 0,
        }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--font-sora), sans-serif",
              fontWeight: 700,
              fontSize: 14,
              color: "#000",
              whiteSpace: "nowrap",
              padding: "0 32px",
              display: "inline-flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            {item}
            <span style={{ color: "rgba(0,0,0,0.45)", fontSize: 12 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
