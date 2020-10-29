<template>
<div class='wrapper'>
  <mymenu />
</div>
</template>

<script>
import mymenu from '~/components/mymenu.vue'

export default {
  components: {
    mymenu
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/css/styles.less';

.upperMenu {
  .column;
}

@media screen and(max-width: 768px) {
  .wrapper {
    display: none;
  }
}
</style>
