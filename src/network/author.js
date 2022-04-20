import {request} from './request'

export function author(id){
   return request({
      url:'/user/'+id,
      // params:{
      //    id:id
      // }     
   })
}