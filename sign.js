const request = require('./axios.js');
const { pushPlusNotify } = require('./sendNotify.js');

(async function() {
  const url = 'http://jzsz.uestc.edu.cn/wxvacation/monitorRegister';
  const params = {
    sendParams: {
      "currentAddress": process.env.CURRENT_ADDRESS || "四川省成都市郫都区银杏大道",
      "remark": "",
      "healthInfo": "正常",
      "isContactWuhan": process.env.IS_FEVER || 0,
      "isFever": process.env.CURRENT_ADDRESS || 0,
      "isInSchool": process.env.IS_IN_SCHOOL || 0,
      "isLeaveChengdu": process.env.IS_LEAVE_CHENGDU || 1,
      "isSymptom": 0,
      "temperature": process.env.TEMPERATURE || "36°C~36.5°C",
      "province": process.env.PROVINCE || "四川省",
      "city": process.env.CITY || "成都市",
      "county": process.env.COUNTY || "郫都区"
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
  }
})()