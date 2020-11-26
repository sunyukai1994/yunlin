// pages/notice/notice.js
let db = wx.cloud.database()
let that;
Page({
  data: {
    // 数据列表
    dataList: [],
    conOk:true,
    // demo:"确认收到"
  },
  // 获取数据
  getData() {
    db.collection('Annoncement').get().then(res => {
      // console.log(res);
      res.data.map(i => {
        // console.dir(i.creTime)
        i.creTime = `${i.creTime.getFullYear()}年${i.creTime.getMonth()}月${i.creTime.getDate()}号`
        // i.conOk=true
      })
    
      this.setData({
        dataList: res.data
      })
      // callback ? callback(payload):''
    })

  },
  // 确认收到
  confirmTap(e) {
    // console.log(e);
    
    let confirm;
    this.data.dataList.map(i=>{
      if(i._id==e.target.dataset.id){
       confirm=i.confirm
      }
    })
   confirm++
    db.collection('Annoncement').doc(e.target.dataset.id).update({
      data: {
        confirm
      },
      success: function (res) {
        // that.getData(that.isconOk,e.target.dataset.id)
        that.setData({
          conOk:false
        })
      },
      error(err){
        console.log(err);
        
      }
    })
   
  },

  onLoad: function (options) {
    that=this;
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