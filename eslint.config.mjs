import antfu from "@antfu/eslint-config"
import { parser } from "typescript-eslint"

export default antfu({
  type: "app",

  stylistic: {
    indent: 2,
    quotes: "double",
  },

  rules: {
    "node/prefer-global/buffer": "off",
    "node/prefer-global/process": "off",
    "node/prefer-global/console": "off",

    "antfu/no-top-level-await": "off",
    "no-console": "off",
    "antfu/if-newline": "off",
    "antfu/curly": "off",
    "antfu/consistent-chaining": "off",
  },

  languageOptions: {
    ecmaVersion: 2021,
    parser,
    globals: {
      Bun: true,
    },
  },
})
