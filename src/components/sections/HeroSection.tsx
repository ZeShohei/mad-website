import Image from "next/image";

export function HeroSection() {
	return (
		<section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-16 text-center">
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_60%,rgba(158,17,32,0.18)_0%,transparent_70%),linear-gradient(180deg,#050506_0%,#0B0B0D_50%,#050506_100%)]" />

			<div className="absolute inset-0 bg-[linear-gradient(rgba(184,189,197,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(184,189,197,0.035)_1px,transparent_1px)] bg-[size:80px_80px]" />

			<div className="relative z-10 my-12">
				<Image
					src="/images/logo.png"
					alt="Midnight Alchemy Detailing Logo"
					width={350}
					height={350}
					priority
					className="mx-auto object-contain opacity-90 drop-shadow-[0_0_35px_rgba(158,17,32,0.35)]"
				/>
			</div>

			<div className="relative z-10 flex items-center gap-4 text-xs uppercase tracking-[0.35em] text-crimson">
				<span className="h-px w-10 bg-crimson-dark" />
				Premium Fahrzeugaufbereitung
				<span className="h-px w-10 bg-crimson-dark" />
			</div>

			<h1 className="relative z-10 mt-8 max-w-5xl text-6xl font-light leading-[0.95] tracking-tight md:text-8xl">
				Ihr Fahrzeug.
				<br />
				<span className="italic text-crimson">Neuwertig.</span>
			</h1>

			<p className="relative z-10 mx-auto mt-8 max-w-2xl text-lg font-light leading-8 text-gunmetal md:text-xl">
				Wo Präzision auf Leidenschaft trifft — wir behandeln jedes Fahrzeug wie ein Kunstwerk.
			</p>

			<div className="relative z-10 mt-8 flex flex-col justify-center gap-4 sm:flex-row">
				<a
					href="#kontakt"
					className="bg-crimson px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-crimson-dark"
				>
					Termin anfragen
				</a>

				<a
					href="#leistungen"
					className="border border-crimson/40 px-10 py-4 text-xs font-medium uppercase tracking-[0.2em] text-crimson transition hover:border-crimson hover:bg-crimson/10"
				>
					Leistungen entdecken
				</a>
			</div>

			<div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-[0.65rem] uppercase tracking-[0.3em] text-gunmetal">
				<span className="h-16 w-px animate-pulse bg-gradient-to-b from-crimson-dark to-transparent" />
				Entdecken
			</div>
		</section>
	);
}