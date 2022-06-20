<template lang="">
    <div class="page6">
        <div class="contact">
            <div class="title">联系我们</div>
            <div class="tel">0719-6227288</div>
            <div class="worktime">工作日8:30-17:30</div>
            <img src="../../assets/images/logo.png" alt="">
            <div class="location">地址：郧西县城关镇人民街229号"三费"大厅</div>
            <div class="code">邮政编码：442600</div>
        </div>
        <div class="map">
            <a href="https://map.baidu.com/search/%E9%83%A7%E8%A5%BF%E5%8E%BF%E4%B8%B0%E6%BA%90%E4%BE%9B%E6%B0%B4%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%E4%B8%89%E8%B4%B9%E6%9C%8D%E5%8A%A1%E5%A4%A7%E5%8E%85/@12292996.225,3871689.34,19z?querytype=s&da_src=shareurl&wd=%E9%83%A7%E8%A5%BF%E5%8E%BF%E4%B8%B0%E6%BA%90%E4%BE%9B%E6%B0%B4%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%E4%B8%89%E8%B4%B9%E6%9C%8D%E5%8A%A1%E5%A4%A7%E5%8E%85&c=216&src=0&pn=0&sug=0&l=18&b=(12292254.876202831,3871393.2745285714;12293788.101845613,3872105.984885958)&from=webmap&biz_forward=%7B%22scaler%22:2,%22styles%22:%22pl%22%7D&device_ratio=2">
                <img src="../../assets/images/map.png" alt="">
            </a>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.page6{
    margin: 80px auto;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    .contact{
        margin-top: 30px;
        width: 30%;
        text-align: initial;
        .title{
            font-size: 48px;
            font-weight: 400;
            text-align: LEFT;
            color: #333;
            margin-bottom: 10px;
        }
        .tel{
            font-size: 36px;
            font-weight: 400;
            text-align: LEFT;
            color: #333;
        }
        .worktime{
            margin-bottom: 30px;
            width: 157px;
            height: 28px;
            line-height: 28px;
            text-align: center;
            border: 1px solid #eee;
            border-radius: 2px;
        }
        img{
            width: 50%;
        }
        .location{
            margin-bottom: 15px;
        }
    }
    .map{
        margin-top: 50px;
        width: 70%;
        img{
            width: 100%;
        }
    }
}
</style>