//1. 导入 express
const express = require('express');

//2.使用 express.Router 创建
const Router = express.Router();

//3.导入 controller文件 （解构赋值）
const { getArticle } = require('../controller/indexCtrl');

//4.显示首页链表数据
Router.get('/api/article', getArticle);

//5.导入路由
module.exports = Router;