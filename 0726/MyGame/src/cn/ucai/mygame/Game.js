/**
 * Created by sks on 2016/7/26.
 */
/**
 * Created by plter on 7/26/16.
 */

import Game2dApp from "cn/ucai/game2d/app/Game2dApp";
import Rectangle from "cn/ucai/game2d/display/Rectangle";
import Text from "cn/ucai/game2d/display/Text";
import Container from "cn/ucai/game2d/display/Container";
import G2DMouseEvent from "cn/ucai/game2d/events/G2DMouseEvent";

class Game extends Game2dApp {
    constructor() {
        super(600, 400);    /*super()是父类，执行父类函数，这里是canvas*/
        // console.log(super);
        document.body.appendChild(this.getDom());
        // console.log(this);

        this.testGlobalPosition();
    }

    testGlobalPosition() {
        this._container = new Container();
        this._container.x = 10;
        this._container.y = 30;

        this._containerA = new Container();
        this._containerA.x = 10;
        this._rect = new Rectangle(100, 100, "#ff0000");
        this._rect.x = 10;

        this._containerA.addChild(this._rect);

        this._container.addChild(this._containerA);
        
        // console.log(this._containerA.getGlobalX());
        
        this.addChild(this._container);

        console.log(this._rect.getGlobalX());

        /*点击方块*/
        this._rect.addEventListener(G2DMouseEvent.CLICK, function (event) {
            console.log(event);
        });
    }

    simpleExample() {
        this._container = new Container();

        this._rect = new Rectangle(100, 100, "#ff0000");
        this._rect.y = 100;
        this._rect.scaleX = 2;
        this._container.addChild(this._rect);

        /*文本*/
        this._text = new Text("Hello World");
        this._text.setColor("#ff0000");
        this._container.addChild(this._text);

        this.addChild(this._container);

        this._container.x = 100;
    }
}

new Game();

export default Game;