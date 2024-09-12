export const rulesTemplate = `# This is the rules template

:-
   Will it be sunny? $sunny,
   [Utility] Paper Tissues,
   [Utility] Backpack;

sunny :-
   [Utility] Sunglasses,
   [Utility] Sunscreen,
   [Clothes] Short Pants;

NOT sunny :-
   [Clothes] Jacket,
   [Clothes] Long Pants;
`;
