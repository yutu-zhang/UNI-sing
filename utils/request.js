import config from './config.js'

class HTTP{
  request({url,data={},method="GET"}){
    return new Promise((resolve,reject)=>{
      this._request(url,resolve,reject,data,method)
    })
  }
  _request(url,resolve,reject,data,method){
    uni.request({
      url:config.api_base_url+url, 
      method:method,
      data:data, 
      success(res){
        resolve(res)
      },
      fail(error){
        reject(error)
      }
    });
  }
}
export {HTTP}