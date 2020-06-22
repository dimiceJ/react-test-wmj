import Jsonp from 'jsonp'
export default class Axios{
  static jsonp(opt){
    return new Promise((resolve,reject)=>{
      Jsonp(opt.url,{
        param:'callback'
      },(err,res)=>{
        if(res.status == 'success'){
          resolve(res)
        }else{
          reject(res.status)
        }
      })
    })
  }
}
