<template lang="">
    <el-container>
        <el-header style="height: auto;">
            <div class="banner">
                <!-- <img src="" alt=""> -->
                Page1-Banner
            </div>
        </el-header>
        <el-main>
            <div class="box1">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="公司概况" name=0>描述公司概况</el-tab-pane>
                    <el-tab-pane label="班子分工" name=1>描述单位领导管理范围</el-tab-pane>
                    <el-tab-pane label="科室组成" name=2>描述单位科室组成管理范围</el-tab-pane>
                    <el-tab-pane label="员工风采" name=3>描述单位职工的积极向上相关信息</el-tab-pane>
                  </el-tabs>
            </div>
        </el-main>
      </el-container>
</template>
<script>
export default {
    data() {
        return {
            activeName: '1',
        }
    },
    created() {
        var value =String(this.$route.query.id)
        this.activeName = value;
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
    }
}
</script>
<style>
    .el-tabs__nav-scroll{
        padding-left: 200px;
    }
    .el-tabs__item{
        font-size: 22px;
        margin: 15px 0;
    }
</style>
<style lang="less" scoped>
    .el-header{
        padding: 0;
    }
    .banner{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 80px;
        overflow: hidden;
        width: 100%;
        height: 300px;
        background-color: lightblue;
        img{
            width: 100%;
            height: 100%;
            transform: scale(1);
            object-fit: cover;
            animation: img_1 1.2s linear 1;
        }
    }
    .box1{

    }
</style>