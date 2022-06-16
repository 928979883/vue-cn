<template lang="">
    <el-container>
        <el-header style="height: auto;">
            <div class="banner">
                <!-- <img src="" alt=""> -->
                Page1-Banner
            </div>
        </el-header>
        <el-main>
            <!-- <div class="box1">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="子标题1" name=0>子标题1</el-tab-pane>
                    <el-tab-pane label="子标题2" name=1>子标题2</el-tab-pane>
                    <el-tab-pane label="子标题3" name=2>子标题3</el-tab-pane>
                  </el-tabs>
            </div> -->
            <div style="margin-bottom: 20px;">
                <el-button
                  size="small"
                  @click="addTab(editableTabsValue)"
                >
                  add tab
                </el-button>
              </div>
              <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
                <el-tab-pane
                  v-for="(item, index) in editableTabs"
                  :key="item.name"
                  :label="item.title"
                  :name="item.name"
                >
                  {{item.content}}
                </el-tab-pane>
              </el-tabs>
        </el-main>
      </el-container>
</template>
<script>
export default {
    data() {
        return {
            activeName: '1',
            editableTabsValue: '1',
            editableTabs: [
                {
                    title: '公司概况',
                    name: '1',
                    content: '描述公司概况'
                }, 
                {
                    title: '班子分工',
                    name: '2',
                    content: '描述单位领导管理范围'
                },
                {
                    title: '科室组成',
                    name: '3',
                    content: '描述单位科室组成管理范围'
                },
                {
                    title: '员工风采',
                    name: '4',
                    content: '描述单位职工的积极向上相关信息'
                },
            ],
            tabIndex: 4
        }
    },
    created() {
        var value =String(this.$route.query.id)
        this.activeName = value;
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
        this.editableTabsValue = newTabName;
      },
      removeTab(targetName) {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
    }
}
</script>
<style>
    .el-tabs__nav-scroll{
        padding-left: 200px;
    }
    .el-tabs__item{
        font-size: 22px;
        margin: 15px 0;
    }
</style>
<style lang="less" scoped>
    .el-header{
        padding: 0;
    }
    .banner{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 80px;
        overflow: hidden;
        width: 100%;
        height: 300px;
        background-color: lightblue;
        img{
            width: 100%;
            height: 100%;
            transform: scale(1);
            object-fit: cover;
            animation: img_1 1.2s linear 1;
        }
    }
    .box1{

    }
</style>