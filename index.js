window.onload = function () {
    var dataObj = getJson();

    var html = '';
    for (var i = 0, len = dataObj.list.length; i < len; i++) {
        // html += "<img src='" + dataObj.list[i].url + "' alt='" + dataObj.list[i].title + "' data-largesrc='" + dataObj.list[i].url + "'>";
        html += "<img src='" + dataObj.list[i].url + "' data-largesrc='" + dataObj.list[i].url + "'>";
    }

    $("#mygallery").append(html).chromaGallery({
        color: '#000', // 设置图片画廊的背景色。默认值为“chroma”，它使用图片的主导颜色作为背景色
        gridMargin: 20, // 网格图片之间的间隔
        maxColumns: 3, // 网格布局的最大列数
        dof: false, // 深度背景效果，对性能有影响 
        fullscreen: false, // 是否添加全屏模式
        lazyLoad: true, // 是否启用图片懒加载 
        items: null, // 要加载的图片数组
        screenOpacity: 0.8 // 屏幕的透明度，值在0-1之间
    });

    $(document).on('click', '.chrg-item', function(e){
        console.log($(e.currentTarget).find('img').attr('src'));
        var url = $(e.currentTarget).find('img').attr('src');
        window.location.href = 'page/review/review.html?url=' + url;
    });
};

function getJson() {
    var dataObj = {
        list:     
            [
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/index/001.jpg",
                    title: "首页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/index/002.jpg",
                    title: "首页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/index/003.jpg",
                    title: "首页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/index/004.jpg",
                    title: "首页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/index/005.jpg",
                    title: "首页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/index/006.jpg",
                    title: "首页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/index/007.jpg",
                    title: "首页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/index/008.jpg",
                    title: "首页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/index/009.jpg",
                    title: "首页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/index/010.jpg",
                    title: "首页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/index/011.jpg",
                    title: "首页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/index/012.jpg",
                    title: "首页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/index/013.jpg",
                    title: "首页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/index/014.jpg",
                    title: "首页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/index/015.jpg",
                    title: "首页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/index/016.jpg",
                    title: "首页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/index/017.jpg",
                    title: "首页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/index/018.jpg",
                    title: "首页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/index/019.jpg",
                    title: "首页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/index/020.jpg",
                    title: "首页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/index/021.jpg",
                    title: "首页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/index/022.jpg",
                    title: "首页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/index/023.jpg",
                    title: "首页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/index/024.png",
                    title: "首页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/index/025.jpg",
                    title: "首页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/index/026.jpg",
                    title: "首页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/index/027.jpg",
                    title: "首页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/index/028.jpg",
                    title: "首页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/index/029.jpg",
                    title: "首页"
                }
        ]
    };

    return dataObj;
}