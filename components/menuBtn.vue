<template>
<div class="menu__burder" @click="$store.commit('showMenu')">
  <hr>
  <hr>
  <hr>
</div>
</template>

<script>

</script>

<style lang="less" scoped>
@import '~@/assets/css/styles.less';

hr {
  width: 25px;
  height: 2px;
  border: none;
  background: @bl;
  margin: 5px;
  display: none;
}

@media screen and(max-width: 768px) {
  hr {
    display: block;
  }

}
</style>
