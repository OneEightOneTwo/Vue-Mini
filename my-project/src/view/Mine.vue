<template>
    <div id="mine">
        <header>
            <span @click="setting">设置</span>
        </header>
        <main>
            <div class="chatHead"></div>
            <div class="username">
                <span class="name">大黄鸭呀,</span>
                <span class="age">&nbsp;20</span>
            </div>
            <div class="signature" @click="edit">
                用走心的签名打动对的人！点击编辑
                <i></i>
            </div>
            <div class="message">
                <i></i>
                <span>查看历史消息</span>
            </div>
            <div class="more">

            </div>
        </main>
    </div>
</template>

<script>
export default {
  methods: {
    setting() {
      this.$router.replace({ name: "setIn" });
    },
    edit() {
      this.$router.replace({ name: "infoIn" });
    }
  }
};
</script>

<style scoped>
/* 我的页面 */
#mine {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
/* 页头 */
header {
  width: 100%;
  height: 1.6rem;
  line-height: 1.6rem;
  margin-left: 0.666667rem;
  font-size: 20px;
  color: #000;
}
/* 主要内容 */
main {
  width: 100%;
  height: auto;
  overflow: hidden;
}
/* 头像 */
main .chatHead {
  width: 3.466667rem;
  height: 3.466667rem;
  margin: 0 auto;
  background: url(../assets/head.jpg) no-repeat center center;
  border-radius: 50%;
  background-size: cover;
}
/* 用户名 年龄 */
main .username {
  width: 100%;
  height: 1.333333rem;
  text-align: center;
  line-height: 1.333333rem;
  font-size: 20px;
  color: #000;
}
/* 个新签名 */
main .signature {
  width: 100%;
  height: .666667rem;
  margin: 0 auto;
  text-align: center;
  line-height: .666667rem;
  font-size: 16px;
  color: #b5b5b5;
}
.signature i{
    display: inline-block;
    width: .533333rem;
    height: .533333rem;
    margin-left: .2rem;
    background: url(../assets/edit.png) no-repeat center center;
    background-size: contain;
    vertical-align: bottom;
}
/* 查看历史消息 */
main .message{
    width: 6.466667rem;
    height: 1.466667rem;
    margin: .666667rem auto;
    line-height: 1.466667rem;
    background: #d8d8d8;
    border-radius: .2rem;
    color: #fff;
    font-size: 20px;
}
.message i{
    display: inline-block;
    width: .666667rem;
    height: .666667rem;
    background: url(../assets/message.png) no-repeat center center;
    background-size: contain;
    margin: 0 .733333rem;
    vertical-align: middle;
}
.message span{
    margin-left: -0.066667rem;
}
/* more 更多 */
main .more{
    width: 100%;
    height: 2.666667rem;
    margin: 0 auto;
}
</style>