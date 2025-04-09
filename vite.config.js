import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    // vite: {
    //     server: {
    //         // watch: {
    //         //     usePolling: true,
    //         // },
    //         host: "0.0.0.0",
    //         port: 5173,
    //     },
    // },
    server: {
        host: "0.0.0.0",
        port: 5173,
    },
});
