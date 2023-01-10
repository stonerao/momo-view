import Utils from '@/utils/index'
let isMouseDown = false;

let startX = 0;
let startY = 0;
let startLeft = 0;
let startTop = 0;
export default {
    data: {
        selectCom: null, // 当前选中的组件
        selectId: null, // 选择的id 用于watch使用
        selectBox: { x: 0, y: 0 }, // 当前选中的高宽
        isConfPlane: false // 组件配置面板是否展示
    },
    methods: {
        // 限制最大x和y
        getMinMaxPosition({ x, y }) {
            let left = Utils.clamp(x, 0, this.config.width - this.selectBox.x)
            let top = Utils.clamp(y, 0, this.config.height - this.selectBox.y)
            return {
                left, top
            }
        },
        // 选中组件
        selectComEvent(e, item) {
            e.preventDefault();
            startX = e.pageX;
            startY = e.pageY;
            isMouseDown = true;

            // 获取left和top
            startLeft = parseFloat(item.style.left.replace('px', ''));
            startTop = parseFloat(item.style.top.replace('px', ''));

            this.selectBox.x = parseFloat(item.style.width.replace('px', ''));
            this.selectBox.y = parseFloat(item.style.height.replace('px', ''));

            // 存储选择相关属性
            this.selectCom = item;
            this.selectId = item.id;
        },
        // 移动组件操作
        moveCom(e, item) {
            // 判断鼠标移动时是否处于按下状态
            if (isMouseDown) {

                const style = this.getMinMaxPosition({
                    x: (e.pageX - startX) + startLeft,
                    y: (e.pageY - startY) + startTop
                })
                item.style.left = style.left + 'px';
                item.style.top = style.top + 'px';

            }
        },
        // 鼠标松开组件操作
        moveUpCom() {
            isMouseDown = false;

        },

        // viewClick
        viewMainClick(e) {
            // 显示区域点击
            const { className } = e.target;

            // 判断点击是否在主面板
            const viewClass = 'main-view';
            if (className.includes(viewClass)) {
                this.selectId = null;
                this.selectCom = null;
            }
        },
        // 打开组件的配置面板
        openConfigPlane(com) {
            console.log(com)
            this.isConfPlane = true;
        }
    },
    watch: {
        selectId(id) {
            if (!id) return;
            // 打开当前组件的配置面盘
            this.openConfigPlane(this.selectCom);
        }
    }
}