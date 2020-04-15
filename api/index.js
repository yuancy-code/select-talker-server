/*
 * @Author: yuanchengyong 
 * @Date: 2020-04-15 20:24:11 
 * @Last Modified by: yuanchengyong
 * @Last Modified time: 2020-04-15 22:22:47
 * @Des: 
 */
const fs = require('fs');
const config = require('../config/index');
const errorMessage = require('../config/message');
const AipSpeechClient = require("baidu-aip-sdk").speech;

const router = require('koa-router')({
    prefix: '/api'
})

router.get('/talk', async (ctx, next) => {
    const {
        query = {}
    } = ctx;
    if (!query.word) {
        ctx.body = {
            resultCode: '0001',
            resultMessage: errorMessage('0001')
        }
        return false;
    }
    console.log(config.APP_ID, config.API_KEY, config.SECRET_KEY)
    let client = new AipSpeechClient(config.APP_ID, config.API_KEY, config.SECRET_KEY);
    let result;
    try {
        result = await client.text2audio(query.word, {
            spd: 6,
            per: 4
        });
        const {
            err_msg,
            err_no
        } = result;
        if (result.err_no) {
            ctx.body = {
                resultCode: err_no,
                resultMessage: err_msg
            }
            return false;
        }
        console.log('语音合成成功，文件保存到tts.mp3，打开听听吧');
        fs.writeFileSync('./media/tts.mp3', result.data);
        ctx.body = {
            resultCode: '0000',
            resultMessage: errorMessage('0000')
        }
    } catch (e) {
        ctx.body = {
            resultCode: '0002',
            resultMessage: errorMessage('0002')
        }

    }
})
router.get('/media', async (ctx, next) => {
    const {} = ctx;
    const file = fs.createReadStream('./media/tts.mp3');
    ctx.body = file;
})
module.exports = router;