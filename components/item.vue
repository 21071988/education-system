<template>
    <div class='item'>
      {{name}}
      <br>
      {{price}} руб
      <br>
      {{description}}
      <br>
      <img v-bind:src="'https://edu.slim.technology/images/products/'+img" v-bind:alt='img'>
    </div>
</template>

<script>
export default{
  props:{
     name:String,
     img:String,
      price:Number,
      description:String
  }
}
</script>
<style lang="less">
  img{
    width:100%;
  }
</style>
