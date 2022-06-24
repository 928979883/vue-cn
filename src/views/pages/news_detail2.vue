<template lang="">
    <div class="news_detail">
        <div class="title">全国城市节约用水宣传周-节水你我</div>
        <div class="detail">
            <div class="details" >郧西县丰源供水有限公司 2022-05-16 10:30 发表于湖北</div>
            <div class="size">字体大小：
                <button @click="add">+</button>
                <button @click="del">-</button>
            </div>
        </div>
        <div class="content" :style="{ fontSize: postFontSize + 'px' }">
            水是生命的源泉，是人类赖以生存和发展的重要资源之一，节约用水是每个人义不容辞的责任。
            2022 年 5 月 15 日-21 日是 2022 年全国城市节约用水宣传周，今年的宣传主题为“建设节水型城市，推动绿色低碳发展”。
            全国城市节水宣传周又叫节水周。为了提高城市居民节水意识，从1992年开始，国家规定每年5月15日所在的那一周为“全国城市节水宣传周”。宣传周旨在动员广大市民共同关注水资源，在日常生活中养成良好的用水习惯，促进生态环境改善，人与水和谐发展，共同建设碧水家园。
        </div>
        <img src="../../assets/images/news_detail/news2.jpg" alt="">
    </div>
</template>
<script>
export default {
    data() {
        return {
            postFontSize:"20"
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
            width: 400px;
        }
    }
</style>