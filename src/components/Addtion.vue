<template>
  <div>
    <h3>{{$store.getters.showNum}}</h3>
    <button @click="btnHandler1">+1</button>
    <button @click="btnHandler2">+N</button>
    <button @click="btnHandler3">+1 Async</button>
    <button @click="btnHandler4">+N Async</button>
  </div>

</template>
<script>
  export default {
    data(){
      return{

      };
    },
    methods:{
      btnHandler1(){
        this.$store.commit('add')
      },
      btnHandler2(){
        //commit的作用就是调用某个mutation函数
        this.$store.commit('addN',3)
      },
      //异步的让count自增加一
      btnHandler3(){
        //这里的dispath函数，专门用来触发action
        this.$store.dispatch('addAsync')
      },
      btnHandler4(){
        this.$store.dispatch('addNAsync',5)

      },
    }
  }



</script>
