<template>
  <div>
    <router-view></router-view>
    <!-- <Xheader /> -->
    <Xfooter />
    <!-- <XmainHome /> -->
  </div>
</template>
<script >
//底部组件
import Xfooter from "../components/Xfooter.vue";

export default {
  name: "app",
  components: {
    Xfooter
    // ,
    // Xheader,
    // XmainHome
  }
};
</script>