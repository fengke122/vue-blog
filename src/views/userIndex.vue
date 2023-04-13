<template>
    <div v-loading="loading">
      <div><search></search></div>
      <div class="top-header"> <div class="top-img"></div></div>
      <div class="container">
        <div class="aside">
          <span class="security-title">个人中心</span>
          <ul>
            <li class="security-list" @click="showContent('content1')">
              <svg t="1675793586412" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3378" width="18" height="18"><path d="M640 790.528H297.504v-0.096l86.496 0.032v-118.88c0-0.8 0.224-1.536 0.224-2.304 1.28-69.6 57.984-125.888 127.776-125.888s126.496 56.32 127.776 125.888c0 0.768 0.224 1.504 0.224 2.304v118.944z m240.896-427.68L800 309.856V207.168a32 32 0 1 0-64 0v60.8l-206.464-135.328A31.296 31.296 0 0 0 511.424 128a31.168 31.168 0 0 0-17.6 4.64L142.464 362.88a32 32 0 0 0 35.072 53.536L192 406.912V800c0 30.08 27.168 54.592 60.576 54.592h518.848C804.832 854.56 832 830.08 832 800V407.36l13.856 9.056a31.968 31.968 0 0 0 35.04-53.536z" fill="#5E5E5E" p-id="3379"></path></svg>
              <span>首页</span>

            <li class="security-list" @click="showContent('content2')">
              <svg t="1675793645909" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3549" width="18" height="18"><path d="M813.728 640c-3.904-1.728-58.56-25.6-129.312-45.792a883.616 883.616 0 0 0-72.608-17.568c36.096-30.592 59.552-75.68 59.552-126.656v-123.104A167.168 167.168 0 0 0 504.192 160c-92.16 0-167.2 74.72-167.2 166.88v123.104c0 52.352 24.768 98.624 62.72 129.248-25.472 5.408-50.112 11.904-72.8 18.688a1098.656 1098.656 0 0 0-115.648 41.664C182.016 651.328 160 684.192 160 716v131.68l1.696 4.992c9.504 27.936 35.136 46.688 63.808 46.688h572.992a65.536 65.536 0 0 0 64.96-56.96l0.544-126.4c0-31.584-21.952-64.384-50.272-76" fill="#969697" p-id="3550"></path></svg>
              <span>我的头像</span></li>
            <li class="security-list" >
              <svg t="1675793674566" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3720" width="18" height="18"><path d="M672 501.44c0 88.192-71.776 160-160 160s-160-71.808-160-160c0-88.256 71.776-160 160-160s160 71.744 160 160m209.472-104.96a31.776 31.776 0 0 0-32.832-23.2 62.688 62.688 0 0 1-16.64-1.152 63.808 63.808 0 0 1-42.88-30.72 63.744 63.744 0 0 1 2.112-67.488 32 32 0 0 0-3.68-39.968c-19.584-20.16-41.632-37.248-64.832-52.544-35.808-23.616-74.976-41.92-116.864-52.448a31.968 31.968 0 0 0-36.48 16.832 63.68 63.68 0 0 1-57.28 35.616h-0.192a63.68 63.68 0 0 1-57.28-35.616 32 32 0 0 0-36.48-16.832c-41.92 10.56-81.056 28.832-116.864 52.48-23.2 15.264-45.248 32.352-64.832 52.512a32 32 0 0 0-3.712 40 63.68 63.68 0 0 1 2.112 67.456A63.392 63.392 0 0 1 192 372.032a62.816 62.816 0 0 1-16.672 1.28 31.52 31.52 0 0 0-32.8 23.168A383.136 383.136 0 0 0 128 501.44c0 35.616 4.864 70.912 14.528 104.864a31.904 31.904 0 0 0 32.8 23.2c5.664-0.32 11.264 0.224 16.672 1.312a63.776 63.776 0 0 1 40.736 98.048 32 32 0 0 0 3.712 40c19.584 20.16 41.632 37.248 64.8 52.544 35.84 23.68 74.976 41.92 116.896 52.416a31.936 31.936 0 0 0 36.48-16.832A63.648 63.648 0 0 1 512 821.44c24.512 0 46.496 13.632 57.376 35.584a32 32 0 0 0 36.48 16.832c41.92-10.496 81.056-28.768 116.864-52.416 23.2-15.296 45.248-32.384 64.832-52.576a32 32 0 0 0 3.68-39.968 63.68 63.68 0 0 1-2.112-67.456c9.408-16.32 24.992-27.2 42.88-30.72a65.28 65.28 0 0 1 16.64-1.184c15.04 0.896 28.704-8.736 32.832-23.2A384.64 384.64 0 0 0 896 501.44c0-35.648-4.896-70.944-14.528-104.928" fill="#969697" p-id="3721"></path></svg>
              <router-link to="/userdetil">账号设置</router-link>
            </li>
            <li class="security-list">
              <svg t="1675782321359" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4792" width="19" height="19"><path d="M526.848 886.784c202.666667-81.066667 371.221333-327.530667 373.397333-545.92l0.853334-85.333333c0-1.408-2.090667-3.733333-3.52-3.861334l-6.656-0.64c-100.074667-9.770667-247.658667-58.517333-333.952-110.293333l-30.250667-18.133333c-5.418667-3.264-18.282667-2.602667-23.253333 1.130666-81.792 61.354667-226.581333 116.586667-328.362667 125.226667l-38.144 3.264c-1.664 0.149333-3.861333 2.517333-3.882667 4.138667l-0.853333 85.333333c-2.154667 218.197333 162.538667 464.128 364.928 545.066667l14.848 5.952 14.848-5.930667zM90.410667 255.936c0.234667-23.530667 19.264-44.202667 42.922666-46.229333l38.144-3.242667C265.28 198.485333 402.474667 146.154667 477.866667 89.6c18.858667-14.144 50.517333-15.786667 70.826666-3.605333l30.229334 18.154666c80.853333 48.512 222.336 95.253333 316.138666 104.405334l6.656 0.64c23.466667 2.282667 42.261333 23.232 42.026667 46.741333l-0.853333 85.333333c-2.346667 235.690667-181.461333 497.621333-400.213334 585.130667L512 938.666667l-30.677333-12.266667C262.613333 838.933333 87.232 577.109333 89.578667 341.290667l0.853333-85.354667z" fill="#3D3D3D" p-id="4793"></path><path d="M356.416 496.917333a21.333333 21.333333 0 0 0-30.165333 30.165334l149.333333 149.333333a21.333333 21.333333 0 0 0 31.850667-1.92l234.666666-298.666667a21.333333 21.333333 0 1 0-33.536-26.346666L488.746667 629.248l-132.330667-132.330667z" fill="#3D3D3D" p-id="4794"></path></svg>
              <router-link to="/security">账号安全</router-link>
            <li class="security-list" @click="showContent('content5')">
              <svg t="1675793046913" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3207" width="18" height="18"><path d="M672 192a222.72 222.72 0 0 0-160 67.68A222.592 222.592 0 0 0 352 192c-123.52 0-224 101.184-224 225.6 0 52.256 18.144 103.2 52.928 145.536l285.952 293.984a62.528 62.528 0 0 0 90.208 0l287.808-296.032A227.136 227.136 0 0 0 896 417.6C896 293.184 795.52 192 672 192" fill="#969697" p-id="3208"></path></svg>
              <span>我的博客</span></li>
            <li class="security-list">
              <svg t="1681196552954" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2860" width="16" height="16"><path d="M855.780741 315.758524c15.699564-15.699564 15.699564-39.247886 0-54.94745l-90.270956-90.270956c-15.699564-15.699564-39.247886-15.699564-54.94745 0l-70.647013 70.647013 149.143808 149.143808L855.780741 315.758524zM161.086815 716.090235l0 149.143808 149.143808 0 431.729815-435.655218-149.142785-149.143808L161.086815 716.090235z" fill="#CCCCCC" p-id="2861"></path></svg>
              <router-link to="/userblogeditor">发布博客</router-link>
            </li>
          </ul>
        </div>
        <div class="main" >
          <div class="user-home" v-show="showingContent === 'content1'">
            <div class="index-info">
              <div class="home-head">
                <el-avatar :size="100" :src="userdetil.avatarUrl" ></el-avatar>
              </div>
              <div class="user-info">
                <ul>
                  <li><span v-model="userdetil.username">{{userdetil.username}}</span></li>
                  <li><span v-model="userdetil.level">{{userdetil.level}}</span></li>
                </ul>
              </div>
              <div class="user-set">
                <a href="">修改资料</a><br>
                <a href="">个人空间</a>
              </div>
            </div>
            <div class="index-info-2">
              <el-descriptions class="margin-top" :column="1" :size="size" border>
                <el-descriptions-item>
                  <template slot="label">
                    <i class="el-icon-user"></i>
                    用户名
                  </template>
                  {{userdetil.username}}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    <i class="el-icon-mobile-phone"></i>
                    手机号
                  </template>
                  {{userdetil.phone}}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    <i class="el-icon-email"></i>
                    邮箱
                  </template>
                  {{userdetil.email}}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    <i class="el-icon-level"></i>
                    用户等级
                  </template>
                  {{userdetil.level}}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    <i class="el-icon-code"></i>
                    编程语言
                  </template>
                  {{userdetil.code}}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    <i class="el-icon-job"></i>
                    工作岗位
                  </template>
                  {{userdetil.job}}
                </el-descriptions-item>
              </el-descriptions>
            </div>
          </div>
          <div  v-show="showingContent === 'content2'">
            <div class="upload-box" >
              <div class="img-clip-wrap">
                <el-upload
                    class="avatar-uploader photo"
                    action="/api/upload"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                  <i class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </div>
              <div class="img-previeww-wrap">
                <el-avatar :size="120" :src="userdetil.avatarUrl" ></el-avatar>
                <span class="span-font">当前头像</span>
              </div>
            </div>
            <p class="descript span-font">请选择图片上传：大小180 * 180像素支持JPG、PNG等格式，图片需小于2M</p>
            <div class="modal-footer">
              <input v-bind:class="computedClasses" type="button" value="更新" class="modal-btn" :disabled="!uploadSuccess" >
            </div>
          </div>
          <div v-show="showingContent === 'content3'">3</div>
          <div v-show="showingContent === 'content4'">4</div>
          <div v-show="showingContent === 'content5'">
            <div>
              <div class="mybloglist" v-for="(item,index) in paginatedItems"  :key="index" @click="toBlog(item.id)">
                <h2>{{ item.title }}</h2>
                <p>{{ item.id }}</p>
                <el-button class="edt-btn" type="primary" @click.stop @click="editarticle(item.id)">编辑</el-button>
                <el-button class="btn" @click="deletearticle(item.id)" @click.stop type="danger">删除</el-button>
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
        </div>
      </div>
    </div>
</template>
<script>
import search from "@/components/search.vue";
export default {
  name: "userIndex",
  components:{
    search
  },
  data () {
    return {
      size: "",
      loading:true,
      currentPage: 1, //初始页为1
      pageSize: 5,    //页面显示数量
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
      userdetil:{
        username: "小明",
        phone: "123456789",
        email: "12345679@qq.com",
        code: "Java",
        job : "前端开发",
        exp:   100,
        level: 1,
        avatarUrl: '',
      },
      flag: true,
      showingContent: 'content1',
      uploadSuccess: false, // 用于标记是否已经上传成功 可以控制按钮是否启用
    }
  },
  computed: {
    computedClasses() {
      return {
        'error': !this.uploadSuccess,
        //success 通过uploadSuccesss的布尔值来控制 更新按钮的样式
        'success': this.uploadSuccess
      }
    },
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.items.slice(startIndex, endIndex);
    }
  },
  methods: {
    showContent(contentName) {
      this.showingContent = contentName;
    },
    handleAvatarSuccess(response,res, file) {
      // 上传成功时将 uploadSuccess 标记为 true，启用按钮
      this.uploadSuccess = true
      this.getUserInfo();
      console.log(response, res, file)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    getUserInfo() {
      this.$http.get('/api/users')
          .then(response => {
            this.loading = false;
            this.userdetil.username = response.data.username
            this.userdetil.phone = response.data.phone
            this.userdetil.email = response.data.email
            this.userdetil.code = response.data.code
            this.userdetil.job = response.data.job
            this.userdetil.exp = response.data.exp
            this.userdetil.level = response.data.level
            this.userdetil.avatarUrl = response.data.image
          })
          .catch(err => {
            console.error(err) // 打印错误信息
          })
    },
    toBlog(id) {
      console.log(id)
      //路由params传参
      this.$router.push({name:'blog',params: {id:id}})
      // html 取参 $route.query.id
      // script 取参 this.$route.query.id
    },
    deletearticle(id){
      let index = this.items.findIndex(item => item.id === id);
      this.items.splice(index,1);
      this.$http.get('/api/deletearticle',{params:{id}})
          .then(response => {
            if(response.code === 200) {
              this.$message({
                message: '删除成功',
                type: 'success'
              });
            }
            else {
              this.$message.error('删除失败');
            }
          })
          .catch(err => {
            console.error(err) // 打印错误信息
          })
      //this.getUserarticle()

    },
    //获取用户文章列表接口
    getUserarticle(){
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
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    editarticle(id) {
      this.$router.push({name:'editblog',params: {id:id}})
    }
  },
  created() {
    this.getUserInfo()
    //this.getUserarticle()
  },
}
</script>
<style scoped>


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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



.top-header {
  position: relative;
  top: 2px;
  margin: 0 auto;
  background: url("~@/assets/img/blue.png") repeat-x;
  background-size: auto;
  width: 100%;
  height: 106px;
}

.top-img {
  width: 980px;
  height: 106px;
  margin: 0 auto;
  background: url("~@/assets/img/top-header-bg.png") no-repeat;
}

.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  position: relative;
  top: 3px;
  margin: auto;
  width: 980px;
  height: 780px;
  border:1px solid #e1e2e5;
  box-shadow: 0 2px 4px rgb(0 0 0 / 14%);
  border-radius: 4px;
  background:#fafcfd;
}

.aside {
  width: 150px;
  height: 100%;
  border:1px solid #e1e2e5;
  display: flex;
  flex-direction: column;

}

.main {
  flex: 1;
  height: 100%;
  padding: 40px 20px 0;
  border:1px solid #e1e2e5;
}

.security-title {
  width: 150px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 16px;
  color: #99a2aa;
  cursor: default;
}

ol, ul {
  list-style: none;
}

.aside li {
  display: list-item;
}

.aside li:hover {
  background-color: rgba(214, 217, 217, 0.8);
  cursor: pointer;
}

.aside li a {
  text-decoration: none;
  color: #606266;
  font-size: 14px;
}


.aside li span {
  text-decoration: none;
  color: #606266;
  font-size: 14px;
}
.security-list {
  text-align: center;
  width: 150px;
  height: 48px;
  line-height: 48px;
}

.security-list svg {
  position: relative;
  top: 2px;
}

.index-info {
  width: 100%;
  height: 141px;
  border:1px solid #e1e2e5;
  box-shadow: 0 2px 4px rgb(0 0 0 / 14%);
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;


}

.user-info {
  margin-left: 10px;
}

.user-info ul li:nth-child(1) {
  margin-bottom: 5px;
  color: rgb(251, 114, 153);
  font-size: 18px;
  font-weight: 600;
}

.user-info ul li:nth-child(2) {
  border: 1px solid #99a2aa;
  color: #99a2aa;
  border-radius: 4px;
  font-size: 12px;
  text-align: center;
}

.user-set {
  position: relative;
  left: 20px;
}

.user-set a{
  border-radius: 4px;
  width: 70px;
  height: 22px;
  border: 1px solid #ced3db;
  text-align: center;
  text-decoration: none;
  color: #6d757a;
  font-size: 12px;
}

.user-set a:hover {
  border: 1px solid #6da1ef;
  color: #6da1ef;
}

.index-info-2 {
  margin-top: 5px;
  width: 100%;
  height: 570px;
  border:1px solid #e1e2e5;
  box-shadow: 0 2px 4px rgb(0 0 0 / 14%);
  border-radius: 4px;
}




.upload-box {
  margin: 0 auto;
  padding: 80px 20px 56px;
  width: 400px;
  height: 318px;
  display: flex;
}

.img-clip-wrap {
  width: 182px;
  margin-right: 40px;
}

.img-previeww-wrap {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.span-font {
  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: #5a6267;
}

div.avatar-uploader.photo{
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

div.avatar-uploader.photo:hover{
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}


.img-previeww-wrap span {
  display: block;
  margin-top: 10px;

}
.descript {
  line-height: 16px;
  text-align: center;
}

.modal-footer {
  width: 780px;
  text-align: center;
  margin-top: 40px;
}

.modal-btn {
  background: #f4f5f7;
  color: #ccd0d7;
  border: #f4f5f7;
  display: inline-block;
  width: 140px;
  height: 40px;
  font-size: 14px;
  line-height: 32px;
  border-radius: 4px;
  text-decoration: none;
}





a {
  text-decoration: none;
  color: #606266;
  font-size: 13px;
}

.mybloglist {
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

.mybloglist:hover {
  box-shadow: 0 2px 25px rgb(0 0 0 / 14%);
}

.mybloglist p {
  display: inline-block;
}

.btn {
  position: absolute;
  left: 650px;
  bottom: 23px;
}

.edt-btn {
  position: absolute;
  left: 580px;
  bottom: 23px;
}


</style>