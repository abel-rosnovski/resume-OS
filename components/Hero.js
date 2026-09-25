export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-10 md:px-20 relative">
      <div className="absolute top-10 left-10 text-xl font-bold tracking-wide text-foreground">
        <span className="text-accent">{">"}</span> Sourav B
      </div>

      <div className="mx-auto text-center max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-foreground">
          <span className="text-accent">{"{"}</span> Growth × Data × Automation × Product{" "}
          <span className="text-accent">{"}"}</span>
        </h1>
        <p className="mt-6 text-base md:text-lg text-muted">
          Growth, Data, Automation, and Product aren supposed to work together...in sync. And
          that&apos;s where I come in. I&apos;m a generalist by design.
        </p>
      </div>
    </section>
  );
}