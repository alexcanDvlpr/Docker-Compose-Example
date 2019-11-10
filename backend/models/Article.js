'use strict'

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title: String,
    summary: String,
    body: String,
    img: String,
    author: String
});

module.exports = mongoose.model('Article', ArticleSchema);