import Utils from '@/utils/index'
let isMouseDown = false;
  
let startX = 0; 
let startY = 0;
let startLeft = 0;
let startTop = 0;
export default {
    data: {
        selectCom: null, // 当前选中的组件
        selectBox: { x: 0, y: 0 } // 当前选中的高宽
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
            console.log(e)
            startX = e.pageX;
            startY = e.pageY;
            isMouseDown = true;

            // 获取left和top
            startLeft = parseFloat(item.style.left.replace('px', ''))
            startTop = parseFloat(item.style.top.replace('px', ''))

            this.selectBox.x = parseFloat(item.style.width.replace('px', ''))
            this.selectBox.y = parseFloat(item.style.height.replace('px', ''))
            console.log(this.selectBox)
        },
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
        moveUpCom() {
            isMouseDown = false;
        }
    }
}