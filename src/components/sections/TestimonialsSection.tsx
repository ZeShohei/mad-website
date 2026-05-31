import { Section } from "@/src/components/atoms/Section";
import { SectionHeader } from "@/src/components/atoms/SectionHeader";
import { Reveal } from "@/src/components/atoms/Reveal";
import { testimonials } from "@/src/data/detailing";
import type { SectionKey } from "@/src/types/detailing";

export function TestimonialsSection({
																			visible,
																			setRef,
																		}: {
	visible?: boolean;
	setRef: (key: SectionKey) => (el: HTMLDivElement | null) => void;
}) {
	return (
		<Section id="bewertungen" className="scroll-mt-12">
			<Reveal
				visible={visible}
				dataSection="testimonials"
				refCallback={setRef("testimonials")}
			>
				<SectionHeader eyebrow="Kundenstimmen" title="Was unsere Kunden sagen" />
			</Reveal>

			<div className="mt-20 grid gap-8 md:grid-cols-3">
				{testimonials.map((testimonial:{name:string,stars:number,text:string,car:string}, index:number) => (
					<div
						key={testimonial.name}
						className={`border-t-2 border-crimson bg-obsidian p-8 transition-all duration-700 ${
							visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
						}`}
						style={{ transitionDelay: `${index * 150}ms` }}
					>
						<div className="text-sm tracking-[0.1em] text-crimson">
							{"★".repeat(testimonial.stars)}
						</div>

						<p className="mt-8 text-lg font-light italic leading-8 text-soft-white">
							“{testimonial.text}”
						</p>

						<div className="mt-8 text-xs uppercase tracking-[0.15em] text-metallic">
							{testimonial.name}
						</div>

						<div className="mt-2 text-xs uppercase tracking-[0.15em] text-crimson">
							{testimonial.car}
						</div>
					</div>
				))}
			</div>
		</Section>
	);
}