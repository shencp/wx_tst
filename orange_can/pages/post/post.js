// pages/post/post.js
// ------------------------------------------------------------------------------------------
// var DBPost = require('../../db/DBPost.js').DBPost;
import {ES6DBPost} from '../../db/ES6DBPost.js'
// ------------------------------------------------------------------------------------------
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
    var dbPost = new ES6DBPost();
    console.log('-------------------');
    console.log(dbPost.storageKeyName);

    this.setData({
      postList: dbPost.getAllPostData()
    });
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