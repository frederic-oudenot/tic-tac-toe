module.exports = {
  root:true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended","plugin:import/recommended","plugin:react/jsx-runtime"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "react"],
  rules: {
    "indent": ["error", 2],
    "import/extensions" : 0,
    "quotes": ["warn", "double"],    
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx",".svg"],
        moduleDirectory: ["node_modules", "src/"],
      },
    },
    react: {
      "version": "detect"
    },
    
  }
};
