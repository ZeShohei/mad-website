import type { ReactNode } from "react";

export type VehicleSize =
	| "mopedauto"
	| "kleinwagen"
	| "limousine"
	| "kombi"
	| "suv"
	| "kleinbus"
	| "transporter"
	| "bus";

export type PriceBySize = Partial<Record<VehicleSize, number>>;

export type ServiceItem = {
	id: number;
	icon: ReactNode;
	title: string;
	desc: string;
	price: string;
	priceValue: number;
	priceBySize: PriceBySize;
	tag: string | null;
	items: string[];
};

export type AddonItem = {
	id: number;
	icon: ReactNode;
	title: string;
	desc: string;
	price: string;
	priceValue: number;
	priceBySize: PriceBySize;
	tag: string | null;
};

export type SectionKey = "services" | "process" | "testimonials" | "contact";