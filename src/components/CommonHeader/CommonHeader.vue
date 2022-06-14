<template lang="">
  <div class="CommonHeader">
    <div class="logo">
      <img src="../../assets/img/logo.png" alt="">
    </div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">

      <el-menu-item v-for="item in noChildren" :index="item.path" :key="item.path">{{item.label}}</el-menu-item>

      <el-submenu v-for="item in hasChildren" :index="item.label" :key="item.label">
        <template slot="title">{{item.label}}</template>
        <el-menu-item v-for="(subItem,subIndex) in item.children" :key="subItem.path" :index="subItem.path">{{subItem.label}}</el-menu-item>
      </el-submenu>

      <el-menu-item index="7">联系我们</el-menu-item>
    </el-menu>
    <div class="title">
      <img src="../../assets/img/logo1.png" alt="">
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
</style>
<script>
export default {
    data() {
        return {
            activeIndex: '1',
            menu:[
            {
              path: '/',
              name: 'home',
              label: '首页',
              url: 'Home/Home'
            },
            {
              label: '信息中心',
              children: [
                {
                  path: '/page1',
                  name: 'page1',
                  label: '最新动态',
                  url: 'Other/PageOne'
                },
                {
                  path: '/page2',
                  name: 'page2',
                  label: '政务公开',
                  url: 'Other/PageTwo'
                },
                {
                  path: '/page3',
                  name: 'page2',
                  label: '水价标准',
                  url: 'Other/PageTwo'
                },
            ]},
            {
              label: '网上营业厅',
              children: [
                {
                  path: '/page4',
                  name: 'page1',
                  label: '我要缴费',
                  url: 'Other/PageOne'
                },
                {
                  path: '/page5',
                  name: 'page2',
                  label: '我要报装',
                  url: 'Other/PageTwo'
                },
                {
                  path: '/page6',
                  name: 'page2',
                  label: '我要报修',
                  url: 'Other/PageTwo'
                },
                {
                  path: '/page7',
                  name: 'page2',
                  label: '投诉建议',
                  url: 'Other/PageTwo'
                },
            ]},
            {
              label: '疫情防控',
              children: [
                {
                  path: '/page8',
                  name: 'page1',
                  label: '“三费”大厅防控',
                  url: 'Other/PageOne'
                },
                {
                  path: '/page9',
                  name: 'page2',
                  label: '生产区域风控',
                  url: 'Other/PageTwo'
                },
                {
                  path: '/page10',
                  name: 'page2',
                  label: '疫情排查与宣传',
                  url: 'Other/PageTwo'
                },
            ]},
            {
              label: '营商环境',
              children: [
                {
                  path: '/page11',
                  name: 'page1',
                  label: '水务综合收费管理平台',
                  url: 'Other/PageOne'
                },
                {
                  path: '/page12',
                  name: 'page2',
                  label: '智能表采集系统',
                  url: 'Other/PageTwo'
                },
                {
                  path: '/page13',
                  name: 'page2',
                  label: '管网监测系统',
                  url: 'Other/PageTwo'
                },
            ]},
            ]
        }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
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
      display: flex;
      align-items: center;
      justify-content: space-around;
      .logo{
        width: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          width: 55px;
        }
      }
      .title{
        width: 20%;
        img{
          height: 40px;
        }
      }
    }
</style>