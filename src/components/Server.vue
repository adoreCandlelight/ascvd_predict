<template>
    <div>
        <div>
            <v-header></v-header>
        </div>
        <div>
            <el-dialog title="用户使用须知：" :visible.sync="centerDialogVisible" width="35%" center>
                <span class="agreementContent">用户忠告：本模型或预测工具仅提供对病症的参考，不代表医生的最终诊断，......
                    本模型或预测工具仅提供对病症的参考，不代表医生的最终诊断，......
                    本模型或预测工具仅提供对病症的参考，不代表医生的最终诊断，......
                </span>
                <div class="ratioArea">
                    <el-radio-group v-model="agreementRadio" @change="isStartButtonDisabled">
                        <el-radio :label="0" class="ratioText">我已认真阅读该用户协议</el-radio>
                        <el-radio :label="1" class="ratioText">我未阅读并放弃使用</el-radio>
                    </el-radio-group>
                </div>
                <div class="dialogFooter">
                    <el-button id="startButton" type="primary" :disabled="isDisabled" @click="centerDialogVisible = false">开始预测</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
import Header from './Header'

export default {
    data() {
        return {
            centerDialogVisible: true,
            agreementRadio: 1,
            isDisabled: true,

        }
    },
    components: {
        'v-header': Header
    },
    methods: {
        isStartButtonDisabled(value) {
            if (value == 0) {
                this.isDisabled = false;
            } else {
                this.isDisabled = true;
            }
        },
       
    },
    mounted() {

    }
}
</script>

<style scoped>
.agreementContent {
    font-size: 16px;
}
.ratioArea {
    margin: 15px 0;
}
.ratioText {
    padding: 2px;
}
.dialogFooter {
    text-align: center;
}
</style>