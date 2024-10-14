// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	site: "https://homebrew.sylvixor.com",
	integrations: [
		starlight({
			title: "SP",
			description: "Homebrew Guide",
			customCss: ["./src/styles/custom.css"],
			logo: {
				src: "./src/assets/favicon.png",
			},
			social: {
				github: "https://github.com/sylvixor/sp",
				discord: "https://discord.gg/zc2CmJWbz8",
				telegram: "https://t.me/sylvixor",
			},
			sidebar: [
				{
					label: "Introduction",
					items: [
						{ label: "FAQ", link: "/introduction/faq" },
						{ label: "Homebrewable", link: "/introduction/homebrewable" },
					],
				},
				{
					label: "Homebrewing",
					items: [
						{ label: "Possibly Patched", link: "/homebrewing/possibly-patched" },
						{ label: "Unpatched", link: "/homebrewing/unpatched" },
						{ label: "Patched", link: "/homebrewing/patched" },
						{ label: "Mariko", link: "/homebrewing/mariko" },
					]
				},
				{
					label: "Miscellaneous",
					items: [
						{ label: "MicroSD", link: "/miscellaneous/microsd" },
					]
				}
			],
		}),
	],
});
