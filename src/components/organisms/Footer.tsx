import { services } from "@/src/data/detailing";
import type { ReactNode } from "react";

export function Footer() {
	return (
		<>
			<footer className="grid gap-12 border-t border-crimson/10 bg-midnight px-6 py-16 md:grid-cols-[2fr_1fr_1fr_1fr] md:px-12">
				<div>
					<div className="text-3xl font-light text-crimson">
						Midnight Alchemy
					</div>

					<p className="mt-4 text-sm font-light leading-7 text-gunmetal">
						Professionelle Fahrzeugaufbereitung in Wien.
						<br />
						Perfektion ist unser Standard.
					</p>

					<div className="mt-8 space-y-2 text-sm text-gunmetal">
						<div>📍 Musterstraße 12, 1010 Wien</div>
						<div>📞 +43 1 234 56 78</div>
						<div>✉ office@midnightalchemy.at</div>
					</div>
				</div>

				<FooterColumn title="Leistungen">
					{services.slice(0, 4).map((service) => (
						<a key={service.id} href="#leistungen">
							{service.title}
						</a>
					))}
				</FooterColumn>

				<FooterColumn title="Unternehmen">
					<a href="#">Über uns</a>
					<a href="#">Galerie</a>
					<a href="#bewertungen">Bewertungen</a>
					<a href="#kontakt">Kontakt</a>
				</FooterColumn>

				<FooterColumn title="Öffnungszeiten">
					<span>Mo – Fr: 08:00 – 18:00</span>
					<span>Sa: 09:00 – 15:00</span>
					<span>So: Geschlossen</span>
				</FooterColumn>
			</footer>

			<div className="flex flex-col justify-between gap-4 border-t border-crimson/5 bg-midnight px-6 py-6 text-xs uppercase tracking-[0.12em] text-gunmetal md:flex-row md:px-12">
				<span>© 2025 Midnight Alchemy Detailing. Alle Rechte vorbehalten.</span>
				<span>Datenschutz · Impressum · AGB</span>
			</div>
		</>
	);
}

function FooterColumn({
												title,
												children,
											}: {
	title: string;
	children: ReactNode;
}) {
	return (
		<div>
			<div className="mb-6 text-xs uppercase tracking-[0.2em] text-crimson">
				{title}
			</div>

			<div className="flex flex-col gap-3 text-sm font-light text-gunmetal [&_a]:transition [&_a:hover]:text-crimson">
				{children}
			</div>
		</div>
	);
}