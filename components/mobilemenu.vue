<template>
<div class="mobile__menu" v-bind:class="{show__menu : $store.state.showMenu,hide__menu : $store.state.hideMenu }">
  <div @click="$store.commit('hideMenu')">
    <mymenu />
  </div>

  <closingbtn />
</div>
</template>

<script>
import mymenu from '~/components/mymenu.vue'
import closingbtn from '~/components/closingBtn.vue'

export default {
  components: {
    mymenu,
    closingbtn
  }
}
</script>

<style lang="less">
@import '~@/assets/css/styles.less';

.mobile__menu {
  display: none;
  justify-content: space-between;
  width: calc(100% - @m2 * 2);
  position: absolute;
  left: -1000px;
  top: 0;
  background: #ffffff;
  height: 100vh;
  overflow: hidden;
  padding: @m2;

  div {
    &:first-child {
      margin-top: @m3;
    }

    a,
    span {
      margin-bottom: @m  !important;
    }

  }
}

.show__menu {
  left: 0;
}

@media screen and(max-width: 768px) {
  .mobile__menu {
    display: flex;
  }
}
</style>
