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
      "location":"四川省成都市郫都区科化一路23号",
      "healthColor": "绿色",
    }
  }
  //sid中输入推送时需要通知的学号或姓名如：sid = ['张三', '李四']
  const sid = ['0', '1']
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
      mesage += `==账号${sid[index]}签到成功==
      `
    } else if (res.code == 40001) {
      console.log('===============登录失效，请重新登录================')
      mesage += `==账号${sid[index]}登录失效，请重新登录==
      `
    } else if (res.code == 50000) {
      console.log('===============重复上报================')
      mesage += `==账号${sid[index]}已打卡，请勿重复上报==
      `
    } else {
      console.log('=============未知错误================')
      mesage += `==========未知错误============
      ${JSON.stringify(res)}
      `
    }
  }
  await pushPlusNotify('签到日志', mesage)
})()
