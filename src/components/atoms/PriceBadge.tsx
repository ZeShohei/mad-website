export function PriceBadge({ children }: { children: string }) {
	return (
		<span className="rounded-full border border-crimson/20 bg-crimson/10 px-3 py-1 text-[0.6rem] font-light uppercase tracking-[0.18em] text-crimson backdrop-blur-sm">
			{children}
		</span>
	);
}