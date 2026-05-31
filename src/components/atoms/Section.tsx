import type {ReactNode} from "react";

export function Section({
													id,
													className = "",
													children,
												}: {
	id: string;
	className?: string;
	children: ReactNode;
}) {
	return (
		<section id={id} className={`px-6 py-28 md:px-12 ${className}`}>
			<div className="mx-auto max-w-7xl">{children}</div>
		</section>
	);
}