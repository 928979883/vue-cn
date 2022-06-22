<template lang="">
    <div class="news_detail">
        <div class="title">加大巡查力度 确保“两考”供水安全</div>
        <div class="detail">
            <div class="details" >郧西县丰源供水有限公司 2022-05-31 11:31 发表于湖北</div>
            <div class="size">字体大小：
                <button @click="add">+</button>
                <button @click="del">-</button>
            </div>
        </div>
        <div class="content" :style="{ fontSize: postFontSize + 'px' }">
            5月31日，供水公司组成两个专班分别对四堰坪水厂、五谷梁水厂、“三费”大厅和源水管网以及城区公共供水管网进行全方位安全隐患大排查。检查过程中，四堰坪水厂和五谷梁水厂工作人员在岗，净水、消防、监控等设备运行正常；“三费”大厅疫情防控措施完善，业务办理人员均保持一米远社交安全距离；城区公共供水管网利用测漏仪和人工现场巡查，经巡查运行良好，发现两处闸阀开启/闭合困难，专班现场进行维护保养，及时消除安全隐患，保障“两考”供水安全。
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            postFontSize:"20"
        }
    },
    methods: {
        add(){
            this.postFontSize++
        },
        del(){
            this.postFontSize--
        }
    },
}
</script>
<style lang="less" scoped>
    .news_detail{
        margin: 100px auto;
        width: 80%;
        .title{
            font-size: 32px;
            font-weight: 600;
            text-align: center;
            padding: 20px 0;
        }
        .detail{
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid lightgray;
            padding: 10px 0;
            .details{
                color: lightgray;
            }      
            .size{
                button{
                    width: 30px;
                    margin: 0 10px;
                }
            }      
        }
        .content{
            text-indent:2em;
            padding: 20px;
            text-align: justify;
            line-height: 30px;
        }
    }
</style>