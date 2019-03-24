class ES6DBPost{
  constructor(url){
    this.storageKeyName='postList';
  }

  // @成员函数
  getAllPostData(){
    var res=wx.getStorageSync(this.storageKeyName);
    if(!res){
      res=require('../data/data.js').postList;
      console.log('----------------------------------------------------')
      this.execSetStorageSync(res);
    }
    return res;
  }

  // @保存或者更新缓存
  execSetStorageSync(data){
    wx.setStorageSync(this.storageKeyName, data);
  }
};

export {ES6DBPost}