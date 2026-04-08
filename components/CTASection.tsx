const ONFLY_URL = process.env.NEXT_PUBLIC_ONFLY_URL ?? "#";

export default function CTASection() {
  return (
    <section className="py-24 px-6 bg-blue-50">
      <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
          Pronto para ver a{" "}
          <span className="text-blue-700">Safira em ação?</span>
        </h2>
        <p className="text-gray-500 text-lg">
          Disponível no Onfly para empresas cadastradas.
        </p>
        <a
          href={ONFLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-full transition-colors text-base"
        >
          Acessar o Onfly
        </a>
      </div>
    </section>
  );
}
