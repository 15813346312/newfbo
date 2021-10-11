// !!!! 可以在app.json修改appid就可以登录成功是你的id了
//app.js
App({
  onLaunch: function () { // 小程序初始化完成时触发，全局只触发一次。监听小程序的初始化
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || [] // 通过名字logs获取数组里面的内容，
    logs.unshift(Date.now()) // 获取当前时间,插入数组logs中，unshift是前插，也叫头部插入
// logs.shift()头部删除   logs.unshift()头部插入
// logs.pop()尾部删除   logs.push()尾部插入
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log('登录成功');
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
      fail: function() {
        console.log('登录失败'); // 不是我的appid？
      }
    })
    // 获取用户信息
    wx.getSetting({ // 获取用户的当前设置。返回值中只会出现小程序已经向用户请求过的权限
      success: res => { // authSetting用户授权结果
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({ // 获取用户信息
            success: res => {
              console.log('获取用户信息',res);
              // 可以将 res 发送给后台解码出 unionId
              // 全局数据， 用户昵称
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            },
            fail: function() {
              console.log('登录失败');
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})