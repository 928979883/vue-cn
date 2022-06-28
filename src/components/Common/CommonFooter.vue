<template lang="">
    <div class="CommonFooter" >
        <div class="line"></div>

        <div class="top" :class="[up ==true?'up_active':'']">
            <router-link to="contact_us">
                <img src="../../assets/images/common/logo2.png" alt="">
                <div class="aboutus">郧西县丰源供水有限公司</div>
            </router-link>
            <div class="contact" @click="open">联系我们 >></div>
        </div>
        
        <div class="main" :class="[up ==true?'up_active':'']">
            <div class="left">
                <div>服务热线：<div class="tel">0719-6227288</div></div>
                <div class="link">
                    <p>友情链接：</p>
                    <select v-model="selected" @change="getTypeSelected" class="select">
                        <option value="">--请选择--</option>
                        <option :value="types.id" v-for="types in typeList">{{types.name}}</option>  
                    </select>
                </div>

            </div>

            <div class="middle">
                <div class="info">
                    <ul>
                        <li>公司地址：郧西县城关镇人民街229号"三费"大厅</li>
                    </ul>
                    <ul>
                        <li>办公（投诉）电话：0719-6234820</li>
                    </ul>
                    <ul>
                        <li>邮政编码：442600</li>
                    </ul>
                    <ul>
                        <li>电子邮箱：442695648@qq.com</li>
                        <li>公司网址：www.yxfygs001.com</li>
                    </ul>
                </div>
            </div>

            <div class="right">
                <img src="../../assets/images/common/ewm.jpg" alt="">
                <div>微信公众号</div>
            </div>

        </div>

        <div class="copyright">Copyright XXXXXX公司 版权所有 XXXXXXXXXXX 公网安备XXXXXXXXXXXXX号  </div>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            up:false,
            typeList:[
                {id:1,name:'鄂汇办',},
                {id:2,name:'县人民政府网',},
            ],
            selected:''
        }
    },
    mounted() {
        window.vue = this
        window.addEventListener('scroll',this.scrollhandle)
    },
    methods: {
        open() {
            this.$notify({
                title: '热线电话',
                message: '0719-6227288',
                position: 'bottom-right'
            });
        },
        scrollhandle(){
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            let total = window.screen.availHeight+scrollTop
            // 整个页面的高度
            let totop = document.body.scrollHeight-10
            if(total>totop){
                this.up=true;
            }
        },
        getTypeSelected(){
            if(this.selected==1){
                window.open('http://zwfw.hubei.gov.cn/')
            }else{
                window.open('http://www.yunxi.gov.cn/')
            }
            console.log(this.selected)
        },
    },
    components:{
    },
}
</script>
<style scoped>
    option{
        text-align: center;
    }
</style>
<style lang="less" scoped>
.CommonFooter{
    overflow: hidden;
    background-color: #F2F1F1;
    position: relative;
    padding-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 350px;
    font-weight: 100;
    .line{
        position: absolute;
        top: 0;
        background-color: #346BCF;
        height: 8px;
        width: 100%;
    }
    .top{
        width: 65%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid lightgray; 
        .contact{
            font-size: 18px;
            cursor: pointer;
            padding: 10px 0;
        }
        a{
            display: flex;
            align-items: center;
            img{
                width: 50px;
                padding: 10px;
            }
            .aboutus{
                font-size: 18px;
                font-weight: 600;
                cursor: pointer;
                padding: 10px 0;
            }
        }
    }
    .main{
        padding: 20px 0;
        display: flex;
        align-items: center;
        width: 65%;
        justify-content: space-between;
        position: relative;
        .left{
            width: 20%;
            text-align: initial;
            .tel{
                font-size: 30px;
                padding: 5px 0 20px 0;
                font-weight: 600;
            }
            .link{
                padding: 5px 0;
                display: flex;
                align-items: center;
                .select{
                    width: 150px;
                    height: 30px;
                    border-radius: 5px;
                }
            }
        }
        .middle{
            width: 45%;
            .info{
                height: 100%;
                ul{
                    display: flex;
                    justify-content: space-between;
                    padding: 5px 0;
                    li{
                        display: flex;
                    }
                }
            }

        }
        .right{
            text-align: center;
            font-size: 12px;
            line-height: 25px;
            letter-spacing: 4.2px;
            img{
                width:150px;
                height:150px;
            }
        }
    }
    .copyright{
        position: absolute;
        bottom: 10px;
        font-size: 14px;
        color: #939292;
        left: 50%;
        transform:translate(-50%,-50%);
    }
}
</style>