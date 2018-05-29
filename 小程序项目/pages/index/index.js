//index.js
Page({
  data: {},
  onLoad: function () {
    setTimeout(function () {
      wx.redirectTo({
        url: '../List/home/home'
      })
    }, 3000)
  }
})