export default {
    /**
     * @Description 检测是否是对象
     * @param target [any] ==>检测对象;
     * @return isSimple ==> 是否是简单对象
     */
    isSimpleObj(target) {
        const isProxy = target && target.constructor === Proxy;
        return (
            isProxy
            || (typeof target !== 'object' && !isProxy)
            || target === null
            || target === undefined
            || (!isProxy
                && simpleItem.some((constructor) => target instanceof constructor))
        );
    },
    /**
     * @Description 深度拷贝
     * @param base [object] ==>继承对象;
     * @param target [object] ==>被继承对象;
     * @return base ==> 需要继承的对象
     */
    copy(base, target) {
        Object.keys(target).forEach((i) => {
            const item = target[i];
            if (this.isSimpleObj(item)) {
                base[i] = item;
            } else if (this.isSimpleObj(base[i])) {
                base[i] = this.copy(item instanceof Array ? [] : {}, item);
            } else {
                base[i] = this.copy(base[i], item);
            }
        });
        return base;
    },
}