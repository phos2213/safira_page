export default function Philosophy() {
  return (
    <section className="py-20 px-6 bg-blue-700">
      <div className="max-w-4xl mx-auto text-white">
        <span className="text-xs font-semibold text-blue-300 uppercase tracking-widest">
          A nova era
        </span>

        <h2 className="mt-4 text-3xl lg:text-5xl font-bold leading-tight tracking-tight">
          Não é sobre usar IA.
          <br />
          É sobre reconstruir fluxos{" "}
          <span className="text-blue-300">em cima dela.</span>
        </h2>

        <div className="mt-8 space-y-5 text-blue-100 text-lg leading-relaxed max-w-2xl">
          <p>
            As empresas que vão ganhar não são as que adotaram IA. São as que
            fizeram a IA desaparecer — tão integrada ao processo que o
            colaborador simplesmente trabalha, sem perceber o que está
            acontecendo por baixo.
          </p>
          <p>
            A Safira não é uma feature de produtividade. É uma redefinição de
            onde começa uma viagem corporativa: não no formulário de reserva,
            mas no momento em que o compromisso entra na agenda.
          </p>
          <p className="text-blue-200">
            IA como estratégia significa isso: mover a inteligência para antes
            do problema, não depois.
          </p>
        </div>

        {/* Market stats */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-blue-800/40 border border-blue-600 rounded-2xl p-5">
            <p className="text-3xl font-bold text-white mb-1">80%</p>
            <p className="text-xs text-blue-200 leading-relaxed">
              dos viajantes já usam IA generativa para pesquisar e reservar viagens
            </p>
            <p className="text-xs text-blue-400 mt-3">Accenture / Engine, 2025</p>
          </div>
          <div className="bg-blue-800/40 border border-blue-600 rounded-2xl p-5">
            <p className="text-3xl font-bold text-white mb-1">25%</p>
            <p className="text-xs text-blue-200 leading-relaxed">
              de ganho de eficiência nos tempos de reserva com IA integrada ao fluxo corporativo
            </p>
            <p className="text-xs text-blue-400 mt-3">CTM, 2025</p>
          </div>
          <div className="bg-blue-800/40 border border-blue-600 rounded-2xl p-5">
            <p className="text-3xl font-bold text-white mb-1">45%</p>
            <p className="text-xs text-blue-200 leading-relaxed">
              do funding global em startups de viagem vai para IA — era 10% em 2023
            </p>
            <p className="text-xs text-blue-400 mt-3">McKinsey, 2025</p>
          </div>
        </div>

        {/* Flow comparison */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-blue-800/50 border border-blue-600 rounded-2xl p-5">
            <p className="text-xs font-semibold text-blue-300 uppercase tracking-wide mb-3">
              Antes
            </p>
            <div className="flex flex-wrap items-center gap-1.5 text-xs text-blue-100">
              {[
                "Evento criado",
                "→",
                "Lembrar de reservar",
                "→",
                "Pesquisar voos",
                "→",
                "Pesquisar hotel",
                "→",
                "Preencher formulário",
                "→",
                "Aguardar aprovação",
                "→",
                "Viajar",
              ].map((item, i) => (
                <span
                  key={i}
                  className={
                    item === "→" ? "text-blue-500" : "font-medium"
                  }
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white/10 border border-blue-400 rounded-2xl p-5">
            <p className="text-xs font-semibold text-blue-200 uppercase tracking-wide mb-3">
              Com Safira
            </p>
            <div className="flex flex-wrap items-center gap-1.5 text-xs text-white">
              {["Evento criado", "→", "Viajar"].map((item, i) => (
                <span
                  key={i}
                  className={
                    item === "→" ? "text-blue-300" : "font-bold text-base"
                  }
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
