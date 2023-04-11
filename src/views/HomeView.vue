<template>
  <div class="home-body" v-loading="loading">
    <div><search></search></div>
    <div class="bg">
      <div id="top-title-box">
        <div id="top-article">
            <div><li><svg t="1681128940571" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27944" width="64" height="64"><path d="M0 943.786667h66.56v-100.693334z" fill="#BF7500" p-id="27945"></path><path d="M460.8 0L0 406.186667v537.6L1024 0z" fill="#FAA725" p-id="27946"></path><path d="M261.12 552.96l18.773333-17.066667-66.56-75.093333 52.906667-46.08-6.826667-6.826667-68.266666 61.44-13.653334-15.36 68.266667-61.44-6.826667-8.533333-59.733333 54.613333-35.84-39.253333 151.893333-136.533333 35.84 39.253333-64.853333 58.026667 6.826667 6.826666 71.68-64.853333 13.653333 15.36-71.68 64.853333 6.826667 6.826667 56.32-49.493333 66.56 75.093333 18.773333-17.066667 13.653333 15.36-174.08 155.306667-13.653333-15.36zM187.733333 402.773333l22.186667-18.773333-10.24-10.24-22.186667 18.773333 10.24 10.24z m42.666667-37.546666l22.186667-18.773334-10.24-10.24-22.186667 18.773334 10.24 10.24z m107.52 11.946666l-87.04 76.8 5.12 6.826667 87.04-76.8-5.12-6.826667z m-44.373333-68.266666l-10.24-10.24-22.186667 18.773333 10.24 10.24 22.186667-18.773333zM273.066667 477.866667l87.04-76.8-5.12-6.826667-87.04 76.8 5.12 6.826667z m15.36 18.773333l87.04-76.8-5.12-6.826667-87.04 76.8 5.12 6.826667z m17.066666 17.066667l87.04-76.8-6.826666-6.826667-87.04 76.8 6.826666 6.826667zM312.32 250.88l61.44-54.613333 20.48 23.893333-15.36 13.653333 95.573333 107.52c6.826667 6.826667 10.24 13.653333 11.946667 20.48 1.706667 6.826667 0 11.946667-3.413333 17.066667-3.413333 5.12-11.946667 13.653333-27.306667 27.306667-6.826667-6.826667-15.36-11.946667-23.893333-18.773334 5.12-3.413333 11.946667-8.533333 17.066666-13.653333 5.12-3.413333 5.12-8.533333 0-13.653333L356.693333 256l-22.186666 20.48-22.186667-25.6z m63.146667-58.026667l105.813333-95.573333L501.76 119.466667l-46.08 40.96 11.946667 18.773333L512 139.946667l71.68 80.213333-23.893333 20.48-52.906667-58.026667-54.613333 47.786667 52.906666 59.733333-23.893333 20.48-71.68-80.213333 30.72-27.306667-11.946667-18.773333-34.133333 30.72-18.773333-22.186667z m102.4 34.133334l22.186666-20.48c15.36 17.066667 25.6 32.426667 34.133334 46.08 25.6-5.12 52.906667-8.533333 80.213333-10.24l1.706667 32.426666c-20.48 0-44.373333 3.413333-73.386667 5.12 3.413333 20.48-1.706667 46.08-18.773333 76.8-10.24-3.413333-20.48-6.826667-34.133334-10.24 10.24-15.36 15.36-29.013333 18.773334-40.96s1.706667-25.6-3.413334-37.546666c-3.413333-11.946667-13.653333-25.6-27.306666-40.96z" fill="#FFFFFF" p-id="27947"></path></svg></li></div>
            <div id="top-article-item">
              <span >{{ toparticle.tag }}</span>
              <h1 class="font-title" @click="toBlog2(toparticle.id)">{{ toparticle.article }}</h1>
              <p class="font-style">{{toparticle.content}}</p>
              <p class="font-style">发布于 {{ toparticle.time }}</p>
            </div>
        </div>
        <div class="top-article2">
          <div class="top-article2-item pb-10 px-8">
            <span class="font-little-title font-style2">EDITOR'S SELECTION</span>
            <span class="font-little-title"><svg style="text-anchor: end;" t="1681129983477" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="28815" width="31" height="31"><path d="M354.4 780.8c-37.4-21.8-59.5-49.9-76.2-96.9l-1.3-3.2c-3.1-6.2-9.5-10.1-16.7-10.1-2 0.1-3.8 0.4-5.5 1-8.2 2.9-13.2 11.4-11.8 20.6l1.2 4c19.2 54 46.3 88.3 90.4 114.4 0.1 0 6.5 4.3 10 4.3l2.5 0.1c1.8-0.1 3.5-0.4 5.3-1 9.4-3.4 14.3-13.8 11-23.3-1.6-4.4-5-8.2-8.9-9.9zM253.5 662.1c4.9-1.6 8.9-5 11.3-9.7 2.3-4.6 2.7-9.9 1.1-14.8-2.6-8-10-13.4-18.4-13.4-2 0-4 0.3-6 1-10.2 3.3-15.7 14.3-12.4 24.4 2.6 8 10 13.4 18.4 13.4 2.1 0 4.1-0.3 6-0.9z" fill="#6B400D" p-id="28816"></path><path d="M745.1 187.9c-9.9-9.3-24.1-11.5-36.1-5.5s-19.4 18.9-18.8 32.8c2 40.3-5 51.2-13.1 80.7-29.2-80.7-93.7-189.2-206.2-229.8-10-3.6-21-1.8-29.5 4.9-8.9 7-14 18.2-13.5 29.9 4.1 99-62.9 215-101.3 272.6-10.9-34.4-31.3-80.9-67.8-116.4-10-9.9-25-12-37.1-5-12.5 6.9-19.4 21.4-17.4 36 11.1 76.5-8.2 114.3-30.4 158.1-19.1 37.6-40.8 80.2-40.8 148.9 0 211.1 159.6 364.2 379.6 364.2 219.9 0 379.6-153.1 379.6-364.2 0.1-232.4-92.1-354.9-147.2-407.2zM512.8 915.1c-195.5 0-337.4-134.6-337.4-320 0-57.6 17.4-91.9 35.8-128.1 21-41 42.6-83.3 38.1-155.4 37.4 50.9 46.9 115 47 115.7l7 49.4 30.2-38.6c5.6-7.2 134.6-173.9 136.7-324.8 128.9 59.3 184.4 252.3 185 254.6l13.8 65.5s55.8-99 63.6-196.5c49.8 54.5 117.5 164.3 117.5 358.2 0.1 185.4-141.8 320-337.3 320z" fill="#6B400D" p-id="28817"></path><path d="M641.3 510.5l-30.9 61.9s-36.5-127.2-96.7-151.8c-7.9 46.7-33.1 78.3-55.3 111.6l-43 64.6-19.2-46c-3.9 10.8-8.7 20.3-13.3 29.3-8.9 17.6-16.6 32.7-16.6 58.6 0 87 64 147.8 155.6 147.8s155.6-60.8 155.6-147.8c0-65.5-15.7-110.9-33.2-141.1-0.8 4.3-1.8 8.6-3 12.9zM522 752.2c-73.9 0-123.5-46.3-123.5-115.3 0-2.3 0.1-4.5 0.2-6.6l12 28.6 73.6-110.2c2.7-4 5.4-7.9 8.1-11.9l0.6-0.9c12.3-18 26.2-38.2 36.6-62.2 21.8 28 41.3 73.7 50.7 106.3l21.4 73.9 38.3-76.6c3.6 18.4 5.4 38.3 5.4 59.6 0.1 69-49.6 115.3-123.4 115.3z" fill="#6B400D" p-id="28818"></path><path d="M601.7 653.9L580.4 580c-9.4-32.6-28.9-78.3-50.7-106.3-10.4 24-24.3 44.2-36.6 62.2l-0.6 0.9c-2.7 4-5.4 7.9-8.1 11.9L410.7 659l-12-28.6c-0.2 2.1-0.2 4.3-0.2 6.6 0 68.9 49.6 115.3 123.5 115.3S645.5 706 645.5 637c0-21.2-1.8-41.2-5.4-59.6l-38.4 76.5z" fill="#FFD524" p-id="28819"></path></svg>推荐文章</span>
          </div>
          <div class="top-article2-item2">
            <div></div>
            <div >
              <span class="font-articl">{{recommendarticle[0].tag}}</span>
              <h1 class="font-little-title fonthover" @click="toBlog2(recommendarticle[0].id)">{{ recommendarticle[0].article }}</h1>
              <p class="font-articl">{{recommendarticle[0].content}}</p>
              <dive><span>发布于 {{ recommendarticle[0].time }}</span></dive>
            </div>
          </div>
          <div class="top-article2-item3">
            <div></div>
            <div>
              <span class="font-articl">{{ recommendarticle[1].tag }}</span>
              <h1 class="font-little-title fonthover" @click="toBlog2(recommendarticle[1].id)">{{ recommendarticle[1].article }}</h1>
              <p class="font-articl">{{ recommendarticle[1].content }}</p>
              <dive><span>发布于 {{ recommendarticle[1].time }}</span></dive></div>
          </div>
        </div>
      </div>
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
          <div class="right-item">
            <div class="right-top">
              <div class="top-avatar">
                <el-avatar :size="96" :src="avatarUrl" ></el-avatar>
                <span>{{ username }}</span>
              </div>
            </div>
            <div class="num">
              <div>
                <h3>{{ article_numbers }}</h3>
                <h6>Articles</h6>
              </div>
              <div>
                <h3>{{ tag_numbers }}</h3>
                <h6>Tags</h6>
              </div>
            </div>
            <hr>
            <ul>
              <li v-for="(item,index) in tags" :key="index"><router-link :to="'/blogtag/'+ item.tagname"  ><span class="category-name">{{ item.tagname }}</span><span>{{ item.tagnumbers }}</span></router-link></li>
            </ul>
          </div>
          <div class="right-item right-item2">
            <h2><svg t="1681171686188" class="icon" viewBox="0 0 2035 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2685" width="48" height="48"><path d="M2629.9377777 197.65333333c3.09333333-0.10666667 6.08-0.10666667 9.17333333-0.10666666" fill="#ffcd00" p-id="2686"></path><path d="M1012.6577777 717.01333333c-82.13333333 0-159.25333333-32.74666667-217.28-92.26666666-58.02666667-59.52-90.02666667-138.66666667-90.02666667-222.82666667V34.34666667h617.38666667v364.69333333c0 84.90666667-32.21333333 164.8-90.77333333 224.85333333s-136.42666667 93.12-219.30666667 93.12zM780.0177777 110.93333333v290.98666667c0 131.52 104.32 238.50666667 232.64 238.50666667 129.81333333 0 235.41333333-108.26666667 235.41333333-241.38666667V110.93333333H780.0177777z" fill="#ffcd00" p-id="2687"></path><path d="M976.66844437 955.85066667l1.06453333-280.85333334 74.66666667 0.28373334-1.0656 280.85333333z" fill="#ffcd00" p-id="2688"></path><path d="M810.2321777 986.5728l0.91733333-106.66666667 408.85333334 3.5136-0.91733334 106.66666667zM929.4705777 325.44746667l133.96906667-136.8032 38.10666666 37.31733333-133.96906666 136.8032zM927.7009777 495.73866667l136.52693333-140.86293334 38.29866667 37.12-136.52693333 140.86293334zM1285.2977777 445.44v-49.28c51.52 0 86.72-26.13333333 107.84-79.68 16.32-41.6 17.06666667-83.41333333 17.06666667-85.12v-38.4h-117.33333334v-49.28H1455.64444437v87.89333333c0 2.13333333-0.53333333 52.8-20.69333334 104.10666667-12.26666667 31.25333333-29.33333333 56.42666667-50.66666666 74.77333333-26.98666667 23.14666667-60.26666667 34.98666667-98.98666667 34.98666667zM743.00444437 443.84v-51.09333333c-51.30666667 0-86.4-27.09333333-107.41333334-82.77333334-16.32-43.2-16.96-86.61333333-16.96-88.32v-39.89333333h116.69333334v-51.09333333h-162.13333334V221.86666667c0 2.24 0.53333333 54.82666667 20.58666667 108.05333333 12.26666667 32.53333333 29.22666667 58.56 50.56 77.65333333 26.88 24 60.05333333 36.26666667 98.66666667 36.26666667z" fill="#ffcd00" p-id="2689"></path></svg>
              月排行榜</h2>
            <span v-for="item in monthrank" class="font-right" @click="toBlog(item.id)">{{item.id }} {{item.title}}</span>
          </div>
          <div class="right-item right-item3">
            <h2>
              <svg t="1681172818420" class="icon" viewBox="0 0 2035 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3269" width="48" height="48"><path d="M2629.9377777 197.65333333c3.09333333-0.10666667 6.08-0.10666667 9.17333333-0.10666666" fill="#dbdbdb" p-id="3270"></path><path d="M1012.6577777 717.01333333c-82.13333333 0-159.25333333-32.74666667-217.28-92.26666666-58.02666667-59.52-90.02666667-138.66666667-90.02666667-222.82666667V34.34666667h617.38666667v364.69333333c0 84.90666667-32.21333333 164.8-90.77333333 224.85333333s-136.42666667 93.12-219.30666667 93.12zM780.0177777 110.93333333v290.98666667c0 131.52 104.32 238.50666667 232.64 238.50666667 129.81333333 0 235.41333333-108.26666667 235.41333333-241.38666667V110.93333333H780.0177777z" fill="#dbdbdb" p-id="3271"></path><path d="M976.66844437 955.85066667l1.06453333-280.85333334 74.66666667 0.28373334-1.0656 280.85333333z" fill="#dbdbdb" p-id="3272"></path><path d="M810.2321777 986.5728l0.91733333-106.66666667 408.85333334 3.5136-0.91733334 106.66666667zM929.4705777 325.44746667l133.96906667-136.8032 38.10666666 37.31733333-133.96906666 136.8032zM927.7009777 495.73866667l136.52693333-140.86293334 38.29866667 37.12-136.52693333 140.86293334zM1285.2977777 445.44v-49.28c51.52 0 86.72-26.13333333 107.84-79.68 16.32-41.6 17.06666667-83.41333333 17.06666667-85.12v-38.4h-117.33333334v-49.28H1455.64444437v87.89333333c0 2.13333333-0.53333333 52.8-20.69333334 104.10666667-12.26666667 31.25333333-29.33333333 56.42666667-50.66666666 74.77333333-26.98666667 23.14666667-60.26666667 34.98666667-98.98666667 34.98666667zM743.00444437 443.84v-51.09333333c-51.30666667 0-86.4-27.09333333-107.41333334-82.77333334-16.32-43.2-16.96-86.61333333-16.96-88.32v-39.89333333h116.69333334v-51.09333333h-162.13333334V221.86666667c0 2.24 0.53333333 54.82666667 20.58666667 108.05333333 12.26666667 32.53333333 29.22666667 58.56 50.56 77.65333333 26.88 24 60.05333333 36.26666667 98.66666667 36.26666667z" fill="#dbdbdb" p-id="3273"></path></svg>
              周排行榜
            </h2>
            <span v-for="item in weekrank" class="font-right">{{item.id }} {{item.title}}</span>
          </div>
          <div class="right-item right-item4">
            <h2>
              <svg t="1681172818420" class="icon" viewBox="0 0 2035 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3269" width="48" height="48"><path d="M2629.9377777 197.65333333c3.09333333-0.10666667 6.08-0.10666667 9.17333333-0.10666666" fill="#A67D3D" p-id="3270"></path><path d="M1012.6577777 717.01333333c-82.13333333 0-159.25333333-32.74666667-217.28-92.26666666-58.02666667-59.52-90.02666667-138.66666667-90.02666667-222.82666667V34.34666667h617.38666667v364.69333333c0 84.90666667-32.21333333 164.8-90.77333333 224.85333333s-136.42666667 93.12-219.30666667 93.12zM780.0177777 110.93333333v290.98666667c0 131.52 104.32 238.50666667 232.64 238.50666667 129.81333333 0 235.41333333-108.26666667 235.41333333-241.38666667V110.93333333H780.0177777z" fill="#A67D3D" p-id="3271"></path><path d="M976.66844437 955.85066667l1.06453333-280.85333334 74.66666667 0.28373334-1.0656 280.85333333z" fill="#A67D3D" p-id="3272"></path><path d="M810.2321777 986.5728l0.91733333-106.66666667 408.85333334 3.5136-0.91733334 106.66666667zM929.4705777 325.44746667l133.96906667-136.8032 38.10666666 37.31733333-133.96906666 136.8032zM927.7009777 495.73866667l136.52693333-140.86293334 38.29866667 37.12-136.52693333 140.86293334zM1285.2977777 445.44v-49.28c51.52 0 86.72-26.13333333 107.84-79.68 16.32-41.6 17.06666667-83.41333333 17.06666667-85.12v-38.4h-117.33333334v-49.28H1455.64444437v87.89333333c0 2.13333333-0.53333333 52.8-20.69333334 104.10666667-12.26666667 31.25333333-29.33333333 56.42666667-50.66666666 74.77333333-26.98666667 23.14666667-60.26666667 34.98666667-98.98666667 34.98666667zM743.00444437 443.84v-51.09333333c-51.30666667 0-86.4-27.09333333-107.41333334-82.77333334-16.32-43.2-16.96-86.61333333-16.96-88.32v-39.89333333h116.69333334v-51.09333333h-162.13333334V221.86666667c0 2.24 0.53333333 54.82666667 20.58666667 108.05333333 12.26666667 32.53333333 29.22666667 58.56 50.56 77.65333333 26.88 24 60.05333333 36.26666667 98.66666667 36.26666667z" fill="#A67D3D" p-id="3273"></path></svg>
              日排行榜
            </h2>
            <span v-for="item in dayrank" class="font-right">{{item.id }} {{item.title}}</span>
          </div>
        </div>
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
      article_numbers:122,
      tag_numbers:10,
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
      ],
      tags: [
        {id:1,tagname:'Vue',tagnumbers:10},
        {id:2,tagname:'Java',tagnumbers:10},
        {id:3,tagname:'Go',tagnumbers:10},
        {id:4,tagname:'C++',tagnumbers:10},
        {id:5,tagname:'Python',tagnumbers:10},
        {id:6,tagname:'Git',tagnumbers:10}
      ],
      dayrank:[
        {index:1,id:1,title:'文章1'},
        {index:2,id:2,title:'文章1'},
        {index:3,id:3,title:'文章1'},
        {index:4,id:4,title:'文章1'}
      ],
      monthrank:[
        {index:1,id:1,title:'文章1'},
        {index:2,id:2,title:'文章1'},
        {index:3,id:3,title:'文章1'},
        {index:4,id:4,title:'文章1'}
      ],
      weekrank:[
        {index:1,id:1,title:'文章1'},
        {index:2,id:2,title:'文章1'},
        {index:3,id:3,title:'文章1'},
        {index:4,id:4,title:'文章1'}
      ],
      toparticle:{
        id:1,
        article:'docker从入门到入土',
        content:'1.docker概述1.1 基本介绍 Docker 是一个开源的应用容器引擎，基于 Go 语言 并遵从 Apache2.0 协议开源。 Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到',
        time: '2022-01-01',
        tag:'Docker'
      },
      recommendarticle:[
          {id:1,tag:'MySQL',article: 'MySQL覆盖索引',time:'2022-01-01',content:'1.什么是索引索引（在 MySQL 中也叫“键key”）是存储引擎快速找到记录的一种数据结构，通俗来说类似书本的目录，这个比方虽然被用的最多但是也是最恰如'},
        {id:2,tag:'RibbitMQ',article: 'RibbitMQ教程',time:'2022-01-01',content:'1.什么是索引索引（在 MySQL 中也叫“键key”）是存储引擎快速找到记录的一种数据结构，通俗来说类似书本的目录，这个比方虽然被用的最多但是也是最恰如'}
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
      //路由params传参
      this.$router.push({name:'blog',params: {id:id}})
     // html 取参 $route.query.id
     // script 取参 this.$route.query.id
    },
    toBlog2(id) {
      //路由params传参
      this.$router.push({name:'blog',params: {id:id}})
      // html 取参 $route.query.id
      // script 取参 this.$route.query.id
    },
    //获取文章列表接口
    getarticleslist(val) {
      this.$http.get('/api/articleslist')
          .then(response => {
            this.items = response.data
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
    },
    //获取月排行榜接口
    getmonthrank() {
      this.$http.get('/api/monthrank')
          .then(response => {
            this.monthrank = response.data
          })
          .catch(err => {
            console.error(err) // 打印错误信息
          })
    },
    //获取周排行榜接口
    getweekrank() {
      this.$http.get('/api/weekrank')
          .then(response => {
            this.weekrank = response.data
          })
          .catch(err => {
            console.error(err) // 打印错误信息
          })
    },
    //获取日排行榜接口
    getdayrank() {
      this.$http.get('/api/dayrank')
          .then(response => {
            this.dayrank = response.data
          })
          .catch(err => {
            console.error(err) // 打印错误信息
          })
    },
    //获取标签接口
    gettags() {
      this.$http.get('/api/tags')
          .then(response => {
            this.tags = response.data
          })
          .catch(err => {
            console.error(err) // 打印错误信息
          })
    },
    //获取置顶文章接口
    gettoparticle() {
      this.$http.get('/api/toparticle')
          .then(response => {
            this.toparticle = response.data
          })
          .catch(err => {
            console.error(err) // 打印错误信息
          })
    },
    //获取推荐文章接口
    getrecommend() {
      this.$http.get('/api/recommend')
          .then(response => {
            this.recommendarticle = response.data
          })
          .catch(err => {
            console.error(err) // 打印错误信息
          })
    },


  },
  created() {
    // this.getarticleslist();
    // this.getmonthrank();
    // this.getweekrank();
    // this.getdayrank();
    // this.gettags();
    // this.gettoparticle();
    // this.getrecommend();
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

p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
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
  margin: 0 auto;
  display: flex;
  justify-content: center;

}

.left{
  width: 811px;
  height: 100%;
  margin-right: 10px;
}

.right{
  flex-grow: 1;

}

.right-item {
  border: 1px solid #e1e2e5;
  box-shadow: 0 2px 4px rgb(0 0 0 / 14%);
  background-color: #FFFFFF;
  border-radius: 4px;
  margin-bottom: 20px;

}

.bottom-container{
  width: 100%;
  height: 100px;
  border-top: 1px solid #e1e2e5;

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

#top-title-box {
  height: 910px;
  margin: 0 auto;

}


.bg {
  background: url("~@/assets/img/bg7.jpg");
  background-size: cover;
  /*background: linear-gradient(to bottom right, #dae7f6, #dedbf7, #edd8ef);*/
  /*padding-bottom: 10px;*/
}

#top-article {
  width: 1206px;
  height: 50%;
  margin: 0 auto;
  position: relative;
  top: 40px;
  background-image: linear-gradient(to right, rgba(214, 217, 217, 0.1),rgba(214, 217, 217, 0.3), rgba(255, 255, 255, 0.94),#ffffff), url("~@/assets/img/xkbg.png");
  background-size: cover;
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  transform: scale(1); /* 默认大小 */
  transition: transform 0.2s ease-in-out; /* 添加动画过渡效果，时间为 0.2s，缓动函数为 ease-in-out */

}

#top-article:hover {
  transform: scale(1.02);
}

#top-article div {
  width: 50%;
}

#top-article-item {
  display: flex;
  flex-direction: column;
  padding: 48px;

}

.top-article2 {
  width: 1206px;
  height: 40%;
  margin: 0 auto;
  position: relative;
  top: 60px;
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.top-article2-item {
  width: 20%;
  border-radius: 1rem;
  background-image: linear-gradient(to right bottom , #dbeaf6, #e1ddf8, #f0d9ef);
  transform: scale(1); /* 默认大小 */
  transition: transform 0.2s ease-in-out; /* 添加动画过渡效果，时间为 0.2s，缓动函数为 ease-in-out */
}



.top-article2-item3 {
  width: 36%;
  border-radius: 1rem;
  background-color: #FFFFFF;
  transform: scale(1); /* 默认大小 */
  transition: transform 0.2s ease-in-out; /* 添加动画过渡效果，时间为 0.2s，缓动函数为 ease-in-out */

}

.top-article2-item:hover,.top-article2-item2:hover,.top-article2-item3:hover {
  transform: scale(1.02);
}

svg {
  vertical-align: middle;
}

.font-style {
  color: #333334;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 400;
}

.font-little-title {
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 2rem;
}

.ding {
  font-family: "钉钉进步体",sans-serif;
}

.pb-10 {
  padding-bottom: 2.5rem;
}

.px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}

.top-article2-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}
.top-article2-item span:nth-child(1) {
  text-align: center;
}

.font-style2 {
  background-image: -webkit-linear-gradient(bottom, rgb(201, 115, 255), rgb(20, 11, 255));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.font-title {
  font-size: 2.25rem;
  line-height: 2.5rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
}

.top-article2-item2 {
  width: 36%;
  border-radius: 1rem;
  transform: scale(1); /* 默认大小 */
  background-color: #FFFFFF;
  transition: transform 0.2s ease-in-out; /* 添加动画过渡效果，时间为 0.2s，缓动函数为 ease-in-out */
  display: flex;
  flex-direction: column;
}

.top-article2-item2 div:nth-child(1) {
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0),rgb(255, 255, 255, 0.3),rgba(255, 255, 255, 1)), url("~@/assets/img/t-bg.png");
  background-size: cover;
  height: 40%;
}

.top-article2-item2 div:nth-child(2) {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 1.5rem;
  height: 60%;

}

.top-article2-item3 div:nth-child(1) {
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0),rgb(255, 255, 255, 0.3),rgba(255, 255, 255, 1)), url("~@/assets/img/t-bg2.png");
  background-size: cover;
  height: 40%;
}

.top-article2-item3 div:nth-child(2) {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 1.5rem;
  height: 60%;
}

.font-articl {
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: .5rem;
  word-wrap: break-word;
  word-break: break-all;
}

.right-item2,.right-item3,.right-item4 {
  display: flex;
  flex-direction: column;
  padding: 2rem;
}

.font-right {
  padding-left: 20px;
  font-size: 14px;
  font-weight: 400;
}

.right-item2 span:hover {
  cursor: pointer;
  color: #a8a8a9;
}

.right-item3 span:hover {
  cursor: pointer;
  color: #a8a8a9;
}

.right-item4 span:hover {
  cursor: pointer;
  color: #a8a8a9;
}

#top-article-item h1:hover {
  cursor: pointer;
  color: #a8a8a9;
}

.fonthover:hover {
  cursor: pointer;
  color: #a8a8a9;
}





</style>

