import { defineThemeConfig } from "vuepress-theme-plume";
import { enNavbar, zhNavbar } from "./navbar";
import { enNotes, zhNotes } from "./notes";

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
    logo: "https://theme-plume.vuejs.press/plume.png",
    // your git repo url
    docsRepo: "",
    docsDir: "docs",

    appearance: true,

    social: [{ icon: "github", link: "/" }],

    locales: {
        "/": {
            profile: {
                avatar: "https://theme-plume.vuejs.press/plume.png",
                name: "The Bible of No.9 Middle School&#x27;s Deads",
                description: "The Bible of No.9 Middle School&#x27;s Deads",
                // circle: true,
                // location: '',
                // organization: '',
            },

            navbar: zhNavbar,
            notes: zhNotes,
        },
        "/en/": {
            profile: {
                avatar: "https://theme-plume.vuejs.press/plume.png",
                name: "The Bible of No.9 Middle School&#x27;s Deads",
                description: "The Bible of No.9 Middle School&#x27;s Deads",
                // circle: true,
                // location: '',
                // organization: '',
            },

            navbar: enNavbar,
            notes: enNotes,
        },
    },
});
