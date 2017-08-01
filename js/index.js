$(function(){
    var imgArray = [
        {
            "url": "images/001.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/002.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/003.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/004.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/005.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/006.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/007.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/008.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/009.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/010.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/011.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/012.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/013.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/014.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/015.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/016.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/017.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/018.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/019.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/020.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/021.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/022.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/023.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/024.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/025.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/026.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/027.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/028.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/029.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/030.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/031.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/032.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/033.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/034.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/035.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/036.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/037.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/038.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/039.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/040.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/041.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/042.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/043.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/044.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/045.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/046.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/047.jpg",
            "title": "jQuery瀑布流特效"
        },
        {
            "url": "images/048.jpg",
            "title": "jQuery瀑布流特效"
        }
    ];
    var html = "";
    for(var i = 0, len = imgArray.length; i < len; i++){
        html += "<div class='cell'>" + 
                        "<a href='javascript:;'>" + 
                        "<img src='" + imgArray[i].url + "' /></a>" + 
                        "<p>" + 
                            "<a href='javascript:;'>" + imgArray[i].title + "</a>" + 
                        "</p>" + 
                    "</div>'";
    }
    $('#waterfall').append(html);
    // 瀑布流初始化
    var opt = {
        getResource: function (index, render) { 
            //index为已加载次数,render为渲染接口函数,接受一个dom集合或jquery对象作为参数。通过ajax等异步方法得到的数据可以传入该接口进行渲染，如 render(elem)
            if (index >= 7) index = index % 7 + 1;
            var html = '';
            for (var i = 20 * (index - 1); i < 20 * (index - 1) + 20; i++) {
                var k = '';
                for (var ii = 0; ii < 3 - i.toString().length; ii++) {
                    k += '0';
                }
                k += i;
                // var src = "http://cued.xunlei.com/demos/publ/img/P_" + k + ".jpg";
                // html += '<div class="cell"><a href="#"><img src="' + src + '" /></a><p>' + k + '</p></div>';
            }
            return $(html);
        },
        auto_imgHeight: true,
        insert_type: 1
    }
    $('#waterfall').waterfall(opt);
});