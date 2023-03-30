import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import viteTsconfigPaths from "vite-tsconfig-paths";
import suidPlugin from "@suid/vite-plugin";

export default defineConfig({
  plugins: [solidPlugin(), suidPlugin(), viteTsconfigPaths()],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
