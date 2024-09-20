export const rulesTemplate = `# This is the rules template

:-
   Will it be sunny? $sunny,
   [Utility] Paper Tissues,
   [Utility] Backpack;

sunny :-
   Do you expect a high UV index? $uv,
   [Utility] Sunglasses,
   [Clothes] Short Pants;

NOT sunny :-
   [Clothes] Jacket,
   [Clothes] Long Pants;

uv :-
   [Utility] Sunscreen;
`;
