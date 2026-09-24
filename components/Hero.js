export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-10 md:px-20">
      {/* Name on the side */}
      <div className="absolute top-10 left-10 text-2xl font-bold tracking-wide">
        Sourav B
      </div>

      {/* Center of attraction */}
      <div className="mx-auto text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          {"{ Growth × Data × Automation × Product }"}
        </h1>
        <p className="mt-6 text-base md:text-lg text-gray-400">
          Growth, Data, Automation, and Product aren&apos;t supposed to work in silos —
          that&apos;s where I come in. I&apos;m a generalist by design, not by accident.
        </p>
      </div>
    </section>
  );
}