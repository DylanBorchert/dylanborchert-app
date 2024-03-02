import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: ["class"],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
			},
			colors: {
				/* CSS HEX */
				"background-color": "var(--background-color)",
				"foreground-color": "var(--foreground-color)",
				"primary-1": "var(--primary-1)",
				"secondary-1": "var(--secondary-1)",
				"primary-2": "var(--primary-2)",
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
