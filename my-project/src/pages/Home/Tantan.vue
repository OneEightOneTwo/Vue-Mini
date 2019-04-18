<template>
  <div>
    <xheader />
    <XmainHome />
  </div>
</template>

<script>
// 头部组件
import Xheader from "../../components/Xheader.vue";
// 底部组件
// import Xfooter from "../components/Xfooter.vue";
import XmainHome from "../../components/XmainHome.vue";

export default {
  // name: "app",
  components: {
    Xheader,
    XmainHome
  }
};
</script>

<style>
</style>