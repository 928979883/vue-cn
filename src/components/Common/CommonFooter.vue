<template lang="">
    <div class="CommonFooter" id                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      :class="[up ==true?'active1':'']">
        <div class="top">
            <div class="aboutus">关于我们</div>
            <div class="contact">联系我们</div>
        </div>
        
        <div class="main">
            <div class="left">
                <div class="tel">服务热线：XXXXXXXXXXX</div>
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
                        <li>公司地址：</li>
                    </ul>
                    <ul>
                        <li>办公（投诉）电话：6227288 6106859</li>
                        <li>电子邮箱：442695648@qq.com</li>
                    </ul>
                    <ul>
                        <li>邮政编码：442600</li>
                        <li>公司网址：www.**********.com</li>
                    </ul>
                </div>
            </div>

            <div class="right">
                <img src="../../assets/images/ewm.jpg" alt="">
            </div>

        </div>

        <div class="copyright">Copyright XXXXXX公司 版权所有 XXXXXXXXXXX 公网安备XXXXXXXXXXXXX号  </div>
        
        <wave></wave>

    </div>
</template>
<script>
import wave from '../Common/Wave'
import $ from 'jquery'

export default {
    data() {
        return {
            up:false,
            typeList:[
                {id:1,name:'网站一',},
                {id:2,name:'网站二',},
            ],
            selected:''
        }
    },
    mounted() {
        window.vue = this
        window.addEventListener('scroll',this.scrollhandle)
    },
    methods: {
        scrollhandle(){
            let osTop =document.documentElement.scrollTop || document.body.scrollTop;
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            let total = window.screen.availHeight+scrollTop
            let totop = document.body.scrollHeight-10
            if(total>totop){
                this.up=true;
            }
        },
        getTypeSelected(){
            if(this.selected==1){
                window.open('http://www.baidu.com')
            }else{
                window.open('http://www.baidu.com')
            }
            console.log(this.selected)
        },
    },
    components:{
        wave,
    },
}
</script>
<style scoped>
    option{
        text-align: center;
    }
</style>
<style lang="less" scoped>
/* 渐显动画 */
@keyframes wrapper-gradient {
    0% {transform: translateY(100%);}
    100% {transform: translateY(0);}
}
.active1{
    visibility: visible !important;
    animation: wrapper-gradient .8s linear;
}
.CommonFooter{
    visibility:hidden;
    position: relative;
    padding-bottom: 65px;
    padding-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .copyright{
        margin: auto;
        width: 100%;
    }
    .top{
        width: 80%;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid white; 
        .contact{
            padding: 10px 0;
        }
        .aboutus{
            padding: 10px 0;
        }
    }
    .main{
        padding: 20px 0;
        display: flex;
        align-items: center;
        width: 80%;
        justify-content: space-around;
        position: relative;
        .left{
            width: 25%;
            text-align: initial;
            .tel{
                padding: 5px 0;
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
            width: 55%;
            .info{
                height: 100%;
                ul{
                    display: flex;
                    justify-content: space-between;
                    padding: 10px 0;
                    li{
                        display: flex;
                    }
                }
            }

        }
        .right{
            width:200px;
            height:200px;
            overflow:hidden;
            img{
                width:200px;
                height:200px;
                transition:all .4s;
                -moz-transition:all .4s;
                -webkit-transition:all .4s;
                -o-transition:all .4s;
            }
        }
        .right img:hover {
            transform:scale(1.2);
        }
        .copyright{
                position: absolute;
                bottom: 0;
            }
    }
}
</style>