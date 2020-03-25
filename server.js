const express = require('express');
const app = express();
const port = 3000;

//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
    // 解决跨域
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Access-Token,token');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
  });

// 配置mock数据
const mock = require('./mock.js');
const setOnline = mock.setOnline;

setOnline.forEach((item) => {
    app[item.type](item.url, mock[item.name]);
});

app.listen(port, () => {
    console.log(`localhost:${port}`);
});

