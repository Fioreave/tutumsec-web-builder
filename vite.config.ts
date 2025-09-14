import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      "/blog-api": {
        target: "https://blog.tutumsec.io",
        changeOrigin: true,
        secure: true,
        rewrite: (p) => {
          const i = p.indexOf("?");
          const path = i === -1 ? p : p.slice(0, i);
          const qs = i === -1 ? "" : p.slice(i + 1);
          const rest = path.replace(/^\/blog-api/, "");
          return `/index.php?rest_route=${rest}${qs ? `&${qs}` : ""}`;
        },
      },
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean
  ),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
