<template>
    <div id="reg">
        <main>
            <div class="add">
                <p>
                    <i></i>
                </p>
                <span>Enter your phone number</span>
            </div>
            <div class="tel">
                <i></i>
                <input type="text" value="" placeholder="请输入手机号码">
            </div>
            <div class="vCode">
                <i></i>
                <input type="text" value="" placeholder="请输入手机验证码">
            </div>
            <input type="button" value="登录" id="login" class="btn">
            <input type="button" value="注册" id="sign" class="btn" @click="dump">
        </main>
    </div>
</template>

<script>
export default {
  methods: {
    dump() {
      this.$router.replace({ name: "signIn" });
    }
  }
};
</script>


<style scoped>

#reg {
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* background: url(../assets/5.jpg) no-repeat center center; */
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 主要内容 */
main {
  width: 90%;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
}
/* 用户图像 */
.add {
  width: 100%;
  height: auto;
  text-align: center;
  color: rgba(0, 0, 0, 0.3);
}
.add p {
  width: 2.666667rem;
  height: 2.666667rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  margin-bottom: 0.133333rem;
}
.add i {
  display: block;
  width: 1.6rem;
  height: 1.6rem;
  margin: 0 auto;
  background-image: url(../assets/add.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
}
/* 电话号码 */
.tel,
.vCode {
  width: 90%;
  height: 1.333333rem;
  margin: 1.066667rem auto;
  margin-bottom: 0.533333rem;
  /* background: rgba(0, 0, 0, 0.3); */
  border-radius: 3px;
  border-bottom: 1px solid #333;
}
.vCode {
  margin-top: 0;
}
main i {
  float: left;
  width: 0.8rem;
  height: 0.8rem;
  background: url(../assets/shouji.png) no-repeat center center;
  background-size: contain;
  margin: 0.266667rem;
}
.vCode i {
  float: left;
  width: 0.8rem;
  height: 0.8rem;
  background: url(../assets/4.png) no-repeat center center;
  background-size: contain;
  margin: 0.266667rem;
}
.tel input,
.vCode input {
  float: right;
  width: 6.533333rem;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  font-size: 16px;
  /* color: #fff; */
  color: #333;
}
/* main input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.7);
  color: #333;
} */
/* 登录按钮 */
.btn {
  float: left;
  width: 40%;
  height: 1.333333rem;
  /* margin: 0 auto; */
  /* background: skyblue; */
  background: #d34530;
  font-size: 16px;
  word-spacing: 15px;
  color: rgba(255, 255, 255, 0.7);
  outline: none;
  border: none;
  border-radius: 3px;
}
.btn:hover{
  color: rgba(255, 255, 255, 1);
}
#login {
  margin: 0 0.6rem;
}
.copy {
  width: 100%;
  color: #fff;
  text-align: center;
  margin-top: 2.133333rem;
}
</style>