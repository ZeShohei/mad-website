export function SectionHeader({
																eyebrow,
																title,
																centered = false,
															}: {
	eyebrow: string;
	title: string;
	centered?: boolean;
}) {
	return (
		<div className={centered ? "text-center" : ""}>
			<div
				className={`flex items-center gap-4 text-xs uppercase tracking-[0.35em] text-crimson ${
					centered ? "justify-center" : ""
				}`}
			>
				{eyebrow}
				{!centered && <span className="h-px w-12 bg-crimson-dark" />}
			</div>

			<h2 className="mt-6 max-w-3xl text-5xl font-light leading-tight tracking-tight text-soft-white md:text-7xl">
				{title}
			</h2>
		</div>
	);
}