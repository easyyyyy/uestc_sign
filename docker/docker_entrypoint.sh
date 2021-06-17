#!/bin/sh
set -e

#获取配置的自定义参数
if [ -n "$1" ]; then
  run_cmd=$1
fi

echo "------------------------------------------------执行定时任务任务shell脚本------------------------------------------------"
#测试
# sh /jd_docker/docker/default_task.sh "$ENABLE_BOT_COMMAND" "$run_cmd"
#合并
sh /uestc_sign/docker/default_task.sh
echo "--------------------------------------------------默认定时任务执行完成---------------------------------------------------"


if [ -n "$run_cmd" ]; then
  echo "启动crontab定时任务主进程..."
  crond -f

else
  echo "默认定时任务执行结束。"
fi