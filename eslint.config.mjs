import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";
import consistentDefaultExportPlugin from "eslint-plugin-consistent-default-export-name";
import * as pluginImportX from "eslint-plugin-import-x";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "standard",
    "prettier",
  ),
  {
    plugins: {
      "consistent-default-export-name": consistentDefaultExportPlugin,
      "import-x": pluginImportX,
    },
    rules: {
      "consistent-default-export-name/default-export-match-filename": "off",
      "consistent-default-export-name/default-import-match-filename": "warn",

      // Основные правила
      "import-x/named": "error",
      "import-x/default": "off",
      "import-x/no-named-default": "error",

      // Контроль экспортов
      "import-x/no-anonymous-default-export": "error",

      // Стиль импортов
      "import-x/no-duplicates": "error",
      "import-x/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc" },
        },
      ],

      // Кастомное правило для соответствия имени импорта и файла
      "import-x/no-named-as-default-member": "off",
      "import-x/prefer-default-export": "warn",
    },
  },
];

export default eslintConfig;
