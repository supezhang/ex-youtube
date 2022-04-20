import {request} from './request'

// 博主列表
export function posts(limit=2){
  return request({
    url:'/post',
    params:{
      limit
    }
  })
}
// 每个博主-帖子列表
export function articles(id,limit=10){
  return request({
    url:'/user/'+id+'/post',
    params:{
      limit
    }
  })
}