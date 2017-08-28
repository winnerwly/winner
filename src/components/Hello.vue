<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>活出自己的精彩</h2>
    <h3>{{msg2}}</h3>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '黑是我的主色调',
      msg2:'你是不是傻!!!',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
