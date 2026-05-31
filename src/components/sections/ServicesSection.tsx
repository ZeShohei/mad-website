"use client";

import { Section } from "@/src/components/atoms/Section";
import { SectionHeader } from "@/src/components/atoms/SectionHeader";
import { Reveal } from "@/src/components/atoms/Reveal";
import { ServicesCarousel } from "@/src/components/organisms/ServicesCarousel";
import { AddonCard } from "@/src/components/molecules/AddonCard";
import { addons, services } from "@/src/data/detailing";
import type { SectionKey } from "@/src/types/detailing";

export function ServicesSection({
																	visible,
																	setRefAction,
																}: {
	visible?: boolean;
	setRefAction: (key: SectionKey) => (el: HTMLDivElement | null) => void;
}) {
	return (
		<Section id="leistungen" className="scroll-mt-12">
			<Reveal visible={visible} dataSection="services" refCallback={setRefAction("services")}>
				<SectionHeader
					eyebrow="Unsere Leistungen"
					title="Professionelle Pflege auf höchstem Niveau"
				/>
			</Reveal>

			<ServicesCarousel services={services} />

			<div className="mt-24">
				<div className="mb-10 max-w-2xl">
					<p className="text-xs uppercase tracking-[0.25em] text-crimson">
						Zusatzleistungen
					</p>
					<h3 className="mt-3 text-3xl font-light text-metallic">
						Add-ons für dein Paket
					</h3>
					<p className="mt-4 text-sm font-light leading-7 text-gunmetal">
						Ergänze dein gewähltes Paket individuell – je nach Zustand,
						Fahrzeuggröße und gewünschtem Pflegeumfang.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
					{addons.map((addon) => (
						<AddonCard key={addon.id} addon={addon} />
					))}
				</div>

				<p className="mt-6 text-xs font-light leading-6 text-gunmetal">
					Alle Preise verstehen sich als Richtwerte und können je nach
					Fahrzeuggröße, Zustand und Verschmutzungsgrad variieren.
				</p>
			</div>
		</Section>
	);
}