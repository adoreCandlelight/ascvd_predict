<template>
    <div class="content">
        <div>
            <v-header></v-header>
        </div>
        <div>
            <v-footer></v-footer>
        </div>
    </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'

export default {
    data() {
        return {

        }
    },
    components: {
        'v-header': Header,
        'v-footer': Footer
    },
    methods: {

    }
}
</script>

<style scoped>
.content {
    background-image: url('../assets/img/background.png');
    background-repeat: repeat;
}
</style>