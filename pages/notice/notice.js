// pages/notice/notice.js
let db=wx.cloud.database()
Page({
  data: {
   dataList:[]
  },
  getData(){
    db.collection('Annoncement').get().then(res=>{
      console.log(res);
      
      this.setData({
        dataList:res.data
      })
    })
    
  },
  onLoad: function (options) {
this.getData()
  },
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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