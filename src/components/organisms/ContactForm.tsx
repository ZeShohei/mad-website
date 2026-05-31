"use client";

import { useState } from "react";
import { FormField } from "@/src/components/atoms/FormField";
import { AddonsDropdown } from "@/src/components/molecules/AddonsDropdown";
import { PriceSummary } from "@/src/components/molecules/PriceSummary";
import { addons, services } from "@/src/data/detailing";
import type { VehicleSize } from "@/src/types/detailing";

export function ContactForm() {
	const [selectedVehicleSize, setSelectedVehicleSize] =
		useState<VehicleSize | "">("");
	const [selectedServiceId, setSelectedServiceId] = useState<number | null>(null);
	const [selectedAddons, setSelectedAddons] = useState<number[]>([]);
	const [addonsOpen, setAddonsOpen] = useState(false);

	const selectedService = services.find(
		(service) => service.id === selectedServiceId,
	);

	const selectedAddonItems = addons.filter((addon) =>
		selectedAddons.includes(addon.id),
	);

	const getPriceByVehicleSize = (item: {
		priceValue: number;
		priceBySize?: Partial<Record<VehicleSize, number>>;
	}) => {
		if (!selectedVehicleSize) {
			return item.priceValue;
		}

		return item.priceBySize?.[selectedVehicleSize] ?? item.priceValue;
	};

	const estimatedTotal =
		(selectedService ? getPriceByVehicleSize(selectedService) : 0) +
		selectedAddonItems.reduce(
			(sum, addon) => sum + getPriceByVehicleSize(addon),
			0,
		);

	const toggleAddon = (addonId: number) => {
		setSelectedAddons((prev) =>
			prev.includes(addonId)
				? prev.filter((id) => id !== addonId)
				: [...prev, addonId],
		);
	};

	return (
		<form className="mt-8 grid gap-px bg-crimson/10 text-left">
			<div className="grid gap-px bg-crimson/10 md:grid-cols-2">
				<FormField label="Vorname">
					<input type="text" placeholder="Max" />
				</FormField>

				<FormField label="Nachname">
					<input type="text" placeholder="Mustermann" />
				</FormField>
			</div>

			<div className="grid gap-px bg-crimson/10 md:grid-cols-2">
				<FormField label="E-Mail">
					<input type="email" placeholder="max@beispiel.at" />
				</FormField>

				<FormField label="Telefon">
					<input type="tel" placeholder="+43 ..." />
				</FormField>
			</div>

			<FormField label="Fahrzeug">
				<input type="text" placeholder="z.B. BMW 5er, Audi Q5 ..." />
			</FormField>

			<FormField label="Fahrzeuggröße / Fahrzeugart">
				<select
					value={selectedVehicleSize}
					onChange={(event) =>
						setSelectedVehicleSize(event.target.value as VehicleSize)
					}
				>
					<option value="" disabled>
						Bitte wählen ...
					</option>
					<option value="mopedauto">Mopedauto</option>
					<option value="kleinwagen">Kleinwagen</option>
					<option value="limousine">Limousine</option>
					<option value="kombi">Kombi</option>
					<option value="suv">SUV</option>
					<option value="kleinbus">Kleinbus</option>
					<option value="transporter">Transporter</option>
					<option value="bus">Bus</option>
				</select>
			</FormField>

			<FormField label="Gewünschte Leistung">
				<select
					value={selectedServiceId ?? ""}
					onChange={(event) => setSelectedServiceId(Number(event.target.value))}
				>
					<option value="" disabled>
						Bitte wählen ...
					</option>

					{services.map((service) => (
						<option key={service.id} value={service.id}>
							{service.title} — {service.price}
						</option>
					))}
				</select>
			</FormField>

			<FormField label="Zusatzleistungen">
				<AddonsDropdown
					addons={addons}
					selectedAddons={selectedAddons}
					addonsOpen={addonsOpen}
					onToggleOpen={() => setAddonsOpen((prev) => !prev)}
					onToggleAddon={toggleAddon}
				/>
			</FormField>

			<FormField label="Nachricht">
				<textarea
					rows={4}
					placeholder="Besondere Wünsche oder Anmerkungen ..."
				/>
			</FormField>

			<div className="flex flex-wrap items-center justify-center gap-6 bg-obsidian p-8">
				<PriceSummary
					selectedService={selectedService}
					selectedAddonItems={selectedAddonItems}
					selectedVehicleSize={selectedVehicleSize}
					getPriceByVehicleSize={getPriceByVehicleSize}
					estimatedTotal={estimatedTotal}
				/>

				<button
					type="submit"
					className="bg-crimson px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-crimson-dark"
				>
					Anfrage absenden
				</button>

				<span className="text-xs uppercase tracking-[0.12em] text-gunmetal">
					Wir antworten innerhalb 24h
				</span>
			</div>
		</form>
	);
}