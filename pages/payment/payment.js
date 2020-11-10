// pages/payment/payment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    payData:{},
    PersonData:{
      name:'孙玉凯',
      phone:13000000123,
      address:"1号楼1单元302"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on('payDatas',data=>{
      console.log(data);
      
      this.setData({
        payData:data.data
      })
    })
  },
})