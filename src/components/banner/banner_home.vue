<template lang="">
    <div class="banner">
        <img src="../../assets/images/home/banner.jpg" alt="">
        <div class="title">
            <div class="title1">保障供水 服务为民</div>
            <div class="title2">Ensure water supply AND serve the people</div>
        </div>
        <white_wave></white_wave>
    </div>
</template>
<script>
import white_wave from '@/components/wave/white_wave.vue'

export default {
    components:{
        white_wave,
    }
}
</script>
<style lang="less" scoped>
    .banner{
        width: 100%;
        height: 100vh;
        overflow: hidden;
        position: relative;
        img{
            width: 100%;
            height: 100vh;
            overflow: hidden;
        }
        img:hover {
            transform:scale(1);
        }
        .title{
            color: white;
            position: absolute;
            top:40%;
            left:50%;
            transform:translate(-50%,-50%);
            .title1{   
                font-size: 50px;
                font-weight: 600;
                color: #ffffff;
                line-height: 95px;
                letter-spacing: 6.6px;
            }
            .title2{
                font-size: 16px;
                color: #ffffff;
                line-height: 24px;
                letter-spacing: 3.96px;
            }
        }
    }
</style>