<template>
  <div>
    <search></search>
    <div id="container">
      <ul id="tag-box">
          <li v-for="(item,index) in tags" :key="index"><router-link :to="'/blogtag/'+ item.tagname"  ><span class="category-name">{{ item.tagname }}</span><span>{{ item.tagnumbers }}</span></router-link></li>
        </ul>
      <div class="article-item" v-for="item in articledata" @click="toBlog(item.id)">
        <div id="title"><span>{{item.article}}</span></div>
        <div id="content">
          <i>
            <svg t="1681281237862" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10589" width="18" height="18"><path d="M515.2 226.752m-226.752 0a226.752 226.752 0 1 0 453.504 0 226.752 226.752 0 1 0-453.504 0Z" fill="#666666" p-id="10590"></path><path d="M906.496 1024H123.904c-42.24 0-76.8-34.56-76.8-76.8v-147.904C47.104 641.28 176.384 512 334.4 512h361.536c158.016 0 287.296 129.28 287.296 287.296V947.2c0.064 42.24-34.496 76.8-76.736 76.8z" fill="#666666" p-id="10591"></path></svg>
            {{ item.author }}
          </i>
          <i>
            <svg t="1681281316461" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12095" width="18" height="18"><path d="M512 64C264.8 64 64 264.8 64 512s200.8 448 448 448 448-200.8 448-448S759.2 64 512 64z m0 832c-212 0-384-172-384-384s172-384 384-384 384 172 384 384-172 384-384 384z m32-393.6l191.2 110.4-32 55.2L488.8 544H480V256h64v246.4z" p-id="12096"></path></svg>
            {{ item.time }}
          </i>
          <i>
            <svg t="1681281342451" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13157" width="18" height="18"><path d="M920.528912 444.49616l-340.111125-340.114737a135.932464 135.932464 0 0 0-96.155899-39.758503L200.418112 64.662657h-0.018063C125.275769 64.662657 64.301413 125.40943 64.301413 200.548159v283.673992a136.091412 136.091412 0 0 0 39.881326 96.199248l340.230335 340.241173a136.022775 136.022775 0 0 0 192.369598 0l283.74624-283.76069c53.128139-53.131752 53.128139-139.277583 0-192.405722z m-45.209673 147.192436l-283.746241 283.760691a72.064544 72.064544 0 0 1-101.924964 0l-340.212273-340.241173A72.187367 72.187367 0 0 1 128.241582 484.218538V200.548159A72.021195 72.021195 0 0 1 200.396437 128.602826l283.843776-0.039737a71.887535 71.887535 0 0 1 50.935389 21.053294l340.114737 340.1039a72.104281 72.104281 0 0 1 0.0289 101.968313z" fill="" p-id="13158"></path><path d="M384.002258 255.999097c-70.69543 0-128.003161 57.307731-128.003161 128.003161S313.306828 511.998194 384.002258 511.998194s127.999548-57.307731 127.999548-127.999549S454.690463 255.999097 384.002258 255.999097z m45.296371 173.29592a64.059379 64.059379 0 1 1 18.759396-45.292759 63.640337 63.640337 0 0 1-18.763008 45.292759z" fill="" p-id="13159"></path></svg>
            {{ item.tag }}
          </i>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import search from "@/components/search.vue";
export default {
  name: "Blogtag",
  components:{
    search
  },
  data() {
    return{
      tags: [
        {id:1,tagname:'Vue',tagnumbers:10},
        {id:2,tagname:'Java',tagnumbers:10},
        {id:3,tagname:'Go',tagnumbers:10},
        {id:4,tagname:'C++',tagnumbers:10},
        {id:5,tagname:'Python',tagnumbers:10},
        {id:6,tagname:'Git',tagnumbers:10}
      ],
      articles:[
        {id:1,article:'Vue入门教程',time:'2024/4/12',tag:'Vue',author:'小明'},
        {id:1,article:'Vue入门教程',time:'2024/4/12',tag:'Vue',author:'小明'},
        {id:1,article:'Vue入门教程',time:'2024/4/12',tag:'Vue',author:'小明'},
        {id:1,article:'Vue入门教程',time:'2024/4/12',tag:'Vue',author:'小明'},
        {id:1,article:'Vue入门教程',time:'2024/4/12',tag:'Vue',author:'小明'},
        {id:2,article:'Java入门教程',time:'2024/4/12',tag:'Java',author:'小明'},
        {id:2,article:'Java入门教程',time:'2024/4/12',tag:'Java',author:'小明'},
        {id:2,article:'Java入门教程',time:'2024/4/12',tag:'Java',author:'小明'},
        {id:2,article:'Java入门教程',time:'2024/4/12',tag:'Java',author:'小明'},
        {id:2,article:'Java入门教程',time:'2024/4/12',tag:'Java',author:'小明'},
      ]
    }
  },
  computed:{
    articledata() {
      const tag = this.$route.params.id
      return  this.articles.filter(item => item.tag === tag)
    }
  },
  methods:{
    toBlog(id) {
      //路由params传参
      this.$router.push({name:'blog',params: {id:id}})
      // html 取参 $route.query.id
      // script 取参 this.$route.query.id
    },
    //获取tags接口
    gettags() {
      this.$http.get('/api/tags')
          .then(response => {
            this.tags = response.data
          })
          .catch(err => {
            console.error(err) // 打印错误信息
          })
    },
    //获取文章列表接口
    getarticle() {
      this.$http.get('/api/article')
          .then(response => {
            this.articles = response.data
          })
          .catch(err => {
            console.error(err) // 打印错误信息
          })
    }
  },
  created(){
    //this.gettags();
    //this.getarticle();
  }
}
</script>
<style scoped>
#container {
  width: 860px;
  height: 900px;
  margin: 0 auto;
  /*background-color: #3eaf7c;*/
  padding-top: 20px;
}

li {
  list-style: none;
}

svg {
  vertical-align: middle;
}

#tag-box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

#tag-box ul {

}

#tag-box li {
  vertical-align: middle;
  margin: 4px 8px 10px;
  padding: 10px 10px;
  display: inline-block;
  cursor: pointer;
  border-radius: .25rem;
  font-size: 13px;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: #fff;
  transform: scale(1); /* 默认大小 */
  transition: transform 0.2s ease-in-out; /* 添加动画过渡效果，时间为 0.2s，缓动函数为 ease-in-out */
}



li a {
  text-decoration: none;
  color: #242424;
}

.category-name {
  font-weight: 500;
}

#tag-box li:hover {
  background-color: #3eaf7c;
  transition: all .5s;

}


li:hover a span:nth-child(1) {
  color: #ffffff;
  transition: all .5s;
}

li:nth-child(2n-1) a span:nth-child(2) {
  background-color: rgb(103, 185, 204);
  width: 1.6rem;
  height: 1.6rem;
  text-align: center;
  line-height: 1.6rem;
  border-radius: .25rem;
  font-size: 13px;
  color: #fff;
  padding: 5px;
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
  padding: 5px;
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
  padding: 5px;
}

.article-item {
  position: relative;
  margin: 0 auto 20px;
  padding: 16px 20px;
  width: 100%;
  overflow: hidden;
  border-radius: .25rem;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
  transition: all .3s;
  cursor: pointer;
}

.article-item:hover {
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.2);;
  transition: all .5s;
}

#title {
  position: relative;
  font-size: 1.28rem;
  line-height: 46px;
  display: inline-block;
}

#title span {
  font-weight: 500;
  text-decoration: none;
}

#title:hover {
  color: #3eaf7c;
  transition: all .5s;
 }

#content i{
  color: rgba(127,127,127,0.87);
  display: inline-block;
  line-height: 1.5rem;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  margin-right: 10px;
}
</style>