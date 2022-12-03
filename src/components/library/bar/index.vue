<template>
    <div>

    </div>
</template>
<script>
import Instance from './index'
import Config from './config'
export default {
    created() {
        this.instance = new Instance(Config);
    }
}
</script>