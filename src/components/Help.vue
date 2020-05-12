<template>
    <div>
        <div>
            <v-header></v-header>
        </div>
        <v-back-to-top></v-back-to-top>
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

</style>
