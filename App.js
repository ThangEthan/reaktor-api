const express = require('express');
var cors = require('cors')
const fs = require('fs');

const app = express();
const port = process.env.PORT || 8080;
app.use(cors())

function join(obj1, obj2 ,key_name, result_key_name) {
    return obj1.map(x => {
        return obj2.reduce(function (grouped, y) {
            if (grouped["number"] == y[key_name]){
                (grouped[result_key_name] = grouped[result_key_name] || []).push(y)
                return grouped;
            }
            else
                return grouped;
        }, x) 
    })
};

app.get('/', function(req, res) {
    fs.readFile('rule.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        //Regex with capture group
        let chapter_index_regex = /\n(\d{1})\.\ .+/g        //capture group: 1:number
        let chapter_regex = /\n((\d{1})\d{2})\.\ .+/g       //capture group: 1:number, 2:chapter index number
        let rule_index_regex = /\n((\d{3})\.\d+)\..+/g      //capture group: 1:number, 2:chapter number
        let rule_regex = /\n((\d{3}\.\d+)+[a-z]).+/g        //capture group: 1:rule index number`, 2:rule number
        //Extract numbered rule 
        let chapter_index = [...data.matchAll(chapter_index_regex)].map(x => { return { "number": x[1], "name": x[0].trim() } });
        let chapter = [...data.matchAll(chapter_regex)].map(x => { return { "number": x[1], "chapter_index_number": x[2], "name": x[0].trim() } })
        let rule_index = [...data.matchAll(rule_index_regex)].map(x => { return { "number": x[1], "chapter_number": x[2], "name": x[0].trim() } })
        let rule = [...data.matchAll(rule_regex)].map(x => { return { "number": x[1], "rule_index_number": x[2], "name": x[0].trim() } })
        //Join data
        let joinedRuleIndex = join(rule_index, rule, "rule_index_number", "rules")
        let joinedChapter = join(chapter, joinedRuleIndex, "chapter_number", "rule_index")
        let joinedChapterIndex = join(chapter_index, joinedChapter, "chapter_index_number", "chapters") 

        res.json({
            "joinedChapterIndex": joinedChapterIndex,
            "joinedChapter": joinedChapter
        })
    })
});

app.listen(port);
console.log('Server started at port ' + port);
