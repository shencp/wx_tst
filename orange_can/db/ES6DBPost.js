class ES6DBPost {
  constructor(postId) {
    this.storageKeyName = 'postList';
    this.postId=postId;
  }

  // @成员函数
  // ------------------------------------------------------------------------------------------
  getPostItemById(){
    var postsData=this.getAllPostData();
    var len=postsData.length;
    for(var i=0;i<len;i++){
      if (postsData[i].postID==this.postId){
        return{
          index:i,
          data:postsData[i]
        };
      }
    }

  }
  // ------------------------------------------------------------------------------------------
  updatePostData(category){
    var itemData = this.getPostItemById();
    var postData = itemData.data;
    var allPostData = this.getAllPostData();
    switch (category){
      case 'collect':
        if(!postData.collectionStatus){
          postData.collectionNum++;
          postData.collectionStatus=true;
        }else{
          postData.collectionNum--;
          postData.collectionStatus=false;
        }
        break;
      default:
        break;
    }

    allPostData[itemData.index]=postData;
    this.execSetStorageSync(allPostData);
    return postData;
  }
  

  // ------------------------------------------------------------------------------------------
  getAllPostData() {
    var res = wx.getStorageSync(this.storageKeyName);
    if (!res) {
      res = require('../data/data.js').postList;
      console.log('----------------------------------------------------')
      this.execSetStorageSync(res);
    }
    return res;
  }

  // @保存或者更新缓存
  execSetStorageSync(data) {
    wx.setStorageSync(this.storageKeyName, data);
  }
};

export {
  ES6DBPost
}