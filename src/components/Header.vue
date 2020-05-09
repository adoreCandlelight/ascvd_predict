<template>
    <div>
        <el-menu :default-active="activeIndex" class="navbar" mode="horizontal" @select="handleSelect"
                background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item id="title">
                <span class="titleText">ASCVDPredict</span>
            </el-menu-item>
            <el-menu-item class="detail" index="1">首页</el-menu-item>
            <el-menu-item class="detail" index="2">开始预测</el-menu-item>
            <el-menu-item class="detail" index="3">帮助</el-menu-item>
            <el-menu-item class="detail" index="4">联系</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: '1',
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath)
        }
    },
}
</script>

<style scoped>
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
</style>