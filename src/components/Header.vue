<template>
    <div id="header">
        <el-menu :default-active="activeIndex" class="navbar" mode="horizontal" @select="handleSelect"
                background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item id="title">
                <span class="titleText">ASCVDPredict</span>
            </el-menu-item>
            <el-menu-item class="detail" index="1">
                <router-link to="/home" class="linkText">首页</router-link>
            </el-menu-item>
            <el-menu-item class="detail" index="2">
                <router-link to="/server" class="linkText">开始预测</router-link>
            </el-menu-item>
            <el-menu-item class="detail" index="3">
                <router-link to="/help" class="linkText">帮助</router-link>
            </el-menu-item>
            <el-menu-item class="detail" index="4">
                <router-link to="/contact" class="linkText">联系</router-link>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: "1",
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath)
        },
        selectPath() {
            var path = this.$route.path;
            console.log(path);
            if (path == "/home") {
                this.activeIndex = "1";
            } else  if (path == "/server") {
                this.activeIndex = "2";
            } else if (path == "/help") {
                this.activeIndex = "3";
            } else if (path == "/contact") {
                this.activeIndex = "4";
            } 
        },
    },
    mounted() {
        this.selectPath();
    }
}
</script>

<style scoped>
#header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99;
}
#title {
    margin-right: 22%;
    margin-left: 10%;
}
.titleText {
    font-size: 30px;
    font-weight: bold;
}
.detail {
    font-size: 18px;
}
.linkText {
    text-decoration: none;
}
</style>