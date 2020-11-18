<template>
  <div>
    <my-addtion></my-addtion>
    <p>---------------------</p>
   <my-subtraction></my-subtraction>
  </div>
</template>

<script>
import Addtion from './components/Addtion.vue'
import Subtraction from './components/Subtraction.vue'
  export default {
  components:{
    'my-addtion':Addtion,
    'my-subtraction':Subtraction
  },
    data(){

      return{

      };
    }
  }
</script>
