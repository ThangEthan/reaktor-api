const express = require('express');
const path = require('path');
var cors = require('cors')
const fs = require('fs')

fs.readFile('rule.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    let chapter_index_regex = /\n(\d{1})\.\ .+/g        //capture group: 1:number
    let chapter_regex = /\n((\d{1})\d{2})\.\ .+/g       //capture group: 1:number, 2:chapter index number
    let rule_index_regex = /\n((\d{3})\.\d+)\..+/g      //capture group: 1:number, 2:chapter number
    let rule_regex = /\n(\d{3}\.\d)+[a-z].+/g           //capture group: 1:rule index number`

    let chapter_index = [...data.matchAll(chapter_index_regex)].map(x => {return {"number": x[1], "name": x[0].trim()}}); 
    let chapter= [...data.matchAll(chapter_regex)].map(x => {return {"number": x[1], "chapter_index_number": x[2], "name": x[0].trim()}})
    let rule_index= [...data.matchAll(rule_index_regex)].map(x => {return {"number": x[1], "chapter_number": x[2], "name": x[0].trim()}})
    let rule = [...data.matchAll(rule_regex)].map(x => {return {"rule_index_number": x[1], "name": x[0].trim()}})

})