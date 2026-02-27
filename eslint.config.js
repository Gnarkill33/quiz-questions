import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import importPlugin from "eslint-plugin-import";

export default tseslint.config([
 { ignores: ["dist"] },
 {
  extends: [
   js.configs.recommended,
   ...tseslint.configs.recommendedTypeChecked,
   reactPlugin.configs.flat.recommended,
   reactPlugin.configs.flat["jsx-runtime"],
   reactHooks.configs["recommended-latest"],
   importPlugin.flatConfigs.recommended,
   eslintConfigPrettier,
  ],
  files: ["**/*.{ts,tsx}"],
  languageOptions: {
   ecmaVersion: 2020,
   globals: globals.browser,
   parserOptions: {
    projectService: true,
    tsconfigRootDir: import.meta.dirname,
   },
  },
  plugins: {
   "react-refresh": reactRefresh,
  },
  rules: {
   ...reactHooks.configs.recommended.rules,
   "@typescript-eslint/consistent-type-exports": "error",
   "@typescript-eslint/consistent-type-imports": "error",
   "@typescript-eslint/no-inferrable-types": "error",
   "@typescript-eslint/array-type": "error",
   "@typescript-eslint/consistent-type-definitions": ["error", "type"],
   "react-refresh/only-export-components": [
    "warn",
    { allowConstantExport: true },
   ],
   "@typescript-eslint/no-explicit-any": "error",
   "@typescript-eslint/no-magic-numbers": ["error", { ignore: [0, 1, 2] }],
   "import/order": [
    "error",
    {
     groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
     pathGroups: [
      {
       pattern: "@/**",
       group: "internal",
      },
     ],
     alphabetize: {
      order: "asc",
     },
     "newlines-between": "always",
    },
   ],
  },
 },
 {
  settings: {
   react: {
    version: "detect",
   },
   "import/resolver": {
    typescript: true,
   },
  },
 },
]);
