<template>
    <div>    
        <v-header></v-header>
        <v-back-to-top></v-back-to-top>
        <div class="content">
            <el-row :gutter="24">
                <el-col :span="18">
                    <el-card class="introduction"> 
                        <div id="background">
                            <h2>
                                预测工具提出的背景
                            </h2>
                            <div class="divider"></div>
                            <p class="text">
                                本地区相较于全国平均水平高发高血压与高脂血症，而体检的统计里面没有完善统计硬化性心脑血管疾病患病的项目，因此研究认为此地区有潜在的硬化性心脑血管疾病的高风险，而且有潜在未检出的人群。故开发评估服务协助医院，辅助人们进行主动健康管理。
                            </p>
                        </div>
                        <div id="dataSource">
                            <h2>数据来源</h2>
                            <div class="divider"></div>
                            <p class="text">
                                来源于河北省唐山市曹妃甸区冀东队列。由冀东油田员工医院收集。招募方式为海报招募，全程自愿。数据内容为人群的常规体检数据。个人敏感信息保密。
                            </p>
                        </div>
                        <div id="progress">
                            <h2>预测工具的开发过程</h2>
                            <div class="divider"></div>
                            <p class="text">
                                整理体检数据——开发合适模型——开发网页服务——分析影响指标。
                            </p>
                        </div>
                        <div id="useTip">
                            <h2>如何使用预测工具</h2>
                            <div class="divider"></div>
                            <p class="text">
                                有两种方式可以使用。
                            </p>
                            <p class="text">
                                若在本院体检，可直接输入您的体检档案编号并点击确认提交。档案编号为您体检单右上角数字。
                            </p>
                            <p class="text">若在其他医院体检，可依照提示输入您的体检指标内容并点击确认提交。</p>
                            <p class="text">提交后稍等5-10秒即可得到个性化的风险评估分析报告。</p>
                        </div>
                        <div id="defineMethod">
                            <h2>高风险阈值的定义方式</h2>
                            <div class="divider"></div>
                            <h3>动态的划分依据——依照风险变化：</h3>
                            <p class="text">若您有三年以上在本院体检的记录，本服务将为您计算您在本院体检数据对应的硬化性心脑血管疾病风险变化趋势，并做统计学上的显著性检验判断您是否为高风险。</p>
                            <p class="text">本院每年都会更新此数据。</p>
                            <h3>静态的划分依据——依照发病率：</h3>
                            <p class="text">风险预测分数高于此地区的发病率，则判断为高风险。</p>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <div class="nav">
                        <el-menu default-active="3" ref="navMenu">
                            <el-menu-item index="0" @click="handleSelect">                             
                                <a href="#background" :class="[navTitle, selectObj.select_0 ? activeText : '']">
                                    <span slot="title">
                                        预测工具提出的背景
                                    </span>    
                                </a>
                            </el-menu-item>
                            <el-menu-item index="1" @click="handleSelect">    
                                <a href="#dataSource" :class="[navTitle, selectObj.select_1 ? activeText : '']">
                                    <span slot="title">
                                        数据来源
                                    </span>
                                </a>
                            </el-menu-item>
                            <el-menu-item index="2" @click="handleSelect">  
                                <a href="#progress" :class="[navTitle, selectObj.select_2 ? activeText : '']">
                                    <span slot="title">预测工具的开发过程</span>
                                </a>           
                            </el-menu-item>
                            <el-menu-item index="3" @click="handleSelect">
                                <a href="#useTip" :class="[navTitle, selectObj.select_3 ? activeText : '']">
                                    <span slot="title">
                                        如何使用预测工具
                                    </span>
                                </a>
                            </el-menu-item>
                            <el-menu-item index="4" @click="handleSelect"> 
                                <a href="#defineMethod" :class="[navTitle, selectObj.select_4 ? activeText : '']">
                                    <span slot="title">
                                        高风险阈值的定义方式
                                    </span>
                                </a> 
                            </el-menu-item>
                        </el-menu>
                    </div>
                </el-col>
            </el-row>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
import BackTop from './BackToTop'
export default {
    data() {
        return {
            selectObj: {
                select_0: true,
                select_1: false,
                select_2: false,
                select_3: false,
                select_4: false
            },
            navTitle: "navTitle",
            activeText: "active-text-color"    
        }
    },
    components: {
        'v-header': Header,
        'v-footer': Footer,
        'v-back-to-top': BackTop
    },
    methods: {
        handleSelect() {
            let index = "select_" + this.$refs.navMenu.activeIndex;
            for (const key in this.selectObj) {
                if (key === index) {
                    this.selectObj[key] = true;
                } else {
                    this.selectObj[key] = false;
                }
            }
        }
    },
    mounted() {

    }
}
</script>

<style scoped>
.content {
    margin: 105px 8%;
}
.text {
    text-indent: 2rem;
}
.divider {
    border: solid 1px #dcdfe6;
}
.useTipText {
    margin: 0;
}
.useTipFirst {
    margin-bottom: 0;
}
.introduction {
    padding: 0 5%;
}
#dataSource, #progress, #useTip, #defineMethod {
    margin-top: 50px;
}
.nav {
    position: fixed;
    top: 200px;
    right: 6%;
}
.navTitle {
    font-size: 20px;
    text-decoration: none;
    color: #303133;
}
.active-text-color {
    color: #409EFF;
}
</style>
