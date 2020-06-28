import Jsonp from 'jsonp'
export default class Axios{
  static jsonp(opt){
    return new Promise((resolve,reject)=>{
      Jsonp(opt.url,{
        param:'callback'
      },(err,res)=>{
        console.log(res);
        // resolve(res)
        // reject(res)
        if(!!res.status&&res.status == 'success'){
          resolve(res)
        }else{
          reject(res.status)
        }
      })
    })
  }
}
