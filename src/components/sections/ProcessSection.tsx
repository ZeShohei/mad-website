import {Section} from "@/src/components/atoms/Section";
import {SectionHeader} from "@/src/components/atoms/SectionHeader";
import {Reveal} from "@/src/components/atoms/Reveal";
import {steps} from "@/src/data/detailing";
import type {SectionKey} from "@/src/types/detailing";

export function ProcessSection({
																 visible,
																 setRef,
															 }: {
	visible?: boolean;
	setRef: (key: SectionKey) => (el: HTMLDivElement | null) => void;
}) {
	return (
		<Section id="ablauf" className="scroll-mt-12 bg-obsidian">
			<Reveal visible={visible} dataSection="process" refCallback={setRef("process")}>
				<SectionHeader eyebrow="So funktioniert’s" title="Von der Anfrage zur Perfektion"/>
			</Reveal>

			<div className="relative mt-20 grid gap-12 md:grid-cols-4">
				<div
					className="absolute left-[5%] right-[5%] top-7 hidden h-px bg-gradient-to-r from-transparent via-crimson-dark to-transparent md:block"/>

				{steps.map((step: {
					num: string,
					title: string,
					desc: string,
				}, index: number) => (
					<div
						key={step.num}
						className={`relative transition-all duration-700 ${
							visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
						}`}
						style={{transitionDelay: `${index * 150}ms`}}
					>
						<div className="text-6xl font-light italic text-gunmetal/40">
							{step.num}
						</div>
						<h3 className="mt-8 text-2xl font-normal text-metallic">
							{step.title}
						</h3>
						<p className="mt-4 text-sm font-light leading-7 text-gunmetal">
							{step.desc}
						</p>
					</div>
				))}
			</div>
		</Section>
	);
}