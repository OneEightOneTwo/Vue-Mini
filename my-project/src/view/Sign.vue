<template>
    <div id="sign">
        <header>
            <i @click="back"></i>
            <span>注册新用户</span>
        </header>
        <main>
            <p class="up"></p>
            <div class="ze name">
                <input type="text" placeholder="昵称">
            </div>
            <p class="down"></p>

            <p class="up"></p>
            <div class="ze year">
                <input type="text" placeholder="出生日期">
            </div>
            <p class="down"></p>

            <div class="ze sex">
                <span class="sexName">性别</span>
                <p>
                    <input type="radio" name="sex" value="女">
                    <span>女</span>
                </p>
                <p>
                    <input type="radio" name="sex" value="男">
                    <span>男</span>
                </p>
            </div>

            <p class="up"></p>
            <div class="ze pass">
                <input type="text" placeholder="设置密码(6-20位)">
            </div>
            <p class="down"></p>
            <input type="button" value="Sign in" class="signBtn">
        </main>
    </div>
</template>

<script>
export default {
    methods: {
    back() {
      this.$router.replace({ name: "regIn" });
    }
  }
}
</script>


<style scoped>
#sign {
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* background: url(../assets/41.jpg) no-repeat center center; */
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 页头 */
header {
  width: 100%;
  height: 1.6rem;
  /* background: rgba(0, 0, 0, 0.2); */
  background: #d34530;
  position: fixed;
  top: 0;
  left: 0;
}
header i {
  float: left;
  width: 0.666667rem;
  height: 0.666667rem;
  background: url(../assets/back.png) no-repeat center center;
  background-size: contain;
  margin: 0.466667rem;
}
header span {
  color: #fff;
  font-size: 18px;
  line-height: 1.6rem;
  padding-left: 0.266667rem;
}
/* 主要内容 */
main {
  width: 100%;
  height: auto;
  overflow: hidden;
  margin: 1.6rem auto;
  color: #666;
  font-size: 18px;
}
main .up,
main .down {
  width: 90%;
  height: 0.4rem;
  line-height: 0.4rem;
  color: #d34530;
  font-size: 16px;
  margin: 0.133333rem auto;
}
main .ze {
  width: 90%;
  height: 1.6rem;
  margin: 0 auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}
main .ze input {
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  outline: none;
  color: #333;
  font-size: 18px;
}
main .sex .sexName {
  float: left;
  height: 100%;
  /* line-height: 1.6rem; */
  vertical-align: middle;
}
main .sex {
  border: none;
}
main .sex p {
  float: right;
  width: .8rem;
  height: .8rem;
  margin-left: 1.6rem;
  margin-right: 0.266667rem;
  text-align: center;
  font-size: 16px;
}
/* main .sex p input {
  width: 0.8rem;
  height: 0.8rem;
  background: rgba(255, 255, 255, 1);
  border: 1px solid #333;
} */
main .sex p input[type="radio"] {
  width: .666667rem;
  height: .666667rem;
  background: rgba(255, 255, 255, 1);
  border: 1px solid #333;
}
/* 注册按钮 */
main .signBtn{
    display: block;
    width: 90%;
    height: 1.6rem;
    margin: .4rem auto;
    /* background: skyblue; */
    background: #d34530;
    border: none;
    outline: none;
    border-radius: 3px;
    font-size: 18px;
    word-spacing: .4rem;
    color: #fff;
}
</style>
