import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
	darkMode: "class",
	content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				midnight: "#0B0B0D",
				obsidian: "#15171A",
				gunmetal: "#6D737A",
				metallic: "#B8BDC5",
				crimson: {
					DEFAULT: "#9E1120",
					dark: "#730B16",
				},
				softWhite: "#EAECEF",
				deepShadow: "#050506",
				background: "#0B0B0D",
				foreground: "#EAECEF",
				card: {
					DEFAULT: "#15171A",
					foreground: "#EAECEF",
				},
				primary: {
					DEFAULT: "#9E1120",
					foreground: "#EAECEF",
				},
			},
		},
	},
	plugins: [tailwindcssAnimate],
};
export default config;