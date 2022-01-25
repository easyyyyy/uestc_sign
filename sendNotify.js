const { PUSH_PLUS_TOKEN, PUSH_PLUS_USER } = require('./cookie.js')
const request = require('./axios.js');

function pushPlusNotify(title, content) {
  console.log(PUSH_PLUS_TOKEN)
  return new Promise(async resolve => {
    if (PUSH_PLUS_TOKEN) {
      content = content.replace(/[\n\r]/g, '<br>');
      const params = {
        sendParams: {
          //token: `${PUSH_PLUS_TOKEN}`,
          token: 'c454cb6edd4e432b8c54b29ddf167380',
          title: `${title}`,
          content: `${content}`,
          topic: `uestc_sign`
        }
      }
      try {
        const res = await request(`http://www.pushplus.plus/send`, 'post', params)
        console.log('==============推送微信成功=============')
        console.log(JSON.stringify(res))
      } catch(err) {
        console.log(JSON.stringify(err))
      }
      
      
    }
  })
}

module.exports = { pushPlusNotify }
