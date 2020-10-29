<template>
<div class='default__layout'>
  <Top />
  <div class="container">

    <mobilemenu />
    <desktopmenu />
    <div class="body__info">
      <nuxt />
    </div>
  </div>
</div>
</template>

<script>
import desktopmenu from '~/components/desktopmenu.vue'
import mobilemenu from '~/components/mobilemenu.vue'
import Top from '~/components/Top.vue'

export default {
  components: {
    desktopmenu,
    mobilemenu,
    Top
  }
}
</script>

<style lang="less">
@import '~@/assets/css/styles.less';

.mobile__menu {
  display: none;
}

.default__layout {
  width: calc(100vw - 80px);
}

header {
  width: 100%;

  svg {
    width: 100%;
  }
}

@media screen and(max-width: 768px) {
  .mobile__menu {
    .flex;
  }

  .default__layout {
    width: calc(100vw - 40px);
    padding: 0 @m;
  }
}
</style>
