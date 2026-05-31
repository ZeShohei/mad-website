import {vehicleSizeLabels} from "@/src/data/detailing";
import type {AddonItem, ServiceItem, VehicleSize} from "@/src/types/detailing";

export function PriceSummary({
															 selectedService,
															 selectedAddonItems,
															 selectedVehicleSize,
															 getPriceByVehicleSize,
															 estimatedTotal,
														 }: {
	selectedService?: ServiceItem;
	selectedAddonItems: AddonItem[];
	selectedVehicleSize: VehicleSize | "";
	getPriceByVehicleSize: (item: {
		priceValue: number;
		priceBySize?: Partial<Record<VehicleSize, number>>;
	}) => number;
	estimatedTotal: number;
}) {
	return (
		<div className="bg-midnight p-8">
			<p className="text-xs uppercase tracking-[0.2em] text-crimson">
				Voraussichtlicher Preis
			</p>

			<div className="mt-4 space-y-3 text-sm font-light text-gunmetal">
				{selectedService ? (
					<div className="flex justify-between gap-4">
						<span>
							{selectedService.title}
							{selectedVehicleSize &&
								` (${vehicleSizeLabels[selectedVehicleSize]})`}
						</span>
						<span className="text-metallic">
							ab {getPriceByVehicleSize(selectedService)} €
						</span>
					</div>
				) : (
					<p>Bitte zuerst eine Leistung auswählen.</p>
				)}

				{selectedAddonItems.map((addon) => (
					<div key={addon.id} className="flex justify-between gap-4">
						<span>
							{addon.title}
							{selectedVehicleSize &&
								` (${vehicleSizeLabels[selectedVehicleSize]})`}
						</span>
						<span className="text-metallic">
							ab {getPriceByVehicleSize(addon)} €
						</span>
					</div>
				))}
			</div>

			<div className="mt-6 border-t border-crimson/15 pt-5">
				<div className="flex items-end justify-between gap-4">
					<span className="text-sm font-light text-gunmetal">Summe ab</span>
					<span className="text-3xl font-light text-crimson">
						{estimatedTotal > 0 ? `${estimatedTotal} €` : "—"}
					</span>
				</div>

				<p className="mt-3 text-xs font-light leading-6 text-gunmetal">
					Der finale Preis kann je nach Fahrzeuggröße, Zustand und
					Verschmutzungsgrad variieren.
				</p>
			</div>
		</div>
	);
}