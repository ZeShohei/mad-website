import { Card, CardContent } from "../atoms/Card";
import { PriceBadge } from "@/src/components/atoms/PriceBadge";
import type { AddonItem } from "@/src/types/detailing";

export function AddonCard({ addon }: { addon: AddonItem }) {
	return (
		<Card className="group border-crimson/10 bg-obsidian transition duration-500 hover:border-crimson/40 hover:bg-[#1a1a1a]">
			<CardContent className="p-6">
				<div className="mb-5 flex items-start justify-between gap-4">
					<span className="text-2xl text-crimson transition duration-500 group-hover:scale-110">
						{addon.icon}
					</span>

					{addon.tag && <PriceBadge>{addon.tag}</PriceBadge>}
				</div>

				<h4 className="text-xl font-normal text-metallic">{addon.title}</h4>

				<p className="mt-3 text-sm font-light leading-7 text-gunmetal">
					{addon.desc}
				</p>

				<div className="mt-6 border-t border-crimson/15 pt-4 text-lg font-light text-crimson">
					{addon.price}
				</div>
			</CardContent>
		</Card>
	);
}