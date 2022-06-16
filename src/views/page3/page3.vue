<template lang="">
    <el-container>
        <el-header style="height: auto;">
            <div class="banner">
                <!-- <img src="" alt=""> -->
                Page3-Banner
            </div>
        </el-header>
        <el-main>
            <div class="box1">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="我要缴费" name=0>
                        <div class="content">
                            <div class="ewm">
                                <!-- <img src="" alt=""> -->
                                二维码
                            </div>
                            <div class="ewm">
                                <!-- <img src="" alt=""> -->
                                二维码
                            </div>
                        </div>
                    </el-tab-pane>
                  </el-tabs>
            </div>
        </el-main>
      </el-container>
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
        .content{
            display: flex;
            margin: auto;
            width: 90%;
            justify-content: center;
            .ewm{
                margin: 10px;
                width: 300px;
                height: 300px;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid lightgray;
            }
        }
    }
</style>