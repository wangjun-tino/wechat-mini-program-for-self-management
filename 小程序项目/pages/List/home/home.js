var temp_data;
Page({

  data:{
    items:[{
      title:111,
      time:2222,
      imp:3333,
      typ:4444,
      comp:1
    }]
  },


  onLoad:function(e){
    wx.request({
      url:'',
      data:{
        'token':getApp().globalData.userInfo.dev_token
      },
      method:"POST",
      header:{
        'content-type':'application/x-www-form-urlencoded'
      },
      success:function(res){
        if(res.data.status==1){
          temp_data=JSON.parse(res.data.data)
        }
        else{
          wx.showToast({
            title:res.data.message,
            icon:'loading',
            duration:2000
          })
        }
      }
    })
  },
  onReady:function(){
    this.setData({
      items:temp_data
    })
  }
})