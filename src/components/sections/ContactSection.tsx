import { Section } from "@/src/components/atoms/Section";
import { SectionHeader } from "@/src/components/atoms/SectionHeader";
import { Reveal } from "@/src/components/atoms/Reveal";
import { ContactForm } from "@/src/components/organisms/ContactForm";
import type { SectionKey } from "@/src/types/detailing";

export function ContactSection({
																 visible,
																 setRef,
															 }: {
	visible?: boolean;
	setRef: (key: SectionKey) => (el: HTMLDivElement | null) => void;
}) {
	return (
		<Section
			id="kontakt"
			className="scroll-mt-12 relative overflow-hidden bg-[#1a1a1a] text-center"
		>
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(158,17,32,0.12)_0%,transparent_70%)]" />

			<div className="relative mx-auto max-w-3xl">
				<Reveal visible={visible} dataSection="contact" refCallback={setRef("contact")}>
					<SectionHeader centered eyebrow="Kontakt" title="Termin anfragen" />
					<p className="mx-auto mt-6 max-w-xl text-sm font-light leading-7 text-gunmetal">
						Hinterlassen Sie uns Ihre Angaben – wir melden uns innerhalb von 24 Stunden bei Ihnen.
					</p>
				</Reveal>

				<ContactForm />
			</div>
		</Section>
	);
}