<template>
    <!-- <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in tags" :key="item.name" :to="{ path: item.path }">{{item.label}}</el-breadcrumb-item>
    </el-breadcrumb> -->
    <div>
        <el-breadcrumb separator="/">
          <!-- to为点击跳转 title为路由中的meta属性定义的标题 -->
          <el-breadcrumb-item
            v-for="(v, i) in breadList"
            :key="i"
            :to="v.path"
            >{{ v.name }}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    name: 'Breadcumb',
    data(){
        return {
            breadList: [
                {
                    name:'首页',
                    meta:{title:'郧西县丰源供水有限公司'},
                    path:'/',
                }
            ],
        }
    },
    watch: {
        $route() {//监听$route
            this.getBreadcrumb();
        },
    },
    methods: {
        isHome(route) {
            return route.name === "首页";
        },
        getBreadcrumb() {
            let matched = this.$route.matched;
            //如果不是首页
            if (!this.isHome(matched[0])) {
                console.log(this.breadList.length);
                // if(this.breadList.length>1 && matched[0].name !== this.breadList[this.breadList.length-1].name){
                //     console.log('1');
                //     matched = this.breadList.concat(matched);
                // }
                // if(this.breadList.length==1){
                //     console.log('2');
                //     matched = this.breadList.concat(matched);
                // }
                // console.log(matched[0].name);
                // console.log(this.breadList[this.breadList.length-1].name);
                matched = this.breadList.concat(matched);
            }
            this.breadList = matched;
            console.log(this.breadList);
        },
    },
    created() {
        //生命周期中调用获取数据的方法
        this.getBreadcrumb();
    },
//   computed:{
//         ...mapState({
//             tags: state =>state.tab.tabsList
//         })
//     }
}
</script>
<style lang="less" scoped> 

</style>