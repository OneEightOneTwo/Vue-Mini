<template>
     <div class="header">
      <router-link class="header_left1" tag="div"  :to="{name:'discover'}">关注</router-link>
      <router-link class="header_left2" tag="div" :to="{name:'fujing'}">附近</router-link>
      <div class="header_right">发布</div>
    </div>
</template>
<style>
.header {
  width: 100%;
  height: 1.875rem;
  border-bottom: 0.027778rem solid #ccc;
}
.header_left1 {
  width: 2.777778rem;
  height: 100%;
  text-align: center;
  font-size: 0.625rem;
  color: #767676;
  line-height: 1.875rem;
  float: left;
  /* border: #ff4304 solid .013889rem; */
  margin-left: 0.555556rem;
}
.header_left2 {
  width: 2.777778rem;
  height: 100%;
  float: left;
  text-align: center;
  font-size: 0.625rem;
  color: #767676;
  line-height: 1.875rem;
}
.header_right {
  position: absolute;
  top: 0.486111rem;
  right: 0.277778rem;
  height: 1.111111rem;
  width: 2.083333rem;
  background: #ff4304 url(../assets/fa1.png) no-repeat;
  background-position: 88% 20%;
  background-size: 20%;
  color: #fff;
  font-size: 0.416667rem;
  text-align: center;
  border-radius: 0.277778rem;
  line-height: 1.111111rem;
}
.header_left1:hover {
  color: #f55a43;
  border-bottom: 3px solid #f55a43;
}
</style>

<script>
export default {
    methods:{
    }
}
</script>