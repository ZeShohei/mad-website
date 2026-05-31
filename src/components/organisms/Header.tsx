import Image from "next/image";

export function Header({ scrolled }: { scrolled: boolean }) {
	return (
		<nav
			className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b px-6 py-4 transition-all duration-300 md:px-12 ${
				scrolled
					? "border-crimson/20 bg-midnight/95 backdrop-blur-xl"
					: "border-transparent bg-transparent"
			}`}
		>
			<a href="#" className="flex items-center gap-3">
				<Image
					src="/images/simple_logo.png"
					alt="Midnight Alchemy Detailing Logo"
					width={100}
					height={100}
					priority
					className="w-auto object-contain"
				/>
			</a>

			<ul className="hidden items-center gap-10 text-xs font-medium uppercase tracking-[0.18em] text-gunmetal md:flex">
				<li><a href="#leistungen" className="transition hover:text-crimson">Leistungen</a></li>
				<li><a href="#ablauf" className="transition hover:text-crimson">Ablauf</a></li>
				<li><a href="#bewertungen" className="transition hover:text-crimson">Stimmen</a></li>
				<li><a href="#kontakt" className="transition hover:text-crimson">Kontakt</a></li>
			</ul>

			<a
				href="#kontakt"
				className="border border-crimson bg-crimson px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-crimson-dark"
			>
				Anfrage
			</a>
		</nav>
	);
}