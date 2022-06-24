<template lang="">
    <div class="to_top" v-if="showBtn" @click="toTop">
        <img src="../../assets/images/common/totop.png" alt="">
    </div>
</template>
<script>
export default {
    data() {
        return {
            showBtn: false,
        }
    },
    mounted() {
        window.addEventListener("scroll", this.showbtn, true);
    },
    methods: {
        showbtn() {
            let that = this;
            let scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
                that.scrollTop = scrollTop;
            if (scrollTop > 100) {
                this.showBtn = true;
            } else {
                this.showBtn = false;
            }
      },
      toTop() {
            var timer = setInterval(function () {
            let osTop =document.documentElement.scrollTop || document.body.scrollTop;
            let ispeed = Math.floor(-osTop / 5);
            document.documentElement.scrollTop = document.body.scrollTop =osTop + ispeed;
            this.isTop = true;
            if (osTop === 0) {
                clearInterval(timer);
            }
            }, 30);
        },
    },
    destroyed () {
        window.addEventListener("scroll", this.showbtn, true);
    },
}
</script>
<style lang="less" scoped>
@keyframes wrapper-gradient {
    0% {transform: translateX(100%);}
    100% {transform: translateX(0);}
}
.to_top{
    cursor: pointer;
    animation: wrapper-gradient .5s linear;
    position: fixed;
    bottom: 55px;
    right: 20px;
    img{
        width: 50px;
    }
}
</style>