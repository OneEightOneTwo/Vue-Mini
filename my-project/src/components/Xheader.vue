<template>
    <header>
      <div class="container">
        <section class="recall"></section>
        <section class="loglo">tantan</section>
        <section class="light"></section>
      </div>
        
    </header>
</template>

<style scoped>
header {
  width: 100%;
  display: flex;
  /* height: 2.5rem; */
  background: palegreen;
  height: 2.5rem;
  justify-content: space-between;
}
.container {
  width: 100%;
  margin: 0 0.6rem;
  display: flex;
}
.recall {
  flex: 1;
  display: flex;
  justify-content: space-between;
  background: url(../assets/recall.png) no-repeat center center;
  background-size: 1.2rem;
}
.loglo {
  flex: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  color: #ff3f00;
  font-size: 1.5rem;
}
.light {
  flex: 1;
  display: flex;
  justify-content: space-between;
  background: url(../assets/lightning.png) no-repeat center center;
  background-size: 1.2rem;
}
</style>

