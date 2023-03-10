import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3010,
  },
  envPrefix: "BRUMA_",
  plugins: [react(), tsConfigPaths()],
});
