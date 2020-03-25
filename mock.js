/**
 * @note setOnline 接口配置
 * @param name 本地接口名
 * type 接口类型
 * url 接口地址
 */

const fs = require('fs');
const setOnline = [
    {
        name: 'home',
        type: 'get',
        url: '/home'
    },
    {
        name: 'test',
        type: 'get',
        url: '/home'
    }
];

//  输出配置项
exports.setOnline = setOnline;

// 遍历输出JSON数据
for (let i = 0; i < setOnline.length; i++) {
   let name = setOnline[i].name;
   exports[name] = (req, res) => {
       fs.readFile(`./json/${name}.json`, (err,data) => {
           if(err) throw err;
           res.json(JSON.parse(data));
       })
   }
}