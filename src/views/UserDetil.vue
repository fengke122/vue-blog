<template>
    <div id = "form" >
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  status-icon size="mini" hide-required-asterisk class="demo-ruleForm" >
            <el-form-item prop="image" label-width="0">
                <el-upload
                        class="avatar-uploader photo"
                        action="/api/upload"
                        name="file"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                    <img v-if="ruleForm.image" :src="ruleForm.image"  class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"><br>上传头像</i>
    
                </el-upload>
            </el-form-item>
    
            <el-form-item  prop="username">
                <el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item prop="phone" >
                <el-input v-model="ruleForm.phone" placeholder="手机号"></el-input>
            </el-form-item>
            <el-form-item prop="email" >
                <el-input v-model="ruleForm.email" placeholder="邮箱号"></el-input>
            </el-form-item>
            <el-form-item  prop="language">
                <el-select
                        filterable allow-create collapse-tags
                        v-model="ruleForm.language"
                        placeholder="请选择编程语言">
                    <el-option v-for="item in options1"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"></el-option>
                </el-select>
            </el-form-item>
    
            <el-form-item  prop="job">
            <el-cascader v-model="ruleForm.job"
                         placeholder="工作岗位"
                         :options="options2"
                         :props="{ expandTrigger: 'click' }"></el-cascader>
            </el-form-item>
            <el-form-item >
                <el-button @click="submitForm('ruleForm')" class="button">
                        <div class="svg-wrapper-1">
                            <div class="svg-wrapper">
                                <i class="el-icon-s-promotion svg">
                                </i>
                            </div>
                            <span class="span">Submit</span>
                        </div>
    
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default{
        name:"UserDetil",
        data() {
			return {
				ruleForm: {
					image:'',
					username: '',
					phone: '',
					email: '',
					language: [],
					job: []
				},
				options1:[{
					value: 'JAVA',
					label: 'JAVA'
				}, {
					value: 'Python',
					label: 'Python'
				}, {
					value: 'C++',
					label: 'C++'
				}, {
					value: 'C语言',
					label: 'C语言'
				}, {
					value: 'PHP',
					label: 'PHP'
				}, {
					value: 'C#',
					label: 'C#'
				}, {
					value: 'R',
					label: 'R'
				}, {
					value: 'JavaScript',
					label: 'JavaScript'
				}, {
					value: 'Go',
					label: 'Go'
				}, {
					value: 'SQL',
					label: 'SQL'
				}, {
					value: 'MATLAB',
					label: 'MATLAB'
				}, {
					value: '汇编语言（Assembly Language）',
					label: '汇编语言（Assembly Language）'
				}],

				options2:[{
				value: '后端开发',
				label: '后端开发',
				children: [{
					value: 'JAVA',
					label: 'JAVA'
				}, {
					value: 'C++',
					label: 'C++'
				}, {
					value: 'PHP',
					label: 'PHP'
				}, {
					value: 'golang',
					label: 'golang'
				}, {
					value: '安全工程师',
					label: '安全工程师'
				}, {
					value: '游戏后端',
					label: '游戏后端'
				}, {
					value: '区块链',
					label: '区块链'
				}, {
					value: '信息技术岗',
					label: '信息技术岗'
				},{
					value: 'C工程师',
					label: 'C工程师'
				},{
					value: 'C#工程师',
					label: 'C#工程师'
				},{
					value: '.NET',
					label: '.NET'
				},{
					value: 'Delphi',
					label: 'Delphi'
				},{
					value: 'GIS工程师',
					label: 'GIS工程师'
				},{
					value: 'VB',
					label: 'VB'
				},{
					value: 'Perl',
					label: 'Perl'
				},{
					value: 'Ruby',
					label: 'Ruby'
				},{
					value: 'Node.js',
					label: 'Node.js'
				},{
					value: '语音/视频/图形开发',
					label: '语音/视频/图形开发'
				},{
					value: '全栈开发',
					label: '全栈开发'
				},]
			}, {
				value: '前端开发',
				label: '前端开发',
				children: [{
					value: '前端工程师',
					label: '前端工程师'
				}, {
					value: 'Web前端',
					label: 'Web前端'
				}, {
					value: '游戏前端',
					label: '游戏前端'
					}]
				}, {
					value: '客户端开发',
					label: '客户端开发',
					children: [{
						value: '安卓开发',
						label: '安卓开发'
					}, {
						value: 'iOS开发',
						label: 'iOS开发'
					}, {
						value: '移动开发',
						label: '移动开发'
					}, {
						value: 'Unity 3D客户端',
						label: 'Unity 3D客户端'
					}, {
						value: 'UE4',
						label: 'UE4'
					}, {
						value: 'COCOS2DX',
						label: 'COCOS2DX'
					}, {
						value: '引擎开发',
						label: '引擎开发'
					}]
				},{
					value: '测试',
					label: '测试',
					children: [{
						label: '测试工程师',
						value: '测试工程师'
					},{
						label: '测试开发',
						value: '测试开发'
					},{
						label: '游戏测试',
						value: '游戏测试'
					},{
						label: '硬件测试',
						value: '硬件测试'
					},{
						label: '软件测试',
						value: '软件测试'
					},{
						label: '自动化测试',
						value: '自动化测试'
					},{
						label: '其它测试',
						value: '其它测试'
					},{
						label: '测试开发',
						value: '测试开发'
					}]
				},{
					label: '数据',
					value: '数据',
					children: [{
						label: '数据分析师',
						value: '数据分析师'
					},{
						label: '数据库工程师',
						value: '数据库工程师'
					},{
						label: '大数据开发工程师',
						value: '大数据开发工程师'
					},{
						label: '数据架构师',
						value: '数据架构师'
					},{
						label: 'ETL工程师',
						value: 'ETL工程师'
					},{
						label: '数据采集',
						value: '数据采集'
					},{
						label: '数据仓库',
						value: '数据仓库'
					},{
						label: 'Hadoop',
						value: 'Hadoop'
					},{
						label: 'DBA',
						value: 'DBA'
					},]
				}],
				//用户名，手机号，邮箱号的正则表达式
				rules: {
					username: [
						{required: true, message: '请输入用户名', trigger: 'blur'},
						{min: 2, max: 6, message: '长度在 2 到 6 个字符', trigger: 'blur'},
						{message: '只能输入中英文和数字', pattern: /^[A-Za-z0-9\u4e00-\u9fa5]{0,7}$/, trigger: 'blur'}
					],
					phone:[
						{required: true, message: '请输入手机号', trigger: 'blur'},
						{message: '手机号格式不正确', pattern: /^(13[0-9]|14[0-9]|15[0-9]|16[6]|18[0-9]|19[6,9]|17[0-9])\d{8}$/i, trigger: 'blur'}
					],
					email: [
						{required: true, message: '请输入邮箱', trigger: 'blur'},
						{message: '邮箱格式不正确', pattern: /^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/, trigger: 'blur'}
					]
				},
			}},
		methods: {
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
			handleAvatarSuccess(res, file) {
				this.ruleForm.image = URL.createObjectURL(file.raw);
			},
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				const isLt4M = file.size / 1024 / 1024 < 4;
				if (!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
				}
				if (!isLt4M) {
					this.$message.error('上传头像图片大小不能超过 4MB!');
				}
				return isJPG && isLt4M;
			},
			//提交表单内容
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.get('/user/firstSaveUserDetail', {
              params: {
                image: this.ruleForm.image,
                username: this.ruleForm.username,
                phone: this.ruleForm.phone,
                email: this.ruleForm.email,
                code: String(this.ruleForm.language),
                job: String(this.ruleForm.job[1])
              }
            }).then((response) => {
              this.$message('ok!');
            }).catch((error) => {
              console.log(error);
            });
          } else {
            alert('error submit!!');
            return false;
          }
        });
      },
		}
        }
</script>


<style scoped>

#form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background:  url("~@/assets/img/bg6.jpg") no-repeat;
    background-size: cover;
  }

@keyframes form-come {
    from{
        transform: translateX(200%);
    }
    to{
        transform: translateX(0);
    }
}


.el-form{
    border: 1px seashell solid;
    border-radius: 3px;
    height: 85%;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top: 1px solid rgba(255,255,255,0.2);
    border-left: 1px solid rgba(255,255,255,0.2);
    border-bottom: 1px solid rgba(255,255,255,0.2);
    border-right: 1px solid rgba(255,255,255,0.2);
    backdrop-filter: blur(20px);
}


div.avatar-uploader.photo{
	border: 1px dashed rgb(14, 10, 10);
    border-radius: 50%;
    cursor: pointer;
    overflow: hidden;
    text-align: center;
    margin: auto;
}

div.avatar-uploader.photo:hover{
	border: 1px dashed rgba(227, 51, 121, 0.977);
}

.avatar-uploader-icon {
    font-size: 10px;
    color: #9fa2a6;
    width: 80px;
    height: 40px;
    line-height: 20px;
    margin: 20px auto;
}
.avatar {
    width: 80px;
    height: 80px;
    display: block;
}

div.el-input.el-input--mini,div.el-select.el-select--mini,div.el-cascader.el-cascader--mini{
    width: 200px;
}


.button{
    font-family: Consolas;
    margin-top: 15px;
    font-size: 14px;
    background: rgba(208, 156, 124, 0.406);
    padding: .2em 1em;
    color: white;
    display: flex;
    border: none;
    border-radius: 14px;
    overflow: hidden;
    transition: all 0.2s;
}

.button .svg-wrapper{
    display: inline-block;
}

.button:hover{
    background-color: rgb(246, 246, 246);
    color: rgb(0, 114, 235);
}

.button .span {
    display: inline-block;
    height: 24px;
    line-height: 24px;
    transition: all 0.3s ease-in-out;
}

.button .svg {
    display: inline-block;
    margin-top: 8px;
    transition: transform 0.3s ease-in-out;
}

.button:hover .svg-wrapper {
    animation: fly-1 0.6s ease-in-out infinite alternate;
}

.button:hover .svg {
    transform: translateX(1.8em) rotate(45deg) scale(1.1);
}

.button:hover .span {
    transform: translateX(10em);
}

@keyframes fly-1 {
    from {
        transform: translateY(0.1em);
    }

    to {
        transform: translateY(-0.1em);
    }
}

</style>