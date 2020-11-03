<template>
  <div class='wrapper'>
    <h1>this is products base</h1>
    <div class="products">
      <!-- {{ info}} -->
      <item v-for="item in items" :key="item.id" :name="item.name" :price="item.price" :description="item .description"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import item from '~/components/item.vue'

export default {
  components: {
    item
  },
  data() {
    return {
      items: null
    };
  },
  mounted() {
    axios
      .get('https://edu.slim.technology/getbase.php')
      .then(response => (this.items = response.data));
  }
  
}
</script>

<style>
.products{
  display:grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap:20px;
}
</style>
