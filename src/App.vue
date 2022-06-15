<template>
  <div id="app" style="height: 100%;">
    <el-container >
      <el-header>
          <CommonHeader></CommonHeader>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer style="height: auto;">
          <CommonFooter></CommonFooter>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import CommonHeader from './components/Common/CommonHeader'
import CommonFooter from './components/Common/CommonFooter'
export default {
  name: 'App',
  components: {
        CommonHeader,
        CommonFooter,
  }
}
</script>
<style lang="less" scoped>
  .el-header{
      z-index: 999;
      width: 100%;
      position: fixed;
      top: 0;
      padding: 0;
      color: #333;
      text-align: center;
  }
   .el-footer {
      height: 100%;
      padding: 0;
      background-color: #252b3a;
      color: #333;
      text-align: center;
  }
  .el-main {
      padding: 0;
      color: #333;
      text-align: center;
  }
</style>