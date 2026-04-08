const stats = [
  {
    number: "44%",
    label: "dos viajantes corporativos nunca usam — ou usam apenas às vezes — as ferramentas de reserva designadas pela empresa",
    source: "Navan, 2025",
  },
  {
    number: "2 em 3",
    label: "viajantes admitem desviar da política corporativa mesmo sabendo que não deveriam",
    source: "SAP Concur, 2024",
  },
  {
    number: "45%",
    label: "já ignoraram a política de viagens da empresa para economizar tempo",
    source: "WifiTalents, 2026",
  },
];

export default function PainSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
            O problema
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-gray-900 leading-tight max-w-xl">
            A empresa digitalizou tudo.{" "}
            <span className="text-blue-700">Menos as viagens.</span>
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.number}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
            >
              <p className="text-4xl font-bold text-blue-700 mb-2">
                {stat.number}
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {stat.label}
              </p>
              <p className="text-xs text-gray-400 border-t border-gray-100 pt-3">
                {stat.source}
              </p>
            </div>
          ))}
        </div>

        {/* Copy block */}
        <div className="max-w-3xl bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
          <p className="text-gray-700 leading-relaxed mb-4">
            O atrito não está na viagem. Está no que vem antes: pesquisar,
            comparar, preencher, aprovar — e no que vem depois: remarcar,
            cancelar, reembolsar. Pesquisas mostram que cancelar ou remarcar
            voos e hotéis é, de longe, o maior ponto de fricção relatado por
            viajantes corporativos.{" "}
            <span className="text-gray-400 text-xs">(Deloitte, 2024)</span>
          </p>
          <p className="text-gray-700 leading-relaxed">
            A Safira foi construída para eliminar exatamente esse fluxo.
          </p>
        </div>
      </div>
    </section>
  );
}
