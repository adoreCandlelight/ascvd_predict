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
        <el-card class="noteCard">
            <strong>温馨提示:</strong>
            <br>
            <p class="tipContent">
                硬化性心血管疾病分为缺血性脑卒中及缺血性心脏病，是中国乃至世界的头号死因。您所在地区高血压高脂血症高发，
                有更高的硬化性心脑风险。在此为您提供硬化性心脑血管疾病风险评估服务。结果仅供参考，详情请咨询医生。
            </p>
        </el-card>                                                                                             
        <div v-if="serverDetail">
            <div class="content">
                <el-row>
                    <el-col :span="10">
                        <el-card class="indexCard">
                            <div class="secondTitle">
                                <i class="el-icon-document"></i>&nbsp;
                                数据指标
                                <hr>
                            </div>

                            <div v-if="showIntroduction">
                                <!-- <el-card class="noteCard">
                                    <strong>温馨提示:</strong>
                                    <p>
                                        硬化性心血管疾病分为缺血性脑卒中及缺血性心脏病，是中国乃至世界的头号死因。您所在地区高血压高脂血症高发，
                                        有更高的硬化性心脑风险。在此为您提供硬化性心脑血管疾病风险评估服务。结果仅供参考，详情请咨询医生。
                                    </p>
                                </el-card>      -->
                                <div>
                                    <div class="indexTitle">请选择数据输入方式：</div>     
                                    <el-radio v-model="dataType" :label=0 border @change="changeDataType">体检档案编号</el-radio>
                                    <el-radio v-model="dataType" :label=1 border @change="changeDataType">体检数据</el-radio>
                                </div>
                            </div>
                            <div v-if="dabhData">
                                <div class="indexArea">
                                    <div class="indexTitle">
                                        <span class="necessarySymbol">*&nbsp;</span>
                                        体检档案编号：
                                    </div>                   
                                    <el-input class="examinationId" v-model="dabh" placeholder="请输入体检档案编号" clearable></el-input>
                                </div>
                            </div>
                            <div v-if="customData" class="indexScroll">
                                <el-row :gutter="5">
                                    <el-col :span="12">
                                        <div class="indexArea">
                                            <span class="inlineTitle">性别：</span>
                                            <el-radio class="radio" v-model="sex" :label=1>男</el-radio>
                                            <el-radio class="radio" v-model="sex" :label=0>女</el-radio>
                                        </div>
                                         <div class="indexArea">
                                            <div class="indexTitle">甲状腺 (THYROID)：</div>
                                            <el-radio class="radio" v-model="THYROID" :label=0>正常</el-radio>
                                            <el-radio class="radio" v-model="THYROID" :label=1>不正常</el-radio>
                                        </div>
                                        <div class="indexArea">
                                            <div class="indexTitle">晶体 (CRYSTAL)：</div>
                                            <el-radio class="radio" v-model="CRYSTAL" :label=0>正常</el-radio>
                                            <el-radio class="radio" v-model="CRYSTAL" :label=1>不正常</el-radio>
                                        </div>
                                        <div class="indexArea">
                                            <div class="indexTitle">淋巴 (LYM)：</div>
                                            <el-radio class="radio" v-model="LYM" :label=0>正常</el-radio>
                                            <el-radio class="radio" v-model="LYM" :label=1>不正常</el-radio>
                                        </div>
                                        <div class="indexArea">
                                            <div class="indexTitle">乳腺 (BREAST)：</div>
                                            <el-radio class="radio" v-model="BREAST" :label=0>正常</el-radio>
                                            <el-radio class="radio" v-model="BREAST" :label=1>不正常</el-radio>
                                        </div>
                                        <div class="indexArea">
                                            <div class="indexTitle">收缩压 (SBP)：</div>
                                            <el-input v-model="SBP" size="small" class="normalInput" placeholder="" clearable>
                                                <template slot="append">mmHg</template>
                                            </el-input>
                                        </div>
                                        <div class="indexArea">
                                            <div class="indexTitle">舒张压 (DBP)：</div>
                                            <el-input v-model="DBP" size="small" class="normalInput" placeholder="" clearable>
                                                <template slot="append">mmHg</template>
                                            </el-input>
                                        </div>
                                        <div class="indexArea">
                                            <div class="indexTitle">心电图 (ECG)：</div>
                                            <el-radio class="radio" v-model="ECG" :label=0>正常</el-radio>
                                            <el-radio class="radio" v-model="ECG" :label=1>不正常</el-radio>
                                        </div>
                                        <div class="indexArea">
                                            <div class="indexTitle">心界 (BOH)：</div>
                                            <el-radio class="radio" v-model="BOH" :label=0>正常</el-radio>
                                            <el-radio class="radio" v-model="BOH" :label=1>不正常</el-radio>
                                        </div>
                                        <div class="indexArea">
                                            <div class="indexTitle">乙肝E抗体 (HBEAB)：</div>
                                            <el-radio class="radio" v-model="HBEAB" :label=0>阴性</el-radio>
                                            <el-radio class="radio" v-model="HBEAB" :label=1>阳性</el-radio>
                                        </div>
                                        <div class="indexArea">
                                            <div class="indexTitle">乙肝E抗原 (HBEAG)：</div>
                                            <el-radio class="radio" v-model="HBEAG" :label=0>阴性</el-radio>
                                            <el-radio class="radio" v-model="HBEAG" :label=1>阳性</el-radio>
                                        </div>
                                        <div class="indexArea">
                                            <div class="indexTitle">乙肝表面抗体 (HBSAB)：</div>
                                            <el-radio class="radio" v-model="HBSAB" :label=0>阴性</el-radio>
                                            <el-radio class="radio" v-model="HBSAB" :label=1>阳性</el-radio>
                                        </div>
                                        <div class="indexArea">
                                            <div class="indexTitle">乙肝表面抗原 (HBSAG)：</div>
                                            <el-radio class="radio" v-model="HBSAG" :label=0>阴性</el-radio>
                                            <el-radio class="radio" v-model="HBSAG" :label=1>阳性</el-radio>
                                        </div>
                                        <div class="indexArea">
                                            <div class="indexTitle">乙肝核心抗体 (HBCAB)：</div>
                                            <el-radio class="radio" v-model="HBCAB" :label=0>阴性</el-radio>
                                            <el-radio class="radio" v-model="HBCAB" :label=1>阳性</el-radio>
                                        </div>
                                    </el-col>
                                    <el-col :span="12">
                                        <div class="indexArea">
                                            <span class="inlineTitle">年龄：</span>
                                            <el-input v-model="age" size="small" class="inlineInput" placeholder="" clearable></el-input>
                                        </div>
                                        <div class="indexArea">
                                            <div class="indexTitle">低密度脂蛋白 (LDL)：</div>
                                            <el-input v-model="LDL" size="small" class="normalInput" placeholder="" clearable>
                                                <template slot="append">mmol/L</template>
                                            </el-input>
                                        </div>
                                        <div class="indexArea">
                                            <div class="indexTitle">甘油三酯 (TG)：</div>
                                            <el-input v-model="TG" size="small" class="normalInput" placeholder="" clearable>
                                                <template slot="append">mmol/L</template>
                                            </el-input>
                                        </div>
                                        <div class="indexArea">
                                            <div class="indexTitle">谷丙转氨酶 (GAlanT)：</div>
                                            <el-input v-model="GAlanT" size="small" class="normalInput" placeholder="" clearable>
                                                <template slot="append">U/L</template>
                                            </el-input>
                                        </div>
                                        <div class="indexArea">
                                            <div class="indexTitle">谷草转氨酶 (GAcetoT)：</div>
                                            <el-input v-model="GAcetoT" size="small" class="normalInput" placeholder="" clearable>
                                                <template slot="append">U/L</template>
                                            </el-input>
                                        </div>
                                        <div class="indexArea">
                                            <div class="indexTitle">肌酐 (CR)：</div>
                                            <el-input v-model="CR" size="small" class="normalInput" placeholder="" clearable>
                                                <template slot="append">μmol/L</template>
                                            </el-input>
                                        </div>
                                        <div class="indexArea">
                                            <div class="indexTitle">尿酸 (UA)：</div>
                                            <el-input v-model="UA" size="small" class="normalInput" placeholder="" clearable>
                                                <template slot="append">μmol/L</template>
                                            </el-input>
                                        </div>
                                        <div class="indexArea">
                                            <div class="indexTitle">心音 (HS):</div>
                                            <el-input v-model="HS" size="small" class="normalInput" placeholder="" clearable>
                                                <template slot="append">μmol/L</template>
                                            </el-input>
                                        </div>
                                        <div class="indexArea">
                                            <div class="indexTitle">载脂蛋白A (APOA):</div>
                                            <el-input v-model="APOA" size="small" class="normalInput" placeholder="" clearable>
                                                <template slot="append">g/L</template>
                                            </el-input>
                                        </div>
                                        <div class="indexArea">
                                            <div class="indexTitle">载脂蛋白B (APOB):</div>
                                            <el-input v-model="APOB" size="small" class="normalInput" placeholder="" clearable>
                                                <template slot="append">g/L</template>
                                            </el-input>
                                        </div>
                                        <div class="indexArea">
                                            <div class="indexTitle">总胆固醇 (TC):</div>
                                            <el-input v-model="TC" size="small" class="normalInput" placeholder="" clearable>
                                                <template slot="append">mmol/L</template>
                                            </el-input>
                                        </div>
                                        <div class="indexArea">
                                            <div class="indexTitle">总胆红素 (TB):</div>
                                            <el-input v-model="TB" size="small" class="normalInput" placeholder="" clearable>
                                                <template slot="append">mmol/L</template>
                                            </el-input>
                                        </div>
                                    </el-col>
                                </el-row>
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
                    <el-col :span="14">
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
                                    <div class="picScroll">
                                        <el-card class="resultWordsTipsCard">
                                            <p class="resultWordsTips" v-html="resultWordsTips"></p>
                                        </el-card>
                                    <!-- </div>
                                    <div > -->
                                        <el-card class="picPosRatioArea">
                                            <el-row :gutter="8">
                                                <el-col :span="18">
                                                    <img :src="resultPicPosRatioUrl" alt="" class="imgPicPosRatio">
                                                </el-col>
                                                <el-col :span="6">
                                                    <div class="imgTipsArea">    
                                                        <p v-html="resultWordsPosRatio"></p>
                                                    </div>
                                                </el-col>
                                            </el-row>
                                        </el-card>
                                        <el-card class="picPatientAlikeArea">
                                            <el-row :gutter="8">
                                                <el-col :span="18">
                                                    <img :src="resultPicPatientAlikeUrl" alt="" class="imgPicPatientAlike">
                                                </el-col>
                                                <el-col :span="6">
                                                    <div class="imgTipsArea">    
                                                        <p v-html="resultWordsPatientAlike"></p>
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

            showIntroduction: true,
            dataType: 0,
            dabhData: true,
            customData: false,

            dabh: "", // 档案编号
            sex: null,
            age: null,
            LDL: null,
            TG: null,
            GAlanT: null,
            GAcetoT: null,
            CR: null,
            THYROID: null,
            CRYSTAL: null,
            LYM: null,
            UA: null,
            BREAST: null,
            SBP: null,
            DBP: null,
            ECG: null,
            BOH: null,
            HR: null,
            HS: null,
            HBEAB: null,
            HBEAG: null,
            HBSAB: null,
            HBSAG: null,
            HBCAB: null,
            APOA: null,
            APOB: null,
            TC: null,
            TB: null,

            submitDisabled: true,
            seenRecords: false,
            recordsData: [
                {
                    "jobId": 73,
                    "submitTime": 1594076462734,
                    "status": 1,
                    "dabh": "66799"
                }
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
        changeDataType(value) {
            this.customData = !this.customData;
            this.dabhData = !this.dabhData;
            if (1 === value) {
                // this.showIntroduction = false;
                this.dabh = "";
            } 
            // else {
            //     this.showIntroduction = true;
            // }
        },
        submit() {
            var uid = Cookie.getCookie("cname");
            var currentDate = new Date();
            var submitTime = currentDate.getTime();
            var jobData = {
                "cname": uid,
                "submitTime": submitTime,
                "dabh": this.dabh,
                "dataType": this.dataType,
                "SEX": this.sex,
                "AGE2": this.stringToNumber(this.age),
                "LDL": this.stringToNumber(this.LDL, false),
                "TG": this.stringToNumber(this.TG, false),
                "GAlanT": this.stringToNumber(this.GAlanT, false),
                "GAcetoT": this.stringToNumber(this.GAcetoT, false), 
                "CR": this.stringToNumber(this.CR, false),
                "THYROID": this.THYROID,
                "CRYSTAL": this.CRYSTAL,
                "LYM": this.LYM,
                "UA": this.UA,
                "BREAST": this.BREAST,
                "SBP": this.stringToNumber(this.SBP),
                "DBP": this.stringToNumber(this.DBP),
                "ECG": this.ECG,
                "BOH": this.BOH,
                "HR": this.HR,
                "HS": this.HS,
                "HBEAB": this.HBEAB,
                "HBEAG": this.HBEAG,
                "HBSAB": this.HBSAB,
                "HBSAG": this.HBSAG,
                "HBCAB": this.HBCAB,
                "APOA": this.stringToNumber(this.APOA, false),
                "APOB": this.stringToNumber(this.APOB, false),
                "TC": this.stringToNumber(this.TC, false),
                "TB": this.stringToNumber(this.TB, false)
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
        stringToNumber(str, toInteger = true) {
            let value = null;
            if (null == str) {
                return value;
            } else {
                if (toInteger) {
                    value = parseInt(str);
                } else {
                    value = Number(str)
                }
            }
            return value;
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
    height: 615px;
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
.inlineTitle {
    color:dimgray;
    font-weight: 600;
}
.necessarySymbol {
    color: red;
}
.radio {
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
    border-left-color:deepskyblue;
}
.resultWordsTips {
    margin: 0;
}
.picScroll {
    overflow-y: auto;   /* 添加滚动条 */
    overflow-x: auto;
    height: 490px;
}
.imgPicPosRatio {
    max-width: 95%; /* 等比例缩小 */
    margin-left: 3%;
    /* height: 450px; */
    /* float: left; */
}
.imgPicPatientAlike {
    max-width: 75%; /* 等比例缩小 */
    margin-left: 8%;
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
.noteCard {
    font-family: "Helvetica Neue";
    background:#FCF8E3;
    font-size: 16px;
    color:#8A6D3B;
    padding: 0;
    margin: 15px 3% 12px 2%;
}
.tipContent {
    margin: 5px 0 0;
}
.indexScroll {
    overflow-y: auto;   /* 添加滚动条 */
    overflow-x: auto;
    height: 375px;
}
.inlineInput {
    width: 60%;
}
.normalInput {
    width: 80%;
}
</style>