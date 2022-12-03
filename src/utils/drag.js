// 拖拽相关方法

export default {
    // 开始拖拽
    drag(event, chart) {
        console.log(event, chart)
        // event.preventDefault();
        event.dataTransfer.setData("conf", JSON.stringify({
            type: chart.type,
            name: chart.name
        }));
    },
    drop(event) {
        event.preventDefault();
        
        const conf = JSON.parse(event.dataTransfer.getData("conf"));

        // 添加组件
        this.addCom({
            x: event.offsetX,
            y: event.offsetY,
            ...conf
        });
    },
    allowDrop(event) {
        event.preventDefault();
    }
}