<template lang="">
    <el-container style="height: 100%;">
        <el-header>
            <CommonHeader></CommonHeader>
        </el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
</template>
<script>
import CommonHeader from '../components/CommonHeader/CommonHeader'
export default {
    name:'Home',
    data() {
        return {
        }
    },
    components:{
        CommonHeader,
    },
}
</script>
<style lang="less" scoped>
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