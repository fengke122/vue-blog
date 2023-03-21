<template>
    <div class="BlogsPublish" style="width:90%;margin:0 auto" size="mini" >
        <el-form ref="form" :model="Blogform">
            <el-form-item label="发布标题:">
                <el-col :span="12">
                    <el-input v-model="Blogform.title" size="mini"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item class="selects">
                    <span>分类：</span>
                    <el-select  v-model="Blogform.classname" placeholder="请选择" size="mini">
                        <el-option v-for="item in classes" :key="item.value" :label="item.value"
                            :value="item.value"></el-option>
                    </el-select>
                
                    <span>标签：</span>
                    <el-select v-model="Blogform.tagname" placeholder="请选择" size="mini" >
                        <el-option v-for="item in tags" :key="item.value" :label="item.value"
                            :value="item.value"></el-option>
                    </el-select>
            </el-form-item>
         

            <el-form-item>
                <mavon-editor  @change="handle" ></mavon-editor>
            </el-form-item>
            <el-form-item>
                <span class="inform">* 注：博客发布后需要等待管理员的审核，不可发布违规内容</span>
                <el-button type="primary" size="small" @click="submit">发布</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
  
<script>
export default {
    name: "BlogsPublish",
    data() {
        return {
            Blogform: {
                title: "",
                context: "",
                classname: "",
                tagname: ''
            },
            classes: [{
                value: '1ssssssssssssssssssssss2'
            }, {
                value: '1q2'
            }, { 
                value: '1wq2' 
            }, {
                 value: '12'
            }, {
             value: '14s32' },],
            tags: [{
                value: '1sss2'
            }, {
                value: '1qsss2'
            }, { 
                value: '1wsssq2' 
            }, {
                 value: '1swqdass2'
            }, {
             value: '143sss2' },],
        };
    },
    mounted() { 
        this.$http({
            method: 'get',
            url: '/admin/TagandClass',
        }).then(res => {
            this.classes = res.data.classes,
            this.tags = res.data.tags
        }).catch(err => {
            console.log(err.message);
        })
    },
    methods: {
        handle(value, render) {
            console.log(value, render);
            this.Blogform.context=render
            
        },
        submit() {
           this.$http({
            method:'post',
            url:'',
            params:{
                title:this.Blogform.title,
                tagname:this.Blogform.tagname,
                classname:this.Blogform.classname,
                context:this.Blogform.context,
            }
           }).then(res=>{
            if(res.data.code===200){
                this.$message({
                    message:'发布成功！',
                    type:'success'
                });
            }else{
                this.$message({
                    message:'发布失败，稍后重试！',
                    type:'info'
                });
            }
           })
        }
    }
};
</script>
  
<style scoped>
.BlogsPublish {
    padding: 10px 30px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction:row
}

.el-form-item{
    margin: 0;
    padding: 0;
}

.selects{
    display: flex;
    flex-direction: row;
}

.selects .el-select{
    margin-right: 30px;

}

.el-button{
    margin-top: 5px;
    float: right;
}

.inform{
    color: rgb(153, 151, 149);
    float: left;
}

</style>