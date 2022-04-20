<template>
  <div id="app">   
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
export default {
  name: 'app',
  data () {
    return {
   
    }
  },
  methods:{
     
  },
  components:{
    Nav
  }
}
</script>

<style lang="scss">
@import url('./assets/css/bases.scss');
</style>
