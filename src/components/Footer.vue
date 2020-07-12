<template>
    <div class="footArea">
        <p class="footer">ASCVDPredict &copy; {{currentYear}} The Ren Lab. All Rights Reserved</p>      
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentYear: 2020
        }
    },
    methods: {
        getCurrentYear() {
            let now = new Date();
            this.currentYear = now.getFullYear();
        }
    },
    mounted() {
        this.getCurrentYear()
    }
}
</script>

<style scoped>
.footArea {
    background-color:#EFEDED;
    /* margin-bottom: -20px; */
}
.footer {
    text-align: center;
    color: #777777;
    font-size: 18px;
    padding: 7px 0;
}
</style>
