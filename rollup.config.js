import { defineConfig } from "rollup";

export default defineConfig({
    input: "./index.js",
    output: {
        file: "bundle.js",
        format: "cjs",
    },
});
