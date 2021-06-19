# docker版使用方法

Docker安装 

- 国内一键安装 `sudo curl -sSL https://get.daocloud.io/docker | sh`
- 国外一键安装 `sudo curl -sSL get.docker.com | sh`
- 北京外国语大学开源软件镜像站 `https://mirrors.bfsu.edu.cn/help/docker-ce/`


docker-compose 安装

```sh
sudo curl -L "https://github.com/docker/compose/releases/download/1.24.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

`Ubuntu`用户快速安装`docker-compose`

```sh
sudo apt-get update && sudo apt-get install -y python3-pip curl vim git moreutils
pip3 install --upgrade pip
pip install docker-compose
```

通过`docker-compose version`查看`docker-compose`版本，确认是否安装成功。

## 食用方法

- PC版微信打开uestc学生情况小程序抓包，将cookie填入`docker-compose.yml`对应环境变量`COOKIE`中

- （选做）进入 [推送加官网](https://pushplus.hxtrip.com)，获取token填入环境变量`PUSH_PLUS_TOKEN`

- 根据实际情况填写填报信息

- 进入`demo`目录，启动docker容器

  ```sh
  cd demo
  docker-componse up -d
  ```

demo/docker-compose.yml

```yml
uestc_sign:
  image: easy12385/uestc_sign
  container_name: uestc_sign
  restart: always
  volumes:
    - ./logs:/uestc_sign/logs
  environment:
    - REPO_URL=https://gitee.com/easyyyyy/uestc_sign.git
    - COOKIE=
    #PUSHPLUS
    - PUSH_PLUS_TOKEN=
    #填报信息，请如实填写
    #当前地址
    - CURRENT_ADDRESS=四川省成都市郫都区银杏大道
    #是否接触武汉（0不是，1是）
    - IS_CONTACT_WUHAN=0
    #是否发烧
    - IS_FEVER=0
    #是否在校
    - IS_IN_SCHOOL=1
    #是否离开成都
    - IS_LEAVE_CHENGDU=0
    #当前体温
    - TEMPERATURE=36°C~36.5°C
    - PROVINCE=四川省
    - CITY=成都市
    - COUNTY=郫都区
```

### 相关教程

- fiddler抓包教程参考
  + [fiddler抓包](https://juejin.cn/post/6844904042422861831)

- pushplus token
  + https://pushplus.hxtrip.com/

