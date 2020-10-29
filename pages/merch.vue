<template>
<div class='wrapper'>
  <h1>Выкладка</h1>
  <hr class="orange">
  <br>
  <div class="merch">
    <img src="~@/assets/images/merch/1.jpg" alt="">
    <img src="~@/assets/images/merch/2.jpg" alt="">
    <img src="~@/assets/images/merch/3.jpg" alt="">
    <img src="~@/assets/images/merch/4.jpg" alt="">
    <img src="~@/assets/images/merch/5.jpg" alt="">
    <img src="~@/assets/images/merch/6.jpg" alt="">
    <img src="~@/assets/images/merch/7.jpg" alt="">
    <img src="~@/assets/images/merch/8.jpg" alt="">
    <img src="~@/assets/images/merch/9.jpg" alt="">
  </div>
</div>
</template>

<script>
export default {
  components: {

  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/css/styles.less';

@media screen and(max-width: 768px) {
  img {
    width: calc(100vw - 40px);
    margin-bottom: 15px;
  }
}
</style>
