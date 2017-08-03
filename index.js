window.onload = function () {
    var dataObj = getJson();

    var html = '';
    for (var i = 0, len = dataObj.list.length; i < len; i++) {
        html += "<img src='" + dataObj.list[i].url + "' alt='" + dataObj.list[i].title + "' data-largesrc='" + dataObj.list[i].url + "'>";
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
};

function getJson() {
    var dataObj = {
        list:     
            [
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/001.jpg",
                    title: "海报"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/002.jpg",
                    title: "海报"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/003.jpg",
                    title: "海报"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/004.jpg",
                    title: "海报"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/005.jpg",
                    title: "海报"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/006.jpg",
                    title: "海报"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/007.jpg",
                    title: "海报"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/008.jpg",
                    title: "海报"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/009.jpg",
                    title: "海报"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/010.jpg",
                    title: "海报"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/011.jpg",
                    title: "海报"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/012.jpg",
                    title: "海报"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/013.jpg",
                    title: "海报"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/014.jpg",
                    title: "海报"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/015.jpg",
                    title: "海报"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/016.jpg",
                    title: "海报"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/017.jpg",
                    title: "海报"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/018.jpg",
                    title: "海报"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/019.jpg",
                    title: "海报"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/020.jpg",
                    title: "红酒展架"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/021.jpg",
                    title: "红酒展架"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/022.jpg",
                    title: "红酒展架"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/023.jpg",
                    title: "红酒展架"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/024.jpg",
                    title: "红酒展架"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/025.jpg",
                    title: "红酒展架"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/026.jpg",
                    title: "红酒展架"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/027.jpg",
                    title: "红酒展架"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/028.jpg",
                    title: "红酒展架"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/029.jpg",
                    title: "红酒展架"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/030.jpg",
                    title: "红酒展架"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/031.jpg",
                    title: "红酒展架"
                },
                // {
                //     "url": "http://zaw001-1254097928.cosgz.myqcloud.com/032.jpg",
                //     title: "产品详情页"
                // },
                // {
                //     "url": "http://zaw001-1254097928.cosgz.myqcloud.com/033.jpg",
                //     title: "产品详情页"
                // },
                // {
                //     "url": "http://zaw001-1254097928.cosgz.myqcloud.com/034.jpg",
                //     title: "产品详情页"
                // },
                // {
                //     "url": "http://zaw001-1254097928.cosgz.myqcloud.com/035.jpg",
                //     title: "产品详情页"
                // },
                // {
                //     "url": "http://zaw001-1254097928.cosgz.myqcloud.com/036.jpg",
                //     title: "产品详情页"
                // },
                // {
                //     "url": "http://zaw001-1254097928.cosgz.myqcloud.com/037.jpg",
                //     title: "产品详情页"
                // },
                // {
                //     "url": "http://zaw001-1254097928.cosgz.myqcloud.com/038.jpg",
                //     title: "产品详情页"
                // },
                // {
                //     "url": "http://zaw001-1254097928.cosgz.myqcloud.com/039.jpg",
                //     title: "产品详情页"
                // },
                // {
                //     "url": "http://zaw001-1254097928.cosgz.myqcloud.com/040.jpg",
                //     title: "产品详情页"
                // },
                // {
                //     "url": "http://zaw001-1254097928.cosgz.myqcloud.com/041.jpg",
                //     title: "产品详情页"
                // },
                // {
                //     "url": "http://zaw001-1254097928.cosgz.myqcloud.com/042.jpg",
                //     title: "产品详情页"
                // },
                // {
                //     "url": "http://zaw001-1254097928.cosgz.myqcloud.com/043.jpg",
                //     title: "产品详情页"
                // },
                // {
                //     "url": "http://zaw001-1254097928.cosgz.myqcloud.com/044.jpg",
                //     title: "产品详情页"
                // },
                // {
                //     "url": "http://zaw001-1254097928.cosgz.myqcloud.com/045.jpg",
                //     title: "产品详情页"
                // },
                // {
                //     "url": "http://zaw001-1254097928.cosgz.myqcloud.com/046.jpg",
                //     title: "产品详情页"
                // },
                // {
                //     "url": "http://zaw001-1254097928.cosgz.myqcloud.com/047.jpg",
                //     title: "产品详情页"
                // },
                // {
                //     "url": "http://zaw001-1254097928.cosgz.myqcloud.com/048.jpg",
                //     title: "产品详情页"
                // },
                // {
                //     "url": "http://zaw001-1254097928.cosgz.myqcloud.com/049.jpg",
                //     title: "产品详情页"
                // },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/050.jpg",
                    title: "海报"
                }
        ]
    };

    return dataObj;
}