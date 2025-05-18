// eslint.config.mjs
import globals from "globals";
import eslintJs from "@eslint/js";
import tseslint from "typescript-eslint";
import nextEslint from "@next/eslint-plugin-next";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  {
    ignores: ["node_modules/", ".next/", "out/", "build/", ".pnpm-store/"],
  },
  eslintJs.configs.recommended,
  ...tseslint.configs.recommended,
  nextEslint.configs.recommended,
  eslintPluginPrettierRecommended,
  {
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
