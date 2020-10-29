<template>
<div class="closing__button" @click="$store.commit('hideMenu')">
  <hr>
  <hr>
</div>
</template>

<script>

</script>

<style lang="less" scoped>
@import '~@/assets/css/styles.less';

.closing__button {
  hr {
    width: 25px;
    background: black;
    height: 1px;
    border: none;

    &:first-child {
      transform: rotateZ(45deg);
    }

    &:last-child {
      transform: rotateZ(-45deg) translate(6px, -6px)
    }
  }
}

@media screen and(max-width: 768px) {
  div {}

  hr {
    display: block;
  }

}
</style>
