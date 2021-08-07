<template>
  <div class="box">
    <div
      class="wind-vane-icon"
      :style="{ transform: `rotate(${rotateDeg}deg)` }"
    ></div>
  </div>
</template>

<script>
import * as Api from '@/api/windVane'
export default {
  name: 'WindVane',
  data() {
    return {
      rotateDeg: 0,
    }
  },
  created() {
    setInterval(() => {
      Api.getwindDirection().then((res) => {
        this.rotateDeg = res['windDirection']
      })
    }, 2000)
  },
}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.wind-vane-icon {
  transform-origin: 60px 75px;
  position: relative;
  width: 0;
  height: 0;
  border-right: 60px solid transparent;
  border-bottom: 120px solid skyblue;
  border-left: 60px solid transparent;
}
.wind-vane-icon::before {
  content: '';
  position: absolute;
  left: -75px;
  height: 150px;
  width: 150px;
  background-color: transparent;
  border-style: solid;
  border-color: black;
  border-width: 1px;
  border-radius: 50%;
}
.wind-vane-icon::after {
  content: '';
  position: absolute;
  top: 100px;
  left: -60px;
  border-right: 60px solid transparent;
  border-bottom: 20px solid white;
  border-left: 60px solid transparent;
}
</style>
