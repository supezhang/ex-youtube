import {request} from './request'

export function Users(limit=10){
  return request({
    url:'/user',
    params:{
      limit:limit
    }
  })
}