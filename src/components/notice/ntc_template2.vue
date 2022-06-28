<template lang="">
    <div class="notice" :class="[up ==true?'up_active':'']">
        <div class="notice_content">
            <separator :title="title"></separator>

            <div class="content">
                <div class="box1">
                    <div class="box1_title">最新动态<div class="line"></div></div>
                    <img src="../../assets/images/components/notice/newest.png" alt="">
                    <div class="newest_title">加大巡查力度 确保“两考”供水安全</div>
                    <div class="newest_detail">5月31日，供水公司组成两个专班分别对四堰坪水厂、五谷梁水厂、“三费”大厅和源水管网以及城区公共供水管网进行全方位安全隐患大排查。检查过程中，四堰坪水厂和五谷梁水厂工作人员在岗，净水、消防、监控等设...</div>
                    <div class="newest_time">2022-06-23 12:55:12</div>
                    <router-link to="/news_detail2">
                        <div class="view_details">
                            <div class="to1">查看详情</div>
                            <div class="to2">></div>
                        </div>
                    </router-link>
                </div>
                <div class="box2">
                    <ul>
                        <li>
                            <router-link to="news_detail">
                                <div class="box2_time"> 2022-06-23 12:55:12</div>
                                <img src="../../assets/images/components/notice/new1.jpg" alt="">
                                <div class="box2_content">
                                    <div class="box2_title">保障供水 护航高考</div>
                                    <div class="box2_detail">按照县委政府及县城管局的总体工作部署，24小时值班值守，切实做好“两考”期间的供水保障工作，供水公司衷心祝愿广大莘莘学子十年寒窗、金榜题名！</div>
                                </div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="news_detail2">
                                <div class="box2_time"> 2022-06-23 12:55:12</div>
                                <img src="../../assets/images/components/notice/new2.jpg" alt="">
                                <div class="box2_content">
                                    <div class="box2_title">全国城市节约用水周——节水你我他</div>
                                    <div class="box2_detail"> 2022 年 5 月 15 日-21 日是 2022 年全国城市节约用水宣传周，今年的宣传主题为“建设节水型城市，推动绿色低碳发展”。</div>
                                </div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="news_detail1">
                                <div class="box2_time"> 2022-06-23 12:55:12</div>
                                <img src="../../assets/images/components/notice/new3.jpg" alt="">
                                <div class="box2_content">
                                    <div class="box2_title">加大巡查力度 确保“两考”供水安全</div>
                                    <div class="box2_detail">5月31日，供水公司组成两个专班分别对四堰坪水厂、五谷梁水厂、“三费”大厅和源水管网以及城区公共供水管网进行全方位安全隐患大排查。</div>
                                </div>
                            </router-link>
                        </li>
                    </ul>
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
            title:'公告通知',
            up:false,
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
        .box1{
            position: relative;
            width: 50%;
            background-color: #fff;
            padding: 30px 50px;
            display: flex;
            flex-direction: column;
            .box1_title{
                font-size: 22px;
                font-weight: bold;
                line-height: 24px;
                letter-spacing: 1.1px;
                .line{
                    margin: 15px 0 30px 0;
                    height: 3px;
                    background: #3fc9fe;
                    width: 60px;
                }
            }
            .newest_title{
                font-size: 20px;
                font-weight: 700;
                line-height: 24px;
                margin: 15px 0;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
            }
            .newest_detail{
                font-size: 16px;
                line-height: 32px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
            }
            .newest_time{
                font-size: 16px;
                color: #939292;
                line-height: 32px;
                margin: 10px 0;
            }
            img{
                width: 100%;
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
        .box2{
            padding-left: 30px;
            width: 50%;
            position: relative;
            ul{
                li{
                    a{
                        padding: 30px 0;
                        position: relative;
                        display: flex;
                    }
                    img{
                        width: 180px;
                        height: 120px;
                    }
                    img:hover {
                        transform:scale(1);
                    }
                    .box2_time{
                        font-size: 14px;
                        color: #939292;
                        line-height: 28px;
                        position: absolute;
                        right: 0;
                        top: 0;
                    }
                    .box2_content{
                        padding-left: 20px;
                        .box2_title{
                            font-size: 18px;
                            font-weight: 700;
                            line-height: 32px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                        }
                        .box2_detail{
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                            font-size: 16px;
                            line-height: 28px;
                        }
                    }
                }
                li :hover{
                    color: rgb(52, 107, 207);
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
}
</style>