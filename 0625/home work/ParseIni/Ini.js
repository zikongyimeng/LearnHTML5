/**
 * Created by plter on 6/25/16.
 */

window.ucai = window.ucai || {};

(function () {

    /**
     * 根据Ini文件内容创建一个Ini对象
     * @param str {String} ini文件内容
     * @constructor
     */
    function Ini(str) {
        var pNode = /\[(.*)\]/g;//正则匹配开头的名字
        var pKv = /(.*)=(.*)/g;//正则匹配键值对

        while (true) {
            var result = pNode.exec(str);//节点匹配
            
            //console.log(result);
            
            if (result) {
                var nodeName = result[1];//第一个小括号里的内容
         //     console.log(nodeName);  //这里输出app和config
                
                this[nodeName] = {};//创建空对象，这样写是创建动态的，这里的nodeName是创建的动态的成员属性的名字，
                                      //是个变量，传进来什么就是什么，另外this.nodeName的意思是固定的，不是动态的

                var startIndex = result.index + result[0].length;//方括号以外的开始位置
                var endIndex = str.indexOf("[", startIndex);//indexOf里的“[”是要查找的，第二个是开始查找的位置
                
                //如果查找不到,则说明此节点是最后一个,所以将结束位置移到字符串结尾
                if (endIndex == -1) {
                    endIndex = str.length;   
                }

                var nodeContent = str.substring(startIndex, endIndex);
                //console.log(nodeContent);//输出所有键值对

                while (true) {
                    var kvResult = pKv.exec(nodeContent);//匹配键值对

                    if (kvResult) {
                        this[nodeName][kvResult[1].trim()] = kvResult[2].trim();//把值 赋值给 键；trim()是去掉空白格
                    } else {
                        break;
                    }
                }
            } else {
                break;
            }
        }
    }

    ucai.Ini = Ini;
})();