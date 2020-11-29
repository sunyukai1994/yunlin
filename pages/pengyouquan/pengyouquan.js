// pages/findList/findList.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    tanchuang_show:false,
    list:[1,1,1],
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
 
  },
  xxiangji(){
    wx.showActionSheet({
      itemList: ['发布图文', '发布视频'],
      success (res) {
        console.log(res.tapIndex)
        if(res.tapIndex==0){
 
        }else{
 
        }
      },
      fail (res) {
        console.log(res.errMsg)
      }
    })
  },
  show_tanchuang(){
    var tanchuang_show=!this.data.tanchuang_show
    this.setData({
      tanchuang_show
    })
  },
})