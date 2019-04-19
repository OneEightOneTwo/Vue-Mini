<template>
    <footer id="footer">
        <div class="container">
            <section class="home"
            @click="toTab(index)"
            v-for="(t,index) in tabbar"
            :key="index"
            >
            <!-- <i style="width:1.3rem;height:1.3rem;background-size:1.3rem" :style="{'background':`url(${t.background}) no-repeat center center`}"
            ></i> -->
            <img :src="t.background" alt="">
            </section>
            
            <!-- <section class="chat"></section>
            <section class="discover"></section>
            <section class="set"></section> -->
        </div>
    </footer>
</template>
<style>
#footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  height: 2.5rem;
  /* background: #fff; */
}
.home {
  display: flex;
  flex: 1;
  /* background: url(../assets/footer_icon_03.png) no-repeat center center; */
  background-size: 1.3rem;
  justify-content: center;
  align-items: center;
}
.home img {
  width: 1.3rem;
  height: 1.3rem;
}
.sect {
  flex: 1;
  background-size: 1.3rem;
}
/* .chat {
  display: flex;
  flex: 1;
  background: url(../assets/footer_icon_02.png) no-repeat center center;
  background-size: 1.2rem;
}
.addchat {
  background: url(../assets/footer_icon_01.png) no-repeat center center;
}
.discover {
  display: flex;
  flex: 1;
  background: url(../assets/footer_icon_07.png) no-repeat center center;
  background-size: 1.2rem;
}
.set {
  display: flex;
  flex: 1;
  background: url(../assets/footer_icon_09.png) no-repeat center center;
  background-size: 1.2rem;
} */
</style>
<script>
// import Vue from "vue";
// import $ from "vue-jquery";

// import img from "../assets/footer_icon_03.png";
// Vue.use($);
export default {
  // name: "app",
  data() {
    return {
      // img,
      tabbar: [
        {
          title: "tantan",
          name: "tantan",
          background: require("../assets/footer_icon_03.png")
        },
        {
          title: "消息",
          name: "information",
          background: require("../assets/footer_icon_02.png")
        },
        {
          title: "朋友圈",
          name: "friendsCircle",
          background: require("../assets/footer_icon_07.png")
        },
        {
          title: "设置",
          name: "settingUp",
          background: require("../assets/footer_icon_09.png")
        }
      ],
      // 默认的下标值
      tab: 0
    };
  },
  methods: {
    //切换底部选项卡
    toTab(tab) {
      this.tab = tab;
      //获取当前的tab的name值
      let name = this.tabbar[tab].name;
      //跳路由
      this.$router.push({ name });
    }
  }
};
</script>


