<template>
 <div class="users-wrapper">
   <div class="ytb-content" ref="scroll">
     <el-row :gutter="10">
        <el-col :span="4" v-for="(item, index) in users" :key="item.id">
          <el-card shadow="always" :body-style="{ padding: '15px'}">
            <div class="owner-content">
              <div class="pic">
                <el-image :src="item.picture"  :fit="'cover'">
                  <div slot="placeholder" class="image-slot">
                    加载中<span class="dot">...</span>
                  </div>
                </el-image>
              </div>
              <p class="uid">{{item.id}}</p>
              <div class="des">
                <p class="name">{{item.firstName}} {{item.lastName}}</p>
                <span class="email">{{item.email}}</span>
              </div>
            </div>          
            <div class="more-msg">            
              <a v-if="" href="javascript:;" @click="moreArticles(item.id)">更多帖子</a>
              <a href="javascript:;" @click="moreAuthormsg(item.id)">更多博主资料</a>
            </div>
          </el-card>
        </el-col>
      </el-row>
   </div>
 </div>
</template>

<script>
 import {Users} from '@network/users'
 export default {
  name: 'User',
  data () {
   return {
     users:[],
     limit:18,
     total:1
   }
  },
  components: {

  },
  created(){
    this.getUsers(this.limit)
  },
  mounted(){
    this.getMore()
  },
  methods:{
    getUsers(limit){
      Users(limit).then(res=>{
        this.users = res.data.data
        this.total = res.data.total
        // console.log(res);
      })
    },
    moreArticles(id){
      this.$router.push({
        path:"/articles/"+id,     
      })
    },
    moreAuthormsg(id){
      this.$router.push({
        path:"/author",
        query:{
          id:id
        }
      })
    },
    //加载更多
    getMore(){
      let clientHeight = document.documentElement.clientHeight
      window.addEventListener('scroll',e=>{        
        let contentHeight = this.$refs.scroll.offsetHeight
        let top = e.srcElement.scrollingElement.scrollTop
	      // console.log(clientHeight,contentHeight,top);
        if(contentHeight+top>=clientHeight){
          this.limit = this.limit+10
          this.getUsers(this.limit)
          if(this.limit>=this.total){
            console.log('已全部加载完毕')
            return 
          }          
        }
      })
    }
  }
 }
</script>

<style scoped lang="scss">
.users-wrapper{
  margin-top:20px;
}
.ellipsis{
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
@mixin clamp($v:2){
  overflow:hidden;
  text-overflow:ellipsis;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:$v; 
}
.uid,
.name,
.email{
  display:block;
  font-size:12px;color:#6c757d;
  @extend .ellipsis;
}
.pic{
  width:100%;
  height:169px;
  .el-image{
    width:100%;
    height:100%;
  }
}
.email{margin:6px 0 10px;}
.uid{margin:14px 0 10px;} 
.name{
  font-size:16px;
  color:#333;
  margin:10px 0 5px;
  line-height: 1.5;
}
.more-msg{
  display:grid;
  grid-template-columns: 1fr auto;
  a{
    font-size:14px;
    color:#f99;
  }
}
.el-col{
  margin-bottom:10px;
}
</style>
