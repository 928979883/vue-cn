<template lang="">
    <div class="contactus">
        <banner :img="img" :zh_title="zh_title" :en_title="en_title"></banner>

        <div class="contact">
            <div class="title">联系方式</div>
            <div class="company">郧西县丰源供水有限公司</div>
            <div>公司地址：郧西县城关镇人民街229号"三费"大厅</div>
            <div>服务热线：0719-6227288</div>
            <div>邮政编码：442600</div>
            <div>电子邮箱：442695648@qq.com</div>
            <div>公司网址：www.yxfygs001.com</div>
            <div>办公（投诉）电话：0719-6234820</div>
        </div>

        <Map></Map>

    </div>
</template>
<script>
import banner from '@/components/banner/banner.vue'
import Map from '@/components/map/map.vue'
export default {
    data() {
        return {
            img:require('../../assets/images/page/contact_banner.png'),
            zh_title:'联系我们',
            en_title:'CONTACT US',
        }
    },  
    components:{
        banner,
        Map,
    }
}
</script>
<style lang="less" scoped>
.contactus{
    margin: 80px auto;
    .contact{
        width: 65%;
        text-align: initial;
        margin: 50px auto;
        font-size: 18px;
        line-height: 40px;
        letter-spacing: 0.9px;
        .title{
            font-size: 26px;
            font-weight: 700;
            line-height: 32px;
            border-bottom: 3px solid #3FC9FE;
            widows: auto;
            display: inline-block;
            padding-bottom: 10px;
            margin-bottom: 10px;
        }
        .company{
            font-size: 20px;
            line-height: 32px;
            margin-bottom: 30px;
        }
    }
}
</style>