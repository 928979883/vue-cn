<template lang="">
    <div class="water">
        <div class="water-1"> </div>
        <div class="water-2"></div>
        <div class="line"></div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>

.water {
  position: absolute;
  bottom: 20px;
  height: 60px;
  width: 100%;
}

.line {
    position: absolute;
    left: 0;
    bottom: -20px;
    width: 100%;
    height: 20px;
    background: #125a99;
}
.water-1 {
  background: url("../../assets/images/wave_01.png") repeat-x;
  background-size: 600px;
  -webkit-animation: move_wave 30s linear infinite;
  animation: move_wave 30s linear infinite;
}

.water-2 {
  top: 5px;
  background: url("../../assets/images/wave_02.png") repeat-x;
  background-size: 600px;
  -webkit-animation: move_wave 30s linear infinite;
  animation: move_wave 30s linear infinite;
}

.water-1, .water-2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 60px;
    background-repeat: repeat no-repeat;
    background-position: 0 bottom;
    transform-origin: center bottom;
    background-size: 50% 60px;
    animation: move_wave 32s linear infinite;
}
@keyframes move_wave {
  0% {
    transform: translateX(0) translateZ(0) scaleY(1);
  }
  50% {
    transform: translateX(-25%) translateZ(0) scaleY(0.55);
}
  100% {
    transform: translateX(-50%) translateZ(0) scaleY(1);
  }
}

@keyframes wave-animation-1 {
  0% {
    transform: translateX(0) translateZ(0) scaleY(1);
  }
  50% {
    transform: translateX(-25%) translateZ(0) scaleY(0.55);
}
  100% {
    transform: translateX(-50%) translateZ(0) scaleY(1);
  }
}
    
</style>