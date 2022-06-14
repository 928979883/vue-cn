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
    .el-header{
        width: 100%;
        position: fixed;
        top: 0;
        padding: 0;
        color: #333;
        text-align: center;
    }
     .el-footer {
        padding: 0;
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
    }
    .el-main {
        padding: 0;
        margin-top: 60px;
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
    }
</style>