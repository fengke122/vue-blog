<template>
  <div class="m-content">
    <search></search>
    <div class="contanier">
      <div class="main">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="标题" prop="title">
            <el-input v-model="ruleForm.title"></el-input>
          </el-form-item>

          <div id="selectbox">
            <el-form-item>
              <el-select v-model="ruleForm.tagname" placeholder="请选择分类">
                <el-option
                    v-for="item in ruleForm.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-select v-model="ruleForm.classname" placeholder="请选择标签">
                <el-option
                    v-for="item in ruleForm.options2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>


          <el-form-item label="内容" prop="context">
              <mavon-editor
                  v-model="ruleForm.context"
                  :toolbars="ruleForm.toolbars"
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
    </div>



  </div>
</template>
<script>
import search from "@/components/search.vue";
export default {
  name: "UserBlogEdit",
  components:{
    search
  },
  data() {
    return {
      ruleForm: {
        title: '',
        tagname: '',
        classname: '',
        context: '',
        hot: '',
        addtime:'',
        isalive:'',
        toolbars: {
          bold: true, // 粗体
          italic: true, // 斜体
          header: true, // 标题
          underline: true, // 下划线
          strikethrough: true, // 中划线
          mark: true, // 标记
          superscript: true, // 上角标
          subscript: true, // 下角标
          quote: true, // 引用
          ol: true, // 有序列表
          ul: true, // 无序列表
          link: true, // 链接
          imagelink: true, // 图片链接
          code: true, // code
          table: true, // 表格
          fullscreen: true, // 全屏编辑
          readmodel: true, // 沉浸式阅读
          htmlcode: true, // 展示html源码
          help: true, // 帮助
          undo: true, // 上一步
          redo: true, // 下一步
          trash: true, // 清空
          save: true, // 保存（触发events中的save事件）
          navigation: true, // 导航目录
          alignleft: true, // 左对齐
          aligncenter: true, // 居中
          alignright: true, // 右对齐
          subfield: true, // 单双栏模式
          preview: true // 预览
        },
        options: [{
          value: 'Vue',
          label: 'Vue'
        }, {
          value: 'Git',
          label: 'Git'
        }, {
          value: 'HTML5',
          label: 'HTML5'
        }, {
          value: 'Java',
          label: 'Java'
        }, {
          value: 'Webpack',
          label: 'Webpack'
        }],
        options2: [{
          value: 'Vue',
          label: 'Vue'
        }, {
          value: 'Java',
          label: 'Java'
        }, {
          value: 'SpringBoot',
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
      formdata.append('file', $file);
      this.$http.post("/api/upload",formdata,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((response) => {
        // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
          var url = response;
          _this.$refs.md.$img2Url(pos,url)
      })
    },
    imgDel(pos) {

    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {

          const _this = this
          const { title, tagname,classname,context,hot,isalive,addtime } = this.ruleForm; // 获取需要提交的数据
          const formData =  { title, tagname,classname,context,hot,isalive,addtime }; // 构造提交的数据对象
          this.$http.post('/user/updateBlog', formData, {
            headers: {
              "Authorization": localStorage.getItem("token")
            }
          }).then(res => {
            console.log(res)
            _this.$alert('操作成功', '提示', {
              confirmButtonText: '确定',
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
}

</script>
<style scoped>
.m-content {
  text-align: center;
}

.contanier {
  height: 902px;
  background: url("~@/assets/img/bg8.jpg");
  background-size: cover;
}
.main {
  height: 700px;
  margin: 0 300px;
  position: relative;
  top: 80px;
  background-color: #FFFFFF;
  border-radius: 1rem;
  padding-top: 50px;
  padding-right: 20px;
}



#selectbox {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.markdown-body {
  height: 500px;
}
</style>