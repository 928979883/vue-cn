<template lang="">
    <div class="home">
        <div class="banner">
            <wave></wave>
        </div>
        <div class="box1">
            <div class="box1-content">
                <div class="title">郧西县丰源供水有限公司</div>
                <div class="detail">郧西县丰源供水有限责任公司创建于2002，位于美丽的湖北十堰市，这里交通方便，环境优美。自来水供给,是我们提供的主要产品及经营范围，注册资金： 6718。我们紧跟发展趋势，不断创新，一直以稳定可靠的产品质量和良好的经营信誉，取得了广大客户的信任。 成立以来，我们务实经营，得到了良好的发展，有一个稳定的员工团队，人数在：100-200人,日常经营过程中我们严控质量关，市场范围不断扩大，资产总计达到： 6718。 我们坚持以对社会、客户和企业负责的精神精雕细琢每个产品的每一个细节，为社会提供优质的产品和服务，为客户创造价值。对于用人方面，我们坚信要发展，人才是关键，为谋求长远发展，建立并完善了人才资源库，努力做到让所有员工人尽其才，才尽其用，让其在本岗位上发挥特长，尽忠职守。 郧西县丰源供水有限责任公司的详细地址：湖北省十堰市郧西县城关镇洪台村，邮编：442600，电话：0719-6234577，联系人：孙韬，竭诚欢迎广大的新、老客户洽谈合作。</div>
            </div>
            <img src="" alt="">
        </div>
        <div class="box2">
            <div class=""></div>
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
<style lang="less" scoped>
.home{
    .banner{
        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        background: url(../../assets/img/banner.jpg) left top / 100% no-repeat
    }
    .box1{
        padding: 50px;
        display: flex;
        justify-content: center;
        .box1-content{
            background-color: #e2e2e2;
            margin-right: 30px;
            padding: 20px 30px;
            width: 25%;
            border-radius: 5px;
            .title{
                font-size: 26px;
                font-weight: 600;
                border-bottom: 3px solid white;
                line-height: 50px;
            }
            .detail{
                text-indent:2em;
                padding-top: 10px;
                line-height: 25px;
                text-align: justify;

            }
        }
        img{
            box-shadow: 0 0 30px rgb(94 158 255 / 20%);
            border-radius: 10px;
            width: 500px;
            height: 600px;
        }
    }
}
</style>