# Magic the Gathering assignment – Instructions

Here we go. Your task is to build an interactive, hyperlinked rulebook application for a card game, of which rules are described in rules.txt.

**When submitting your solution, your application must:**

* Have a web frontend</li>
* Include a Table of Contents with hyperlinks to chapters containing game rules. For instance, “100. General” is a chapter
* Display the selected chapter beside the Table of Contents, containing all rules in that chapter. For instance, “100.2a” is a rule
* Include a search box for filtering the rules displayed on the page, so that you can, for instance, type “commander” and find all rules that mention the word “commander”


# Documentation
1. Regex statement will catch all rule according to their type. Ex: <i>"1. Game Concepts"</i> is chapter index. <i>"100. General"</i> is chapter. <i>"100.1. These Magic ..."</i> is rule index. <i>"100.1a A two-player ..."</i> is rule.<br>
2. Regex statement with capture group export its result to JSON. Ex:

* *1. Game Concepts* - will have “1” captured as its number
```javascript
chapter_index =
{
  number: "1", //use capture group 1
  name: "Game Concepts" //use capture group 0
}
```
* *100. General* - will have “1” captured as chapter index number and “100” captured as it number
```javascript
chapter =
{
  number: "100", //use capture group 1
  chapter_number: "1", //use capture group 2
  name: "General" //use capture group 0
}
```
* *100.1. These Magic rules ...* - will have “100” captured as chapter number and “100.1” captured as its number
```javascript
rule_index =
{
  number: "100.1", //use capture group 1
  chapter_number: "100", //use capture group 2
  name: "100.1. These Magic rules ..." //use capture group 0
}
```
* *100.1a A two-player game ...* - will have “100.1” captured as rule index number
```javascript
rule =
{
  rule_index_number: "100.1", //use capture group 1
  name: "100.1a A two-player game ..." //use capture group 0
}
```


  
