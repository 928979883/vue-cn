<template lang="">
  <div class="CommonHeader" :class="[showlogo ==true?'active':'']" >
    <div class="logo">
      <router-link to="/">
        <img src="../../assets/images/common/logo2.png" alt="">郧西县丰源供水有限公司
      </router-link>
    </div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">

      <el-menu-item v-for="item in noChildren" :index="item.name" :key="item.name" @click="clickMenu(item)">{{item.label}}</el-menu-item>

      <el-submenu v-for="item in hasChildren" :index="item.label" :key="item.index" >
        <template slot="title" >{{item.label}}</template>
        <el-menu-item v-for="(subItem,subIndex) in item.children" :key="subItem.name" :index="subItem.name" @click="clickMenu(subItem,subIndex)" >{{subItem.label}}</el-menu-item>
      </el-submenu>

    </el-menu>
  </div>

</template>
<style lang="less" scoped>
  .el-menu{
    background-color: rgba(255,255,255, 0) ;
  }
  .el-menu.el-menu--horizontal{
    border: none;
  }
  .el-menu--horizontal>.el-menu-item{
    font-size: 18px;
    padding-top: 2px;
    color: #666 !important;
  }
  .el-menu--horizontal>.el-submenu /deep/.el-submenu__title{
    line-height: 64px;
    font-size: 18px;
    color: #666 !important;
  }
</style>
<script>
export default {
    data() {
        return {
            showlogo:true,
            activeIndex: '',
            menu:[
            {
              path: 'home',
              name: 'home',
              label: '首页',
            },
            {
              label: '公司简介',
              children: [
                {
                  path: 'page1',
                  name: '2-1',
                  label: '公司概况',
                },
                {
                  path: 'page1',
                  name: '2-2',
                  label: '班子分工',
                },
                {
                  path: 'page1',
                  name: '2-3',
                  label: '科室组成',
                },
                {
                  path: 'page1',
                  name: '2-4',
                  label: '员工风采',
                },
            ]},
            {
              label: '信息中心',
              children: [
                {
                  path: 'page2',
                  name: '3-1',
                  label: '最新动态',
                },
                {
                  path: 'page2',
                  name: '3-2',
                  label: '政务公开',
                },
                {
                  path: 'page2',
                  name: '3-3',
                  label: '水价标准',
                },
            ]},
            {
              label: '网上营业厅',
              children: [
                {
                  path: 'page3',
                  name: '4-1',
                  label: '我要缴费',
                },
            ]},
            {
              label: '疫情防控',
              children: [
                {
                  path: 'page4',
                  name: '5-1',
                  label: '“三费”大厅防控',
                },
                {
                  path: 'page4',
                  name: '5-2',
                  label: '生产区域风控',
                },
                {
                  path: 'page4',
                  name: '5-3',
                  label: '疫情排查与宣传',
                },
            ]},
            {
              label: '营商环境',
              children: [
                {
                  path: 'page5',
                  name: '6-1',
                  label: '我要报装',
                },
                {
                  path: 'page5',
                  name: '6-2',
                  label: '我要报修',
                },
                {
                  path: 'page5',
                  name: '6-3',
                  label: '投诉建议',
                },
            ]},
            ]
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
      clickMenu(item,value2){
        this.$router.push({
          name:item.path,
          query:{id:value2}
        }).catch(data => {  })
        this.$store.commit('selectMenu',item)
        if(this.$route.path == '/'+item.path){
            setTimeout(function () {
                window.location.reload();
            },50);
        }
      }
    },
    destroyed () {
      window.removeEventListener('scroll', this.scrollhandle)
  },
    computed:{
      noChildren(){
        return this.menu.filter(item => !item.children)
      },
      hasChildren(){
        return this.menu.filter(item => item.children)
      }
    },
}
</script>
<style lang="less" scoped>
.active{
    transition:  1s;
    background-color: rgba(255,255,255, 0.5) !important;
    /* top: 5% !important;
    left: 5% !important;
    width: 90% !important;
    border-radius: 10px !important; */
    box-shadow:none !important;
}
.CommonHeader{
  transition:  1s;
  background-color: white;
  box-shadow: 0px 10px 10px rgb(183 183 183 / 50%);
  width: 100%;
  position: fixed;
  top: 0%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo{
    width: 25%;
    font-size: 18px;
    a{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      font-weight: 600;
    }
    img{
      height: 55px;
      margin-right: 10px;
    }
  }
}
</style>