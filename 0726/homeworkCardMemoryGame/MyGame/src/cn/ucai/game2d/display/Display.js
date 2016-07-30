/**
 * Created by plter on 7/26/16.
 */

import G2DEventDispatcher from "cn/ucai/game2d/events/G2DEventDispatcher"; /* 导入*/
import G2DMouseEvent from "cn/ucai/game2d/events/G2DMouseEvent";


class Display extends G2DEventDispatcher {

    constructor() {
        super();

        this.x = 0;
        this.y = 0;
        this.scaleX = 1;  /*缩放  值是1就是不变*/
        this.scaleY = 1;
        this.rotation = 0; /* 旋转*/

        this._enabled = true;
        this._parent = null;
        this._visible = true;
    }

    /**
     * @param {CanvasRenderingContext2D} context2d
     * @protected
     * @abstract
     */
    onDraw(context2d) {
    }

    /**
     *
     * @param {CanvasRenderingContext2D} context2d
     */
    internal_draw(context2d) {
        if (this._visible) {
            context2d.save();  /*保存画布*/
            context2d.translate(this.x, this.y);
            context2d.scale(this.scaleX, this.scaleY);
            context2d.rotate(this.rotation);

            this.onDraw(context2d);
            context2d.restore(); /* 重置*/
        }
    }

    /**
     * @param {number} globalX
     * @param {number} globalY
     * @return {boolean}
     */
    hitTestPoint(globalX, globalY) {
        return false;
    }

    getGlobalX() {
        var parent = this.getParent();  /*getParent获取父级对象，有父级就有值，没有父级就是null*/
        // console.log(parent);
        if (parent) {
            return parent.getGlobalX() + this.x;   /*返回这层的起始位置的x坐标*//*parent.getGlobalX()是一直往外找父类的起始x坐标，直至顶级对象*/
        } else {
            return 0;
        }
    }

    getGlobalY() {
        var parent = this.getParent();
        if (parent) {
            return parent.getGlobalY() + this.y;
        } else {
            return 0;
        }
    }

    /**
     * @param nativeEvent
     */
    internal_onClick(nativeEvent) {
        if (this.isEnabled() && this.isVisible() && this.hitTestPoint(nativeEvent.layerX, nativeEvent.layerY)) {
            let e = new G2DMouseEvent(G2DMouseEvent.CLICK);
            this.internal_dispatchEvent(e);
        }
    }

    internal_dispatchEvent(e) {
        e.internal_setTarget(this);
        this.dispatchEvent(e);

        if (this.getParent()) {
            this.getParent().internal_dispatchEvent(e);
        }
    }

    /**
     *
     * @param {Boolean} value
     */
    setEnabled(value) {
        this._enabled = value;
    }

    /**
     * @return {Boolean|*|boolean}
     */
    isEnabled() {
        return this._enabled;
    }

    internal_setParent(value) {
        this._parent = value;
    }

    getParent() {
        return this._parent;
    }

    setVisible(value) {
        this._visible = value;
    }

    isVisible() {
        return this._visible;
    }
}

export default Display;