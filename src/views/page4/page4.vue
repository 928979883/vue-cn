<template lang="">
    <el-container>
        <el-header style="height: auto;">
            <div class="banner">
                <!-- <img src="" alt=""> -->
                Page4-Banner
            </div>
        </el-header>
        <el-main>
            <div class="box1">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="我要报装" name=0>
                        <p>客户报修相关信息及联系方式</p>
                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="活动名称" prop="name">
                              <el-input v-model="ruleForm.name"></el-input>
                            </el-form-item>
                            <el-form-item label="活动区域" prop="region">
                              <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                              </el-select>
                            </el-form-item>
                            <el-form-item label="即时配送" prop="delivery">
                              <el-switch v-model="ruleForm.delivery"></el-switch>
                            </el-form-item>
                            <el-form-item label="活动性质" prop="type">
                              <el-checkbox-group v-model="ruleForm.type">
                                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                                <el-checkbox label="地推活动" name="type"></el-checkbox>
                                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                              </el-checkbox-group>
                            </el-form-item>
                            <el-form-item label="特殊资源" prop="resource">
                              <el-radio-group v-model="ruleForm.resource">
                                <el-radio label="线上品牌商赞助"></el-radio>
                                <el-radio label="线下场地免费"></el-radio>
                              </el-radio-group>
                            </el-form-item>
                            <el-form-item label="活动形式" prop="desc">
                              <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                            </el-form-item>
                            <el-form-item>
                              <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                              <el-button @click="resetForm('ruleForm')">重置</el-button>
                            </el-form-item>
                        </el-form>
                    </el-tab-pane>
                    <el-tab-pane label="我要报修" name=1>
                        <p>客户报修相关信息及联系方式</p>
                    </el-tab-pane>
                    <el-tab-pane label="投诉建议" name=2>
                        <p>客户留言</p>
                        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                            <el-form-item label="活动名称">
                              <el-input v-model="sizeForm.name"></el-input>
                            </el-form-item>
                            <el-form-item label="活动区域">
                              <el-select v-model="sizeForm.region" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                              </el-select>
                            </el-form-item>
                            <el-form-item label="活动性质">
                              <el-checkbox-group v-model="sizeForm.type">
                                <el-checkbox-button label="美食/餐厅线上活动" name="type"></el-checkbox-button>
                                <el-checkbox-button label="地推活动" name="type"></el-checkbox-button>
                                <el-checkbox-button label="线下主题活动" name="type"></el-checkbox-button>
                              </el-checkbox-group>
                            </el-form-item>
                            <el-form-item label="特殊资源">
                              <el-radio-group v-model="sizeForm.resource" size="medium">
                                <el-radio border label="线上品牌商赞助"></el-radio>
                                <el-radio border label="线下场地免费"></el-radio>
                              </el-radio-group>
                            </el-form-item>
                            <el-form-item size="large">
                              <el-button type="primary" @click="onSubmit">立即创建</el-button>
                              <el-button>取消</el-button>
                            </el-form-item>
                          </el-form>
                    </el-tab-pane>
                  </el-tabs>
            </div>
        </el-main>
      </el-container>
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
        console.log(this.$route.query.id);
        api.getData()
        .then(res => {
            console.log(res.data);
        })
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
    .el-header{
        padding: 0;
    }
    .banner{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 80px;
        overflow: hidden;
        width: 100%;
        height: 300px;
        background-color: lightblue;
        img{
            width: 100%;
            height: 100%;
            transform: scale(1);
            object-fit: cover;
            animation: img_1 1.2s linear 1;
        }
    }
    .box1{

    }
</style>