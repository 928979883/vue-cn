<template lang="">
    <div class="separator">
        <div class="title">{{title}}</div>
        <div class="split_line">
            <img src="../../assets/images/common/split_line.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    props: ['title']
}
</script>
<style lang="less" scoped>
    .title{
        text-align: center;
        font-size: 36px;
        font-weight: bold;
        letter-spacing: 1.8px;
    }
    .split_line{
        display: flex;
        justify-content: center;
        padding: 15px 0 50px 0;
        img{
            height: 20px;
        }
        img:hover {
            transform:scale(1);
        }
    }
</style>