<template>
  <div>
    <h1>{{ msg }}</h1>
    <h3>Vue2.x + Webpack4</h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h3 {
  color: #e13368;
  margin: 40px 0 0;
  border: 1px solid #42b983;
  border-radius: 4px;
  transform: rotate(30deg);
  text-align: center;
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
