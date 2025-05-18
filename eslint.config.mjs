// eslint.config.mjs
import globals from "globals";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "url";
import { dirname } from "path";
import prettierPlugin from "eslint-plugin-prettier";

// Setup FlatCompat for extending shareable configs
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

export default [
  {
    ignores: ["node_modules/", ".next/", "out/", "build/", ".pnpm-store/"],
  },
  // Include shareable recommended configs without extends key
  ...compat.config({
    extends: [
      "plugin:@typescript-eslint/recommended",
      "plugin:@next/next/recommended",
    ],
  }),
  {
    // Load Prettier plugin for formatting rules
    plugins: { prettier: prettierPlugin },
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        React: "readonly",
      },
    },
    rules: {
      "prettier/prettier": ["warn", { endOfLine: "auto" }],
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
];
