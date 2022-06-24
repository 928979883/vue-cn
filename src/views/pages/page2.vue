<template lang="">
    <div>
        <div class="banner">
            <!-- <img src="" alt=""> -->
            Page2-Banner
        </div>
        <div class="main">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="最新动态" name=0>
                    <!-- <p>最新动态列表：</p> -->
                    <ul>
                        <li>
                            <router-link to="/news_detail">
                                <div class="time">
                                    <div >07</div>
                                    <div class="data">2022-06</div>
                                </div>
                                <div class="content">
                                    <div class="title">保障供水 护航高考</div>
                                    <div class="detail">供水公司衷心祝愿广大莘莘学子十年寒窗、金榜题名！</div>
                                </div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/news_detail1">
                                <div class="time">
                                    <div >31</div>
                                    <div class="data">2022-05</div>
                                </div>
                                <div class="content">
                                    <div class="title">加大巡查力度 确保“两考”供水安全</div>
                                    <div class="detail">及时消除安全隐患，保障“两考”供水安全！</div>
                                </div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/news_detail2">
                                <div class="time">
                                    <div >16</div>
                                    <div class="data">2022-05</div>
                                </div>
                                <div class="content">
                                    <div class="title">全国城市节约用水宣传周-节水你我</div>
                                    <div class="detail">宣传主题为“建设节水型城市，推动绿色低碳发展”</div>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </el-tab-pane>
                <el-tab-pane label="政务公开" name=1>
                    <!-- <p>政务公开列表：</p> -->
                    <ul>
                        <li>
                            <router-link to="/news_detail">
                                <div class="time">
                                    <div >18</div>
                                    <div class="data">2022-03</div>
                                </div>
                                <div class="content">
                                    <div class="title">停水公告</div>
                                    <div class="detail">于18日晚21时至19日早8点停水施工</div>
                                </div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/news_detail1">
                                <div class="time">
                                    <div >22</div>
                                    <div class="data">2022-01</div>
                                </div>
                                <div class="content">
                                    <div class="title">公 告</div>
                                    <div class="detail">为您提供高效、快捷的用水服务!</div>
                                </div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/news_detail2">
                                <div class="time">
                                    <div >12</div>
                                    <div class="data">2022-01</div>
                                </div>
                                <div class="content">
                                    <div class="title">缴费方式指南</div>
                                    <div class="detail">地址：湖北省十堰市郧西县城关镇人民街229号</div>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </el-tab-pane>
                <el-tab-pane label="水价标准" name=2>
                    <img src="../../assets/images//page/water_price.jpg" alt="" class="water_price">
                </el-tab-pane>
              </el-tabs>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            activeName: 0
        }
    },
    created() {
        if(this.$route.query.id){
            var value =String(this.$route.query.id)
            this.activeName = value;
            console.log(this.$route.query.id);
        }
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
    padding: 50px;
    .water_price{
        width: 500px;
        margin: auto;
        display: flex;
    }
    p{
        font-size: 22px;
    }
    ul{
        width: 80%;
        margin: 50px auto 50px auto;
        li{
            a{
                align-items: center;
                display: flex;
                transition: all 0.5s;
                position: relative;
                padding: 30px 24px;
                border-bottom: #e8e8e8 1px solid;
                .time{
                    font-size: 36px;
                    position: relative;
                    margin-right: 26px;
                    padding: 23px 0;
                    width: 106px;
                    text-align: center;
                    color: #666;
                    border: #d6d6d6 1px solid;
                    border-radius: 6px;
                    overflow: hidden;
                    .data{
                        font-size: 14px;
                    }
                }
                .content{
                    text-align: initial;
                    .title{
                        margin: -2px 0 8px;
                        font-size: 20px;
                        color: #333;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                    .detail{
                        opacity: .5;
                    }
                }
            }
        }
        li:hover{
            box-shadow: 0 0 20px rgb(94 158 255 / 20%);
        }
        li:hover .time{
            transition: all 0.6s;
            color: #fff;
            border: #005fa3 1px solid;
            z-index: -1;
        }
        li:hover .time::after {
            z-index: -1;
            transition: all 0.6s;
            opacity: 1;
            width: 110px;
            height: 110px;
        }
        li .time::after {
            transition: all 0.6s;
            opacity: 0;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 80px;
            height: 80px;
            border-radius: 8px;
            background: #005fa3;
            content: " ";
        }
    }
}
    
</style>