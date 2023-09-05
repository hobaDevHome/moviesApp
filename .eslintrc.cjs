{
  // Specify the environment where your code will run (e.g., browser, node, etc.).
  parser: "babel-eslint",
  "env": {
    "browser": true,
    es2021: true,
  },

  // Extend a predefined ESLint configuration.
  extends: [
    "eslint:recommended", // Use ESLint's recommended rules.
    "plugin:react/recommended", // Use recommended React rules.
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "airbnb", // Use Airbnb's style guide.
  ],

  // Define parser options.
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Enable JSX parsing.
    },
    ecmaVersion: "latest", // Specify the ECMAScript version (ES2021).
    sourceType: "module", // Use ES6 modules.
  },
  settings: { react: { version: "18.2" } },
 
  // Define custom rules or override existing rules here.
  rules: {
    "react-refresh/only-export-components": "warn",
    "react/prop-types": "off",
    "react/jsx-no-target-blank": "error",
  },
}


