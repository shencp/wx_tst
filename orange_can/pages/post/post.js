// pages/post/post.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    var postList = [{
        object: {
          date: "2019-3-17"
        },
        title: "小时候的冰棍与雪糕",
        postImg: "/images/post/post-1.jpg",
        avatar: "/images/avatar/avatar-1.png",
        content: "冰棍雪糕绝对不是同一个东西。3毛到5毛的雪糕不亚于现在的哈根达斯，5分到1毛的冰棍，就像现在的老冰棍，时过境迁，...",
        readingNum: 92,
        collectionNum: {
          array: [11]
        },
        commentNum: 99
      },
      {
        object: {
          date: "2019-3-17"
        },
        title: "小时候的冰棍与雪糕",
        postImg: "/images/post/post-2.jpg",
        avatar: "/images/avatar/avatar-1.png",
        content: "冰棍雪糕绝对不是同一个东西。3毛到5毛的雪糕不亚于现在的哈根达斯，5分到1毛的冰棍，就像现在的老冰棍，时过境迁，...",
        readingNum: 92,
        collectionNum: {
          array: [11]
        },
        commentNum: 99
      },
      {
        object: {
          date: "2019-3-17"
        },
        title: "小时候的冰棍与雪糕",
        postImg: "/images/post/post-3.jpg",
        avatar: "/images/avatar/avatar-1.png",
        content: "冰棍雪糕绝对不是同一个东西。3毛到5毛的雪糕不亚于现在的哈根达斯，5分到1毛的冰棍，就像现在的老冰棍，时过境迁，...",
        readingNum: 92,
        collectionNum: {
          array: [11]
        },
        commentNum: 99
      }

    ]

    this.setData({
      postList: postList
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    console.log('2 ---- onReady');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log('3 ---- onShow');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    console.log('4 ---- onHide');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    console.log('5 ---- onUnload');
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    console.log('5 ---- onPullDownRefresh');
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log('5 ---- onReachBottom');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    console.log('5 ---- onShareAppMessage');
  }
})