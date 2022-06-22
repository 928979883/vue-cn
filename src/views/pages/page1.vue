<template lang="">
    <el-container>
        <el-header style="height: auto;">
            <div class="banner">
                <!-- <img src="" alt=""> -->
                Page1-Banner
            </div>
        </el-header>
        <el-main>
            <div class="box1">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="公司概况" name=0>
                        <div class="content1">
                            郧西县丰源供水有限公司自2002年10月组建成立，由政府出资控股， 2007年 4月3日经县人民政府西政发【2007】9号文件批复，县城市管理执法局为城市 供水行政主管部门，于2009年6月正式将供水公司从县国资公司的管理、经营 资产全部移交县城市管理局，主要职责承担城区工业、居民生活、消防、环保 等行业的用水、供水任务。公司现有职工66人，内设八个职能科室，即办公 室、财务科、经营科、生产安全保卫科、用水管理科、计量管理科、安装维修 公司、监察科。 公司占地57406平方米，现有固定资产1.1亿（含新建四堰坪水厂和源水管网）， 供水生产设施三处，日供水能力5.5万吨（含新水厂3万吨）。源水为天河电站 库水，源水管网为全封闭Φ1000mm玻璃钢夹砂和水泥钢套管，全长12.3km， 城区供水面积35km2，城区供水管网总长89km，城区供水管网普及率达99%， 水质综合合格率达99%以上，管网服务水压平均为0.4MPa，供水人口为17万 人（最新人口普查数据）。
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="班子分工" name=1>描述单位领导管理范围</el-tab-pane>
                    <el-tab-pane label="科室组成" name=2>
                        <img src="../../assets/images/kszc.png" alt="" class="content3">
                    </el-tab-pane>
                    <el-tab-pane label="员工风采" name=3>
                        <div class="content4">
                            <ul>
                                <li>
                                    <img src="../../assets/images/ygfc1.jpg" alt="">
                                    <div class="title">安装维修公司在天河金街管道安装作业</div>
                                </li>
                                <li>
                                    <img src="../../assets/images/ygfc2.jpg" alt="">
                                    <div class="title">公司专题部署高考/中考期间供水保障工作</div>
                                </li>
                                <li>
                                    <img src="../../assets/images/ygfc3.jpg" alt="">
                                    <div class="title">化验人员在郧西一中抽检水样</div>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <img src="../../assets/images/ygfc4.jpg" alt="">
                                    <div class="title">公司组织经营科全体员工参加反电信诈骗培训活动</div>
                                </li>
                                <li>
                                    <img src="../../assets/images/ygfc5.jpg" alt="">
                                    <div class="title">2021.8.29牵牛大道1000mm主供水管道因山体滑坡断裂抢修现场</div>
                                </li>
                            </ul>
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
            activeName: '1',
        }
    },
    created() {
        var value =String(this.$route.query.id)
        this.activeName = value;
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
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
        .content1{
            width: 90%;
            margin: auto;
            text-align: justify;
            text-indent:2em;
            line-height: 30px;
            font-size: 18px;
        }
        .content3{
            width: 500px;
        }
        .content4{
            padding: 30px 0;
            ul{
                padding: 10px 0;
                display: flex;
                justify-content: space-around;
                align-items: center;
                li{
                    border: 1px solid lightgray;
                    border-radius: 10px;
                    width: 28%;
                    overflow: hidden;
                    img{
                        border-radius: 10px 10px 0 0;
                        width: 100%;
                        height: 100%;
                        transition:all .4s;
                    }
                    .title{
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        padding: 10px;
                    }
                }
                li img:hover {
                    cursor: pointer;
                    transform:scale(1.3);
                }
            }
            ul:last-child{
                /* justify-content: left; */
            }
        }
    }
</style>