<template lang="">
    <div class="map_page">
        <div class="title">地图指引</div>

        <baidu-map   class="map" :center="map.center" :zoom="map.zoom" @ready="handler">
            <!--缩放-->
            <bm-navigation   anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation >
            <!--定位-->
            <bm-geolocation   anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation >
             <!--点-->
            <bm-marker   :position="map.center" :dragging="map.dragging" animation="BMAP_ANIMATION_DROP">
                <!--提示信息-->
                <bm-info-window   :show="map.show">
                    <div>地址：郧西县城关镇人民街229号"三费"大厅</div>
                    <div>邮政编号：442600</div>
                    <div>客服热线：0719-6227288</div>
                    <br>
                </bm-info-window >
                <!-- <bm-info-window   :show="map.show">地址：十堰市郧西县人民路帝景大厦西南侧约160米</bm-info-window > -->
            </bm-marker >
         </baidu-map >
    </div>
</template>
<script>
export default {
    name: "demo",
    data: () => ({
        map:{
            center: {lng: 110.428886, lat:32.99903},
            zoom: 18,
            show: true,
            dragging: true
        },
    }),
    methods: {
        handler ({BMap, map}) {
            let me = this;
            console.log(BMap, map)
            // 鼠标缩放
            map.enableScrollWheelZoom(true);
            // 点击事件获取经纬度
            map.addEventListener("click", function (e) {
                console.log(e.point.lng, e.point.lat)
            })
        }
    }
}
</script>
<style lang="less" scoped>
.map_page{
    width: 65%;
    margin: auto;
    .title{
        font-size: 26px;
        font-weight: 700;
        line-height: 32px;
        border-bottom: 3px solid #3FC9FE;
        widows: auto;
        display: inline-block;
        padding-bottom: 10px;
        margin-bottom: 50px;
    }
    .map{
        width: 100%;
        height: 500px;
    }
}
</style>