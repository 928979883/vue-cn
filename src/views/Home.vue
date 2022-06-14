<template lang="">
    <el-container style="height: 100%;">
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
</template>
<script>
export default {
    name:'Home',
    data() {
        return {
            
        }
    },
}
</script>
<style>
    .el-header, .el-footer {
      background-color: #B3C0D1;
      color: #333;
      text-align: center;
      line-height: 60px;
    }
    .el-main {
      background-color: #E9EEF3;
      color: #333;
      text-align: center;
      line-height: 160px;
    }
  </style>
<style lang="less" scoped>
    
</style>