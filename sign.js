const request = require('./axios.js');
const { pushPlusNotify } = require('./sendNotify.js');

(async function() {
  const url = 'http://jzsz.uestc.edu.cn/wxvacation/monitorRegister';
  const params = {
    sendParams: {
      "currentAddress": "北京市朝阳区京承高速公路",
      "remark": "",
      "healthInfo": "正常",
      "isContactWuhan": 0,
      "isFever": 0,
      "isInSchool": 0,
      "isLeaveChengdu": 1,
      "isSymptom": 0,
      "temperature": "36°C~36.5°C",
      "province": "北京市",
      "city": "北京市",
      "county": "朝阳区"
    }
  }
  const res = await request(url, 'POST', params)
  console.log(res)
  if(res.code == 0) {
    console.log('==========签到成功============')
    await pushPlusNotify('签到成功', '123')
  } else if (res.code == 40001) {
    console.log('===============登录失效，请重新登录================')
    await pushPlusNotify('cookie失效', 'cookie过期，请重新获取cookie填入cooke.js')
  }
})()