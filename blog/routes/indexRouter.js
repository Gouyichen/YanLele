//1.导入express
const express = require('express');
//2.使用 express.Router创建路由
const router = express.Router();
//引入控制器代码
let { show, login, logout } = require('../controller/indexCtrl');
// 3. 创建路由
// 显示后台系统首页
indexRouter.get('/', show);

// 后台管理系统登录
indexRouter.post('/api/login', login)
// 后台管理系统退出
indexRouter.get('/api/logout', logout)
//5.导出路由

module.exports = indexRouter;  