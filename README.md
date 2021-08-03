# Magic the Gathering assignment – Instructions

Here we go. Your task is to build an interactive, hyperlinked rulebook application for a card game, of which rules are described in <a href="https://media.wizards.com/2021/downloads/MagicCompRules%2020210419.txt">rules.txt</a>.

**When submitting your solution, your application must:**

* Have a web frontend
* Include a Table of Contents with hyperlinks to chapters containing game rules. For instance, “100. General” is a chapter
* Display the selected chapter beside the Table of Contents, containing all rules in that chapter. For instance, “100.2a” is a rule
* Include a search box for filtering the rules displayed on the page, so that you can, for instance, type “commander” and find all rules that mention the word “commander”


# Documentation
1. Regex statement will catch all rule according to their type. Ex: 
* *"1. Game Concepts"* is chapter index.
```javascript
chapter_index_regex = /\n(\d{1})\.\ .+/g
```
* *"100. General"* is chapter.
```javascript
chapter_regex = /\n((\d{1})\d{2})\.\ .+/g
```
* *"100.1. These Magic ..."* is rule index.
```javascript
rule_index_regex = /\n((\d{3})\.\d+)\..+/g
```
* *"100.1a A two-player ..."* is rule.
```javascript
rule_regex = /\n(\d{3}\.\d+)+[a-z].+/g
```

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

3. Data get joined in SQL fashion using map and reduce forming a JSON structure of the rulebook.
---
  
