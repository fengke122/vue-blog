<template>
    <div id="UserList">
        <el-table class="usertable" cell-class-name="cell-center" header-cell-class-name="header-css"
            @sort-change="sortChange" :data="tableData" 
            style="width: 100%">
            <el-table-column label="用户编号" prop="id" width="100px">
            </el-table-column>
            <el-table-column label="注册日期" prop="addtime" sortable="custom" >
            </el-table-column>
            <el-table-column label="用户名">
                <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                        <p>密码: {{ scope.row.password }}</p>
                        <div slot="reference" class="name-wrapper">
                            <el-tag size="medium">{{ scope.row.name }}</el-tag>
                        </div>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column label="用户角色" prop="role" width="100px">
            </el-table-column>
            <el-table-column label="账号状态">
                <template slot-scope="scope">
                    <el-tag v-if="scope.row.isalive===1" >
                        活跃
                    </el-tag>
                    <el-tag v-if="scope.row.isalive===0" type="danger">
                        封禁
                    </el-tag>
                </template> 
            </el-table-column>
            <el-table-column align="right">
                <template slot="header" slot-scope="scope">
                    <el-input v-model="search" size="mini" placeholder="输入关键字搜索" 
                    suffix-icon="el-icon-search"  @change="searchName()" />
                </template>
                <template slot-scope="scope">
                    <el-button size="mini" type="danger" @click="handleBan(scope.row)" v-if="scope.row.isalive===1">封禁用户</el-button>
                    <el-button size="mini" @click="handleCancle(scope.row)" v-else>取消封禁</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination">
            <Pagination :total="total"   @CurrentChange="currentChange" :current-page="currentPage"></Pagination>
        </div>
    </div>
</template>

<script>
import Pagination from '@/components/Pagination';
export default {
    name: 'UserList',
    //引入分页插件
    components: {
        Pagination
    },
    data() {
        return {
            total: 1,  //总条数
            tableData: [], //表格数据
            search: '', //搜索关键词
            currentPage:1, //当前页码
            currentOrder:'',//当前排序方式
        }
    },
    mounted() {
        this.getUserList(1);
    },
    methods: {
        //是否封禁
        //发送： 用户id  用户应当修改的状态isalive
        // 得到 data.code===200?
        ifBan(id,isalive){
            this.$http({
                    method: 'get',
                    url: 'http://localhost:7788/ifban',
                    params: {
                        id: id,
                        isalive:isalive
                    }
                }).then(res => {
                    if (res.data.code === 200) {
                        this.getUserList(this.currentPage);
                        this.$message({
                            type: 'success',
                            message: '操作成功!',
                        });
                    }
                }).catch(error => {
                    this.$message({
                        type: 'info',
                        message: error
                    });
                })
        },

         //获取用户列表
        // 发送：页码page 搜索用户名name 排序方式order（ascending，descending null）
        // 得到：该页数据：data、数据总条数：total
        getUserList(page){
            this.$http({
                method:'get',
                url:'http://localhost:7788/orderUsers',
                params:{
                    name:this.search, //搜索关键词name
                    order:this.currentOrder, //排序方式
                    num:page, //当前页码
                }
            }).then(res=>{
                this.tableData = res.data.data;
                this.total = res.data.total;
            }).catch(error =>{
                console.log(error);
            })
        },
       
        // 排序发生变化
        sortChange({order}){
                this.currentOrder = {order}.order;
                this.currentPage=1;
                this.getUserList(1);
        },

        // 取消封禁
        handleCancle(row) {
            this.$confirm('是否取消封禁该用户, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                center: true
            }).then(() => {
                 this.ifBan(row.id,1)
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '取消失败!'
                });
            });;
        },
        //封禁
        handleBan(row) {
            this.$confirm('是否封禁该用户, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                center: true
            }).then(() => {
                 this.ifBan(row.id,0)
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '封禁失败!'
                });
            });;
        },

        //页码跳转
        currentChange(val) {
           this.currentPage = val;
           this.getUserList(val);
        },
        
        // 搜索用户
        searchName(){
            this.currentPage =1
            this.getUserList(1)
        },
       
}}


</script>

<style scoped>
#UserList {
    height: auto;
    padding-top: 20px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 30px;
}

.usertable {
    border-radius: 5px;
    width: 70%;
    height: auto;
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

.pagination {
    padding: 10px;
    background-color: aliceblue;
}
</style> 