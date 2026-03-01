// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    i18n: {
        defaultLocale: 'id', // Bahasa utama
        locales: ['id', 'en', 'jp'], // Daftar bahasa yang tersedia
        routing: {
            // prefixDefaultLocale: false, // Jika false, 'id' tidak butuh prefix /id/ di URL
        },
    },
});
