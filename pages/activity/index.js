// pages/activity/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fenlei: [{
      name: "文学",
      cls: "act",
      id: "0"
    }, {
      name: "数学",
      cls: "",
      id: "0"
    }, {
      name: "哲学",
      cls: "",
      id: "0"
    }, {
      name: "语言",
      cls: "",
      id: "0"
    }, {
      name: "社会",
      cls: "",
      id: "0"
    }, {
      name: "历史",
      cls: "",
      id: "0"
    }, {
      name: "文学",
      cls: "",
      id: "0"
    }, {
      name: "数学",
      cls: "",
      id: "0"
    }, {
      name: "哲学",
      cls: "",
      id: "0"
    }, {
      name: "语言",
      cls: "",
      id: "0"
    }, {
      name: "社会",
      cls: "",
      id: "0"
    }, {
      name: "历史",
      cls: "",
      id: "0"
    }],

    sdf_dff:[
      {
        name:"热门活动",
        img:"/img/dsfds_a.png"
      }, {
        name: "TOP夏校",
        img: "/img/dsfds_b.png"
      }, {
        name: "雅思托福",
        img: "/img/dsfds_c.png"
      }, {
        name: "HOT名校",
        img: "/img/dsfds_d.png"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  sd_drtx: function (e) {
    var idx = e.currentTarget.dataset.idx,
      fenlei = this.data.fenlei
    fenlei.map(a => {
      a.cls = ""
    })
    fenlei[idx].cls = "act"
    this.setData({ fenlei: fenlei })
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