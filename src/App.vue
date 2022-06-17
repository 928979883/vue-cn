<template>
  <div id="app" style="height: 100%;">
    <el-container >
      <el-header style="height: 80px;" :class="[showlogo ==true?'active':'']" >
          <CommonHeader></CommonHeader>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer style="height: auto;">
          <CommonFooter></CommonFooter>
          <div class="to_top" v-if="showBtn" @click="toTop">
            <img src="./assets/images/totop.png" alt="">
          </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import CommonHeader from './components/Common/CommonHeader'
import CommonFooter from './components/Common/CommonFooter'
export default {
  name: 'App',
  data() {
    return {
      showlogo:false,
      showBtn: false,
    }
  },
  watch: {
        '$route.path': function (newVal, oldVal) {
            if(newVal=='/'){
                this.showlogo=true;
            }else{
                this.showlogo=false;
            }
        }
    },
  mounted() {
    window.vue = this
    window.addEventListener('scroll',this.scrollhandle)
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
    scrollhandle(){
        if(this.$route.path=='/'){
            if(window.scrollY>0){
                this.showlogo=false;
            }else{
                this.showlogo=true;
            }
        }
    },
  },
  destroyed () {
      window.removeEventListener('scroll', this.scrollhandle)
  },
  components: {
        CommonHeader,
        CommonFooter,
  }
}
</script>
<style lang="less" scoped>
@keyframes wrapper-gradient {
    0% {transform: translateX(100%);}
    100% {transform: translateX(0);}
}
  .active{
    transition:  1.5s;
    top: 5% !important;
    left: 5% !important;
    width: 90% !important;
    border-radius: 10px !important;
  }
  .el-header{
      box-shadow: 30px 30px 30px rgb(183 183 183 / 50%);
      background-color: white;
      transition:  1.5s;
      z-index: 999;
      width: 100%;
      position: fixed;
      top: 0%;
      padding: 0;
      color: #333;
      text-align: center;
  }
   .el-footer {
      overflow: hidden;
      height: 300px;
      padding: 0;
      background-color: #c3e1ff;
      color: #333;
      text-align: center;
  }
  .el-main {
      padding: 0;
      height: 100%;
      color: #333;
      text-align: center;
  }
  .to_top{
        animation: wrapper-gradient .5s linear;
        position: fixed;
        bottom: 55px;
        right: 20px;
        img{
          width: 50px;
        }
    }
</style>