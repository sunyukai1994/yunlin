Page({

  /**
   * 页面的初始数据
   */
  data: {
    payList:[
      {
        id:0,
        img_src:'../../images/物业费.png',
        text:'物业费'
      },
      {
        id:1,
        img_src:'../../images/汽车.png',
        text:'停车费'
      }
    ]
  },
  boxShadow(index){

  },
  payMentGo(e){
    // 获取当前选中的标签的自义定属性index
    let {index}= e.currentTarget.dataset
    // 修改样式
    // let query=wx.createSelectorQuery()
    let item=wx.createSelectorQuery().select('.payitem')
    console.log(item);
    item.fields({ComputedStyle:['boxShadow']},res=>{
      console.log(res);  
    }).exec()

    // 跳转页面
    let data=this.data.payList[index]
    wx.navigateTo({
      url: '../payment/payment',
      success(res){
        res.eventChannel.emit('payDatas',{data})
      }
    })
  }
})