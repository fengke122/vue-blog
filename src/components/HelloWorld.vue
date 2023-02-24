<template>
 <p>helloworld</p>
</template>

<script>
//es6 暴露当前组件对象 不暴露无法使用
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
