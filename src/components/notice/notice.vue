<template lang="">
    <div class="notice">
        <p class="box2-title">公告通知</p>
        <div class="content">
            <p>最新动态</p>
            <ul>
                <li>
                    <router-link to="news_detail">
                        <div class="title">保障供水 护航高考</div>
                        <div class="data">6月6日</div>
                    </router-link>
                </li>
                <li>
                    <router-link to="news_detail1">
                        <div class="title">加大巡查力度 确保“两考”供水安全</div>
                        <div class="data">5月31日</div>
                    </router-link>
                </li>
                <li>
                    <router-link to="news_detail2">
                        <div class="title">全国城市节约用水宣传周-节水你我</div>
                        <div class="data">5月16日</div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.notice{
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
                    a{
                        width: 100%;
                        line-height: 50px;
                        font-size: 20px;
                        display: flex;
                        justify-content: space-between;
                        transition: .3s;
                    }
                }
                li :hover {
                    transition: .3s;
                    font-size: 22px;
                    color: #125999;
                }
            }
        }
    }
</style>