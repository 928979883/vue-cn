<template lang="">
    <div class="company_profile">
        <div class="content_title"><span>郧西县</span>丰源供水有限公司</div>
        <div class="content_main">
            <div class="box1">
                <div>                    
                    郧西县丰源供水有限公司自2002年10月组建成立，由政府出资控股， 2007年
                    4月3日经县人民政府西政发【2007】9号文件批复，县城市管理执法局为城市
                    供水行政主管部门，于2009年6月正式将供水公司从县国资公司的管理、经营
                    资产全部移交县城市管理局，主要职责承担城区工业、居民生活、消防、环保
                    等行业的用水、供水任务。公司现有职工66人，内设八个职能科室，即办公
                    室、财务科、经营科、生产安全保卫科、用水管理科、计量管理科、安装维修
                    公司、监察科。公司占地57406平方米，现有固定资产1.1亿（含新建四堰坪水厂和源水管网），
                    供水生产设施三处，日供水能力5.5万吨（含新水厂3万吨）。
                </div>
                <br>
                <div>                    
                    源水为天河电站库水，源水管网为全封闭Φ1000mm玻璃钢夹砂和水泥钢套管，全长12.3km，
                    城区供水面积35km2，城区供水管网总长89km，城区供水管网普及率达99%，
                    水质综合合格率达99%以上，管网服务水压平均为0.4MPa，供水人口为17万
                    人（最新人口普查数据）。
                </div>
            </div>
            <div class="box2">
                <img src="../../assets/images/components/company_profile/lunbo4.jpg" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.company_profile {
    padding: 50px 0;
    width: 65%;
    margin: auto;
    .content_title{
        padding: 30px 0;
        font-size: 34px;
        font-weight: 700;
        line-height: 32px;
        span{
            color: #346bcf;
        }
    }
    .content_main{
        display: flex;
        justify-content: space-between;
        .box1{
            width: 48%;
            text-align: justify;
            text-indent: 2em;
            line-height: 30px;
            font-size: 16px;
        }
        .box2{
            width: 48%;
            img{
                width: 100%;
                height: 400px;
            }
        }
    }
}
</style>