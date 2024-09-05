export const rulesTemplate = `# This is the rules template

:- Do you want to find out how this app works? $explore;

explore :-
[Tutorial] This app creates a conditional checklist of items after you answer some questions.,
Want to know even more? $more;

explore AND more :-
[Tutorial] You will find documentation in the configuration :);

explore OR more :-
[Tutorial] Have fun exploring everything.;

:- [Tutorial] Toggle me!;
NOT more :- [Tutorial] Toggle me too!;
`;
