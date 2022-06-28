<template lang="">
    <div class="banner" >
        <img :src='img' alt="">
        <div class="page_title">
            <div class="zh_title">{{zh_title}}</div>
            <div class="en_title">{{en_title}}</div>
            <div class="line"></div>
        </div>
      </div>
</template>
<script>
export default {
    props: [
        'zh_title',
        'en_title',
        'img',
    ],
    data() {
        return {
        };
    },
}
</script>
<style lang="less" scoped>
.banner {
  background-color: #005fa3;
  margin-top: 80px;
  width: 100%;
  height: 500px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  img:hover {
    transform:scale(1);
  }
  .page_title {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    text-align: center;
    .zh_title {
      text-shadow: 1px 1px 10px rgba(0,0,0,0.75);
      font-size: 50px;
      font-weight: 700;
      color: #ffffff;
      line-height: 95px;
      letter-spacing: 6.6px;
    }
    .en_title {
      text-shadow: 1px 1px 10px rgba(0,0,0,0.75);
      font-size: 16px;
      color: #ffffff;
      line-height: 24px;
      letter-spacing: 3.96px;
    }
    .line {
      margin: 20px auto;
      width: 80px;
      height: 6px;
      background: #ffffff;
    }
  }
}  
</style>