<template>
  <div v-loading="loading">
    <p>文章ID：{{this.$route.params.id}}</p>
    <h1>title: {{ title }}</h1>
    <p>tagname: {{tagname}}</p>
    <p>classname: {{classname}}</p>
    <p>hot: {{hot}}</p>
    <p>addtime: {{addtime}}</p>
    <p>isalive: {{isalive}}</p>
    <div id="preview">
      <mavon-editor
          class="md"
          :value="context"
          :subfield="prop.subfield"
          :defaultOpen="prop.defaultOpen"
          :toolbarsFlag="prop.toolbarsFlag"
          :editable="prop.editable"
          :scrollStyle="prop.scrollStyle"
      ></mavon-editor>
    </div>
  </div>
</template>
<script>
export default {
  name: "BlogShow",
  data() {
    return {
      id: this.$route.params.id,
      loading:true,
      title: '测试标题',
      tagname: 'Git',
      classname: 'Vue',
      hot: '5',
      addtime:'2023/4/3',
      isalive:'true',
      context: "```python\n" +
          "1. print('hello world')\n" +
          "2. print('ni hoa')\n" +
          "\n" +
          "```\n",
    };
  },
  methods:{
    getarticle() {
      //获取文章详细信息接口
      this.$http.get('/api/article')
          .then(response => {
            this.loading = false;
            this.title = response.data.title;
            this.tagname = response.data.tagname
            this.classname = response.data.classname
            this.hot = response.data.hot
            this.addtime = response.data.addtime
            this.isalive = response.data.isalive
            this.context = response.data.context
          })
          .catch(err => {
            console.error(err) // 打印错误信息
          })
    }
  },
  computed: {
    prop() {
      return {
        subfield: false, // 单双栏模式
        defaultOpen: "preview", //edit： 默认展示编辑区域 ， preview： 默认展示预览区域
        editable: false,
        toolbarsFlag: false,
        scrollStyle: true,
      };
    },
  },
  created() {
    this.getarticle()
  }
}
</script>
<style scoped>
</style>