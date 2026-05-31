"use client";

import { useEffect, useRef, useState } from "react";
import { Header } from "@/src/components/organisms/Header";
import { Footer } from "@/src/components/organisms/Footer";
import { HeroSection } from "@/src/components/sections/HeroSection";
import { StatsSection } from "@/src/components/sections/StatsSection";
import { ServicesSection } from "@/src/components/sections/ServicesSection";
import { ProcessSection } from "@/src/components/sections/ProcessSection";
import { TestimonialsSection } from "@/src/components/sections/TestimonialsSection";
import { ContactSection } from "@/src/components/sections/ContactSection";
import type { SectionKey } from "@/src/types/detailing";

export default function Home() {
	const [scrolled, setScrolled] = useState(false);
	const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});
	const sectionRefs = useRef<Partial<Record<SectionKey, HTMLDivElement | null>>>({});

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 50);

		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const section = entry.target.getAttribute("data-section");

					if (entry.isIntersecting && section) {
						setVisibleSections((prev) => ({ ...prev, [section]: true }));
					}
				});
			},
			{ threshold: 0.15 },
		);

		Object.values(sectionRefs.current).forEach((el) => {
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	}, []);

	const setRef = (key: SectionKey) => (el: HTMLDivElement | null) => {
		sectionRefs.current[key] = el;
	};

	return (
		<main className="min-h-screen overflow-x-hidden bg-midnight text-soft-white">
			<Header scrolled={scrolled} />
			<HeroSection />
			<StatsSection />
			<ServicesSection visible={visibleSections.services} setRefAction={setRef} />
			<ProcessSection visible={visibleSections.process} setRef={setRef} />
			<TestimonialsSection
				visible={visibleSections.testimonials}
				setRef={setRef}
			/>
			<ContactSection visible={visibleSections.contact} setRef={setRef} />
			<Footer />
		</main>
	);
}