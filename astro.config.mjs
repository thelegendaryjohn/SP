// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "SP",
			description: "Homebrew Guide",
			customCss: [
				"./src/styles/custom.css",
			],
			logo: {
				src: "./src/assets/favicon.png",
			},
			social: {
				github: "https://github.com/sylvixor/sp",
			},
			sidebar: [
				{
					label: "Introduction",
					autogenerate: { directory: "introduction" },
				},
				{
					label: "Getting Started",
					autogenerate: { directory: "getting_started" },
				},
				{
					label: "Homebrewing",
					autogenerate: { directory: "homebrewing" },
				},
			],
		}),
	],
});