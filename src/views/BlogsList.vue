<template>
    <div class="blogs">
        <ul class="nav">
            <li v-for="(item,index) in navs" :class="{active:index==active}" 
                @click="handleClassify(index)" :key="index">
                {{item}}
            </li>
        </ul>
       
        <el-dialog title="内容详情" :visible.sync="dialogVisible" width="60%">
            <span class="context">{{ text }}</span>
            <span slot="footer" class="dialog-footer">
                <el-button type="success el-icon-check" :v-model="bid" @click="handlePass(bid)">通过审核</el-button>
                <el-button type="danger el-icon-close" :v-model="bid" @click="handleFail(bid)">不通过</el-button>
            </span>
        </el-dialog>
        <ul class="list">

            <li v-for="item in BlogsList" :key="item.bid" class="item" @click="open(item.context, item.bid)">
                <div class="content">

                    <h5 class="title">{{ item.title }}</h5>
                    <p class="context">{{ item.context }}</p>
                    <div class="meta">
                        <span>作者：{{ item.name}}</span>
                        <span v-if="item.addtime" class="time">发布时间：{{ item.addtime }}</span>
                        <span>赞：{{ item.hot }}</span>
                        <el-tag>#{{ item.tag }}</el-tag>
                        <el-tag>#{{ item.code }}</el-tag>
                    </div>
                </div>
            </li>
        </ul>
        <div class="pagination">
            <Pagination :total="total" @CurrentChange="currentChange" :current-page="currentPage"></Pagination>
        </div>
    </div>
</template>


<script>
import Pagination from '@/components/Pagination';
export default {
    components: {
        Pagination
    },
    name: "BlogsList",
    data() {
        return {
            navs:['全部博客','待审核','审核通过','审核未通过'],
            active: "0",
            status: 0,
            bid: 0,
            text: '', //博客详情
            dialogVisible: false, //博客详情页
            total: 1,
            currentPage: 1,
            BlogsList: []
        }
    },
    mounted() {
        this.assignment(0)
        // this.getBlogsList(1)
    },
    methods: {
        //改变状态
        //发送：博客id：bid、当前状态：（0所有博客 1代审核 2通过审核 3未通过）
        //得到：status
        check(bid,status){
            this.$http({
                method:'post',
                url:'http://localhost:7788/check',
                params:{
                    bid:bid,
                    status:status
                }
            }).then(res=>{
                if(res.data.status===200){
                    this.assignment(this.status);
                }  
                
            }).catch(err=>{
                console.log(err.msg);
            })

        },

        handlePass(bid) {
            this.$confirm('确认通过审核？')
                .then(_ => {
                    this.check(bid,1);
                    console.log("Ss", bid);
                    this.dialogVisible = false

                })
                .catch(_ => { });
        },
        handleFail(bid) {
            this.$confirm('确认不通过审核？')
                .then(_ => {
                    console.log("Ssnn", bid);
                    this.check(bid,2);
                    this.dialogVisible = false;
                })
                .catch(_ => { });
        },
        //打开博客内容
        open(text, bid) {
            this.text = text;
            this.bid = bid;
            console.log(bid);
            this.dialogVisible = true
        },

        // 页面跳转
        currentChange(val) {
            this.currentPage = val;
            this.assignment(this.status)
        },

        handleClassify(status) {
            this.active= status;
            this.currentPage = 1;
            this.assignment(status);
        },

        //发送：状态isalive、页码：page
        //得到：博客信息列表（包括作者名）、数据总大小
        assignment(status) {
            this.status = status;
            this.$http({
                method: 'get',
                url: 'http://localhost:7788/assignment',
                params: {
                    page: this.currentPage,
                    isalive: status
                }
            }).then(res => {
                this.BlogsList = res.data.data;
                console.log(res.data.data);
                this.total = res.data.total;
            }).catch(err => {
                console.log(err);
            })

        },

        //获取博客列表
        // getBlogsList(){
        //     this.$http({
        //         method:'get',
        //         url:'http://localhost:7788/getBlogs',
        //         params:{
        //             page:this.currentPage
        //         }
        //     }).then(res=>{
        //         this.BlogsList = res.data.data;
        //         console.log(res.data.data);
        //         this.total = res.data.total;
        //     }).catch(err=>{
        //         console.log(err);
        //     })
        // },


    },
}
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
    list-style: none;
}

.blogs {
    padding: 10px 30px;
    text-align: left;
}

.item {
    background-color: rgb(245, 246, 247);
    border: #33333321 solid 1px;
    padding: 5px 20px;
    margin-bottom: 10px;
}

.item:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}


.title {
    color: #373131;
    margin: 5px 0 7px;
    font-size: 18px;
    line-height: 1.5;
}

.context {
    background-color: #79767600;
    border: none;
    width: 100%;
    margin: 4px 0 4px;
    font-size: 14px;
    max-height: 40px;
    color: #797676;
    overflow: hidden;
}

.meta {
    font-size: 12px;
    line-height: 18px;
}

.meta>span {
    font-size: 8px;
    margin-right: 12px;
}

.meta .el-tag {
    margin-right: 12px;
    padding: 0 5px;
}

span.context {
    line-height: 30px;
}

.nav {
    background-color: rgb(245, 246, 247);
    padding: 0 20px;
    height: 44px;
    margin-bottom: 10px;
}

.nav>li {
    line-height: 30px;
    margin-right: 15px;
    float: left;
    font-size: 14px;
    padding: 7px 0;
}

.active{
    color: rgb(93, 154, 245);
}

.nav>li :hover{
    background-color: #7976766d;
}

.dialog-footer>.el-button {
    padding: 7px 5px;
}
</style>
