// pages/my/my.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},   //用户信息
    is_login: false,    //登陆状态
    is_phone: false,    //是否需要获取微信绑定手机号注册
    user_list: [],    //已注册用户信息表
  },
  on_complaint_click(e) {
    wx.navigateTo({
      url: '../complaint/complaint',
    })
  },
  on_reportRepair_click(e) {
    wx.navigateTo({
      url: '../reportRepair/reportRepair',
    })
  },
  on_pay_click(e) {
    wx.navigateTo({
      url: '../pay/pay',
    })
  },
  on_setUp_click(e) {
    wx.navigateTo({
      url: '../setup/setup',
    })
  },
  onChange(event) {
    // event.detail 的值为当前选中项的索引
    this.setData({
      active: event.detail
    });
  },
  Changepages() {
    if (this.data.active == 0) {
      wx.navigateTo({
        url: '../home/home',
      })
    } else if (this.data.active == 1) {
      wx.navigateTo({
        url: '../pengyouquan/pengyouquan',
      })
    } else if (this.data.active == 2) {
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
        is_login: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          is_login: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            is_login: true
          })
        }
      })
    }
  },

  // 微信授权登录
  getUserInfo(e) {
    wx.showLoading({
      title: '正在登录',
    })
    const userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      is_login: true
    })
    wx.hideLoading({
      success: (res) => {
        
      },
    })
    // let user_list = this.data.user_list
    // console.log(user_list);
    
    // let arrayes = user_list.some((value, index) => {
    //   return value.open_id == app.globalData.openId
    // })
    // if (arrayes) {
    //   console.log('已注册过的用户直接登陆',e)
    //   wx.setStorageSync('openId', app.globalData.openId)
    //   wx.setStorageSync('userInfo', userInfo)
    //   wx.showToast({
    //     title: '登陆成功',
    //   })
    //   this.setData({
    //     userInfo,
    //     is_login: false,
    //   })
    // } else {
    //   console.log('未注册过的用户，进行注册')
    //   console.log(app.globalData);
      
    //   app.globalData.FunCloud.add({
    //     data: {
    //       open_id: app.globalData.openId,
    //       nick_name: userInfo.nickName,
    //       pic: userInfo.avatarUrl,
    //       sex: userInfo.gender,   //1男2女
    //     },
    //     success: (res) => {

    //       wx.setStorageSync('openId', app.globalData.openId)
    //       userInfo.nick_name = userInfo.nickName,
    //       userInfo.pic = userInfo.avatarUrl,
    //       userInfo.sex = userInfo.gender,   //1男2女
    //       wx.setStorageSync('userInfo', userInfo)
    //       wx.showToast({
    //         title: '登陆成功',
    //       })
    //       this.setData({
    //         userInfo,
    //         is_login: false,
    //       })
    //     },
    //     error: (e) => {
    //       console.log('失败', e)
    //     }
    //   })
      
    //   this.setData({
    //     is_phone: true,
    //   })
    // }
  },

  // 获取用户微信绑定的手机号进行注册
  getUserPhone (e) {
    console.log(e)
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
    // 查询用户信息表
    wx.cloud.callFunction({
      name: 'getshuju',
      success: (res) => {
        const user_list = res.result.data,
        userInfo = user_list.find((value, index) => {
          return value.open_id == app.globalData.openId
        })
        this.setData({
          user_list,
          userInfo,
          is_login: wx.getStorageSync('openId') ? false : true
        })
      }
    })

    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
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