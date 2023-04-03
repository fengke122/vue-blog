<template>
  <div>
    <p>你好{{this.$route.params.id}}</p>
    <h1>{{ article.title }}</h1>
    <p>{{ article.content }}</p>
  </div>
</template>
<script>
export default {
  name: "BlogShow",
  data() {
    return {
      article: {},
      id: this.$route.params.id
    };
  },
  created() {

  }
}
</script>
<style scoped>
</style>