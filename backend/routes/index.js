'use strict'

var express = require('express');
var ArticleController = require('../controllers/ArticleController');

// Middlewares
// const Authentication = require('../middleware/auth');


// Devolvemos un objeto con loas rutas
var api = express.Router();

api.post('/articles', ArticleController.saveArticle);
api.get('/articles', ArticleController.getArticles);
api.get('/article/:id', ArticleController.getArticle);


module.exports = api;