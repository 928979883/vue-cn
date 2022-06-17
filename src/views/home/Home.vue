<template lang="">
    <div class="home">
        <div class="banner">
            <wave></wave>
        </div>
        <div class="box1">
            <div class="box1-content">
                <div class="title">郧西县<span>丰源供水有限公司</span></div>
                <div class="detail">郧西县丰源供水有限公司自2002年10月组建成立，由政府出资控股， 2007年
                    4月3日经县人民政府西政发【2007】9号文件批复，县城市管理执法局为城市
                    供水行政主管部门，于2009年6月正式将供水公司从县国资公司的管理、经营
                    资产全部移交县城市管理局，主要职责承担城区工业、居民生活、消防、环保
                    等行业的用水、供水任务。公司现有职工66人，内设八个职能科室，即办公
                    室、财务科、经营科、生产安全保卫科、用水管理科、计量管理科、安装维修
                    公司、监察科。
                    公司占地57406平方米，现有固定资产1.1亿（含新建四堰坪水厂和源水管网），
                    供水生产设施三处，日供水能力5.5万吨（含新水厂3万吨）。源水为天河电站
                    库水，源水管网为全封闭Φ1000mm玻璃钢夹砂和水泥钢套管，全长12.3km，
                    城区供水面积35km2，城区供水管网总长89km，城区供水管网普及率达99%，
                    水质综合合格率达99%以上，管网服务水压平均为0.4MPa，供水人口为17万
                    人（最新人口普查数据）。</div>
            </div>
            <div class="img">
                <el-carousel indicator-position="outside" height="400px">
                    <el-carousel-item v-for="item in 4" :key="item">
                      <h3>{{ item }}</h3>
                    </el-carousel-item>
                  </el-carousel>
            </div>
        </div>
        <div class="box2">
            <p class="box2-title">公告通知</p>
            <div class="content">
                <p>最新公告</p>
                <ul>
                    <li>
                        <div class="title">保障供水 护航高考</div>
                        <div class="data">6月6日</div>
                    </li>
                    <li>
                        <div class="title">加大巡查力度 确保“两考”供水安全</div>
                        <div class="data">5月31日</div>
                    </li>
                    <li>
                        <div class="title">全国城市节约用水宣传周-节水你我</div>
                        <div class="data">5月16日</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import wave from '../../components/Common/Wave'
export default {
    name:'Home',
    data() {
        return {
        }
    },
    components:{
        wave
    },
}
</script>
<style>
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}
    
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>
<style lang="less" scoped>
@keyframes wrapper-gradient {
    0% {transform: translateY(100%);}
    100% {transform: translateY(0);}
}
.home{
    .banner{
        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        background: url(../../assets/images/banner.jpg) left top / 100% no-repeat
    }
    .box1{
        /* animation: wrapper-gradient .8s linear; */
        padding: 50px 0;
        width: 80%;
        margin: auto;
        display: flex;
        justify-content: center;
        .box1-content{
            padding-right: 30px;
            width: 70%;
            border-radius: 5px;
            .title{
                text-align: initial;
                font-size: 31px;
                font-weight: 600;
                color: #125999;
                border-bottom: 3px solid white;
                line-height: 50px;
                span{
                    color: #1a9cb2;
                }
            }
            .detail{
                text-indent:2em;
                padding-top: 10px;
                line-height: 25px;
                text-align: justify;
            }
        }
        .img{
            box-shadow: 0 0 30px rgb(94 158 255 / 20%);
            width: 100%;
            height: 100%;
            
        }
    }
    .box2{
        padding: 30px 50px;
        background-color: #f2f7fe;
        margin: 0 auto;
        .box2-title{
            font-size: 28px;
            font-weight: 600;
            text-align: initial;
        }
        .content{
            background-color: white;
            border-radius: 10px;
            margin: 50px 0;
            padding: 20px;
            box-shadow: 0 0 30px rgb(94 158 255 / 20%);
            p{
                font-size: 24px;
                font-weight: 600;
                text-align: initial;
            }
            ul{
                li{
                    line-height: 50px;
                    margin: 30px;
                    font-size: 20px;
                    display: flex;
                    justify-content: space-between;
                    border-bottom: 1px lightgray solid;
                }
            }
        }
    }
}
</style>