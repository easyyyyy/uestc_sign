const request = require('./axios.js');
const { pushPlusNotify } = require('./sendNotify.js');

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
  console.log(params)
  const res = await request(url, 'POST', params)
  console.log(res)
  if(res.code == 0) {
    console.log('==========签到成功============')
    await pushPlusNotify('签到成功', '123')
  } else if (res.code == 40001) {
    console.log('===============登录失效，请重新登录================')
    await pushPlusNotify('cookie失效', 'cookie过期，请重新获取cookie填入cooke.js')
  } else {
    console.log('=============其他错误================')
    await pushPlusNotify('其他错误', JSON.stringify(res))
  }
})()
