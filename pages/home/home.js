// pages/home/home.js
// const DB = wx.cloud.database().collection("list")
const app=getApp();
Page({
  //添加数据
  /**
   * 页面的初始数据
   */
  data: {
    banner: [
      {
        "image": "../../images/20161111192655_vNMdL.gif",
      },
      {
        "image": "../../images/timg.jfif",
      },
    ],
    hot: [
      { id: 1, imgUrl: "../../images/shangpin1.jpg", village: "九阳榨汁机", title: "￥99.99" },
      { id: 2, imgUrl: "../../images/shangpin4.jpg", village: "格力风扇", title: "￥99.99" },
      { id: 3, imgUrl: "../../images/shangpin3.jpg", village: "膜法世家面膜", title: "￥99.99" },
      { id: 4, imgUrl: "../../images/shangpin2.jpg", village: "多芬兰", title: "￥99.99" }
    ],
    time:''
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
  on_shopping_click(e){
    wx.navigateTo({
      url: '../shopping/shopping',
    })
  },
  on_medicalCare_click(e){
    wx.navigateTo({
      url: '../medicalCare/medicalCare',
    })
  },
  on_house_click(e){
    wx.navigateTo({
      url: '../house/house',
    })
  },
  on_complaint_click(e){
    wx.navigateTo({
      url: '../complaint/complaint',
    })
  },
  on_notice_click(e){
    wx.navigateTo({
      url: '../notice/notice',
    })
  },
  on_Housekeeping_click(e){
    wx.navigateTo({
      url: '../Housekeeping/Housekeeping',
    })
  },
  on_details_click(e){
    wx.navigateTo({
      url: '../details/details',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let d=new Date()
    let Month=d.getMonth()+1
    let Day=d.getDate()
    let Week=d.getDay()+1
    let timeAll=['',"一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十", "二十一", "二十二", "二十三", "二十四", "二十五", "二十六", "二十七", "二十八", "二十九", "三十", "三十一"]
    let time=`${timeAll[Month]}月${timeAll[Day]}星期${timeAll[Week]}`;
    this.setData({
      time
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
    if (app.globalData.address) {
      this.setData({
        address: app.globalData.address,
      })
    }
    if (typeof this.getTabBar === 'function' && this.getTabBar()){
      console.log('设置选中项 0')
      this.getTabBar().setData({
        selected:0
      })

    }
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