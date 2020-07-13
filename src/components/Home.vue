<template>
    <div class="home" id="homePage" >
        <v-header></v-header>
        <v-back-to-top></v-back-to-top>
        <div class="content" ref="content" @wheel="handleScroll"> 
            <el-carousel :height="contentHeight" direction="vertical" :autoplay="false" ref="carousel" >
                <el-carousel-item id="firstPage" class="first">
                    <h1 id="title" ref="titleArea">
                        硬化性心脑血管疾病风险评估服务
                        <br>
                        ——ASCVD Predict
                    </h1>
                    <el-button type="primary" round class="startBtn"> 
                        <router-link to="/server" class="linkText">开始预测</router-link>
                    </el-button>
                </el-carousel-item>
                <el-carousel-item class="second">
                    <el-row :gutter="30" class="pageContent">
                        <el-col :span="8">
                            <p class="secondPageText">
                                硬化性心血管疾病包含缺血性心脏病与卒中，是中国人群的头号死因，它给患者自身带来痛苦的同时也造成了患者的巨大医疗开销。只需要高风险人群及时干预，硬化性心血管疾病可防可控。
                            </p>
                        </el-col>
                        <el-col :span="14">
                            <img src="../assets/img/home_bar.png" alt="" class="barChart" />
                        </el-col>
                    </el-row>
                </el-carousel-item>
                <el-carousel-item class="third">
                    <p class="thirdPageText">
                        本院所在地区比中国平均水平更高发高血压与高脂血症，是硬化性心脑的高风险因素。
                    </p>
                    <img src="../assets/img/home_pie.png" alt="" class="pieChart" />   
                </el-carousel-item>
            </el-carousel>           
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
            screenWidth: null,
            screenHeight: null,
            contentHeight: '800px',
        }
    },
    components: {
        'v-header': Header,
        'v-footer': Footer,
        'v-back-to-top': BackTop
    },
    methods: {
        gotoServer() {

        },
        handleScroll(e) {
            console.log(e)
            let direction = e.deltaY;
            if (0 < direction) {
                if (this.$refs.carousel.activeIndex < 2) {
                    this.$refs.carousel.next()
                }   
                console.log("index")
                console.log(this.$refs.carousel.activeIndex)
            } else {
                if (this.$refs.carousel.activeIndex > 0) {
                    this.$refs.carousel.prev()
                }
                console.log("index")
                console.log(this.$refs.carousel.activeIndex)
            }
            // console.log(direction);
        },
        handleResize(){
            this.screenWidth = window.outerWidth;
            this.screenHeight = window.innerHeight;
            // let el = document.getElementById("firstPage");
            let el = this.$refs.content;
            
            let height = this.screenHeight - 60;
            this.contentHeight = height + "px";
            console.log(height);
            el.style.height = height + "px";
            this.$refs.titleArea.style["padding-top"] = height / 2.5 + "px";
            
        },
        init() {
            window.addEventListener("resize", this.handleResize)
        }
    },
    mounted() {
        this.handleResize()
        window.addEventListener("resize", this.handleResize);
        // document.body.style.height = "100%";
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.handleResize);
    }
}
</script>

<style scoped>
.home {
    position: relative;
    /* height: 1000px; */
}
.footer {
    margin-bottom: 0;
}
.content {
    /* height: 100%; */
    /* margin: 80px 0; */
    margin-bottom: -21px;
    position: relative;
    /* bottom: 0; */
    /* background-image: url('../assets/img/background.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-attachment:fixed; */
    text-align: center;
    /* vertical-align: middle; */
}
#firstPage {
    background-image: url('../assets/img/background.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-attachment:fixed;
}
#title {
    /* position: relative; */
    /* margin: auto; */
    padding-top: 250px;
}
.startBtn {
    margin-top: 30px;
    font-size: 28px;
}
.linkText {
    text-decoration: none;
    color: #ffffff;
}
.chartParent {
    text-align: center;
}
.barChart{
    margin: 115px auto;
    max-width: 83%;
    height: auto;
}
.pieChart {
    margin: 30px auto;
    max-width: 62%;
    height: auto;
}
/* .pageContent {
    padding: 8%;
} */
/* .second {
    padding: 8%;
} */
.secondPageText {
    margin-top: 40%;
    font-size: 20px;
    text-align: left;
    padding: 5% 0 0 35%;
}
/* .third {
    padding: 8%;
} */
.thirdPageText {
    font-size: 20px;
    margin-top: 120px;
}
</style>