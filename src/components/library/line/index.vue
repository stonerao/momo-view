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
    data() {
        return {
            style: {}
        }
    },
    created() {
        this.instance = new Instance(Config);
 
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