<template>
  <div class="box">
    <mt-swipe :auto="360000">
      <mt-swipe-item class="div2"></mt-swipe-item>
      <mt-swipe-item class="div3"></mt-swipe-item>
      <mt-swipe-item class="div4"></mt-swipe-item>
    </mt-swipe>
    <div class="box2">
      <div class="box2_1">
        <mt-button type="primary" class="box2_1_1">微信登录</mt-button>
      </div>
      <div class="box2_1">
        <mt-button type="danger" class="box2_1_2" @click="goToMenu">手机号码登录</mt-button>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  methods: {
    goToMenu() {
      //1,返回上一页
      //   this.$router.go(-1);
      //2,指定跳转路由的名字
      this.$router.replace({ name: "regIn" });
      //3,通过push进行跳转
      // this.$router.push('/login');
    }
  }
};
</script>
<style scoped>
.box {
  height: 100%;
  width: 100%;
  background: #f0f1eb;
  position: relative;
}
.div2 {
  background: url(../assets/2s.jpg) no-repeat;
  background-size: cover;
  background-position: 55%;
}
.div3 {
  background: url(../assets/3s.jpg) no-repeat;
  background-size: cover;
    background-position: 55%;
}
.div4 {
  background: url(../assets/4s.jpg) no-repeat;
  background-size: cover;
   background-position: 55%;
}
.box2 {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 4.62963rem;
  background: rgba(0, 0, 0, 0.2);
}
.box2_1 {
  width: 100%;
  height: 1.851852rem;
  display: flex;
  justify-content: center;
}
.box2_1_1 {
  width: 90%;
  height: 80%;
  align-self: center;
  font-size: 0.462963rem;
  background: #33cc66 url(../assets/weix3.png) no-repeat;
  background-position: 32%;
  background-size: 10%;
  border-radius: 0.185185rem;
}
.box2_2 {
  width: 100%;
  height: 1.851852rem;
  display: flex;
  justify-content: center;
}
.box2_1_2 {
  width: 90%;
  height: 80%;
  align-self: center;
  font-size: 0.462963rem;
  background: #f3ebed url(../assets/shouji.png) no-repeat;
  background-position: 27%;
  background-size: 8%;
  border: 1px solid #ccc;
  color: #555;
  border-radius: 0.185185rem;
}
</style>
