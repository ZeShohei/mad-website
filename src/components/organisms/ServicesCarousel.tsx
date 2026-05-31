"use client";

import { useState } from "react";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { PriceBadge } from "@/src/components/atoms/PriceBadge";
import type { ServiceItem } from "@/src/types/detailing";

export function ServicesCarousel({ services }: { services: ServiceItem[] }) {
	const [activeService, setActiveService] = useState(1);

	const activeIndex = services.findIndex((service) => service.id === activeService);

	const getLoopedIndex = (index: number) =>
		(index + services.length) % services.length;

	type SlidePosition = -2 | -1 | 0 | 1 | 2;

	const slidePositions: SlidePosition[] = [-2, -1, 0, 1, 2];

	const visibleServices = slidePositions.map((position) => {
		const index = getLoopedIndex(activeIndex + position);

		return {
			...services[index],
			position,
		};
	});

	const goToPrevService = () => {
		setActiveService((prev) => {
			const currentIndex = services.findIndex((service) => service.id === prev);
			const nextIndex = currentIndex <= 0 ? services.length - 1 : currentIndex - 1;
			return services[nextIndex].id;
		});
	};

	const goToNextService = () => {
		setActiveService((prev) => {
			const currentIndex = services.findIndex((service) => service.id === prev);
			const nextIndex = currentIndex >= services.length - 1 ? 0 : currentIndex + 1;
			return services[nextIndex].id;
		});
	};

	return (
		<div className="mt-20">
			<div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center justify-center overflow-hidden">
				<button
					type="button"
					onClick={goToPrevService}
					className="absolute left-0 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-crimson/20 bg-obsidian text-crimson transition hover:border-crimson/50 hover:bg-[#1a1a1a]"
					aria-label="Vorheriges Paket"
				>
					<ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
				</button>

				<div className="relative h-[700px] w-full">
					{visibleServices.map((service) => {
						const active = service.position === 0;

						const positionStyles: Record<
							SlidePosition,
							{ x: number; scale: number; opacity: number; zIndex: number }
						> = {
							[-2]: { x: -440, scale: 0.74, opacity: 0.35, zIndex: 5 },
							[-1]: { x: -230, scale: 0.86, opacity: 0.65, zIndex: 10 },
							[0]: { x: 0, scale: 1, opacity: 1, zIndex: 30 },
							[1]: { x: 230, scale: 0.86, opacity: 0.65, zIndex: 10 },
							[2]: { x: 440, scale: 0.74, opacity: 0.35, zIndex: 5 },
						};

						const style = positionStyles[service.position];

						return (
							<button
								key={`${service.id}-${service.position}`}
								type="button"
								onClick={() => setActiveService(service.id)}
								style={{
									transform: `translateX(${style.x}px) scale(${style.scale})`,
									opacity: style.opacity,
									zIndex: style.zIndex,
								}}
								className={`absolute left-1/2 top-0 flex min-h-[600px] w-[340px] -translate-x-1/2 flex-col items-center border p-7 text-center transition-all duration-500 ${
									active
										? "border-crimson/70 bg-[#1a1a1a] shadow-2xl shadow-crimson/10"
										: "border-crimson/10 bg-obsidian hover:border-crimson/40 hover:opacity-90"
								}`}
							>
								{service.tag && (
									<div className="absolute right-4 top-4">
										<PriceBadge>{service.tag}</PriceBadge>
									</div>
								)}

								<div className="mt-8 flex items-center justify-center rounded-full border border-crimson/20 bg-crimson/5 p-2">
									{service.icon}
								</div>

								<h3 className="mt-4 text-2xl font-light text-metallic">
									{service.title}
								</h3>

								<p className="mt-4 text-sm font-light leading-7 text-gunmetal">
									{service.desc}
								</p>

								{active && (
									<ul className="mt-4 flex flex-1 flex-col gap-3 text-left">
										{service.items.map((item) => (
											<li
												key={item}
												className="flex gap-3 text-sm font-light leading-6 text-metallic"
											>
												<Check
													className="mt-1 h-4 w-4 shrink-0 text-crimson"
													strokeWidth={1.5}
												/>
												<span>{item}</span>
											</li>
										))}
									</ul>
								)}

								<div className="mt-4 w-full border-t border-crimson/15 pt-2 text-2xl font-light text-crimson">
									{service.price}
								</div>
							</button>
						);
					})}
				</div>

				<button
					type="button"
					onClick={goToNextService}
					className="absolute right-0 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-crimson/20 bg-obsidian text-crimson transition hover:border-crimson/50 hover:bg-[#1a1a1a]"
					aria-label="Nächstes Paket"
				>
					<ChevronRight className="h-5 w-5" strokeWidth={1.5} />
				</button>
			</div>

			<div className="mt-8 flex justify-center gap-3">
				{services.map((service) => (
					<button
						key={service.id}
						type="button"
						onClick={() => setActiveService(service.id)}
						className={`h-2.5 rounded-full transition-all ${
							activeService === service.id
								? "w-8 bg-crimson"
								: "w-2.5 bg-crimson/25 hover:bg-crimson/50"
						}`}
						aria-label={`${service.title} anzeigen`}
					/>
				))}
			</div>
		</div>
	);
}