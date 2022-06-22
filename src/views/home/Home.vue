<template lang="">
    <div class="home">
        <div class="banner"></div>

        <company_profile></company_profile>
        
        <notice></notice>

    </div>
</template>
<script>
import company_profile from '../../components/company_profile/company_profile'
import notice from '../../components/notice/notice'

export default {
    name:'Home',
    data() {
        return {

        }
    },
    components:{
        company_profile,
        notice,
    },
}
</script>
<style lang="less" scoped>
.home{
    .banner{
        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        background: url(../../assets/images/banner.jpg) left top / 100% no-repeat
    }
}
</style>