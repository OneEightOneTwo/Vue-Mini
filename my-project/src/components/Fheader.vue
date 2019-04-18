<template>
    <div class="head">
        <div class="container">
            <div class="infor">消息</div>
            <div class="search">
                <img src="../assets/search.png" alt="">
            </div>
        </div>
    </div>
</template>
<style>
.head {
  width: 100%;
  height: 3rem;
  display: flex;
  border-bottom: 0.08rem solid #ececec;
}
.infor {
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  color: #ff4e25;
}
.search {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
}
.search img {
  width: 1.6rem;
  height: 1.6rem;
}
</style>
