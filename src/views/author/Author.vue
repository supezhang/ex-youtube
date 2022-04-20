<template>
 <div class="author-wrap ytb-content">
    <el-row>
      <el-col :span="8">
        <div class="avatar">         
          <el-image :src="ownerData.picture" :fit="'cover'"></el-image>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="msg"> 
          <p class="uid">{{ownerData.id}}</p>
          <div class="msg-class">
            <p class="uname">{{ownerData.firstName}} {{ownerData.lastName}}</p>
            <p class="gender"><b>性别：</b>{{ownerData.gender}}</p>
            <p class="dateofbirth"><b>出生日期：</b>{{ownerData.dateOfBirth}}</p>
            <p class="registerdate"><b>注册日期：</b>{{ownerData.registerDate}}</p>
            <p class="email"><b>电子邮件：</b>{{ownerData.email}}</p>
            <p class="phone"><b>电话：</b>{{ownerData.phone}}</p>
          </div>          
        </div>
      </el-col>
      <el-col :span="8">
        <div class="addres">
          <p><b>地址</b></p>
          <span class="addres-details" v-if="ownerData.location">
            {{ownerData.location.country}}
            {{ownerData.location.state}}
            {{ownerData.location.city}}
            {{ownerData.location.street}}
          </span>
        </div>
        <div class="addres-map">
          地图
        </div>
      </el-col>
    </el-row>
    <a href="javascript:;" @click="goArticles(ownerData.id)">所有帖子</a>
 </div>
</template>

<script>
 import {author} from "@network/author"
 export default {
  name: 'Author',
  data () {
   return {
     uId:'11',
     ownerData:{}
   }
  },
  created(){
    this.getAuthor(this.id);
  },
  components: {

  },
  computed:{
    id(){
      return this.uId = this.$route.query.id
    }
  },
  methods:{
    getAuthor(id){
      author(id).then(res=>{
        if(res.data){
          this.ownerData = res.data
        }        
      })
    },
    goArticles(uid){
      this.$router.push({
        path:"/articles/"+uid,    
      })
    },
    
  }
 }
</script>

<style scoped lang="scss">
.author-wrap{
  margin-top:20px;
}
.avatar{
  .el-image{
    width:240px;height:100%;
  }
}
.msg{
  .uid{
    font-size:12px;
    color:#6c657d;
    margin:0;
    line-height:18px;
  }
  .msg-class{
    p{
      margin:8px 0;
      font-size:16px;
      color:#333;
    }
    .uname{
      margin-bottom:4px;margin-top:4px;
    }
    .email{
      margin-top:20px;
    }
  }
} 
.addres-details{
  color:#212129;
}
.addres-map{
  border:1px solid #eee;
  height:200px;
  margin-top:20px;
}
</style>
