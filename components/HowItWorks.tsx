const steps = [
  {
    number: "01",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="3" stroke="#1D4ED8" strokeWidth="1.5" />
        <path d="M8 2v3M16 2v3" stroke="#1D4ED8" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 9h18" stroke="#1D4ED8" strokeWidth="1.5" />
        <rect x="7" y="13" width="3" height="3" rx="0.5" fill="#1D4ED8" />
        <rect x="14" y="13" width="3" height="3" rx="0.5" fill="#3B82F6" opacity="0.5" />
      </svg>
    ),
    title: "Você cria o evento",
    body: "Adiciona uma reunião, conferência ou compromisso no Google Calendar — do jeito que já faz hoje. Nenhuma mudança no seu fluxo.",
  },
  {
    number: "02",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="#1D4ED8" strokeWidth="1.5" />
        <path d="M9 12l2 2 4-4" stroke="#1D4ED8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 3v1M12 20v1M3 12h1M20 12h1" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
    title: "A Safira entra em ação",
    body: "O agente lê o evento, identifica a necessidade de deslocamento e monta uma sugestão completa: voo + hotel, dentro da política da empresa.",
  },
  {
    number: "03",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="6" width="18" height="14" rx="2" stroke="#1D4ED8" strokeWidth="1.5" />
        <path d="M3 10h18" stroke="#1D4ED8" strokeWidth="1.5" />
        <path d="M7 14h4M7 17h6" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="18" cy="6" r="3" fill="#1D4ED8" />
        <path d="M17 6l.75.75L19.5 5" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Você encontra tudo pronto",
    body: "Quando abre o Onfly, a Sugestão Safira já está lá — basta revisar e confirmar em segundos. Sem pesquisar, sem preencher, sem esperar.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
            Como funciona
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Três passos.{" "}
            <span className="text-blue-700">Nenhum deles é reservar.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line on desktop */}
          <div
            className="hidden md:block absolute top-8 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-blue-100"
            aria-hidden="true"
          />

          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-4">
              <div className="relative flex items-center gap-4 md:flex-col md:items-start">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                  {step.icon}
                </div>
                <span className="text-xs font-bold text-blue-300 md:mt-1">
                  {step.number}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
