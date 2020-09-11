// pages/my/my.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    hasUserInfo:false,
    canIUse:wx.canIUse('button.open-type.getUserInfo'),
  },
  on_complaint_click(e){
    wx.navigateTo({
      url: '../complaint/complaint',
    })
  },
  on_reportRepair_click(e){
    wx.navigateTo({
      url: '../reportRepair/reportRepair',
    })
  },
  on_pay_click(e){
    wx.navigateTo({
      url: '../pay/pay',
    })
  },
  on_setUp_click(e){
    wx.navigateTo({
      url: '../setup/setup',
    })
  },
  onChange(event) {
    // event.detail 的值为当前选中项的索引
    this.setData({ active: event.detail });
  },
  Changepages() {
    if (this.data.active == 0) {
      wx.navigateTo({
        url: '../home/home',
      })
    }
    else if (this.data.active == 1) {
      wx.navigateTo({
        url: '../pengyouquan/pengyouquan',
      })
    }
    else if (this.data.active == 2) {
      wx.navigateTo({
        url: '../my/my',
      })
    }
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()){
      console.log('设置选中项 2')
      this.getTabBar().setData({
        selected:2
      })
    }
    wx.hideHomeButton();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})