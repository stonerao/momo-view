<template>
    <div class="full">
        <div class="full" ref="main"></div>
    </div>
</template>
<script>
import Instance from './index'
import Config from './config'
import Methods from './methods'
export default {
    defaultConfig: Config,
    props: {
        config: Object,
        type: String
    },  
    data() {
        return {
            style: {}
        }
    },
    created() {
        this.instance = new Instance(this.config || Config);
    },
    mounted() {
        this.instance.init({
            el: this.$refs.main
        })
    },
    methods: {
        ...Methods
    }
}
</script>