<template>
  <div>

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="博客标题" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="博客摘要" prop="description">
        <el-input type="textarea" v-model="ruleForm.description"></el-input>
      </el-form-item>
      <el-form-item label="博客正文" prop="content">
        <mavon-editor
            v-model="ruleForm.content"
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
  name: "AddBlog",

  data() {
    return {
      ruleForm: {
        title: '',
        description: '',
        content: '',
        html: ''
      },
      rules: {
        title: [
          { required: true, message: '请输入博客标题', trigger: 'blur' },
          { min: 3, max: 25, message: '长度在 3 到 25 个字符', trigger: 'blur' }
        ],
        description: [
          { required: true, message: '请简述博客内容', trigger: 'change' }
        ],
        content: [
          { required: true, message: '请输入博客正文', trigger: 'change' }
        ],
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
      this.$http.post("/blog/upload",formdata,{
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
          _this.ruleForm.content = _this.$refs.md.d_value;
          this.$http.post("/blog/add",this.ruleForm,{
            headers: {
              "Authorization": localStorage.getItem("token")
            }
          })
          // _this.$router.push("/userIndex")
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped>

</style>
