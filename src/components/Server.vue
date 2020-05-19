<template>
    <div>
        <div>
            <v-header></v-header>
        </div>
        <v-back-to-top></v-back-to-top>
        <div>
            <el-dialog title="用户使用须知：" :visible.sync="centerDialogVisible" width="35%" center>
                <span class="agreementContent">用户忠告：本模型或预测工具仅提供对病症的参考，不代表医生的最终诊断，......
                    本模型或预测工具仅提供对病症的参考，不代表医生的最终诊断，......
                    本模型或预测工具仅提供对病症的参考，不代表医生的最终诊断，......
                </span>
                <div class="agreementRatioArea">
                    <el-radio-group v-model="agreementRadio" @change="isStartButtonDisabled">
                        <el-radio :label="0" class="ratioText">我已认真阅读该用户协议</el-radio>
                        <el-radio :label="1" class="ratioText">我未阅读并放弃使用</el-radio>
                    </el-radio-group>
                </div>
                <div class="dialogFooter">
                    <el-button id="startButton" type="primary" :disabled="isDisabled" @click="agreeDeclaration()">开始预测</el-button>
                </div>
            </el-dialog>
        </div>
        <div v-if="serverDetail">
            <div class="content">
                <el-row>
                    <el-col :span="8">
                        <el-card class="indexCard">
                            <div class="secondTitle">
                                <i class="el-icon-document"></i>&nbsp;
                                数据指标
                                <hr>
                            </div>
                            <div class="indexArea">
                                <div class="indexTitle">
                                    <span class="necessarySymbol">*&nbsp;</span>
                                    体检档案编号：
                                </div>                   
                                <el-input class="examinationId" v-model="dabh" placeholder="请输入体检档案编号" clearable></el-input>
                            </div>
                            <div class="indexArea">
                                <div class="indexTitle">学历：</div>        
                                <el-radio-group v-model="education">
                                    <el-radio class="ratio" :label=1>文盲</el-radio>
                                    <el-radio class="ratio" :label=2>小学</el-radio>
                                    <el-radio class="ratio" :label=3>初中</el-radio>
                                    <el-radio class="ratio" :label=4>高中</el-radio>
                                    <el-radio class="ratio" :label=5>大专、大学及以上</el-radio>
                                </el-radio-group>
                            </div>
                            <div class="indexArea">
                                <div class="indexTitle">是否吸烟：</div>
                                <el-radio class="ratio" v-model="smoke" label=0>无吸烟或者已戒烟</el-radio>
                                <el-radio class="ratio" v-model="smoke" label=1>仍在吸烟</el-radio>
                            </div>
                            <div class="indexArea">
                                <div class="indexTitle">日均饮酒量：</div>
                                <el-tooltip placement="top" effect="dark">
                                    <div slot="content">
                                        日均饮酒少于一罐普通啤酒（330 ml）
                                        <br/>
                                        或一小杯普通白酒（25 ml）
                                    </div>
                                    <el-radio class="ratio" v-model="drink" label=0>无饮酒、饮酒少于10g/天</el-radio>
                                </el-tooltip>
                                <el-tooltip placement="top" effect="dark">
                                    <div slot="content">
                                        日均饮酒超过一罐普通啤酒（330 ml）
                                        <br/>
                                        或一小杯普通白酒（25 ml）
                                    </div>
                                    <el-radio class="ratio" v-model="drink" label=1>饮酒超过10g/天</el-radio>
                                </el-tooltip>
                            </div>
                            <div class="indexArea">
                                <div class="indexTitle">糖尿病史：</div>
                                <el-radio class="ratio" v-model="DBT" label=0>正常</el-radio>
                                <el-radio class="ratio" v-model="DBT" label=1>患有糖尿病</el-radio>
                            </div>
                            <div class="btnArea">
                                <el-button type="primary" @click="reset()">
                                    <i class="el-icon-refresh"></i>
                                    &nbsp;重置数据
                                </el-button>
                                <el-button type="primary" @click="submit()" :disabled="submitDisabled">开始预测</el-button>
                            </div>
                            
                        </el-card>
                    </el-col>  
                    <el-col :span="16">
                        <el-card class="resultCard">
                            <div class="resultTitle">
                                <i class="el-icon-picture-outline-round"></i>&nbsp;预测结果
                                <hr>
                            </div>
                            <div class="resultDetail">
                                <div v-if="loaddingResult" class="loadingResult">
                                    <i class="el-icon-loading"></i>
                                </div>
                                <div v-if="seenResult">                             
                                    <div >
                                        <el-card class="resultWordsTipsCard">
                                            <p class="resultWordsTips">{{ resultWordsTips }}</p>
                                        </el-card>
                                    </div>
                                    <div class="picScroll">
                                        <el-card class="picPosRatioArea">
                                            <el-row :gutter="15">
                                                <el-col :span="16">
                                                    <img :src="resultPicPosRatioUrl" alt="" class="imgPicPosRatio">
                                                </el-col>
                                                <el-col :span="8">
                                                    <div class="imgTipsArea">    
                                                        <p>{{ resultWordsPosRatio }}</p>
                                                    </div>
                                                </el-col>
                                            </el-row>
                                        </el-card>
                                        <el-card class="picPatientAlikeArea">
                                            <el-row :gutter="15">
                                                <el-col :span="16">
                                                    <img :src="resultPicPatientAlikeUrl" alt="" class="imgPicPatientAlike">
                                                </el-col>
                                                <el-col :span="8">
                                                    <div class="imgTipsArea">    
                                                        <p>{{ resultWordsPatientAlike }}</p>
                                                    </div>
                                                </el-col>
                                            </el-row>
                                            <br />
                                        </el-card>
                                    </div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>       
            </div>
            <div class="records">
                <div class="secondTitle">
                    <i class="el-icon-search"></i>
                    任务记录
                    <hr>
                </div>
                <div v-if="seenRecords">
                    <!-- 定义了height属性，即可实现固定表头的表格 -->
                    <!-- stripe属性可以创建带斑马纹的表格。它接受一个Boolean，默认为false，设置为true即为启用。 -->
                    <el-table :data="recordsData" height="200" stripe class="tableArea" style="text-align: center;">
                        <el-table-column class="tableColumn" label="档案编号" style="text-align: center;">
                            <template slot-scope="scope">
                                <span>{{ scope.row.dabh }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="提交时间" style="text-align: center;">
                            <template slot-scope="scope">
                                <!-- <i class="el-icon-time"></i> -->
                                <span>{{ millisecondToDate(scope.row.submitTime) }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="状态">
                            <template slot-scope="scope">
                                <span v-if="scope.row.status == -2">未查询到该档案</span>
                                <span v-if="scope.row.status == -1">预测失败</span>
                                <span v-if="scope.row.status == 0">预测中...</span>
                                <span v-if="scope.row.status == 1">预测完成</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="结果">
                            <template slot-scope="scope">
                                <span v-if="scope.row.status == -2 || scope.row.status == 0">
                                    <i class="el-icon-loading"></i>
                                </span>
                                <span v-if="scope.row.status == -1" class="errorIcon">
                                    <i class="el-icon-error"></i>
                                </span>
                                <span v-if="scope.row.status == 1">
                                    <el-button type="primary" @click="getRecordResult(scope.row.jobId)">查看结果</el-button>
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <el-button type="text" @click="deleteRecord(scope.row.jobId)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>                  
        </div>
        <div>
            <v-footer></v-footer>
        </div>
    </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
import BackTop from './BackToTop'

const axios = require('axios');
import Cookie from '../assets/js/Cookie.js';

export default {
    data() {
        return {
            centerDialogVisible: true,
            agreementRadio: 1,
            isDisabled: true,
            serverDetail: true,
            dabh: "", // 档案编号
            education: null,
            smoke: null,
            drink: null,
            DBT: null,
            submitDisabled: true,
            seenRecords: false,
            recordsData: [
                // {
                //     "jobId": 62,
                //     "submitTime": 1589535036877,
                //     "status": 1,
                //     "dabh": "51892"
                // }
            ],
            loaddingResult: true,
            seenResult: false,
            resultPicPosRatioUrl: "",  // 风险分数图
            resultPicPatientAlikeUrl: "", 
            resultWordsTips: "",
            resultWordsPosRatio: "",
            resultWordsPatientAlike: "",
        }
    },
    components: {
        'v-header': Header,
        'v-footer': Footer,
        'v-back-to-top': BackTop
    },
    methods: {
        isStartButtonDisabled(value) {
            if (value == 0) {
                this.isDisabled = false;
            } else {
                this.isDisabled = true;
            }
        },
        agreeDeclaration() {
            this.centerDialogVisible = false
            this.submitDisabled = false
            this.seenRecords = true
        },
        submit() {
            var uid = Cookie.getCookie("cname");
            var currentDate = new Date();
            var submitTime = currentDate.getTime();
            var jobData = {
                "cname": uid,
                "submitTime": submitTime,
                "dabh": this.dabh,
                "EDU": this.education,
                "SMOKE": this.smoke,
                "DRINK1": this.drink,
                "DBT": this.DBT
            }    
            var formJobData = JSON.stringify(jobData);
            // 重置表单数据
            this.reset();
            // console.log(formJobData);
            let config = {
                headers: { 'Content-Type': 'application/json; charset=utf-8' }
            }
            axios.post("/job/submitJob", formJobData, config).then((res) =>{
                this.recordsData.unshift(res.data.data)
                // console.log(res)
                this.checkRecordHistory();
            }).catch((err) => {
                console.log(err)
            })
        },
        reset() {
            this.dabh = "";
            this.education = null;
            this.smoke = null;
            this.drink = null;
            this.DBT = null;
        },
        millisecondToDate(millisecond) {
            let time = new Date(millisecond);
            // console.log(time)
            return time.getFullYear() + "-" + time.getMonth() + "-" + time.getDate() + " " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()
        },
        getJobIndex(jobId) {
            for (let i = 0; i < this.recordsData.length; i++) {
                if (this.recordsData[i].jobId == jobId) {
                    return i;
                } 
            }
            return -1;
        },
        deleteRecord(jobId) {
            // 先删除本地数组数据，更新视图         
            var jobIndex = this.getJobIndex(jobId)
            if (jobIndex != -1) {
                this.recordsData.splice(jobIndex, 1)
            }
            let formData = {"jobId": jobId}
            let config = {
                headers: { 'Content-Type': 'application/json; charset=utf-8' }
            }
            axios.post("/job/deleteJob", formData, config).then((res) => {
                // console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        },
        checkRecordHistory() {
            // 如果有未完成的任务则每3s刷新访问一次服务器
            var hasUnfinished = false
            var uid = Cookie.getCookie("cname")
            var cname = {"cname": uid}
            var formCname = JSON.stringify(cname)
            let config = {
                headers: { 'Content-Type': 'application/json; charset=utf-8' }
            }
            var checkTimer = setInterval(() => {
                axios.post("/job/listJobHistory", formCname, config).then((res) => {            
                    this.recordsData = res.data.data
                    // 如果不存在未完成任务则停止定时器
                    for (let i = 0; i < this.recordsData.length; i++) {
                        if (this.recordsData[i].status == 0) {
                            hasUnfinished = true
                        }; 
                    }  
                    // console.log(hasUnfinished)
                    if (hasUnfinished == false) {
                        clearInterval(checkTimer)
                    }
                }).catch((err) => {
                    console.log(err)
                })
            }, 3000);
        },
        getRecordResult(jobId) {
            var formJobId = JSON.stringify({"jobId": jobId});
            let config = {
                headers: { 'Content-Type': 'application/json; charset=utf-8' }
            }
            axios.post("/job/reportResult", formJobId, config).then((res) => {
                // console.log(res)
                this.loaddingResult = false,
                this.seenResult = true
                this.resultPicPosRatioUrl = res.data.data.resultPicPosRatio
                this.resultPicPatientAlikeUrl = res.data.data.resultPicPatientAlike
                this.resultWordsTips = res.data.data.resultWordsTips
                this.resultWordsPosRatio = res.data.data.resultWordsPosRatio
                this.resultWordsPatientAlike = res.data.data.resultWordsPatientAlike
            }).catch((err) => {
                console.log(err)
            })
        }
    },
    mounted() {
        this.checkRecordHistory()
    }
}
</script>

<style scoped>
.agreementContent {
    font-size: 16px;
}
.agreementRatioArea {
    margin: 15px 0;
}
.ratioText {
    padding: 2px;
}
.dialogFooter {
    text-align: center;
}
.indexCard, .resultCard {
    margin: 16px 4% 3%;
    height: 590px;
    /* height: 100%; */
}
.secondTitle, .resultTitle {
    font-size: 20px;
    color:dimgray;
    font-weight: bold;
}
.indexTitle {
    color:dimgray;
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 6px;
}
.necessarySymbol {
    color: red;
}
.ratio {
    margin-top: 6px;
}
.indexArea, .records {
    margin: 10px 3%;
}
.btnArea {
    float: right;
    margin: 10px 4% 35px;
}
.errorIcon {
    color: #f56c6c;
}
.loadingResult {
    text-align: center;
    vertical-align: middle;
    color: #409EFF;
    font-size: 10rem;
    margin-top: 15%;
}
.tableArea {
    text-align: center;
    font-size: 17px;
}
.resultWordsTipsCard {
    margin: 25px 0;
    background-color:rgba(239, 237, 237, 0.5);
    border-left-width: 4px;
    border-left-color:cyan;
}
.resultWordsTips {
    margin: 0;
}
.picScroll {
    overflow-y: auto;   /* 添加滚动条 */
    overflow-x: auto;
    height: 390px;
}
.imgPicPosRatio {
    max-width: 70%; /* 等比例缩小 */
    margin-left: 10%;
    /* height: 450px; */
    /* float: left; */
}
.imgPicPatientAlike {
    max-width: 55%; /* 等比例缩小 */
    margin-left: 12%;
}
.picPosRatioArea, .picPatientAlikeArea {
    margin-bottom: 20px;
}

.imgTipsArea {
    background-color:rgba(239, 237, 237, 0.5);
    padding: 10% 10px;
    /* margin-top: 55%; */
    margin: 40% 5% 0 5%;
}
</style>