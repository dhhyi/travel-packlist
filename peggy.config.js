module.exports = {
  allowedStartRules: [
    "Rules",
    "Rule",
    "Condition",
    "Effects",
    "Question",
    "Item",
    "VariableName",
    "QuestionString",
    "ItemNameAndWeight",
    "CategoryName",
  ],
  format: "es",
  input: "src/schemas/rules.peggy",
  output: "src/app/generated/rules.mjs",
  dts: true,
  trace: false,
};
