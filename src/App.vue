<template>
  <div id="app">
    <h1 v-text='title'></h1>
    <div><input v-model='newItem' @keyup.enter='addNew' /></div>
    <ol>
      <li v-for='item in items' :class='{finished:item.isFinished}' @click="callback(item)">{{item.label}}</li>
    </ol>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Store from './store'
console.log(Store)
// module.export={}
export default {
  // name: 'app',
  data(){
    return{
      title:'这是一个代办事件列表',
      newItem:'',
      items:Store.fetch(),
    }
  },
  methods:{
    callback(item){
      item.isFinished=!item.isFinished
    },
    addNew(){
      // alert(1);
      if (this.newItem!=''&&this.newItem!=' '&&this.newItem!=/^[^ ]{0,}$/) {
        console.log(this.title)
        this.items.push({
          label:this.newItem,
          isFinished:false,  
        })
        window.localStorage.setItem('data',window.JSON.stringify(this.items))

      }

      this.newItem=''

    }
  },
  watch:{
    items:{
      handler(val,oldVal,dd){
        console.log('val',val)
        console.log('oldVal',oldVal)
        console.log('oldVal',dd)
        Store.save(val)
      },
      deep:true
    }
  }
}
</script>

<style>
.finished{
  /*text-decoration: underline;*/
  color: #f00;

}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto; 
  width: 500px;
}
input{
  width: 80%;
}
ol>li{
  width: 80%;
  cursor: pointer;
  user-select: none;
  /*text-align: left;*/
  font-size: 20px;
  margin-bottom: 10px
}
</style>
