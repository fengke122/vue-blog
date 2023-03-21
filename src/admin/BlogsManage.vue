<template>
    <div class="BlogsManage">
        <div class="top-filter">
            <div class="left">
                <el-button type="danger" class="el-icon-delete" size="mini" @click="deletePatch"> 批量删除 </el-button>
            </div>

            <div class="right">
                <el-select size="mini" v-model="classname" placeholder="请选择分类">
                    <el-option v-for="item in classes" :key="item.value" :label="item.value" :value="item.value">
                    </el-option>
                </el-select>
                <el-select size="mini" v-model="isalive" placeholder="请选择状态">
                    <el-option v-for="item in isalives" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <el-select size="mini" v-model="tag" placeholder="请选择标签">
                    <el-option v-for="item in tags" :key="item.value" :label="item.value" :value="item.value">
                    </el-option>
                </el-select>
                <el-input size="mini" placeholder="搜索文章名" v-model="search" style="width:200px"></el-input>
                <el-button class="el-icon-search" size="mini" @click="searchBlogs"> </el-button>
            </div>

        </div>
        <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" size="mini"
            cell-class-name="cell-center" header-cell-class-name="header-css" @selection-change="handleSelectionChange">

            <el-table-column type="selection" width="55">
            </el-table-column>

            <el-table-column prop="title" label="标题" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="class" label="分类" width="120">
            </el-table-column>

            <el-table-column label="标签">
                <template slot-scope="scope">
                    <el-tag size="medium">{{ scope.row.tag }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="hot" label="浏览量">
            </el-table-column>

            <el-table-column prop="addtime" label="发表时间">
            </el-table-column>

            <el-table-column label="置顶">
                <template slot-scope="scope">
                    <el-switch v-model="scope.row.isalive" active-color="#13ce66" inactive-color="#ff4949" active-value="5"
                        @change="iftop(scope.row)"> </el-switch>
                </template>
            </el-table-column>

            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination">
            <Pagination :total="total" @CurrentChange="currentChange" :current-page="currentPage"></Pagination>
        </div>
    </div>
</template>
<script>
import Pagination from '@/components/Pagination';
export default {
    name: 'BlogsManage',
    //引入分页插件
    components: {
        Pagination
    },
    data() {
        return {
            total: 18,  //总条数
            currentPage: 1, //当前页码
            search: '', //搜索文章关键字
            tableData: [{
                bid: 1,
                title: '王小虎',
                class: 'Java',
                tag: 'VUE',
                hot: '12',
                addtime: '2016-05-03',
                isalive: '1',
            }, {
                bid: 2,
                title: '王小虎',
                class: 'Java',
                tag: 'VUE',
                hot: '12',
                addtime: '2016-05-03',
                isalive: '1',
            }, {
                bid: 3,
                title: '王小虎',
                class: 'Java',
                tag: 'VUE',
                hot: '12',
                addtime: '2016-05-03',
                isalive: '3',
            }, {
                bid: 1,
                title: '王小虎',
                class: 'Java',
                tag: 'VUE',
                hot: '12',
                addtime: '2016-05-03',
                isalive: '5',
            }, {
                bid: 1,
                title: '王小虎',
                class: 'Java',
                tag: 'VUE',
                hot: '12',
                addtime: '2016-05-03',
                isalive: '5',
            }, {
                bid: 1,
                title: '王小虎',
                class: 'Java',
                tag: 'VUE',
                hot: '12',
                addtime: '2016-05-03',
                isalive: '2',
            }, {
                bid: 1,
                title: '王小虎',
                class: 'Java',
                tag: 'VUE',
                hot: '12',
                addtime: '2016-05-03',
                isalive: '5',
            }, {
                bid: 1,
                title: '王小虎',
                class: 'Java',
                tag: 'VUE',
                hot: '12',
                addtime: '2016-05-03',
                isalive: '5',
            }, {
                bid: 1,
                title: '王小虎',
                class: 'Java',
                tag: 'VUE',
                hot: '12',
                addtime: '2016-05-03',
                isalive: '5',
            }, {
                bid: 1,
                title: '王小虎',
                class: 'Java',
                tag: 'VUE',
                hot: '12',
                addtime: '2016-05-03',
                isalive: '5',
            },],
            classes: [],  //分类名的选项 从后端获取
            tags: [], //标签名选项 从后端获取
            isalives: [{
                value: '0',
                label: '全部'
            }, {
                value: '1',
                label: '未审核'
            }, {
                value: '2',
                label: '审核通过'
            }, {
                value: '3',
                label: '审核未通过'
            }, {
                value: '4',
                label: '置顶'
            },], //状态选项 默认为全部0
            //选择器的值
            classname: '',
            tag: '',
            isalive: '0',
            multipleSelection: [],
            bid: [], //博客bid数组
        }
    },

    mounted() {
        //初始化页面
        this.$http({
            method: 'get',
            url: '/admin/TagandClass',
        }).then(res => {
            this.classes = res.data.classes,
            this.tags = res.data.tags
        }).catch(err => {
            console.log(err.message);
        })
        this.getBlogList(1);
    },
    methods: {

        //获取文章列表
        getBlogList(num) {
            this.$http({
                method: 'get',
                url: '/admin/getAllBlog',
                params: {
                    num: num, //页码 int
                    isalive: this.isalive,//默认为0 int
                    tag: this.tag, //标签 string
                    class: this.classname, // string
                    title: this.search, // string
                }
            }).then(res => {
                this.tableData = res.data.data;
                this.total = res.data.total;
            }).catch(err => {
                console.log(err.msg);
            })
        },

        //删除博客
        deleteBlog() {
            this.$http({
                method: 'post',
                url: '/admin/DelBlog',
                params: {
                    bid: this.bid,
                },
            }).then(res => {
                if (res.data.code === 200) {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }
            }).catch(err => {
                this.$message({
                        type: 'info',
                        message: err
                    });
            })
            this.bid = [];
        },

        //改变状态 是否置顶
        setTop(isalive, bid) {
            this.$http({
                method: 'get',
                url: '/admin/changeBlog',
                params: {
                    isalive: isalive,
                    bid: bid,
                }
            }).then(res => {
                if (res.data.code === 200) {
                    this.$message({
                        message: '置顶成功!',
                        type: 'success'
                    });
                }
            }).catch(err => {
                console.log(err);
            })
        },

        //搜索博客
        searchBlogs() {
            this.currentPage = 1;
            this.getBlogList(1);
        },

        //置顶
        iftop(row) {
            console.log(row.id);
            if (row.isalive === '5') {
                this.setTop(2, row.id)
            }
            else {
                this.setTop(5, row.id)
            }
        },

        //批量删除
        deletePatch() {
            if (this.multipleSelection.length === 0) {
                this.$message({
                    message: '未选中任何博客！',
                    type: 'warning'
                });
            } else {
                this.$confirm('此操作将批量删除博客, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    for (var i = 0; i < this.multipleSelection.length; i++) {
                        this.bid.push(this.multipleSelection[i].bid)
                        // this.deleteBlog(this.multipleSelection[i].bid);
                    }
                    this.deleteBlog()
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消删除!'
                    });
                })
            }
        },
        //页码跳转
        currentChange(val) {
            this.currentPage = val;
            this.getBlogList(val);
        },

        //删除博客
        handleDelete(row) {
            this.$confirm('此操作将删除该博客, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.bid.push(row.bid);
                console.log(this.bid);
                this.deleteBlog();
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '取消删除!'
                });
            })
        },

        handleSelectionChange(val) {
            this.multipleSelection = val;
        },


    }
}
</script>
<style scoped>
.BlogsManage {
    padding: 10px 30px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}

.top-filter {
    margin: 10px 5px;
}

.top-filter>.left {
    float: left;
}

.top-filter>.right {
    float: right;
}

.right>.el-select {
    width: 120px;
}
</style>