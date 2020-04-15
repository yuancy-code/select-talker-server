/*
 * @Author: yuanchengyong 
 * @Date: 2020-04-15 20:11:51 
 * @Last Modified by: yuanchengyong
 * @Last Modified time: 2020-04-15 22:19:30
 * @Des: 
 */
const fs = require('fs');
const path = require('path');
let private = {};
let files = fs.readdirSync(__dirname);

files.indexOf('private.js') > -1 && (private = require('./private.js'))

module.exports = Object.assign({
    // 设置APPID/AK/SK
    APP_ID: "",
    API_KEY: "",
    SECRET_KEY: ""
}, private);