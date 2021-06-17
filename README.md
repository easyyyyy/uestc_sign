# UESTC学生情况报送签到脚本

## 食用方法
- 微信pc版打开uestc学生情况小程序，fiddler抓包获取cookie填入cookie.js
- pushplush token获取，填入cookie.js(选做)
- 安装node
- 进入目录，安装依赖
  ```sh
  cd uestc_sign
  npm i
  ```

### node定时任务
- 安装forever后台挂起node程序
  ```sh
  npm i forever -g
  ```
- 运行
  ```sh
  forever start -l /root/uestc_sign/logs/sign.log index.js
  ```

### crontab定时任务（linux用户）
- 使用crontab启动定时任务(node指令位置通过`which node`查看)
  ```sh
  crontab -e
  0 8 */1 * * /root/nvm/versions/node/v12.22.1/bin/node /root/uestc_sign/sign.js >> /root/uestc_sign/logs/sign.log 2>&1
  ```

- fiddler抓包教程参考
  + [fiddler抓包](https://juejin.cn/post/6844904042422861831)
  
- pushplus token
  + https://pushplus.hxtrip.com/