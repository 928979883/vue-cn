<template lang="">
    <div class="notice" :class="[up ==true?'up_active':'']">
        <div class="notice_content">

            <separator :title="title"></separator>

            <div class="content">
                <div class="box1">
                    <ul>
                        <router-link to="/news_detail">
                            <div class="item">
                                <img src="../../assets/images/components/notice/new1.jpg" alt="">
                                <div class="title">保障供水 护航高考</div>
                            </div>
                        </router-link>
                    </ul>
                    <ul>
                        <li>
                            <router-link to="/news_detail1">
                                <div class="item">
                                    <img src="../../assets/images/components/notice/new2.jpg" alt="">
                                    <div class="title">加大巡查力度 确保“两考”供水安全</div>
                                </div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/news_detail2">
                                <div class="item">
                                    <img src="../../assets/images/components/notice/new3.jpg" alt="">
                                    <div class="title">全国城市节约用水宣传周-节水你我</div>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="box2">
                    <el-tabs v-model="activeName">
                        <el-tab-pane label="最新动态" name="1">
                            <div v-for="item in news" class="box2_item">
                                <router-link :to="item.path">
                                    <div class="item_title">{{item.title}}</div>
                                    <div class="item_detail">{{item.detail}}</div>
                                </router-link>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="政务公开" name="2">
                            <div v-for="item in gov_affairs" class="box2_item">
                                <div class="item_title">{{item.title}}</div>
                                <div class="item_detail">{{item.detail}}</div>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="水价标准" name="3">
                            <div v-for="item in water_price" class="box2_item">
                                <div class="item_title">{{item.title}}</div>
                                <div class="item_detail">{{item.detail}}</div>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                    <router-link to="/page2">
                        <div class="view_details">
                            <div class="to1">查看全部</div>
                            <div class="to2">></div>
                        </div>
                    </router-link>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import separator from '../separator/separator.vue'

export default {
    data() {
        return {
            activeName: '1',
            title:'公告通知',
            up:false,
            news:[
                {
                    title:'保障供水 护航高考',
                    path:'/news_detail',
                    detail:'6月6日高考在即，县城管局副局长罗德坤带领供水公司班子及抢修化验人员一行8人，出动应急保障车辆3台，对县一中、县职中两个高考考点进行现场水质取样检测，管网水压由安装维修人员现场进行检查，对金星幼儿园爆管连夜组织抢修'
                },
                {
                    title:'加大巡查力度 确保“两考”供水安全',
                    path:'/news_detail1',
                    detail:'5月31日，供水公司组成两个专班分别对四堰坪水厂、五谷梁水厂、“三费”大厅和源水管网以及城区公共供水管网进行全方位安全隐患大排查。检查过程中，四堰坪水厂和五谷梁水厂工作人员在岗，净水、消防、监控等设备运行正常'
                },
                {
                    title:'全国城市节约用水周——节水你我他',
                    path:'/news_detail2',
                    detail:'5月31日，郧西供水公司组成两个专班分别对四堰坪水厂、五谷梁水厂、“三费”大厅和源水管网以及...'
                },
            ],
            gov_affairs:[
                {
                    title:'贯彻落实中央稳经济一揽子举措 湖北印发工作清单实施133项举措',
                    detail:'6月13日获悉，省人民政府办公厅近日印发《贯彻落实中央扎实稳住经济一揽子政策措施工作清单的通知》（以下简称《工作清单》）'
                },
                {
                    title:'供水公司:认真开展“安全生产月”活动',
                    detail:'连日来我县气温连续攀升，为认真贯彻和落实“安全生产月”活动，确保城区居民生产、生活安全用水保障，预防夏季极端暴雨天气所带来供水安全隐患。'
                },
                {
                    title:'高温天气防中暑提示',
                    detail:' 中暑是指在高温环境下人体体温调节功能紊乱而引起的中枢神经系统和循环系统障碍为主要表现的急性疾病。'
                },
            ],
            water_price:[
                {
                    title:'停水公告',
                    detail:'因四堰坪水厂项目建设需要，原定于16日晚因突降暴雨无法施工，现定于18日晚21时至19日早8点停水施工，届时城区仅靠五谷梁水厂一处供水，城区高部位将无法正常供水，请各位用水户提前做好储水准备，给您的生产生活带来的不便敬请谅解！'
                },
                {
                    title:'临时停水公告',
                    detail:' 因佘家湾彩虹桥东头供水主管道爆裂，供水公司现正在组织紧急抢修，预计停水3-5小时左右，停水区域为：佘家湾→羊村→双石沟沿线，由此给您的生产生活带来的不便敬请谅解！'
                },
                {
                    title:'停水公告',
                    detail:'城区各用水户，因牵牛大道山体滑坡，导致牵牛大道Φ1000mm供水主管道移位爆裂，造成四堰坪水厂停水，现仅靠五谷梁水厂供水，直接导致城区高部位楼房水压不足。'
                },
            ],
        }
    },
    mounted() {
        window.vue = this
        window.addEventListener('scroll',this.scrollhandle)
    },
    methods: {
        scrollhandle(){
            // 屏幕滚动距离
            let osTop =document.documentElement.scrollTop || document.body.scrollTop;
            if(osTop>800){
                this.up=true;
            }
        },
    },
    components:{
        separator,
    }
}
</script>
<style>
    .el-tabs__nav{
        width: 100%;
    }
    .el-tabs__item{
        font-size: 20px;
        font-weight: 600;
    }
</style>
<style lang="less" scoped>
.notice{
    padding: 50px 0 100px 0;
    background: url('../../assets/images/components/notice/bg.png') no-repeat;
    background-size:100% 100%;
    overflow: hidden;
    .notice_content{
        width: 65%;
        margin: auto;
        .title{
            text-align: center;
            font-size: 36px;
            font-weight: bold;
            letter-spacing: 1.8px;
        }
        .content{
            width: 100%;
            display: flex;
            justify-content: space-between;
            .box1{
                padding-top: 15px;
                position: relative;
                width: 40%;
                display: flex;
                flex-direction: column;
                ul{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: space-between;
                    .item{
                        border-radius: 5px 5px 0 0;
                        overflow: hidden;
                        height: 100%;
                        background-color: #fff;
                        img{
                            border-radius: 5px 5px 0 0;
                            width: 100%;
                        }
                    }
                    a :hover{
                        color: #3FC9FE;
                    }
                    li{
                        margin: 20px 0;
                        width: 48%;
                        overflow: hidden;
                        img{
                            height: 80%;
                            width: 100%;
                        }
                    }
                    .title{
                        padding: 5px;
                        height: 20%;
                        font-size: 16px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        letter-spacing:0;
                        font-weight: 700;
                        text-align: center;
                    }
                }
            }
            .box2{
                width: 56%;
                position: relative;
                .box2_item{
                    padding: 20px 0;
                    border-bottom: 1px dashed lightgray;
                    .item_title{
                        font-size: 18px;
                        font-weight: 700;
                        line-height: 32px;
                    }
                    .item_detail{
                        text-indent: 2em;
                        font-size: 16px;
                        line-height: 28px;
                        overflow: hidden; 
                        text-overflow: ellipsis; 
                        display: -webkit-box;
                        -webkit-line-clamp: 2; 
                        -webkit-box-orient: vertical;
                    }
                }
                .box2_item :hover{
                    color: #3FC9FE;
                }
            }
            .view_details{
                position: absolute;
                bottom: 0;
                right: 0;
                color: white;
                line-height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 150px;
                background-color: #3FC9FE;
                text-indent: 0;
                text-align: center;
                .to1{
                    width: 70%;
                }
                .to2{
                    font-size: 28px;
                    width: 30%;
                    background-color: #7D7D7D;
                }
            }
        }
    }
}
</style>