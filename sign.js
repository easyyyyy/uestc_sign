const request = require('./axios.js');
const { pushPlusNotify } = require('./sendNotify.js');
const { cookie } = require('./cookie.js');

(async function() {
  const url = 'http://jzsz.uestc.edu.cn/wxvacation/monitorRegisterForReturned';
  const params = {
    sendParams: {
      "healthCondition":"正常",
      "todayMorningTemperature":"36°C~36.5°C",
      "yesterdayEveningTemperature":"36°C~36.5°C",
      "yesterdayMiddayTemperature":"36°C~36.5°C",
      "location":"四川省成都市郫都区科化一路23号"
    }
  }
  const cookies = cookie.split(',')
  let mesage = ''
  for(let index = 0; index<cookies.length; index++) {
    let item = cookies[index]
    const options = {
      headers: {
        'Cookie': item,
      }
    }
    const res = await request(url, 'POST', params, options)
    if(res.code == 0) {
      console.log('==========签到成功============')
      mesage += `==========账号${index + 1}签到成功============
      ${JSON.stringify(res)}
      `
    } else if (res.code == 40001) {
      console.log('===============登录失效，请重新登录================')
      mesage += `=======账号${index + 1}登录失效，请重新登录=========
      ${JSON.stringify(res)}
      `
    } else {
      console.log('=============重复上报================')
      mesage += `==========账号${index + 1}重复上报============
      ${JSON.stringify(res)}
      `
    }
  }
  await pushPlusNotify('签到日志', mesage)
})()
