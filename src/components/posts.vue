<template>
 <div class="post-list">
   <div class="ytb-content">
    <el-row :gutter="10">
        <el-col :span="8" v-for="(item, index) in postsData" :key="item.id">
          <el-card shadow="always" :body-style="{ padding: '10px' }">
            <div class="owner-content">
              <div class="pic">
                <el-image :src="item.owner.picture"  :fit="'fill'">
                  <div slot="placeholder" class="image-slot">
                    加载中<span class="dot">...</span>
                  </div>
                </el-image>
              </div>
              <div class="des">
                <p class="name">{{item.owner.firstName}} {{item.owner.lastName}}</p>
                <span class="email">{{item.owner.email}}</span>
              </div>
            </div>
            <div class="show-pic">
              <el-image :src="item.image" :fit="'cover'">
                <div slot="placeholder" class="image-slot">
                  加载中<span class="dot">...</span>
                </div>
              </el-image>
            </div>
            <div class="tags">
              <el-tag class="tag" v-for="tag in item.tags" :key="tag">{{tag}}</el-tag>
            </div>
            <div class="state">
              <div class="col-left">
                <span class="icon heart"></span>
                <span class="">{{item.likes}}</span>
              </div>
              <div class="col-right">
                <span class="">{{item.publishDate}}</span>
              </div>
            </div>
            <div class="more-msg">            
              <a v-if="!purl" href="javascript:;" @click="moreArticles(item.owner.id)">更多帖子</a>
              <a href="javascript:;">查看评论</a>
              <a href="javascript:;" @click="moreAuthormsg(item.owner.id)">更多博主资料</a>
            </div>
          </el-card>
        </el-col>
      </el-row>
  </div>
 </div>
</template>
<style scoped lang="scss">
  .post-list{
    margin:10px 0;
    .el-col{
      margin-bottom:10px;
    }
  }
  .owner-content{
    display:grid;
    grid-template-columns: 40px 1fr;
    grid-column-gap:10px;
    padding:8px;
    .pic{
      height:40px;
      border-radius: 20px;
      overflow: hidden;
      img{
        border-radius: 50%;
      }
    }
    .des{
      line-height: 1;
      display:flex;
      justify-content: center;
      flex-flow:column;
      .name{
        margin:2px 0;
        font-size:14px;
        color:#212529;
        font-weight: 800;
      }
      .email{
        font-size:12px;
        color:#999;
      }
    }
  }
  .show-pic{
    height:280px;
    margin:5px 0;
    .el-image{
      width: 100%;height:100%;
      img{
        width:100%;
      height:100%;
      object-fit: cover;
      }
    }
    .el-image__inner{
      width:100%;
      height:100%;
      object-fit: cover;
    }
  }
  .tags{
    margin:8px auto;
    .tag{
      padding:4px 8px;
      height:auto;
      line-height:1;
      font-size:10px;
      border-radius: 11px;
      color:#fff;
      background-color:#f66;
      border-color:transparent;
      & + .tag{
        margin-left:8px;
      }
    }
  } 
  .state{
    display:flex;
    align-items: center;
    color:#666;
    margin-bottom:10px;
    .col-left{
      display:flex;
      align-items: center;
    }
    .heart{
      border:1px solid #f66;
      width:20px;height:20px;
      border-radius: 0 0 10px 10px;
      margin-right:5px;
    }
    .col-right{
      margin-left:auto;
    }
  }
  .more-msg{
    display:flex;
    align-items: center;
    a{
      color:#f66;
      font-size:14px;
      margin:5px 0;
      & + a{
        margin-left:auto;
      }
    }
  }
</style>
<script>
 export default {
  name: 'Posts',
  props:{
    postsData:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data () {
   return {
     currentDate:'2233',
     fits:['fill','cover']
   }
  },
  created(){
    // console.log(this.$route.matched[0].meta.title,this.$route.path.indexOf('articles'))
  },
  components: {

  },
  mounted() {
  },
  methods:{
    moreArticles(id){
      this.$router.push("/articles/"+id)
    },
    moreAuthormsg(uid){
      this.$router.push({
        path:'/author',
        query:{
          id:uid
        }
      })
    }
  },
  computed:{
    purl(){
      return this.$route.path.indexOf('articles')
    }
  }
 }
</script>


