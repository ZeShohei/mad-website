import {stats} from "@/src/data/detailing";

export function StatsSection() {
	return (
		<section
			className="grid grid-cols-2 border-y border-crimson/10 bg-obsidian px-6 py-12 md:grid-cols-4">
			{stats.map((stat: { label: string, value: string }) => (
				<div key={stat.label} className="text-center">
					<div className="text-4xl font-light text-crimson md:text-5xl">
						{stat.value}
					</div>
					<div className="mt-3 text-xs uppercase tracking-[0.18em] text-gunmetal">
						{stat.label}
					</div>
				</div>
			))}
		</section>
	);
}