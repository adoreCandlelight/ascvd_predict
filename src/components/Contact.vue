<template>
    <div>
        <v-back-to-top></v-back-to-top>
        <div>
            <v-header></v-header>
        </div>  
        
        <div class="title">    
            <span class="titleText">
                <i class="el-icon-s-promotion"></i>&nbsp;Contact
            </span>   
        </div>
        <!-- <p>If you have any questions or comments, please contact us.</p> -->
        <div>
            <el-card class="card">
                <h2 class="name">Jian Ren</h2>
                <div class="detailInfo">
                    <i class="el-icon-message"></i>
                    <a class="mailLink" href="mailto:renjian@sysucc.org.cn" target="_top">
                        renjian@sysucc.org.cn
                    </a>
                    <p class="job"><em>Professor of Bioinformatics</em></p>
                    <p>School of Life Sciences, Cancer Center, Sun Yat-sen University, Guangzhou 510006, China</p>
                </div>
            </el-card>
            <el-card class="card">
                <h2 class="name">Zhixiang Zhuo</h2>
                <div class="detailInfo">
                    <i class="el-icon-message"></i>
                    <a class="mailLink" href="mailto:zuozhx@sysucc.org.cn" target="_top">zuozhx@sysucc.org.cn</a>
                    <p class="job"><em>Associate Professor of Cancer Genomics</em></p>
                    <p>Cancer Center, Sun Yat-sen University, Guangzhou 510006, China</p>
                </div>
            </el-card>
        </div>
        <div class="footerArea">
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

        }
    },
    components: {
        'v-header': Header,
        'v-footer': Footer,
        'v-back-to-top': BackTop
    },
    methods: {

    }
}
</script>

<style scoped>
.title {
    padding-top: 25px;
    margin: 10px 5%;
    height: 55px;
    border-bottom-style: dashed;
    border-bottom-width: 2px;
    border-bottom-color: rgb(51, 138, 138);
}
.titleText {
    font-size: 30px;
}
.mailLink {
    color:rgb(1, 156, 156);
    text-decoration: none;
}
.card {
    margin: 30px 5%;
    background-color:rgba(239, 237, 237, 0.5);
    border-left-width: 4px;
    border-left-color:cyan;
}
.name {
    color: rgb(51, 122, 183);
}
.detailInfo {
    font-size: 20px;
}
.job {
    font-weight: 700;
}
.footerArea {
    margin-top: 50px;
}
</style>