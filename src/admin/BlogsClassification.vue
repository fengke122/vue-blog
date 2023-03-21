<template>
  <div class="BlogsClassification">

    <div class="operate">
      <el-button size="mini" @click="addClass"> 新增 </el-button>
      <el-button size="mini" @click="deletePatch"> 批量删除 </el-button>
    </div>
    <el-table cell-class-name="cell-center" header-cell-class-name="header-css" ref="multipleTable" :data="tableData"
      tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="classname" label="分类名" width="120">
      </el-table-column>
      <el-table-column prop="classnum" label="文章数">
      </el-table-column>
      <el-table-column label="创建时间" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>

      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关分类名" @change="searchClass" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)">Delete</el-button>
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
  name: 'BlogsClassification',
  //引入分页插件
  components: {
    Pagination
  },
  data() {
    return {
      total: 12,  //总条数
      currentPage: 1, //当前页码
      tableData: [{
        cid:1,
        classname: 'java',
        classnum: 12,
        date: '2016-05-02',
      }, {
        cid:2,
        classname: 'java',
        classnum: 12,
        date: '2016-05-02',
      }, {
        cid:3,
        classname: 'java',
        classnum: 12,
        date: '2016-05-02',
      }, {
        cid:4,
        classname: 'java',
        classnum: 12,
        date: '2016-05-02',
      }, {
        cid:5,
        classname: 'java',
        classnum: 12,
        date: '2016-05-02',
      }, {
        cid:6,
        classname: 'java',
        classnum: 12,
        date: '2016-05-02',
      }, {
        cid:7,
        classname: 'java',
        classnum: 12,
        date: '2016-05-02',
      },],
      search: '', //搜索分类名
      multipleSelection:[],//选中的item
      cid:[], //选中class的数组
      
    }
  },
  mounted() {
    this.getClassesList(1);
  },
  
  methods: {
    //获取分类列表
    getClassesList(num) {
      this.$http({
        method: 'get',
        url: '/admin/classSet',
        params: {
          classname: this.search,
          num: num
        }
      }).then(res => {
        this.tableData = res.data.data;
        this.total = res.data.total;
      }).catch(err => {
        console.log(err);
      })

    },

    //删除分类接口
    deleteClass() {
      this.$http({
        method: 'post',
        url: '/admin/delBantchClass',
        params: {
          cid: this.cid,
        },
      }).then(res => {
        if (res.data.code === 200) {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }
      }).catch(err => {
        console.log(err.msg);
      })
      this.cid = [];

    },

    //新增分类接口
    insertClass(classname){
      this.$http({
        method: 'get',
        url: '/admin/addClass',
          params: {
            classname: classname
          }
        }).then(res => {
          if (res.data.code === 200) {
            this.$message({
              message: '新增分类' + value + '成功！',
              type: 'success'
            });
          }
        }).catch(err => {
          console.log(err);
        })
    },

    // 新增分类
    addClass() {
      this.$prompt('请输入新的分类名', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: '格式不正确'
      }).then(({ value }) => {
        this.insertClass(value)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });
      });
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
            this.cid.push(this.multipleSelection[i].cid)
            console.log(this.multipleSelection[i].cid);
            // this.deleteClass(this.multipleSelection[i].classname)
          }
          this.deleteClass()
          loading.close();
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          loading.close();
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    },
    // 搜索
    searchClass(){
      this.currentPage=1;
      this.getClassesList(1);
    },

    // 选中
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    //页码跳转
    currentChange(val) {
      this.currentPage = val;
      this.getClassesList(val);
    },

    handleDelete(row) {
      this.cid.push(row.cid)
      this.deleteClass(this.cid)
    }
  }
}
</script>
<style scoped>
.BlogsClassification {
  height: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 10px 30px;
}

.operate>.el-button {
  margin: 10px 5px;
  float: left;
}
</style>