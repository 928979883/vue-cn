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
  },
  methods: {
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
      height: 100%;
      padding: 0;
      background-color: #252b3a;
      color: #333;
      text-align: center;
  }
  .el-main {
      padding: 0;
      color: #333;
      text-align: center;
  }
</style>