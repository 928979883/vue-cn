<template lang="">
    <div class="page_title">
        <div class="pos">
            <div class="text">
                <b>{{zh_title}}</b>
                <p>{{en_title}}</p>
                <i></i>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            zh_title:'',
            en_title:'',
        }
    },
    mounted() {
        console.log(this.$route.path)
        if (this.$route.path=='/page1') {
            this.zh_title='公司简介'
            this.en_title='Profile'
        }
    },
}
</script>
<style lang="less" scoped>
.page_title{
    position: relative;
    width: 1200px;
    height: 150px;
    margin: auto;
    .pos{
        position: absolute;
        top: -115px;
        left: 0;
        width: 220px;
        background: #005fa3;
        border-radius: 8px;
        overflow: hidden;
        .text{
            text-align: initial;
            position: relative;
            padding: 48px 0 0px 24px;
            height: 182px;
            color: #fff;
            b{
                margin-bottom: 10px;
                font-weight: 700;
                font-size: 32px;
            }
            p{
                margin-bottom: 18px;
                font-weight: 700;
                font-size: 23px;
                font-family: Arial;
            }
            i{
                position: absolute;
                left: 24px;
                bottom: 0;
                width: 1px;
                height: 80px;
                background: #fff;
                opacity: 0.5;
            }
        }
    }
}
</style>