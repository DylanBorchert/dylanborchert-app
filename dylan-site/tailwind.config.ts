import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
			},
			colors: {
				/* CSS HEX */
				"smoky-black": "#121212",
				"background-black": "#09090b",
				"primary-1": "#0292F2",
				"secondary-1": "#0261A1",
				"primary-2": "#FFBE0B",
			},
			keyframes: {
				"fade-down-nav": {
					"0%": { opacity: "0.5", top: "-20px" },
					"100%": { opacity: "1", top: "0" },
				},
			},
			animation: {
				"fade-down-nav": "fade-down-nav 0.2s ease-in forwards",
			},
		},
	},
	plugins: [],
};
export default config;
