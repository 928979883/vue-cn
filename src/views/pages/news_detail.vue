<template lang="">
    <div class="news_detail">
        <div class="title">保障供水 护航高考</div>
        <div class="detail">
            <div class="details" >郧西县丰源供水有限公司 2022-06-07 11:17 发表于湖北</div>
            <div class="size">字体大小：
                <button @click="add">+</button>
                <button @click="del">-</button>
            </div>
        </div>
        <div class="content" :style="{ fontSize: postFontSize + 'px' }">
            6月6日高考在即，县城管局副局长罗德坤带领供水公司班子及抢修化验人员一行8人，出动应急保障车辆3台，对县一中、县职中两个高考考点进行现场水质取样检测，管网水压由安装维修人员现场进行检查，对金星幼儿园爆管连夜组织抢修，通过水质取样检测，水质符合国家饮用水标准，管网供水压力正常，为高考提供了有力的供水保障。供水公司严格参照《关于确保高考、中考期间安全供水的应急实施方案》，按照县委政府及县城管局的总体工作部署，24小时值班值守，切实做好“两考”期间的供水保障工作，供水公司衷心祝愿广大莘莘学子十年寒窗、金榜题名！
        </div>
        <img src="../../assets/images/news_detail/news.jpg" alt="">
    </div>
</template>
<script>
export default {
    data() {
        return {
            // 默认字体大小
            postFontSize:"18"
        }
    },
    methods: {
        add(){
            this.postFontSize++
        },
        del(){
            this.postFontSize--
        }
    },
}
</script>
<style lang="less" scoped>
    .news_detail{
        margin: 100px auto;
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .title{
            font-size: 32px;
            font-weight: 600;
            text-align: center;
            padding: 20px 0;
        }
        .detail{
            width: 100%;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid lightgray;
            padding: 10px 0;
            .details{
                color: lightgray;
            }      
            .size{
                button{
                    width: 30px;
                    margin: 0 10px;
                }
            }      
        }
        .content{
            text-indent:2em;
            padding: 20px;
            text-align: justify;
            line-height: 30px;
        }
        img{
            width: 500px;
        }
    }
</style>