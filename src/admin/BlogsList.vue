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
                <el-button type="success el-icon-check" :v-model="bid" @click="handlePass(bid)" v-if="isalive===2 || isalive===0">通过审核</el-button>
                <el-button type="danger el-icon-close" :v-model="bid" @click="handleFail(bid)" v-if="isalive===1 || isalive===0">不通过</el-button>
            </span>
        </el-dialog>
        <ul class="list">
           
            <li v-for="item in BlogsList" :key="item.bid" class="item" @click="open(item.context, item.bid, item.isalive)">
                <div class="content">
                    <h5 class="title">{{ item.title }}</h5>
                    <p class="context">{{ item.context }}</p>
                    <div class="meta" >
                        <span>作者Id：{{ item.id}}</span>
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
            bid: 0, //博客id
            text: '', //博客详情
            isalive:0,  //打开的博客状态
            dialogVisible: false, //博客详情页
            total: 1,  //数据总条数
            currentPage: 1, //当前页码
            BlogsList: [] //博客列表
        }
    },
    mounted() {
        this.assignment(0)
    },
    methods: {
        //博客审核
        //发送：博客id：bid  当前状态：isalive（0所有博客 1代审核 2通过审核 3未通过）
        //得到：status
        check(bid,status){
            this.$http({
                method:'post',
                url:'http://localhost:7788/check',
                params:{
                    bid:bid,
                    isalive:status
                }
            }).then(res=>{
                if(res.data.code===200){
                    this.assignment(this.status);
                }  
            }).catch(err=>{
                console.log(err.msg);
            })
        },
        //发送：状态isalive、页码：page
        //得到：博客信息列表、数据总大小
        assignment(status) {
            this.status = status;
            this.$http({
                method: 'get',
                url: 'http://localhost:7788/assignment',
                params: {
                    num: this.currentPage,
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

        //通过审核
        handlePass(bid) {
            this.$confirm('确认通过审核？')
                .then(_ => {
                    this.check(bid,1);
                    this.dialogVisible = false
                    this.$message({
                            type: 'success',
                            message: '已通过该博客!',
                        });
                })
                .catch(()=>{this.$message({
                    type: 'info',
                    message: '通过失败!'
                })
            });
            },
        //不通过审核
        handleFail(bid) {
            this.$confirm('确认不通过审核？')
                .then(_ => {
                    this.check(bid,2);
                    this.dialogVisible = false;
                    this.$message({
                            type: 'warning',
                            message: '已封禁该博客!',
                        });
                }).catch(()=>{this.$message({
                    type: 'info',
                    message: '封禁失败!'
                })
            });
        },
        //打开博客内容
        open(text, bid, isalive) {
            this.text = text;
            this.bid = bid;
            this.isalive = isalive;
            console.log(bid,isalive);
            this.dialogVisible = true
        },

        // 页面跳转
        currentChange(val) {
            this.currentPage = val;
            this.assignment(this.status)
        },

        //博客状态分类
        handleClassify(status) {
            this.active= status;
            this.currentPage = 1;
            this.assignment(status);
        },

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


.dialog-footer>.el-button {
    padding: 7px 5px;
}

</style>
