# 通过 frp 和服务器内网穿透远程连接到 win10+

frp 是一个开源的反向代理软件，通过它我们可以使处于内网或防火墙后的设备对外界提供服务，远程连接到 windows10 及以上版本的电脑就是一种简单好用的例子。

## 准备

1. VPS 一台（网速和连接性是主要的参考要素）
2. 你需要连接的 windows10+ 电脑一台（被连接），以下统称为“服务端”
3. 你手上的想连接上方电脑的设备，可以是 windows，Android，IOS，以下统称为“客户端”

## 安装

### 在 VPS 上安装 frp

1. 查看 frp 官网[releases](https://github.com/fatedier/frp/releases/)获得最新的版本
2. 下载最新的 frp

```sh
https://github.com/fatedier/frp/releases/download/v0.40.0/frp_0.40.0_linux_amd64.tar.gz
```
