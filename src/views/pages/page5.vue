<template lang="">
    <el-container>
        <el-header style="height: auto;">
            <div class="banner">
                <!-- <img src="" alt=""> -->
                Page5-Banner
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
                        <div class="button">Center -> out</div>
                        <div class="button">Left -> Right -> Left</div>
                        <div class="button">Left -> Right -> Right</div>
                        <div class="button">Top -> Bottom -> Top</div>
                        <div class="button">Skew Fill Left -> Right</div>
                        <div class="button">Rounded Corners</div>
                        <div class="button">Scale</div>
                        <div class="button">Border (Inner Shadow)</div>
                        <div class="button">Border (Outer Shadow)</div>
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
    .button {
            flex: 1 1 auto;
            margin: 10px;
            padding: 20px;
            border: 2px solid #f7f7f7;
            text-align: center;
            text-transform: uppercase;
            position: relative;
            overflow: hidden;
            transition: 0.3s;
        }
        .button:after {
            position: absolute;
            transition: 0.3s;
            content: "";
            width: 0;
            left: 50%;
            bottom: 0;
            height: 3px;
            background: aqua !important;
        }
        .button:nth-of-type(2):after {
            left: 0;
        }
        .button:nth-of-type(3):after {
            right: 0;
            left: auto;
        }
        .button:nth-of-type(4):after {
            left: 0;
            bottom: auto;
            top: -3px;
            width: 100%;
        }
        .button:nth-of-type(5):after {
            height: 120%;
            left: -10%;
            transform: skewX(15deg);
            z-index: -1;
        }
        .button:hover {
            cursor: pointer;
        }
        .button:hover:after {
            width: 100%;
            left: 0;
        }
        .button:hover:nth-of-type(4):after {
            top: calc(100% - 3px);
            }
        .button:hover:nth-of-type(5) {
            color: #5bcaff;
        }
        .button:hover:nth-of-type(5):after {
            left: -10%;
            width: 120%;
        }
        .button:hover:nth-of-type(6) {
            border-radius: 30px;
        }
        .button:hover:nth-of-type(6):after {
            width: 0%;
        }
        .button:hover:nth-of-type(7) {
            transform: scale(1.2);
        }
        .button:hover:nth-of-type(7):after {
            width: 0%;
        }
        .button:hover:nth-of-type(8) {
            box-shadow: inset 0px 0px 0px 3px #50b961;
        }
        .button:hover:nth-of-type(8):after {
            width: 0%;
        }
        .button:hover:nth-of-type(9) {
            box-shadow: 0px 0px 0px 3px #50b961;
        }
        .button:hover:nth-of-type(9):after {
            width: 0%;
        }
</style>