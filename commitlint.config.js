module.exports = {
  extends: ["@commitlint/config-conventional"],
  plugins: [
    {
      rules: {
        "reference-first": ({ subject }) => [/^(AIP-\d+)\s/.test(subject), "Invalid reference or missing"]
      }
    }
  ],
  rules: {
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "docs", "chore", "style", "refactor", "ci", "test", "perf", "revert", "storybook"]
    ],
    "reference-first": [2, "always"],
    "subject-case": [0, "never"],
    "header-max-length": [1, "always", 200]
  }
};
