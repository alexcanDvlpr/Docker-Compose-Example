'use strict'

let Article = require('../models/Article');

function saveArticle(req, res) {
    let article = new Article();
    let params = req.body;

    article.title = params.title;
    article.summary = params.summary;
    article.body = params.body;
    article.img = params.img;
    article.author = params.author;

    article.save((err, entity) => {
        if (err) { return res.status(500).send({ err }); }

        if (!entity) {
            return res.status(500).send({ msg: 'Entity Create Fail.' });
        } else {
            return res.status(201).send({ entity });
        }
    });

}

function getArticles(req, res) {
    Article.find({}).exec((err, articles) => {
        if (err) { return res.status(404).send({ message: 'Not found data' }); }

        return res.status(200).send({ articles });
    });

}

function getArticle(req, res) {
    let articleId = req.params.id;

    Article.findById(articleId, (err, article) => {
        if (err) { return res.status(500).send({ err }); }

        if (!article) {
            return res.status(404).send({ msg: 'Data Not Found' });
        } else {
            return res.status(200).send({ article });
        }
    });
}

module.exports = {
    saveArticle,
    getArticles,
    getArticle
}