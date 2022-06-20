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
                                    <div class="title">保障供水 护航高考</div>
                                    <div class="detail">供水公司衷心祝愿广大莘莘学子十年寒窗、金榜题名！</div>
                                </div>
                                <div class="time"><span>发布时间：</span>2022-06-07</div>
                            </li>
                            <li>
                                <div class="content">
                                    <div class="title">加大巡查力度 确保“两考”供水安全</div>
                                    <div class="detail">及时消除安全隐患，保障“两考”供水安全</div>
                                </div>
                                <div class="time"><span>发布时间：</span>2022-05-31</div>
                            </li>
                            <li>
                                <div class="content">
                                    <div class="title">全国城市节约用水宣传周-节水你我</div>
                                    <div class="detail">宣传主题为“建设节水型城市，推动绿色低碳发展”</div>
                                </div>
                                <div class="time"><span>发布时间：</span>2022-05-16</div>
                            </li>
                        </ul>
                    </el-tab-pane>
                    <el-tab-pane label="政务公开" name=1>
                        <p>政务公开列表：</p>
                        <ul>
                            <li>
                                <div class="content">
                                    <div class="title">停水公告</div>
                                    <div class="detail">于18日晚21时至19日早8点停水施工</div>
                                </div>
                                <div class="time"><span>发布时间：</span>2022-03-18</div>
                            </li>
                            <li>
                                <div class="content">
                                    <div class="title">公 告</div>
                                    <div class="detail">为您提供高效、快捷的用水服务!</div>
                                </div>
                                <div class="time"><span>发布时间：</span>2022-01-22</div>
                            </li>
                            <li>
                                <div class="content">
                                    <div class="title">缴费方式指南</div>
                                    <div class="detail">地址：湖北省十堰市郧西县城关镇人民街229号</div>
                                </div>
                                <div class="time"><span>发布时间：</span>2022-01-12</div>
                            </li>
                        </ul>
                    </el-tab-pane>
                    <el-tab-pane label="水价标准" name=2>
                        <img src="../../assets/images/water_price.jpg" alt="">
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
        img{
            width: 50%;
        }
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