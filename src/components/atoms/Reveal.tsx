import type { ReactNode } from "react";

export function Reveal({
												 visible,
												 dataSection,
												 refCallback,
												 children,
											 }: {
	visible?: boolean;
	dataSection: string;
	refCallback: (el: HTMLDivElement | null) => void;
	children: ReactNode;
}) {
	return (
		<div
			ref={refCallback}
			data-section={dataSection}
			className={`transition-all duration-700 ${
				visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
			}`}
		>
			{children}
		</div>
	);
}