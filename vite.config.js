/* eslint-disable no-undef */
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/Weblocatores/", // Leading and trailing slashes are correct
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    host: '0.0.0.0', // Expose the server to the network
    port: 5173,       // Optional: Specify a custom port
  },
});
