<template>
    <div class="BlogsTags">
      <div class="operate">
        <el-button size="mini" @click="addTag"> 新增 </el-button>
        <el-button size="mini" @click="deletePatch"> 批量删除 </el-button>
      </div>
      <el-table cell-class-name="cell-center" header-cell-class-name="header-css" ref="multipleTable" :data="tableData"
        tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column prop="tagname" label="标签名" width="120">
        </el-table-column>
        <el-table-column prop="tagnum" label="文章数">
        </el-table-column>
        <el-table-column label="创建时间" width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
  
        <el-table-column align="right">
          <template slot="header" slot-scope="scope">
            <el-input v-model="search" size="mini" placeholder="输入关分类名" @change="searchTag"/>
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
  name: 'BlogsTags',
  //引入分页插件
  components: {
    Pagination
  },
  data() {
      return {
        total: 12,  //总条数
      currentPage: 1, //当前页码
        tableData: [{
          tid:1,
          tagname:'nodejs',
          tagnum:13,
          date: '2016-05-02',
        }, {
          tid:2,
          tagname:'nodejs',
          tagnum:13,
          date: '2016-05-02',
        },{
          tid:3,
          tagname:'nodejs',
          tagnum:13,
          date: '2016-05-02',
        }, {
          tid:4,
          tagname:'nodejs',
          tagnum:13,
          date: '2016-05-02',
        },{
          tid:5,
          tagname:'nodejs',
          tagnum:13,
          date: '2016-05-02',
        }, {
          tid:6,
          tagname:'nodejs',
          tagnum:13,
          date: '2016-05-02',
        },{
          tid:7,
          tagname:'nodejs',
          tagnum:13,
          date: '2016-05-02',
        }, {
          tid:8,
          tagname:'nodejs',
          tagnum:13,
          date: '2016-05-02',
        },{
          tid:9,
          tagname:'nodejs',
          tagnum:13,
          date: '2016-05-02',
        }, {
          tid:10,
          tagname:'nodejs',
          tagnum:13,
          date: '2016-05-02',
        },{
          tid:11,
          tagname:'nodejs',
          tagnum:13,
          date: '2016-05-02',
        }, {
          tid:12,
          tagname:'nodejs',
          tagnum:13,
          date: '2016-05-02',
        },],
        search:'',
        tid:[],
        multipleSelection:[],
      }
    },
    mounted() {
    this.getTagsList(1);
  },
  
  methods: {
    //获取标签列表裂口
    getTagsList(num){
      this.$http({
        method:'get',
        url:'/admin/tagSet',
        params:{
          num:num,
          tagname:this.search
        }
      }).then(res=>{
        this.tableData = res.data.data;
        this.total = res.data.total;

      }).catch(err=>{
        console.log(err);
      })

    },
    

    // 新增接口
    insertTag(tagname) {
      this.$http({
        method:'get',
        url:'/admin/addTag',
        params:{
          tagname:tagname
        }
      }).then(res=>{
        if(res.data.code=200){
          this.$message({
            type: 'success',
            message: '新增标签成功!'
          });
          this.getTagsList(this.currentPage);
        }
      }).catch(err=>{
        console.log(err);
      })

    },

    //删除接口
    deleteTag(){
      this.$http({
        method:'post',
        url:'/admin/delBantchTag',
        params:{
          tid:this.tid
        }
      }).then(res=>{
        if(res.data.code=200){
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.getTagsList(this.currentPage);
        }
      }).catch(err=>{
        console.log(err);
      })
      this.tid=[];
    },

    //新增
    addTag(){
      this.$prompt('请输入新的标签名', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: '格式不正确'
      }).then(({ value }) => {
        this.insertTag(value)
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
            this.tid.push(this.multipleSelection[i].tid)
            // this.deleteTag(this.multipleSelection[i].tid);
          }
          this.deleteTag();
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    },
    //搜索
    searchTag(){
      this.currentPage=1;
      this.getTagsList(1);
    },
    // 选中
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    //页码跳转
    currentChange(val) {
      this.currentPage = val;
      this.getTagsList(val);
    },
    handleDelete(row) {
      this.tid.push(row.tid);
      this.deleteTag(this.tid);
    }
  }
}
</script>
<style scoped>
    .BlogsTags{
      height: auto;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      padding: 10px 30px;
    }
  
    .operate>.el-button{
      margin: 10px 5px;
      float: left;
    }
</style>