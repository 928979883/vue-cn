<template lang="">
  <div>
    <div class="banner" >
      <!-- <img src="" alt=""> -->
      <div class="page_title">
        <div class="zh_title">公司简介</div>
        <div class="en_title">Company profile</div>
        <div class="line"></div>
      </div>
    </div>
    <div class="main">
        <div class="nav">
            <a @click="goAuchor('#content1')" href="javascript:void(0)">公司概况</a>
            <a @click="goAuchor('#content2')" href="javascript:void(0)">班子分工</a>
            <a @click="goAuchor('#content3')" href="javascript:void(0)">科室组成</a>
            <a @click="goAuchor('#content4')" href="javascript:void(0)">员工风采</a>
        </div>
        <cp_template2 id="content1"></cp_template2>

        <cp_template2 id="content2"></cp_template2>
        
        <div class="content3" id="content3">
            <separator :title="title1"></separator>
            <div class="content3_main">
                <ul>
                    <li>
                      <img src="../../assets/images/icon/kszc1.png" alt="">
                      <div class="title">生产安全保卫科</div>
                    </li>
                    <li>
                      <img src="../../assets/images/icon/kszc2.png" alt="">
                      <div class="title">财务科</div>
                    </li>
                    <li>
                      <img src="../../assets/images/icon/kszc3.png" alt="">
                      <div class="title">计量管理科</div>
                    </li>
                    <li>
                      <img src="../../assets/images/icon/kszc4.png" alt="">
                      <div class="title">稽查队</div>
                    </li>
                </ul>
                <ul>
                  <li>
                    <img src="../../assets/images/icon/kszc5.png" alt="">
                    <div class="title">安装维修公司</div>
                  </li>
                  <li>
                    <img src="../../assets/images/icon/kszc6.png" alt="">
                    <div class="title">经营科</div>
                  </li>
                  <li>
                    <img src="../../assets/images/icon/kszc7.png" alt="">
                    <div class="title">用水管理科</div>
                  </li>
                  <li>
                    <img src="../../assets/images/icon/kszc8.png" alt="">
                    <div class="title">办公室</div>
                  </li>
              </ul>
            </div>
        </div>
        <div class="content4" id="content4">
            <separator :title="title2"></separator>
            <div class="indicator">
              <img src="../../assets/images/icon/prev.png" alt="" class="icon" @click="prev">
              <img src="../../assets/images/icon/next.png" alt="" class="icon" @click="next">
            </div>
            <div class="lunbo">
              <el-carousel 
                indicator-position="none" 
                height="500px"
                :autoplay="false" 
                @change="((index, next) => {change(index, next)})"
                ref="change"
                >
                <el-carousel-item v-for="item in imgList" :key="item.index">
                    <img :src="item.url" alt="">
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="images" >
              <div class="item" v-for="(item,index) in imgList" >
                <img :src="item.url" alt="" :class="[select == index ? 'selected':'']">
              </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import cp_template2 from '../../components/company_profile/cp_template2'
import separator from '@/components/separator/separator.vue';

export default {
  data() {
    return {
        select:'0',
        title1:'科室组成',
        title2:'员工风采',
        imgList:[
                {
                    url:require("../../assets/images/page/ygfc1.jpg"),
                    title:'安装维修公司在天河金街管道安装作业'
                },
                {
                    url:require("../../assets/images/page/ygfc2.jpg"),
                    title:'公司专题部署高考/中考期间供水保障工作'
                },
                {
                    url:require("../../assets/images/page/ygfc3.jpg"),
                    title:'化验人员在郧西一中抽检水样'
                },
                {
                    url:require("../../assets/images/page/ygfc4.jpg"),
                    title:'公司组织经营科全体员工参加反电信诈骗培训活动'
                },
                {
                    url:require("../../assets/images/page/ygfc5.jpg"),
                    title:'2021.8.29牵牛大道1000mm主供水管道因山体滑坡断裂抢修现场'
                },
            ]
    };
  },
  mounted() {
    window.vue = this
    var value = Number(this.$route.query.id);
    var id = "#content" + (value + 1);
    this.goAuchor(id);
  },
  methods: {
    prev(){
      this.$refs.change.prev()
    },
    next(){
      this.$refs.change.next()
    },
    goAuchor(id) {
      document.querySelector(id).scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    },
    change (index, next) {
      this.select=index
      console.log('index'+index, 'next'+next);
    }
  },
  components: {
    separator,
    cp_template2,
  },
};
</script>
<style lang="less" scoped>
.selected{
  padding: 30px !important;
}
.banner {
  background-color: #005fa3;
  margin-top: 80px;
  width: 100%;
  height: 500px;
  position: relative;
  img {
    width: 100%;
  }
  .page_title {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    text-align: center;
    .zh_title {
      font-size: 66px;
      font-weight: 700;
      color: #ffffff;
      line-height: 95px;
      letter-spacing: 6.6px;
    }
    .en_title {
      font-size: 18px;
      color: #ffffff;
      line-height: 24px;
      letter-spacing: 3.96px;
    }
    .line {
      margin: 30px auto;
      width: 80px;
      height: 6px;
      background: #ffffff;
    }
  }
}
.main {
    padding: 50px 0;
    .nav {
        margin: auto;
        width: 65%;
        border-bottom: 1px lightgray solid;
        font-size: 20px;
        text-align: left;
        height: 60px;
        a {
        line-height: 60px;
        padding-bottom: 12px;
        margin-right: 30px;
        transition: all 0.4s;
        color: #666;
        }
        a:hover {
        font-size: 26px;
        font-weight: 600;
        color: #005fa3;
        transition: all 0.4s;
        border-bottom: 2px solid #005fa3;
        }
    }
    .content3 {
        width: 65%;
        margin: auto;
        .content3_main{
          ul{
            margin-bottom: 100px;
            display: flex;
            justify-content: center;
            li{
              width: 20%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              .title{
                font-size: 16px;
                line-height: 32px;
              }
              img{
                width: 50px;
              }
            }
          }
        }
    }
    .content4 {
        position: relative;
        width: 65%;
        padding: 30px 0;
        margin: auto;
        .indicator{
            width: 100%;
            display: flex;
            justify-content: space-between;
            position: absolute;
            top: 450px;
            left: 50%;
            transform: translate(-50%, -50%);
            .icon{
              width: 50px;
            }
          }
        .lunbo{
          padding: 30px 0;
          width: 70%;
          margin: auto;

          img{
            width: 100%;
            height: 100%;
          }

          .profile{
                font-size: 14px;
                position: absolute;
                bottom: 0px;
                color:#666;
            }
        }
        .images{
          display: flex;
          justify-content: center;
          .item{
            padding: 20px;
              img{
                width: 180px;
                transition:all .4s;
              }
          }
        }
    }
}
</style>
