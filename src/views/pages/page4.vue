<template lang="">
    <div>
        <div class="banner">
            <!-- <img src="" alt=""> -->
            Page4-Banner
        </div>
        <div class="main">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="“三费”大厅防控" name=0>
                    <p>“三费”大厅防控</p>
                </el-tab-pane>
                <el-tab-pane label="生产区域防控" name=1>
                    <p>生产区域防控</p>
                </el-tab-pane>
                <el-tab-pane label="疫情排查与宣传" name=2>
                    <p>疫情排查与宣传</p>
                </el-tab-pane>
              </el-tabs>
        </div>
    </div>
</template>
<script>
import api from '../../api/index'
export default {
    data() {
        return {
            activeName: '1',
            ruleForm: {
                name: '',
                region: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            sizeForm: {
                name: '',
                region: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                region: [
                    { required: true, message: '请选择活动区域', trigger: 'change' }
                ],
                date1: [
                    { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                ],
                date2: [
                    { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                ],
                type: [
                    { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                ],
                resource: [
                    { required: true, message: '请选择活动资源', trigger: 'change' }
                ],
                desc: [
                    { required: true, message: '请填写活动形式', trigger: 'blur' }
                ]
            }
        }
    },
    created() {
        var value =String(this.$route.query.id)
        this.activeName = value;
        // 数据请求
        // api.getData()
        // .then(res => {
        //     console.log(res.data);
        // })
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        onSubmit() {
            console.log('submit!');
        },
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
}
</script>
<style>
    .el-tabs__nav-scroll{
        padding-left: 200px;
    }
    .el-tabs__item{
        font-size: 22px;
        margin: 15px 0;
    }
</style>
<style lang="less" scoped>
    .banner{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 80px;
        width: 100%;
        height: 300px;
        background-color: lightblue;
        img{
            width: 100%;
        }
    }
    .main{

    }
</style>