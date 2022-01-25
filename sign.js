const request = require('./axios.js');
const { pushPlusNotify } = require('./sendNotify.js');
const { cookie } = require('./cookie.js');

(async function() {
  const url = 'https://jzsz.uestc.edu.cn/wxvacation/api/epidemic/monitorRegister';
  const params = {
    sendParams: {
      "currentAddress":"广东省佛山市顺德区正华路",
      "remark":"",
      "healthInfo":"正常",
      "healthColor":"绿色",
      "isContactWuhan":0,
      "isFever":0,
      "isInSchool":0,
      "isLeaveChengdu":1,
      "isSymptom":0,
      "temperature":"36°C~36.5°C",
      "province":"广东省",
      "city":"佛山市",
      "county":"顺德区"
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
  mesage += new Date()
  await pushPlusNotify('签到日志', mesage)
})()
