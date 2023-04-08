<template>
  <div class="home-body" v-loading="loading">
    <div><search></search></div>
    <div class="container" v-show="flag">
      <div class="left">
        <div class="blog-list" v-for="(item, index) in paginatedItems"  :key="index" @click="toBlog(item.id)">
          <div >
            <h2>{{ item.title }}</h2>
            <p>{{ item.time }}</p>
          </div>
        </div>
        <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size.sync="pageSize"
            :total="items.length"
            layout="prev, pager, next"
        ></el-pagination>
      </div>
      <div class="right">
        <div class="right-top">
          <div class="top-avatar">
            <el-avatar :size="96" :src="avatarUrl" ></el-avatar>
            <span>{{ username }}</span>
          </div>
        </div>
        <div class="num">
          <div>
            <h3>121</h3>
            <h6>Articles</h6>
          </div>
          <div>
            <h3>55</h3>
            <h6>Tags</h6>
          </div>
        </div>
        <hr>
        <ul>
          <li><a href=""><span class="category-name">Vue</span><span>27</span></a></li>
          <li><a href=""><span class="category-name">Webpack</span><span>4</span></a></li>
          <li><a href=""><span class="category-name">Blog</span><span>2</span></a></li>
          <li><a href=""><span class="category-name">VuePress</span><span>2</span></a></li>
          <li><a href=""><span class="category-name">Node</span><span>12</span></a></li>
          <li><a href=""><span class="category-name">SpringBoot</span><span>5</span></a></li>
          <li><a href=""><span class="category-name">Css</span><span>39</span></a></li>
          <li><a href=""><span class="category-name">JavaScript</span><span>3</span></a></li>
          <li><a href=""><span class="category-name">效率</span><span>2</span></a></li>
          <li><a href=""><span class="category-name">Git</span><span>3</span></a></li>
          <li><a href=""><span class="category-name">HTML5</span><span>1</span></a></li>
          <li><a href=""><span class="category-name">Sass And Less</span><span>2</span></a></li>
          <li><a href=""><span class="category-name">TypeScript</span><span>5</span></a></li>
        </ul>
      </div>
    </div>
    <div class="bottom-container" v-show="flag"></div>
  </div>

</template>

<script>
import search from "@/components/search.vue";
export default {
  name: 'HomeView',
  components:{
    search
  },
  data(){
    return{
      loading:true,
      flag: true, // 将flag传递给子组件
      currentPage: 1,
      pageSize: 7,
      username: "小明",
      avatarUrl: '',
      items: [
        { id:1,title: '文章标题1', time: '2022-01-01' },
        { id:2,title: '文章标题2', time: '2022-01-02' },
        { id:3,title: '文章标题2', time: '2022-01-02' },
        { id:4,title: '文章标题2', time: '2022-01-02' },
        { id:5,title: '文章标题2', time: '2022-01-02' },
        { id:6,title: '文章标题2', time: '2022-01-02' },
        { id:7,title: '文章标题2', time: '2022-01-02' },
        { id:8,title: '文章标题2', time: '2022-01-02' },
        { id:9,title: '文章标题2', time: '2022-01-02' },
        { id:10,title: '文章标题2', time: '2022-01-02' },
        { id:11,title: '文章标题2', time: '2022-01-02' },
      ]
    }
  },
  computed: {
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.items.slice(startIndex, endIndex);
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    toBlog(id) {
      console.log(id)
      //路由params传参
      this.$router.push({name:'blog',params: {id:id}})
     // html 取参 $route.query.id
     // script 取参 this.$route.query.id
    },
    //获取文章列表接口
    getarticleslist(val) {
      this.$http.get('/api/articleslist')
          .then(response => {
            console.log(this.items)
            this.items = response.data
            console.log(response.data)
          })
          .catch(err => {
            console.error(err) // 打印错误信息
          })
    },
    //获取用户详细信息
    getUserInfo() {
      this.$http.get('/api/users')
          .then(response => {
            this.loading = false;
            this.username = response.data.username
            this.avatarUrl = response.data.image
          })
          .catch(err => {
            console.error(err) // 打印错误信息
          })
    }
  },
  created() {
    this.getarticleslist();
    this.getUserInfo();
  }
}


</script>
<style scoped>
.home-body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  height: 99vh;
}


.el-header {
  /*background: url("../img/bg2.png") no-repeat;*/
  /*background-size: cover;*/
  border:1px solid #cceff5;
  background:#fafcfd;
  box-shadow:0 0 1px #333;
  margin: 5px;
  margin-bottom: 0px;
  /*background-color: #B3C0D1;*/
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  width: 150px;
  border:1px solid #cceff5;
  /*background: url("../img/bg2.png") no-repeat;*/
  /*background-size: cover;*/
  background:#fafcfd;
  box-shadow:0 0 1px #333;
  margin: 5px;
  height: 885px;
  color: #333;
  text-align: center;
}






li {
  list-style: none;
}



.top-box-item a {
  text-decoration: none;
  color: #606266;
  font-size: 13px;
}



.top-box .top-box-item {
  color: #DCDFE6;
}

.el-avatar {
  position: relative;
  top: 5px;
}





.container {
  width: 1206px;
  height: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  position: relative;
  top: 5px;

}

.left{
  width: 811px;
  height: 100%;
  margin-right: 10px;
  /*border: 1px solid #e1e2e5;*/
  /*box-shadow: 0 2px 4px rgb(0 0 0 / 14%);*/
  /*border-radius: 4px;*/
}

.right{
  flex-grow: 1;
  border: 1px solid #e1e2e5;
  box-shadow: 0 2px 4px rgb(0 0 0 / 14%);
  border-radius: 4px;
}

.bottom-container{
  width: 100%;
  height: 100px;
  border-top: 1px solid #e1e2e5;
  position: relative;
  top: 60px;

}
.blog-list {
  position: relative;
  margin: 0 auto 20px;
  padding: 16px 20px;
  width: 100%;
  overflow: hidden;
  border-radius: .25rem;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);;
  box-sizing: border-box;
  transition: all .3s;
  background-color: #fff;
  cursor: pointer;
}

.blog-list:hover {
  box-shadow: 0 2px 25px rgb(0 0 0 / 14%);
}

.right-top {
  width: 100%;
  height: 180px;
}

.top-avatar{
  display: flex;
  flex-direction: column;
  align-items: center;
  /* center代表水平方向 */
  justify-content: center;
  /* center代表垂直方向 */
}

.top-avatar span {
  font-size: 24px;
  color: #242424;
  font-weight: 500;
  line-height: 1.25;
  margin-top: 10px;
}

.num {
  display: flex;
  margin: 0 auto;
  width: 80%;
}



.num div:first-child {
  border-right: 1px solid #333;
  text-align: center;
  flex: 0 0 50%;
}
.num div:first-child h3 {
  margin-bottom: 10px; /* 这里的值可以根据您的需要进行调整 */
  margin-top: 0;
  margin-right: 0;
  margin-left: 0;
}

.num div:first-child h6 {
  margin: 0;
}
.num div:last-child {
  text-align: center;
  flex: 0 0 50%;
}

.num div:last-child h3 {
  margin-bottom: 10px; /* 这里的值可以根据您的需要进行调整 */
  margin-top: 0;
  margin-right: 0;
  margin-left: 0;
}

.num div:last-child h6 {
  margin: 0;
}

hr {
  width: 320px;
  border: 0;
  border-top: 1px solid #eaecef;
  display: block;
  unicode-bidi: isolate;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin-inline-start: auto;
  margin-inline-end: auto;
  overflow: hidden;
  margin-top: 50px;
}

.right ul {
  list-style-type: none;
  padding: 10px;
  line-height: 2.2;
  display: flex;
  flex-direction: column; /* 将子元素的排列方式设置为垂直方向 */
  align-items: center; /* 将子元素垂直居中对齐 */
  justify-content: center; /* 可选：将子元素水平居中对齐 */
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.right ul li {
  width: 80%;
  margin-bottom: .4rem;
  padding: .4rem .8rem;
  border-radius: .25rem;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transform: scale(1); /* 默认大小 */
  transition: transform 0.2s ease-in-out; /* 添加动画过渡效果，时间为 0.2s，缓动函数为 ease-in-out */
}

li a {
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #242424;
}

.right li:hover {
  transform: scale(1.1); /* 鼠标悬停时放大 1.1 倍 */
}

 li:hover a span:nth-child(1) {
  color: #3eaf7c;
}

li:nth-child(2n-1) a span:nth-child(2) {
  background-color: rgb(103, 204, 134);
  width: 1.6rem;
  height: 1.6rem;
  text-align: center;
  line-height: 1.6rem;
  border-radius: .25rem;
  font-size: 13px;
  color: #fff;
}

li:nth-child(2n) a span:nth-child(2) {
  background-color: rgb(248, 178, 106);
  width: 1.6rem;
  height: 1.6rem;
  text-align: center;
  line-height: 1.6rem;
  border-radius: .25rem;
  font-size: 13px;
  color: #fff;
}

li:nth-child(3n) a span:nth-child(2) {
  background-color: rgb(244, 126, 96);
  width: 1.6rem;
  height: 1.6rem;
  text-align: center;
  line-height: 1.6rem;
  border-radius: .25rem;
  font-size: 13px;
  color: #fff;
}


.category-name {
  font-weight: 500;
}





</style>

