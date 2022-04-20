<template>
 <div class="articles-wrap">
    <Posts :postsData="articles"></Posts>
 </div>
</template>

<script>
 import Posts from '@/components/posts'
 import {articles} from '@network/posts'
 export default {
  name: 'Articles',
  data () {
   return {
      id:'',
      limit:100,
      articles:[],
   }
  },
  components: {
    Posts
  },
  created(){
    this.id = this.$route.params.id
    this.getArticles(this.id,this.limit)
  },
  methods:{
    getArticles(id,limit){
      articles(id,limit).then(res=>{
        if(res.data.data){
          this.articles = res.data.data
        }       
      })
    }
  },
  computed:{
    _id(){
      console.log(this.$route.params.id)
      return this.id = this.$route.params.id
    }
  }
 }
</script>

<style scoped>

 
</style>
