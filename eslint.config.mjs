import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";
import reactHooks from "eslint-plugin-react-hooks";
import storybook from "eslint-plugin-storybook";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    name: "eslint:js/recommended",
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    languageOptions: { globals: globals.browser },
    ...js.configs.recommended,
  },
  {
    name: "eslint:js/custom",
    rules: {
      "no-plusplus": "error",
      "no-param-reassign": "error",
      "max-classes-per-file": "error",
      eqeqeq: ["error", "smart"],
      radix: ["error", "as-needed"],
    },
  },
  ...tseslint.configs.recommended,
  Object.assign(pluginReact.configs.flat.recommended, {
    name: "react/recommended",
    files: ["**/*.{jsx,tsx}"],
    plugins: { react: pluginReact },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
    },
  }),
  {
    ...reactHooks.configs["recommended-latest"],
  },
  {
    name: "eslint:json/recommended",
    ...json.configs.recommended,
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    ignores: ["package-lock.json"],
  },
  ...storybook.configs["flat/recommended"],
]);
