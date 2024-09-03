export const rulesTemplate = `# This is the rules template

# This is a comment
# Rules are defined with the following syntax:
# Condition :- Effects ;
#
# Rules have to be separated by a semicolon.
#
# Effects can be either questions or items.
# Separate multiple effects with a comma.
#
# Questions are defined with the following syntax:
# Question? $variable
# A question will be displayed on top of the list.
# You can toggle the answer by clicking on it.
#
# Items are defined with the following syntax:
# [Category] Name
# An item will be displayed in the list under its category.
#
# Conditions can be empty, in which case they are always true.
# You can use variables for defining logic with AND, OR, and NOT.
# Variables are defined in questions.
#
# With all of this you can define a conditional checklist very flexible.
# One advice:
# Don't trigger too many effects in one rule. It can get confusing.

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
