import { defineNoteConfig, defineNotesConfig } from "vuepress-theme-plume";

/* =================== locale: zh-CN ======================= */

const bible = defineNoteConfig({
    dir: "bible",
    link: "/bible/",
    sidebar: [
        {
            text: "反植物联盟",
            link: "Anti-Plant-Alliance/",
            items: [
                "Anti-Plant-Alliance/Before-Zombie-Rights-Declaration.md",
                "Anti-Plant-Alliance/After-Zombie-Rights-Declaration.md",
            ],
        },
    ],
    // sidebar: "auto",
});

export const zhNotes = defineNotesConfig({
    dir: "notes",
    link: "/",
    notes: [bible],
});

/* =================== locale: en-US ======================= */

const enDemoNote = defineNoteConfig({
    dir: "bible",
    link: "/bible",
    sidebar: "auto",
});

export const enNotes = defineNotesConfig({
    dir: "en/notes",
    link: "/en/",
    notes: [enDemoNote],
});
