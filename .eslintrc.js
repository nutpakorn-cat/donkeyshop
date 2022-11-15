module.exports = {
  extends: "next/core-web-vitals",
  plugins: ["prettier", "unused-imports"],
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
};
