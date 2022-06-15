<template lang="">
    <div class="page">
        <div class="banner">
            <img src="" alt="">
        </div>
        <div class="box1">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="子标题1" name=0>子标题1</el-tab-pane>
                <el-tab-pane label="子标题2" name=1>子标题2</el-tab-pane>
                <el-tab-pane label="子标题3" name=2>子标题3</el-tab-pane>
              </el-tabs>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            activeName: '1'
        }
    },
    created() {
        var value =String(this.$route.query.id)
        this.activeName = value;
        console.log(this.$route.query.id);
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
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
    .page{
        margin-top: 60px;
        .banner{
            overflow: hidden;
            width: 100%;
            height: 300px;
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
    }
</style>