module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./layouts/**/*.{js,ts,jsx,tsx}",
		"./node_modules/flowbite-react/**/*.js",
	],
	theme: {
		darkMode: 'media',
		extend: {
			colors: {
				primary: {
					50: "#f9e5e5",
					100: "#efb2b2",
					200: "#e57f7f",
					300: "#db4c4c",
					400: "#d11919",
					500: "var(--primary-color)",
					600: "#b70000",
					700: "#a30000",
					800: "#8e0000",
					900: "#5f0000",
					DEFAULT: "#AFCC36", //500
					on: "#f9e6e5", //50
					dark: {
						DEFAULT: "#5274fa", //300
						on: "#001ba3", //800
					},
				},
				secondary: {
					50: "#AFCC36",
					100: "#AFCC36",
					200: "#AFCC36",
					300: "#AFCC36",
					400: "#AFCC36",
					500: "#BBDD44",
					600: "#748628",
					700: "#4f5918",
					800: "#AFCC36",
					900: "#AFCC36",
					DEFAULT: "#1C75BC", //500
					on: "#f4fbfa", //50
					dark: {
						DEFAULT: "#AFCC36", //300
						on: "#AFCC36", //800
					},
				},
				textColor: {
					default: 'var(--text-primary)',
					hover: 'var(--text-main)'
				},
				white: {
					50: "#fbf4f4",
					100: "#f6e9e9",
					200: "#e7e1e1",
					300: "#dba8a8",
					400: "#b4a8a8",
					500: "#FFFFFF",
					600: "#867b7b",
					700: "#857d7d",
					800: "#5e5c5c",
					900: "#504f4f",
					DEFAULT: "#FFFFFF", //500
					on: "#f4fbfa", //50
					dark: {
						DEFAULT: "#dba8a8", //300
						on: "#641717", //800
					},
				},
				// gray: {
				// 	50: "#fbf4f4",
				// 	100: "#f6e9e9",
				// 	200: "#e9c9c9",
				// 	300: "#a8c6db",
				// 	400: "#6799c1",
				// 	500: "#FFFFFF",
				// 	600: "#a5b0b2",
				// 	700: "#a7b0b6",
				// 	800: "#174164",
				// 	900: "#9ca1a4",
				// 	DEFAULT: "#C3C7CC", //500
				// 	on: "#f4fbfa", //50
				// 	dark: {
				// 		DEFAULT: "#dba8a8", //300
				// 		on: "#641717", //800
				// 	},
				// },
			},
			keyframes: {
				fadeOpacity: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 },
				}
			},
			animation: {
				fadeOpacity: 'fadeOpacity 1s forwards',
			}
		},
	},
	plugins: [require("flowbite/plugin")],
};
