export const rulesTemplate = `:-
   [Utility] Paper Tissues,
   [Utility] Backpack;

:- Are you traveling longer than 3 days? $longer;

longer :-
   Do you have a washer or laundry service available? $laundry,
   [Electronics] Phone Charger,
   [Electronics] Tablet,
   Do you want to work? $work;

longer AND NOT laundry :-
   [Clothes] enough Shirts,
   [Clothes] enough Underwear,
   [Clothes] spare Pants;

laundry :-
   [Clothes] 3 Shirts,
   [Clothes] 3 sets of Underwear;

work :-
   [Electronics] Laptop;

:-
   Will it be sunny? $sunny,
   Are you traveling abroad? $abroad;

sunny :-
   Do you expect a high UV index? $uv,
   [Utility] Sunglasses,
   [Clothes] Short Pants;

NOT sunny :-
   [Clothes] Jacket,
   [Clothes] Long Pants;

uv :-
   [Utility] Sunscreen;

abroad :-
   [Documents] Passport,
   [Documents] Visa;
`;
