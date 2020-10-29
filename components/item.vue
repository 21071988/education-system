<template>
    <div class='item'>
      {{name}}
      <br>
      {{price}}
      <br>
      {{description}}
      <br>
    </div>
</template>

<script>
export default{
  props:{
     name:String,
      price:Number,
      description:String
  }
}
</script>
