<template>
  <div id="app" style="height: 100%;">
    <el-container>
      <el-header style="height: 80px;">
          <CommonHeader></CommonHeader>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer style="height: 100%;">
          <CommonFooter></CommonFooter>
      </el-footer>
      <to_top></to_top>
    </el-container>
  </div>
</template>

<script>
import CommonHeader from './components/Common/CommonHeader'
import CommonFooter from './components/Common/CommonFooter'
import to_top from './components/to_top/to_top.vue'

export default {
  name: 'App',
  components: {
        CommonHeader,
        CommonFooter,
        to_top,
  }
}
</script>
<style lang="less" scoped>
  .el-header{
      z-index: 999;
      position: fixed;
      top: 0;
      padding: 0;
  }
  .el-footer {
      padding: 0;
      color: #333;
      position: relative;
  }
  .el-main {
      padding: 0;
      height: 100%;
      color: #333;
  }
</style>