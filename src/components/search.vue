<template>
  <div class="search-container">
    <div class="search-box">
      <div class="item">
        <input type="text">
      </div>
      <div><img class="search-btn-icon" src="~@/assets/img/search.png" width="26" height="26" alt=""></div>
    </div>
    <div class="search-box-friend">
      <div class="search-box-friend-item">
        <router-link to="/home">
          <svg t="1675689429920" class="icon-2" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1581" width="25" height="25"><path d="M957.9 391.5c-1.1-7.5-5.5-14.2-12-18.5L527.4 98.9c-4.6-3.1-10.1-4.7-15.7-4.7-5.7 0-11.1 1.6-15.7 4.7L77.4 373.1c-6.2 4.1-10.4 10.3-11.6 17.4-1.2 7 0.5 14 4.8 19.7 5.2 6.9 13.7 11.1 22.6 11.1 5.6 0 11.1-1.6 15.7-4.7l40.2-26.3v435.4c0 57.8 45.8 104.7 102.2 104.7h520.8c56.3 0 102.2-47 102.2-104.7V390.2l40.4 26.5c5.7 3.5 11.1 5.2 16.4 5.2 7.9 0 15.2-3.8 21.5-11.4 4.4-5.4 6.3-12.1 5.3-19zM616.3 884.4H407V631.7c0-54 46.9-97.9 104.6-97.9 57.7 0 104.6 43.9 104.6 97.9v252.7z m202.4-58.8c0 28.6-20.9 51.9-46.6 51.9H665V631.7c0-79.4-68.8-143.9-153.3-143.9-84.5 0-153.3 64.6-153.3 143.9v245.9H251.3c-25.7 0-46.7-23.3-46.7-51.9V353.9l307.1-201.2 307.1 201.2v471.7z" fill="#6B400D" p-id="1582"></path><path d="M511.7 533.8c-57.7 0-104.6 43.9-104.6 97.9v252.7h209.3V631.7c-0.1-54-47-97.9-104.7-97.9z" fill="#FFD524" p-id="1583"></path><path d="M270.3 504.3c-17.5 0-31.7 14.7-31.7 32.8 0 18.1 14.2 32.8 31.7 32.8s31.7-14.7 31.7-32.8c-0.1-18.1-14.3-32.8-31.7-32.8zM270.3 592.9h-1.4c-13.1 0-23.8 10.7-23.8 23.8v212.5c0 13.1 10.7 23.8 23.8 23.8h1.4c13.1 0 23.8-10.7 23.8-23.8V616.7c0-13.1-10.7-23.8-23.8-23.8z" fill="#6B400D" p-id="1584"></path></svg>
          首页</router-link>
      </div>
      <div class="search-box-friend-item">
        <a href="#/blogtag/Vue">
          <svg t="1675690819658" class="icon-2" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1551" width="25" height="25"><path d="M561.1 250.2m-186.3 0a186.3 186.3 0 1 0 372.6 0 186.3 186.3 0 1 0-372.6 0Z" fill="#FFCE00" p-id="1552"></path><path d="M459.7 906.5c-11.5 0-23-4.4-31.8-13.2L115.7 581.1c-8.4-8.4-13.2-19.9-13.2-31.8s4.7-23.4 13.2-31.8l383.2-383.2c8.4-8.4 19.9-13.2 31.8-13.2h0.8l306.9 5.2c24.2 0.4 43.8 20 44.2 44.2l5.2 306.9c0.2 12.2-4.5 24-13.2 32.6L491.5 893.3c-8.8 8.8-20.3 13.2-31.8 13.2zM211.2 549.3l248.5 248.5L797.6 460l-4.2-244.3-244.3-4.2-337.9 337.8z" fill="#242F44" p-id="1553"></path></svg>
          <span>标签</span>
        </a>
      </div>
      <div class="search-box-friend-item">
        <a href="#/blog/1">
          <svg t="1675690927818" class="icon-2" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1697" width="25" height="25"><path d="M622.3 456.8m-247.5 0a247.5 247.5 0 1 0 495 0 247.5 247.5 0 1 0-495 0Z" fill="#FFCE00" p-id="1698"></path><path d="M493.2 749.4c-82.5 0-160.1-32.1-218.5-90.5S184.2 523 184.2 440.4s32.1-160.1 90.5-218.5c58.4-58.4 135.9-90.5 218.5-90.5s160.1 32.1 218.5 90.5c58.4 58.4 90.5 135.9 90.5 218.5S770 600.5 711.6 658.9s-135.9 90.5-218.4 90.5z m0-527.9c-58.5 0-113.5 22.8-154.8 64.1-41.4 41.4-64.1 96.3-64.1 154.8 0 58.5 22.8 113.5 64.1 154.8s96.3 64.1 154.8 64.1 113.5-22.8 154.8-64.1 64.1-96.3 64.1-154.8c0-58.5-22.8-113.5-64.1-154.8-41.4-41.4-96.3-64.1-154.8-64.1zM818 892.5H206c-24.9 0-45-20.1-45-45s20.1-45 45-45h612c24.9 0 45 20.1 45 45s-20.1 45-45 45z" fill="#242F44" p-id="1699"></path></svg>
          <span>关于</span>
        </a>
      </div>
      <div class="search-box-friend-item">
        <el-dropdown v-show="flag">
              <span class="el-dropdown-link">
                <el-avatar :size="50" :src="avatarUrl" ></el-avatar>
              </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-user-solid"><router-link to="/userindex" class="router-span">个人中心</router-link></el-dropdown-item>
            <el-dropdown-item icon="el-icon-s-tools"><router-link to="/userdetil" class="router-span">账号设置</router-link></el-dropdown-item>
            <el-dropdown-item icon="el-icon-close">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown v-show="!flag">
              <span class="el-dropdown-link">
                <el-avatar :size="50" :src="avatarUrl" ></el-avatar>
              </span>
          <el-dropdown-menu v-show="flag" slot="dropdown">
            <el-dropdown-item icon="el-icon-user-login">点击登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "search",
  data(){
    return{
      flag:true,
      avatarUrl:''
    }
  }
}
</script>
<style scoped>
.search-container {
  height: 60px;
  border: 1px solid #cceff5;
  background: #fafcfd;
  box-shadow: 0 0 1px #333;
  margin: 5px;
  margin-bottom: 0px;
  color: #333;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.search-box {
  width: 320px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(243, 241, 219, 0.89);
  border-radius: 3px;
}



.search-box div:first-child {
  height: 40px;
  align-items: center;
  border-radius: 3px;
  background-color: rgba(243, 241, 219, 0.89);
  margin-left: 5px;
  line-height: 40px;

}


.search-box div:nth-child(1) input {
  border-radius: 3px;
  color: rgba(37, 34, 34, 0.6);
  font-size: 16px;
  background-color: rgba(243, 241, 219, 0.89);
  /*margin-left: 5px;*/
  outline: none;
  width: 260px;
  height: 28px;
  border: none;
}

.search-box div:nth-child(1) input:focus {
  background-color: rgba(114, 109, 109, 0.16);
}

.search-box div:nth-child(1) input:hover {
  background-color: rgba(114, 109, 109, 0.16);
}

.search-box div:nth-child(2) {
  width: 32px;
  height: 32px;
  align-items: center;
  background-color: rgba(243, 241, 219, 0.89);

}

.search-box div:nth-child(2):hover {
  border-radius: 3px;
  background-color: rgba(114, 109, 109, 0.16);
  cursor:pointer;
}

.search-box-friend {
  display: flex;
  flex-direction: row;
}

.search-box-friend a {
  text-decoration: none;
  color: #606266;
  font-size: 13px;
}

.search-box-friend-item {
  margin-left: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}


.el-dropdown-link-item span{
  position: relative;
  bottom: 2px;
}

.search-box-friend div:nth-child(5) a {
  text-decoration: none;
  color: #606266;
  font-size: 13px;
}

.router-span  {
  text-decoration: none;
  color: #606266;
  font-size: 13px;
}

.router-span:hover {
  color: #3f9dfe;
}




</style>