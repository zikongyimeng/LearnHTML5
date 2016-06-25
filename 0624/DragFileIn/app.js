/**
 * Created by sks on 2016/6/24.
 */


(function () {

    var currentImg;

    document.ondragover=function (e) {
        e.preventDefault();//取消不让拖入的默认行为
    };

    document.ondrop=function (e) {
        e.preventDefault();  //阻止不让放入的默认行为
        
        var files = e.dataTransfer.files;   //dataTransfer  拖拽数据传递对象
        if (files&&files.length){
            var file=files[0];  //有可能拖入多个文件，这里让只输出第一个
                if (file.type=="image/jpeg"){  //判断文件的类型是不是jpeg格式是的话能拖进去，不是的话拖不进去
                    var reader=new FileReader;  //FileReader是个类，系统的


                    reader.onload=function () {
                        if (currentImg){
                            currentImg.parentNode.removeChild(currentImg);//有值的话先移除
                        }
                        currentImg=document.createElement("img");//创建img
                        currentImg.src=reader.result;//获取结果    读取后触发onload事件后的结果
                        document.body.appendChild(currentImg);//添加节点
                    };
                    //开始读取文件
                    reader.readAsDataURL(file);//读取文件
                }
        }
    }

})();