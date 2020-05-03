<template>
    <div class="content">
        <div>
            <v-header></v-header>
        </div>
    </div>
</template>

<script>
import Header from './Header'

export default {
    data() {
        return {

        }
    },
    components: {
        'v-header': Header
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