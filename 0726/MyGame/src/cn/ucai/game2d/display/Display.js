/**
 * Created by sks on 2016/7/26.
 */

import G2DEventDispatcher from "cn/ucai/game2d/events/G2DEventDispatcher";
import G2DMouseEvent from "cn/ucai/game2d/events/G2DMouseEvent";

class Display extends G2DEventDispatcher{
    constructor(){
        super();

        this.x=0;
        this.y=0;
        this.scaleX=1;/*沿x轴缩放,值是1的话默认不缩放*/
        this.scaleY=1;
        this.rotation=0;  /*rotation旋转*/

        this._enabled=true;
        this._parent=null;
    }
    /**
     * @param{CanvasRenderingContext2D} context2d
     * @protected
     * @abstract
     */
    onDraw(context2d){

    }
    internal_draw(context2d){
        context2d.save();
        context2d.translate(this.x,this.y);
        context2d.scale(this.scaleX,this.scaleY);
        context2d.rotate(this.rotation);

        this.onDraw(context2d);
        context2d.restore();
    }

    /**
     *
     * @param {number} globalX
     * @param {number} globalY
     * @returns {boolean}
     */
    hitTestPoint(globalX,globalY){
        return false;
    }
    getGlobalX(){
        var parent=this.getParent();
        if(parent){
            return parent.getGlobalX()+this.x;
        }else {
            return 0;
        }
    }

    /**
     * @param nativeEvent
     */
    internal_onClick(nativeEvent){
        if (this.isEnabled()&&this.hitTestPoint(nativeEvent.layerX,nativeEvent.layerY)){
            this.dispatchEvent(new G2DMouseEvent(G2DMouseEvent.CLICK));
        }
    }

    /**
     *
     * @param {Boolean} value
     */
    setEnabled(value){
        this._enabled=value;
    }

    /**
     * @returns {boolean|*|Boolean}
     */
    isEnabled(){
        return this._enabled;
    }
    internal_setParent(value){
        this._parent=value;
    }
    getParent(){
        return this._parent;
    }
}
export default Display;