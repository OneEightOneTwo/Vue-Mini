<template>
    <section class="main">
        <div class="cont">
            <div class="box">
                <section class="main_img">
                <img src="../assets/beautifulGirlPicture.jpg" alt="">
            </section>
            <section class="main_details">
                <p class="mg text">阿丽欧坡卡瑞,24</p>
                <p class="mg"><span class="details">射手座</span></p>
                <p class="mg"><span class="details">700m,27分钟前活跃</span></p>
            </section>
            </div>
        </div>
    </section>
</template>
<style scoped>
.main {
  overflow: hidden;
  width: 100%;
  display: flex;
}
.cont {
  width: 100%;
  margin: 0 0.6rem;
  flex-direction: column;
  display: flex;
}
.box {
  width: 100%;
  height: 30rem;
  flex-direction: column;
  border: 0.1rem solid #e5e5e5;
  border-radius: 1rem;
  overflow: hidden;
}
.main_img {
  flex: 2;
  display: flex;
  border-radius: 2rem;
}
img {
  width: 100%;
  height: 23.5rem;
}
/* .main_details {
  display: flex;
  flex: 1;
} */
.main_details .mg {
  margin-left: 1rem;
}
.main_details .text {
  font-size: 1.2rem;
  line-height: 3rem;
}
.main_details .details {
  color: #ababab;
  font-size: 0.8rem;
}
</style>

