export const rulesTemplate = `:-
   [Nützliches] Papiertaschentücher,
   [Nützliches] Rucksack;

:- Reist du länger als 3 Tage? $longer;

longer :-
   Hast du eine Waschmaschine oder einen Wäscheservice zur Verfügung? $laundry,
   Willst du arbeiten? $work,
   [Elektronik] Handy-Ladegerät,
   [Elektronik] Tablet;

longer AND NOT laundry :-
   [Kleidung] genug Hemden,
   [Kleidung] genug Unterwäsche,
   [Kleidung] Ersatzhosen;

laundry :-
   [Kleidung] 3 Hemden,
   [Kleidung] 3 Sätze Unterwäsche;

work :-
   [Elektronik] Laptop;

:-
   Wird es sonnig sein? $sunny,
   Wird es regnerisch sein? $rainy,
   Reist du ins Ausland? $abroad;

sunny :-
   Erwartest du einen hohen UV-Index? $uv,
   [Nützliches] Sonnenbrille,
   [Kleidung] Kurze Hosen;

rainy :-
   [Kleidung] Regenjacke;

NOT rainy :-
   [Kleidung] Jacke;

NOT sunny :-
   [Kleidung] Lange Hosen;

uv :-
   [Nützliches] Sonnencreme;

abroad :-
   [Dokumente] Reisepass,
   [Dokumente] Visum;
`;
