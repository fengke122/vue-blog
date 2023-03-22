<template>
  <div class="m-content">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="标题" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>

      <el-form-item label="摘要" prop="description">
        <el-input type="textarea" v-model="ruleForm.description"></el-input>
      </el-form-item>
      <el-form-item>
        <el-select v-model="ruleForm.tagname" placeholder="请选择分类">
          <el-option
              v-for="item in ruleForm.options2"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-select v-model="ruleForm.classname" placeholder="请选择分类">
          <el-option
              v-for="item in ruleForm.options2"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="内容" prop="context">
        <mavon-editor
            v-model="ruleForm.context"
            ref="md"
            @imgAdd="imgAdd"
            @imgDel="imgDel"
            @save="saveMavon"
        ></mavon-editor>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>
<script>
export default {
  name: "UserBlogEdit",
  data() {
    return {
      ruleForm: {
        bid:'',
        id: '',
        title: '',
        tagname: '',
        classname: '',
        description: '',
        context: '',
        hot: '',
        isalive:'',
        options: [{
          value: '选项1',
          label: 'Vue'
        }, {
          value: '选项2',
          label: 'Git'
        }, {
          value: '选项3',
          label: 'HTML5'
        }, {
          value: '选项4',
          label: 'Java'
        }, {
          value: '选项5',
          label: 'Webpack'
        }],
        options2: [{
          value: '选项1',
          label: 'Vue'
        }, {
          value: '选项2',
          label: 'Java'
        }, {
          value: '选项3',
          label: 'SpringBoot'
        }]
      },
      rules: {
        title: [
          {required: true, message: '请输入标题', trigger: 'blur'},
          {min: 3, max: 25, message: '长度在 3 到 25 个字符', trigger: 'blur'}
        ],
        description: [
          {required: true, message: '请输入摘要', trigger: 'blur'}
        ],
        context: [
          {trequired: true, message: '请输入内容', trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    saveMavon(value,render){

      console.log("this is render"+render);
      console.log("this is value"+value);
      console.log(this.$refs.md.d_render);
    },
    // 将图片上传到服务器，返回地址替换到md中
    imgAdd(pos, $file) {
      var _this = this
      var formdata = new FormData();
      formdata.append('image', $file);
      this.$http.post("/api/upload",formdata,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((response) => {
        // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
        if (response.status === 200) {
          var url = response.data.data;
          _this.$refs.md.$img2Url(pos,url)
        }
      })
    },
    imgDel(pos) {

    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {

          const _this = this
          this.$http.post('/user/updateBlog', this.ruleForm, {
            headers: {
              "Authorization": localStorage.getItem("token")
            }
          }).then(res => {
            console.log(res)
            _this.$alert('操作成功', '提示', {
              confirmButtonText: '确定',
              // callback: action => {
              //   _this.$router.push("/blogs")
              // }
            });

          })

        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  created() {
    const blogId = this.$route.params.blogId
    console.log(blogId)
    const _this = this
    if (blogId) {
      this.$http.get('/blog/' + blogId).then(res => {
        const blog = res.data.data
        _this.ruleForm.id = blog.id
        _this.ruleForm.title = blog.title
        _this.ruleForm.description = blog.description
        _this.ruleForm.context = blog.context
      })
    }

  }
}

</script>
<style scoped>
.m-content {
  text-align: center;
}
</style>