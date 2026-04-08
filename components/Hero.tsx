const ONFLY_URL = process.env.NEXT_PUBLIC_ONFLY_URL ?? "#";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — copy */}
        <div className="flex flex-col gap-6">
          <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full w-fit border border-blue-100">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="6" cy="6" r="6" fill="#1D4ED8" />
            </svg>
            Powered by Onfly
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
            Seu calendário marcou a reunião.{" "}
            <span className="text-blue-700">
              A Safira já reservou o voo.
            </span>
          </h1>

          <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
            Um agente inteligente que lê sua agenda, monta o roteiro completo
            — voo e hotel — e entrega tudo pronto quando você abre o Onfly.
            Sem formulário. Sem aprovação manual. Sem atrito.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <a
              href={ONFLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-full transition-colors text-center"
            >
              Ver na plataforma
            </a>
            <a
              href="#como-funciona"
              className="text-blue-700 hover:text-blue-800 font-semibold px-6 py-3 rounded-full border border-blue-200 hover:bg-blue-50 transition-colors text-center"
            >
              Como funciona?
            </a>
          </div>
        </div>

        {/* Right — mockup */}
        <div className="flex flex-col items-center gap-4">
          {/* Google Calendar card */}
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-2xl p-4 shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-label="Google Calendar"
                >
                  <rect
                    x="1"
                    y="2"
                    width="14"
                    height="13"
                    rx="2"
                    stroke="#1D4ED8"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M5 1v2M11 1v2"
                    stroke="#1D4ED8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path d="M1 6h14" stroke="#1D4ED8" strokeWidth="1.5" />
                </svg>
              </div>
              <span className="text-xs text-gray-400 font-medium">
                Google Calendar
              </span>
            </div>
            <p className="text-sm font-semibold text-gray-800">
              Reunião com cliente — São Paulo
            </p>
            <p className="text-xs text-gray-400 mt-1">14 de abril · 14h00</p>
            <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span className="text-xs text-gray-500">Presencial · GRU</span>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-px h-4 bg-blue-200" />
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M8 3v10M4 9l4 4 4-4"
                stroke="#3B82F6"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xs text-blue-400 font-medium tracking-wide uppercase">
              Safira age
            </span>
            <div className="w-px h-4 bg-blue-200" />
          </div>

          {/* Safira Suggestion card */}
          <div className="w-full max-w-sm bg-blue-700 rounded-2xl p-4 shadow-lg text-white">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-blue-200 uppercase tracking-wide">
                Sugestão Safira
              </span>
              <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                Novo
              </span>
            </div>
            <p className="text-sm font-bold text-white mb-3">
              São Paulo · 14 de abril
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-blue-100">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 7h10M7 2l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Voo GRU → CGH · TAM 3042 · 12h15
              </div>
              <div className="flex items-center gap-2 text-xs text-blue-100">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect
                    x="1"
                    y="4"
                    width="12"
                    height="9"
                    rx="1.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M4 4V3a3 3 0 016 0v1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
                Hotel Ibis Paulista · 1 noite
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-blue-600 flex items-center justify-between">
              <span className="text-xs text-blue-200">Total estimado</span>
              <span className="text-sm font-bold">R$ 890</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
