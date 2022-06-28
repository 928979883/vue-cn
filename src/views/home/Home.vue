<template lang="">
    <div class="home">
        
        <banner_home></banner_home>

        <cp_template1></cp_template1>
        
        <ntc_template1></ntc_template1>

    </div>
</template>
<script>
import cp_template1 from '@/components/company_profile/cp_template1.vue'
import ntc_template1 from '@/components/notice/ntc_template1'
import banner_home from '@/components/banner/banner_home.vue'
export default {
    name:'Home',
    data() {
        return {
        }
    },
    components:{
        cp_template1,
        ntc_template1,
        banner_home,
    },
}
</script>
<style lang="less" scoped>
.home{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>