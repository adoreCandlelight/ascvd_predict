<template>
    <div class="content">
         <div>
            <v-header></v-header>
        </div>
        <v-back-to-top></v-back-to-top>
        
        <h1>
            just for test
        </h1>
        <div>
            <el-button type="primary" @click="testNumber()">testNumber</el-button>
            <br />
                <el-radio v-model="radio" label=1>备选项</el-radio>
                <el-radio v-model="radio" label=2>备选项</el-radio>
        </div>
        <hr>
        <div>
            年龄：<el-input class="inputTest" placeholder="请输入内容" v-model="input" clearable></el-input>
        </div>
        <div>
            
        </div>
        <div>
            <el-row class="rowArea">
                <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
                </el-row>
                <el-row>
                <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
            </el-row>
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
export default {
    data() {
        return {
            baseNum: 0.0,
            stringNum: "12.0",
            input: '',

            radio: null,

        }
    },
    components: {
        'v-header': Header,
        'v-footer': Footer,
        'v-back-to-top': BackTop
    },
    methods: {
        testNumber() {
            var weight = 25.1 - 0.1
            console.log("weifght: " + weight)
            var parseNum = Number(this.stringNum);
            console.log(parseNum)
            console.log("radio: " + this.radio)
        }
    }
}
</script>

<style scoped>
.content {
    background-image: url('../assets/img/background.png');
    background-repeat: repeat;
}
.inputTest {
    width: 10%;
}
.el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: blue;
  }
  .rowArea {
      /* background-color: yellow; */
    height: 300px;
  }
  .bg-purple {
    background: red;
    height: 100px;
    margin: 0 5%;
  }
  .bg-purple-light {
    background: #e5e9f2;
    height: 100px;
  }
</style>