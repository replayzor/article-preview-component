/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				veryDarkGrayishBlue: "hsl(217, 19%, 35%)",
				desaturatedDarkBlue: "hsl(214, 17%, 51%)",
				grayishBlue: "hsl(212, 23%, 69%)",
				lightGrayishBlue: "hsl(210, 46%, 95%)",
			},
			fontFamily: {
				Manrope: ["Manrope", "sans-serif"],
			},
		},
	},
	plugins: [],
};
