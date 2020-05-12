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
        }
    }
}
</script>

<style scoped>
.content {
    background-image: url('../assets/img/background.png');
    background-repeat: repeat;
}
</style>