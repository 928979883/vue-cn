<template lang="">
  <div class="CommonHeader">
    <div class="logo">
      <img src="" alt="">
      公司LOGO
    </div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="" text-color="black">

      <el-menu-item v-for="item in noChildren" :index="item.name" :key="item.name" @click="clickMenu(item.path)">{{item.label}}</el-menu-item>

      <el-submenu v-for="item in hasChildren" :index="item.label" :key="item.label" >
        <template slot="title">{{item.label}}</template>
        <el-menu-item v-for="(subItem,subIndex) in item.children" :key="subItem.name" :index="subItem.name" @click="clickMenu(subItem.path,subIndex)">{{subItem.label}}</el-menu-item>
      </el-submenu>

    </el-menu>
    <div class="title">
      <img src="" alt="">
      公司副LOGO
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
    /* color: white; */
  }
  .el-menu--horizontal>.el-submenu>.el-submenu__title{
    color: white;
  }
</style>
<script>
export default {
    data() {
        return {
            activeIndex: 'Home',
            menu:[
            {
              path: 'Home',
              name: 'Home',
              label: '首页',
            },
            {
              label: '父标题2',
              children: [
                {
                  path: 'page1',
                  name: '2-1',
                  label: '子标题1',
                },
                {
                  path: 'page1',
                  name: '2-2',
                  label: '子标题2',
                },
                {
                  path: 'page1',
                  name: '2-3',
                  label: '子标题3',
                },
            ]},
            {
              label: '父标题3',
              children: [
                {
                  path: 'page2',
                  name: '3-1',
                  label: '子标题1',
                },
                {
                  path: 'page2',
                  name: '3-2',
                  label: '子标题2',
                },
                {
                  path: 'page2',
                  name: '3-3',
                  label: '子标题3',
                },
                {
                  path: 'page2',
                  name: '3-4',
                  label: '子标题4',
                },
            ]},
            {
              label: '父标题4',
              children: [
                {
                  path: 'page3',
                  name: '4-1',
                  label: '子标题1',
                },
                {
                  path: 'page3',
                  name: '4-2',
                  label: '子标题2',
                },
                {
                  path: 'page3',
                  name: '4-3',
                  label: '子标题3',
                },
            ]},
            {
              label: '父标题5',
              children: [
                {
                  path: 'page4',
                  name: '5-1',
                  label: '子标题1',
                },
                {
                  path: 'page4',
                  name: '5-2',
                  label: '子标题2',
                },
                {
                  path: 'page4',
                  name: '5-3',
                  label: '子标题3',
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
        console.log(value1,value2);
        this.$router.push({
          name:value1,
          query:{id:value2}
        }).catch(data => {  })
        // this.$router.go(0)
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
        font-size: 26px;
        img{
          width: 55px;
        }
      }
      .title{
        width: 20%;
        font-size: 26px;
        img{
          height: 40px;
        }
      }
    }
</style>