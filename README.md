<h1>Magic the Gathering assignment – Instructions</h1>

Here we go. Your task is to build an interactive, hyperlinked rulebook application for a card game, of which rules are described in rules.txt.

<b>When submitting your solution, your application must:</b>
<ul>
<li>Have a web frontend</li>
<li>Include a Table of Contents with hyperlinks to chapters containing game rules. For instance, “100. General” is a chapter</li>
<li>Display the selected chapter beside the Table of Contents, containing all rules in that chapter. For instance, “100.2a” is a rule</li>
<li>Include a search box for filtering the rules displayed on the page, so that you can, for instance, type “commander” and find all rules that mention the word “commander”</li>
</ul>

<h1>Documentation</h1>
1. Regex statement will catch all rule according to their type. Ex: <i>"1. Game Concepts"</i> is chapter index. <i>"100. General"</i> is chapter. <i>"100.1. These Magic ..."</i> is rule index. <i>"100.1a A two-player ..."</i> is rule.<br>
2. Regex statement with capture group export its result to JSON. JSON structure of each type:<br>
```
chapter_index=            
{                         
  number:          
  name:                 
}        
```
