import type { AddonItem } from "@/src/types/detailing";

export function AddonsDropdown({
																 addons,
																 selectedAddons,
																 addonsOpen,
																 onToggleOpen,
																 onToggleAddon,
															 }: {
	addons: AddonItem[];
	selectedAddons: number[];
	addonsOpen: boolean;
	onToggleOpen: () => void;
	onToggleAddon: (addonId: number) => void;
}) {
	return (
		<div className="relative">
			<button
				type="button"
				onClick={onToggleOpen}
				className="flex w-full items-center justify-between bg-obsidian px-5 py-4 text-left text-sm font-light text-metallic outline-none transition focus:ring-1 focus:ring-crimson"
			>
				<span>
					{selectedAddons.length > 0
						? `${selectedAddons.length} Zusatzleistung(en) ausgewählt`
						: "Zusatzleistungen auswählen ..."}
				</span>
				<span className="text-crimson">{addonsOpen ? "−" : "+"}</span>
			</button>

			{addonsOpen && (
				<div className="absolute z-30 mt-4 w-full overflow-y-auto border border-crimson/20 bg-[#111214] p-4 shadow-2xl shadow-black/40">
					{addons.map((addon) => (
						<label
							key={addon.id}
							className="flex w-full cursor-pointer gap-4 border-b border-crimson/10 px-2 py-2 last:border-b-0 hover:bg-crimson/5"
						>
							<input
								type="checkbox"
								checked={selectedAddons.includes(addon.id)}
								onChange={() => onToggleAddon(addon.id)}
								className="mt-1 max-w-[20px] accent-crimson"
							/>

							<span className="flex-1">
								<span className="block w-[200px] text-sm font-normal text-metallic">
									{addon.title}
								</span>
							</span>

							<span className="w-[50px] text-sm font-light text-crimson">
								{addon.price}
							</span>
						</label>
					))}
				</div>
			)}
		</div>
	);
}