import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0
  },
  getters:{
    showNum:state=>{
      return '当前最新的数量是【'+state.count+'】'
    }
  },
  //只有mutation中定义的函数才有权利去修改state中的值
  mutations: {
    add(state){
      //不要在mutaions中不要执行异步操作
        state.count++
    },
    addN(state,step){
      state.count+=step
    },
    sub(state){
      state.count--
    },
    subN(state,step){
      state.count-=step
    }
  },
  actions: {
    addAsync(context){
      setTimeout(()=> {
        //在action中不能直接修改state，
        // 修改state中的数据的时候要通过context.commit去触发某个mutation中的方法
        context.commit('add')
      },1000)
    },
    addNAsync(context,step){
      setTimeout(()=> {
        //在action中不能直接修改state，
        // 修改state中的数据的时候要通过context.commit去触发某个mutation中的方法
        context.commit('addN',step)
      },1000)
    },
    subAsync(context){
      setTimeout(()=> {
        //在action中不能直接修改state，
        // 修改state中的数据的时候要通过context.commit去触发某个mutation中的方法
        context.commit('sub')
      },1000)
    },
    subNAsync(context,step){
      setTimeout(()=> {
        //在action中不能直接修改state，
        // 修改state中的数据的时候要通过context.commit去触发某个mutation中的方法
        context.commit('subN',step)
      },1000)
    },


  },
  modules: {
  }
})
