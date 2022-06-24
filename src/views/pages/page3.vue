<template lang="">
    <div>
        <div class="banner">
            <!-- <img src="" alt=""> -->
            Page3-Banner
        </div>
        <div class="main">
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
    .banner{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 80px;
        width: 100%;
        height: 300px;
        background-color: lightblue;
        img{
            width: 100%;
        }
    }
    .main{
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