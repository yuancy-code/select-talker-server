/*
 * @Author: yuanchengyong 
 * @Date: 2020-04-15 20:33:30 
 * @Last Modified by: yuanchengyong
 * @Last Modified time: 2020-04-15 20:43:29
 * @Des: 参数描述
 */

const messages = {
    "en": {
        "0000": "success",
        "0001": "Parameter cannot be empty",
        "0002": "Synthesis failed"
    },
    "zh-cn": {
        "0000": "success",
        "0001": "参数不能为空",
        "0002": "合成失败",
    },
    "zh-tw": {
        "0000": "success",
        "0001": "參數不能為空",
        "0002": "合成失敗",
    }
}
module.exports = (code, lan = 'zh-cn') => {
    return messages[lan][code] || ''
}