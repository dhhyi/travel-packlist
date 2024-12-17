module.exports = {
  allowedStartRules: [
    'Rules',
    'Rule',
    'Condition',
    'Effects',
    'Question',
    'Item',
    'VariableName',
    'QuestionString',
    'ItemNameAndWeight',
    'CategoryName',
  ],
  dts: true,
  format: 'es',
  input: 'src/schemas/rules.peggy',
  output: 'src/generated/rules.mjs',
  trace: false,
};
