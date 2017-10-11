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

    // 点击图片
    $(document).on('click', '.chrg-item', function(e){
        var url = $(e.currentTarget).find('img').attr('src');
        var html = '<img src="' + url + '" />';
        $('html, body').animate({'scrollTop': 0}, 200);
        $('#modal-content').empty().append(html);
        $('#modal-container').show();
    });

    // 点击关闭模态框
    $('#modal-container').on('click', '#modal-close', function(e){
        $('#modal-container').hide();
    });
};

function getJson() {
    var dataObj = {
        list:     
            [
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/storeIndex/001.jpg",
                    title: "首页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/storeIndex/002.jpg",
                    title: "首页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/storeIndex/003.jpg",
                    title: "首页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/storeIndex/004.jpg",
                    title: "首页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/storeIndex/005.jpg",
                    title: "首页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/storeIndex/006.jpg",
                    title: "首页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/storeIndex/007.jpg",
                    title: "首页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/storeIndex/008.jpg",
                    title: "首页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/storeIndex/009.jpg",
                    title: "首页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/storeIndex/010.jpg",
                    title: "首页"
                }
        ]
    };

    return dataObj;
}