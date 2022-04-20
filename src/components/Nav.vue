<template>
  <div class='nav-wrap'>   
    <div class="ytb-content">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1" @click="$router.push('/home')">首页</el-menu-item>   
        <el-menu-item index="2" @click="$router.push('/users')">所有博主</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      activeIndex: '1',
    }
  },
  methods:{
     handleSelect(key, keyPath) {
        console.log(key, keyPath);
    }

  }
}
</script>
<style scoped>
  .nav-wrap{background-color: rgb(84, 92, 100);position:sticky;top:0;z-index: 9;}
</style>
