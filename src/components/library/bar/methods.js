export default {
    setConfig() {

    },

    getConfig(type) {
        let end = null;
        switch(type) {
        case 'config':
            end = this.instance.config;
            break;
        default: break;
        }
    }
}