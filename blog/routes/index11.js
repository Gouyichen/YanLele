//1.导入 express
const express = require('express');

//2.使用 express.Router 创建路由
const Router = express.Router();

//3.导入controller 文件 （解构赋值）
const { getArticle } = require('../controller/indexCtrl');

//4.显示首页链表数据
Router.get('/api/article', getArticle);

//5.导入数据
module.exports = router;

