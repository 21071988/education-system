<template>
<div class='wrapper'>
  <h1>Новый продукт</h1>
  <hr class="orange">
  <br>
    <div class="product__form__full">
      <div class='product__form'>
        <input v-model='newproduct.name' placeholder="название продукта">
        <input v-model='newproduct.price' placeholder="цена">
        <input v-model='newproduct.description' placeholder="описание">
        <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
        <div class='send__product' @click='upload'>Отправить данные</div>
      </div>
      <div class="product__form__summary">
        <b>Название</b>
        {{newproduct.name}}
        <br>
        <br>
        <b>Цена</b>
        <br>
        {{newproduct.price}} 'руб'
        <br>
        <br>
        <b>Описание</b>
        {{newproduct.description}}
        <br>
        <br>
        <b>Фото</b>
        <img v-bind:src="'https://edu.slim.technology/images/products/'+this.file.name" alt="">
      </div>
      
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data:function() {
    return{
      file:'',
      newproduct:{
        name:'',
        img:'',
        price:'',
        description:''
      }
    }
  },
  methods: {
    handleFileUpload(){
        this.file = this.$refs.file.files[0];
      },

    upload() {
      let formData = new FormData()
      formData.append('name', this.newproduct.name);
      formData.append('file', this.file);
      formData.append('img', this.file.name);
      formData.append('price', this.newproduct.price);
      formData.append('description', this.newproduct.description);
      axios.post('https://edu.slim.technology/newitem.php', formData,{
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
        .then(response => console.log('success item'))
    }
  }
  
}
</script>

<style lang="less">
@import '~@/assets/css/styles.less';
.product__form__full{
  .flex;
}
#file{
  border:0;
}
.product__form{
  .column;
  width:30%;
  margin-bottom: @m2;
  margin-right: 200px;
  input{
    margin-bottom: 10px;
    height: 30px;
    outline:none;
    border:0;
    border-bottom:1px solid @bl;
  }
}
.send__product {
  background: #cccccc;
  padding: 10px;
  width: fit-content;
  height: 30px;
  text-align: center;
  border-radius: 5px;
  align-items: center;
  display: flex;
  margin-top: 20px;

}

.send__product:hover {
  cursor: pointer;
}
</style>
