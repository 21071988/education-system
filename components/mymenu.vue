<template>
  <div>
    <nuxt-link to="/about">Немного о нас</nuxt-link>
    <nuxt-link to="/values">Наши ценности</nuxt-link>
    <span class="link__look__alike">Функционал:</span>
    <nuxt-link to="/baristaalgorithm" class="active"
      >Алгоритм продавец-бариста</nuxt-link
    >
    <nuxt-link to="/merch" class="active">Выкладка</nuxt-link>
    <nuxt-link to="/guests">Работа с гостями</nuxt-link>
    <nuxt-link to="/sales">Скрипты продаж</nuxt-link>
    <nuxt-link to="/application">Оформление заявки</nuxt-link>
    <!-- <nuxt-link to="/products">Продукты</nuxt-link> -->
  </div>
</template>

<style lang="less" scoped>
@import "~@/assets/css/styles.less";
div {
  .column;
  .thefontbold;
  .trans4;
  margin-right: @m2;
  a {
    color: @grey;
  }
  span {
    margin-bottom: @m;
  }
}
</style>
