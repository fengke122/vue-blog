<template>
    <div id="ManagerIndex-body">
        <el-container>
            <el-header>
                <el-row>
                    <el-col :span="22">
                        <div class="grid-content bg-purple">
                            <h2 align="center">管理员中心</h2>
                        </div>
                    </el-col>
                    <el-col :span="2">
                        <div class="grid-content bg-purple-light">
                            <!-- 头像 -->
                            <template>
                                <div class="demo-type">
                                    <div>
                                        <el-avatar
                                            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                                        <el-dropdown trigger="click">
                                            <span class="el-dropdown-link">
                                                <i class="el-icon-arrow-down el-icon--right"></i>
                                            </span>
                                            <el-dropdown-menu slot="dropdown">
                                                <a href="/logout"><el-dropdown-item
                                                        icon="el-icon-close">退出登录</el-dropdown-item></a>
                                            </el-dropdown-menu>
                                        </el-dropdown>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </el-col>
                </el-row>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu default-active="/managerIndex" background-color="#545c64" text-color="#fff"
                        active-text-color="#11f8af" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                        router>
                        <el-menu-item index="/managerIndex">
                            <i class="el-icon-s-custom"></i>
                            <span slot="title">用户管理</span>
                        </el-menu-item>

                        <el-menu-item index="/managerIndex/blogsList">
                            <i class="el-icon-edit"></i>
                            <span slot="title">博客审核</span>
                        </el-menu-item>

                        <el-submenu class="menu-item_child" index="/managerIndex/blogsManage" default-active="/managerIndex/blogsManage">
                            <template slot="title"><i class="el-icon-tickets"></i> 文章管理</template>
                            <el-menu-item index="/managerIndex/blogsManage">文章列表</el-menu-item>
                            <el-menu-item index="/managerIndex/blogsClassification">分类管理</el-menu-item>
                            <el-menu-item index="/managerIndex/blogsTags">标签管理</el-menu-item>
                            <el-menu-item index="/managerIndex/blogsPublish">博客发布</el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view> </router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    name: 'ManagerIndex',
    data() {
        return {
            circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
            sizeList: ["large", "medium", "small"],
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}

</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    list-style: none;
}


#ManagerIndex-body {
    width: 100%;
    height: 100vh;
}

h2 {
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: azure;
}


div /deep/ .header-css {
    text-align: center;
    color: rgb(101, 103, 97);

}

div /deep/ .cell-center {
    text-align: center;
    font-size: 8px;
    color: rgb(96, 92, 92);
}

.el-header {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 60px;
    border: 1px solid rgba(133, 126, 125, 0.915);
}

.el-aside {
    background-color: #545c64;
    border-radius: 5px;
    margin-top: 10px;
    text-align: center;
    line-height: 200px;
}

.el-main {
    margin: 10px 40px;
    color: #524f4f;
    text-align: center;
    background-color: rgba(233, 233, 233, 0.98);
    border-radius: 5px;
}

body>.el-container {
    margin-bottom: 40px;
}

/* 消除侧边导航栏出现滚动条 */
.el-aside::-webkit-scrollbar {
    display: none;
}

.demo-type>div {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.el-menu-item {
    padding-left: 0 !important;
}

.el-submenu .el-menu-item {
    padding: 0;
}

a {
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(255, 0, 0, 0);
}

.router-link {
    text-decoration: none;
    color: #409EFF;
    ;
}

.el-dropdown-link {
    color: azure;
    margin-left: 5px;
}


</style>