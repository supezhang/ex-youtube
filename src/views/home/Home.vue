<template>
 <div class="home-wrap ytb-content">
   <Posts :postsData='postsData'></Posts>
 </div>
</template>

<script>
 import {posts} from '@/network/posts'
 import Posts from '@/components/posts'
 export default {
  name: 'Home',
  data () {
   return {
     limit:10,
     postsData:[]
   }
  },
  created(){
    this.getPosts(this.limit)
  },
  components: {
    Posts
  },
  methods:{
    getPosts(limit){
      posts(limit).then(res=>{
        if(res.data.data){
          this.postsData = res.data.data
        }        
      })
    },
  }
 }
</script>

<style scoped lang="scss">

 .test{
    column-count:3;
    orphans:1;
    widows:1;
    .d{
      width:100%;
      display:inline-block;
    }
 }
</style>
