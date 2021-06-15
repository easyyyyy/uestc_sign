const request = require('./axios.js');

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
  }
})()