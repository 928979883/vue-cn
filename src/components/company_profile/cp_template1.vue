<template lang="">
    <div class="company_profile" :class="[up ==true?'up_active':'']">

        <separator :title="title"></separator>

        <div class="box1-content">
            <div class="detail">
                郧西县丰源供水有限公司自2002年10月组建成立，由政府出资控股， 2007年
                4月3日经县人民政府西政发【2007】9号文件批复，县城市管理执法局为城市
                供水行政主管部门，于2009年6月正式将供水公司从县国资公司的管理、经营
                资产全部移交县城市管理局，主要职责承担城区工业、居民生活、消防、环保
                等行业的用水、供水任务。公司现有职工66人，内设八个职能科室，即办公
                室、财务科、经营科、生产安全保卫科、用水管理科、计量管理科、安装维修
                公司、监察科。
                公司占地57406平方米，现有固定资产1.1亿（含新建四堰坪水厂和源水管网），
                供水生产设施三处，日供水能力5.5万吨（含新水厂3万吨）...
                <!-- 源水为天河电站库水，源水管网为全封闭Φ1000mm玻璃钢夹砂和水泥钢套管，
                全长12.3km，城区供水面积35km2，城区供水管网总长89km，城区供水管网
                普及率达99%，水质综合合格率达99%以上，管网服务水压平均为0.4MPa，
                供水人口为17万人（最新人口普查数据）。 -->
                <router-link to="/page1">
                    <div class="view_details">
                        <div class="to1">查看详情</div>
                        <div class="to2">></div>
                    </div>
                </router-link>
            </div>
            <div class="img">
                <el-carousel indicator-position="outside" height="300px" :autoplay="false" >
                    <el-carousel-item v-for="item in imgList" :key="item.index">
                        <img :src="item.url" alt="">
                        <div class="profile">{{item.title}}</div>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
    </div>
</template>
<style>
    .el-carousel__button {
        height: 7px;
        border-radius:  10px;
    }
    .el-carousel__indicators--outside button{
        background-color: #3FC9FE;
    }
    .el-carousel__indicators--outside{
        border: 1px solid lightgray;
        border-radius: 0 0 5px 5px;
    }
</style>
<script>
import separator from '../separator/separator.vue'
export default {
    data() {
        return {
            up:false,
            title:'企业简介',
            imgList:[
                {
                    url:require("../../assets/images/components/company_profile/lunbo1.jpg"),
                    title:'县委书记查宏现场调研供水公司二期扩能项目'
                },
                {
                    url:require("../../assets/images/components/company_profile/lunbo2.jpg"),
                    title:'县纪委派出工作组组长王少应检查督导供水公司防疫工作'
                },
                {
                    url:require("../../assets/images/components/company_profile/lunbo3.jpg"),
                    title:'供水公司支部下沉东方社区开展志愿活动'
                },
                {
                    url:require("../../assets/images/components/company_profile/lunbo4.jpg"),
                    title:'供水公司四堰坪水厂'
                },
                {
                    url:require("../../assets/images/components/company_profile/lunbo5.jpg"),
                    title:'供水公司四堰坪水厂生产车间'
                },
            ]
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
            if(osTop>100){
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
.company_profile{
    visibility:hidden;
    padding: 30px 0 100px 0;
    width: 65%;
    margin: auto;
    overflow: hidden;
    .box1-content{
        display: flex;
        justify-content: space-between;
        position: relative;
        .detail{
            height: 100%;
            width: 48%;
            text-indent:2em;
            line-height: 30px;
            text-align: justify;
            .view_details{
                position: absolute;
                left: 0;
                bottom: 0;
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
        .img{
            width:45%;
            position: relative;
            img{
                cursor: pointer;
                width: 100%;
            }
            .profile{
                font-size: 14px;
                position: absolute;
                bottom: 0;
                color: white;
            }
        }
    }
}
</style>