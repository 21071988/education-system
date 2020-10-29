<template>
  <div class="wrapper ">
    <h1 class="welcome__text__h1">
      Добро пожаловать в систему обучения сети кафе-пекарен "Хруст"
    </h1>
    <hr class="orange" />
    <p class="welcome__text">
      <br />
      Здесь вы узнаете, как работать с гостями
      <br />
      Что мы продаём
      <br />
      Как это делаем
      <br />
      Какой круассан самый вкусный
      <br />
      Как правильно варить кофе и многое другое
    </p>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="less">
.welcome__text {
  font-size: 20px;
  line-height: 35px;
}
@media screen and(max-width: 768px) {
  .welcome__text {
    font-size: 16px;
    line-height: 27px;
  }
  h1 {
    margin: 0;
  }
}
</style>
