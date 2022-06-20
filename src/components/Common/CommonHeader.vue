<template lang="">
  <div class="CommonHeader">
    <div class="logo">
      <router-link to="/">
        <img src="../../assets/images/logo.png" alt="">
        郧西县丰源供水有限公司
      </router-link>
    </div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="" text-color="black">

      <el-menu-item v-for="item in noChildren" :index="item.name" :key="item.name" @click="clickMenu(item.path)">{{item.label}}</el-menu-item>

      <el-submenu v-for="item in hasChildren" :index="item.label" :key="item.index" >
        <template slot="title" >{{item.label}}</template>
        <el-menu-item v-for="(subItem,subIndex) in item.children" :key="subItem.name" :index="subItem.name" @click="clickMenu(subItem.path,subIndex)" >{{subItem.label}}</el-menu-item>
      </el-submenu>

    </el-menu>
    <div class="title">
      <img src="../../assets/images/logo1.png" alt="">
    </div>
  </div>

</template>
<style lang="less" scoped>
  .el-menu-demo .el-menu--horizontal .el-menu{
    width: 60%;
    display: flex;
    justify-content: center;
    border: none;
  }
  .el-menu{
    background-color: rgba(255,255,255, 0) ;
  }
  .el-menu.el-menu--horizontal{
    border: none;
  }
  .el-menu--horizontal>.el-menu-item{
    font-size: 20px;
  }
  .el-menu--horizontal>.el-submenu /deep/.el-submenu__title{
    font-size: 20px !important;
  }
</style>
<script>
export default {
    data() {
        return {
            activeIndex: '',
            menu:[
            {
              path: 'Home',
              name: 'Home',
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
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      },
      clickMenu(value1,value2){
        this.$router.push({
          name:value1,
          query:{id:value2}
        }).catch(data => {  })
        // setTimeout(function () {
        //     window.location.reload();
        // },50);
      }
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
.CommonHeader{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .logo{
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    a{
      width: 100%;
      font-weight: 600;
      justify-content: space-around;
      display: flex;
      align-items: center;
    }
    img{
      width: 60px;
    }
  }
  .title{
    width: 20%;
    font-size: 26px;
    img{
      height: 60px;
    }
  }
}
</style>