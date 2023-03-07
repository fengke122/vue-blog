<template>
    <div>
        <el-pagination
        hide-on-single-page
        :background="true"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size=10
        layout="total, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
</template>

<script>
  export default {
    props:{
        //总条数
        total:{
            typeof:Number,
            default:1
        },
        //页面大小（每页条数）
        // pageSize:{
        //     typeof:Number,
        //     default:10
        // },
        // 当前页码
        currentPage:{
          typeof:Number,
          default:1
        }
    },
    methods: {
      handleCurrentChange(val) {
        //向父组件传递参数
        this.$emit('CurrentChange',val)
      }
    }
  }
</script>
