<template>
<div class="top">
  <menubtn />
  <logo />
</div>
</template>

<script>
import logo from '~/components/Logo.vue'
import menubtn from '~/components/menuBtn.vue'

export default {
  components: {
    logo,
    menubtn
  },
  methods: {
    showMenu() {
      console.log('show');
    }
  }
}
</script>

<style lang="less">
@import '~@/assets/css/styles.less';

.top {
  padding: 40px 0;
  .flex;
  justify-content: space-between;
}

svg {
  width: 100px;
  margin: 40px;
}

@media screen and(max-width: 768px) {
  .top {
    width: 100%;
    text-align: right;
    padding: 20px 0;
  }

  svg {
    margin: 0;
  }
}
</style>
