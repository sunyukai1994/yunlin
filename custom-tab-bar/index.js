const app = getApp();
Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#d81e06",
    foot: [{
      "url": "../home/home",
      "iconPath": "../images/home2.png",
      "selectedIconPath": "../images/home.png",
      text: "首页",
      isSpecial: false
    }, {
      "url": "../pengyouquan/pengyouquan",
      iconPath: "../images/朋友圈.png",
      text: "",
      isSpecial: true
    }, {
      "url": "../my/my",
      "iconPath": "../images/my.png",
      "selectedIconPath": "../images/my2.png",
      text: "我的",
      isSpecial: false
    }],
  },
  methods: {
      switchTab(e) {
        const dataset = e.currentTarget.dataset
        const path = dataset.path
        const index = dataset.index
        //如果是特殊跳转界面
        if (this.data.foot[index].isSpecial) {
          wx.navigateTo({
            url: path
          })
        } else {
          //正常的tabbar切换界面
          wx.switchTab({
            url: path
          })
          this.setData({
            selected: index
          })
        }
      }
    }
})