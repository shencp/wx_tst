// @ 构造函数
var DBPost=function(){
  this.storageKeyName='postList';
  console.log('DBPost---')
}

DBPost.prototype={
  // @ get all article info
  getAllPostData:function(){
    // var res=wx.getStorageSync(this.storageKeyName);
    // if(!res){
      var res=require('../data/data.js').postList;
      this.execSetStorageSync(res);
    // }
    return res;
  },

  // @ update local cache
  execSetStorageSync:function(data){
    wx.setStorageSync(this.storageKeyName, data);
  }
};

module.exports = {
  DBPost:DBPost
};