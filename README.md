# UESTC学生情况报送签到脚本

## 食用方法
- 微信pc版打开uestc学生情况小程序，fiddler抓包获取cookie填入cookie.js
- pushplush token获取，填入cookie.js(选做)
- 安装node
- 安装forever后台挂起node程序
  ```sh
  npm i forever -g
  ```
- 进入目录，安装依赖
  ```sh
  cd uestc_sign
  npm i
  ```
- 运行
  ```sh
  forever start -l /root/uestc_sign/logs/sign.log -e /root/uestc_sign/logs/sign_err.log index.js
  ```
- fiddler抓包教程参考
  + [fiddler抓包](https://juejin.cn/post/6844904042422861831)
  
- pushplus token
  + https://pushplus.hxtrip.com/