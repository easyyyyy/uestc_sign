FROM node:lts-alpine3.12

LABEL AUTHOR="none" \
      VERSION=0.1.4

RUN set -ex \
    && apk update \
    && apk upgrade \
    && apk add --no-cache bash tzdata git moreutils curl jq openssh-client \
    && rm -rf /var/cache/apk/* \
    && ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && echo "Asia/Shanghai" > /etc/timezone \
    && cd /root \
    && git clone https://gitee.com/easyyyyy/uestc_sign.git \
    && cd uestc_sign \
    && npm config set registry https://registry.npm.taobao.org \
    && npm install \
    && cp /root/uestc_sign/cronfile /etc/crontab

ENTRYPOINT ["tail", "-f", "/dev/null"]

CMD [ "crond" ]