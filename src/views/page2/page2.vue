<template lang="">
    <el-container>
        <el-header style="height: auto;">
            <div class="banner">
                <!-- <img src="" alt=""> -->
                Page2-Banner
            </div>
        </el-header>
        <el-main>
            <div class="box1">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="最新动态" name=0>
                        <p>最新动态列表：</p>
                        <ul>
                            <li>
                                <div class="content">
                                    <div class="title">标题</div>
                                    <div class="detail">描述概况</div>
                                </div>
                                <div class="time"><span>发布时间：</span>XXXX年XX月XX日</div>
                            </li>
                            <li>
                                <div class="content">
                                    <div class="title">标题</div>
                                    <div class="detail">描述概况</div>
                                </div>
                                <div class="time"><span>发布时间：</span>XXXX年XX月XX日</div>
                            </li>
                            <li>
                                <div class="content">
                                    <div class="title">标题</div>
                                    <div class="detail">描述概况</div>
                                </div>
                                <div class="time"><span>发布时间：</span>XXXX年XX月XX日</div>
                            </li>
                        </ul>
                    </el-tab-pane>
                    <el-tab-pane label="政务公开" name=1>
                        <p>政务公开列表：</p>
                        <ul>
                            <li>
                                <div class="content">
                                    <div class="title">标题</div>
                                    <div class="detail">描述概况</div>
                                </div>
                                <div class="time"><span>发布时间：</span>XXXX年XX月XX日</div>
                            </li>
                            <li>
                                <div class="content">
                                    <div class="title">标题</div>
                                    <div class="detail">描述概况</div>
                                </div>
                                <div class="time"><span>发布时间：</span>XXXX年XX月XX日</div>
                            </li>
                            <li>
                                <div class="content">
                                    <div class="title">标题</div>
                                    <div class="detail">描述概况</div>
                                </div>
                                <div class="time"><span>发布时间：</span>XXXX年XX月XX日</div>
                            </li>
                        </ul>
                    </el-tab-pane>
                    <el-tab-pane label="水价标准" name=2>水价标准</el-tab-pane>
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
        p{
            font-size: 22px;
        }
        ul{
            width: 80%;
            margin: auto;
            li{
                padding: 10px;
                justify-content: space-between;
                align-items: center;
                display: flex;
                .content{
                    display: flex;
                    .title{
                        margin-right: 20px;
                    }
                    .detail{
                        opacity: .5;
                    }
                }
            }
    }
    }
    
</style>