<template>
  <div class="dox">
   <XdiscoverH />
    <div class="main">
    <!--  大盒子   -->
      <div class="main_box">
          <!-- 头部 -->
        <div class="main_box_top">
          <div class="main_box_top_ltfe">
              <!-- 头像 -->
            <img src="../assets/1s.jpg" alt>
          </div>
          <div class="main_box_top_ltfe2">
              <!-- 姓名 -->
            <div class="div1">Raffa</div>
            <div class="div2">
                <!-- 性别 -->
              <img src="../assets/xin.png" alt>
              <!-- 年龄 -->
              <span>22</span>
            </div>
          </div>
        </div>
        <!-- 头部结束 -->
        <!-- 发布内容盒子 -->
        <div class="con">
          <p class="cp1">我换头像你点赞，人生路上常相伴</p>
          <div class="con_img"><img src="../assets/1s.jpg" alt=""></div>
          <div class="con_tian">
              <span>2天前</span>
              <span>6.5km</span>
          </div>
          <div class="con_xin">
              <div class="con_xin1">
                  <img src="../assets/zan.png" alt=""><i>10</i>
              </div>
               <div class="con_xin1">
                   <img src="../assets/xinxi.png" alt=""><i>1</i>
               </div>
               <div class="con_xin2">
                   <img src="../assets/dian2.png" alt="">
               </div>
          </div>
        </div>
        <!--发布内容盒子结束  -->
      </div>

       <div class="main_box">
        <div class="main_box_top">
          <div class="main_box_top_ltfe">
            <img src="../assets/1.jpg" alt>
          </div>
          <div class="main_box_top_ltfe2">
            <div class="div1">Raffa</div>
            <div class="div2">
              <img src="../assets/xin.png" alt>
              <span>22</span>
            </div>
          </div>
        </div>
        <div class="con">
          <p class="cp1">我换头像点赞，人生路上常相伴</p>
          <div class="con_img"><img src="../assets/1.jpg" alt=""></div>
          <div class="con_tian">
              <span>2天前</span>
              <span>6.5km</span>
          </div>
          <div class="con_xin">
              <div class="con_xin1">
                  <img src="../assets/zan.png" alt=""><i>10</i>
              </div>
               <div class="con_xin1">
                   <img src="../assets/xinxi.png" alt=""><i>1</i>
               </div>
               <div class="con_xin2">
                   <img src="../assets/dian2.png" alt="">
               </div>
          </div>
        </div>
      </div>

      
       <div class="main_box">
        <div class="main_box_top">
          <div class="main_box_top_ltfe">
            <img src="../assets/11.jpg" alt>
          </div>
          <div class="main_box_top_ltfe2">
            <div class="div1">Raffa</div>
            <div class="div2">
              <img src="../assets/xin.png" alt>
              <span>22</span>
            </div>
          </div>
        </div>
        <div class="con">
          <p class="cp1">我换头像点赞，人生路上常相伴</p>
          <div class="con_img"><img src="../assets/11.jpg" alt=""></div>
          <div class="con_tian">
              <span>2天前</span>
              <span>6.5km</span>
          </div>
          <div class="con_xin">
              <div class="con_xin1">
                  <img src="../assets/zan.png" alt=""><i>10</i>
              </div>
               <div class="con_xin1">
                   <img src="../assets/xinxi.png" alt=""><i>1</i>
               </div>
               <div class="con_xin2">
                   <img src="../assets/dian2.png" alt="">
               </div>
          </div>
        </div>
      </div>
    </div>
    <Xfooter />
  </div>
</template>
<style scoped>
.dox {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.main {
  width: 100%;
  flex: 1;
  overflow: auto;
}
.main_box {
  width: 100%;
  height:auto;
  /* background: palegreen; */
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.main_box_top {
  height: 1.875rem;
  width: 100%;
  margin-top: 0.138889rem;
}
.main_box_top_ltfe {
  width: 15%;
  height: 80%;
  background: paleturquoise;
  border-radius: 50%;
  margin-left: 0.486111rem;
  float: left;
}
.main_box_top_ltfe img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.main_box_top_ltfe2 {
  width: 20%;
  height: 100%;
  float: left;
  margin-left: 0.138889rem;
  display: flex;
  flex-direction: column;
}
.main_box_top_ltfe2 .div1 {
  width: 100%;
  height: 60%;
  font-size: 0.555556rem;
  font-weight: bold;
  line-height: 1.111111rem;
  color: #767676;
}
.main_box_top_ltfe2 .div2 {
  width: 70%;
  height: 30%;
  border-radius: 0.277778rem;
  background: #ff4c98;

  color: #fff;
  text-align: center;
  line-height: 0.486111rem;
}
.main_box_top_ltfe2 .div2 img {
  width: 30%;
  height: 50%;
}
.con {
  width: 100%;
  height: auto;
  padding: 0.277778rem .277778rem 0.416667rem 2.083333rem;
  box-sizing: border-box;
  /* margin-left: 15%; */
  border-bottom:1px solid #ccc; 

}
.cp1 {
  font-size: 0.555556rem;
  color: #000;
  margin-bottom:.277778rem ;
}
.con_img{
    width: 70%;
    height:4.861111rem;
    background: pink;
}
.con_img img{
    width: 100%;
    height: 100%;
}
.con_tian{
    width: 6.944444rem;
    height:.972222rem;
    display: flex;
    justify-content:flex-start;
}
.con_tian span{
    width:1.666667rem;
    height: 100%;
   display: block;
   line-height:.972222rem ;
   /* text-align: center; */
   font-size: .486111rem;
   color: #afb8c1;
}
.con_xin{
    width:7.544444rem;
    height: .894444rem;
    /* display: flex;
    justify-content:flex-start; */
    margin-top:.138889rem;
}
.con_xin1{
    width:1.988889rem;
    height: 100%;
    margin-right: .069444rem;
    float: left;
}
.con_xin1 img{
    width: 50%;
    height:60%;
    margin-right: .069444rem
}
.con_xin1 i{
    font-style: normal;
    font-size: .416667rem;
}
.con_xin2{
    float: right;
    width:.694444rem;
    height: 100%;
}
.con_xin2 img{
    width: 80%;
    height: 80%;
}
.footer {
  width: 100%;
  height: 1.875rem;
  background: paleturquoise;
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
<script >
import XdiscoverH from '../components/XdiscoverH'
import Xfooter from '../components/Xfooter'
export default {
     components:{
         XdiscoverH,
         Xfooter
     }
};
</script>