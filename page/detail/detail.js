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
        var naturalWidth = $(e.currentTarget).find('img')[0].naturalWidth;
        var html = '<img src="' + url + '" />';
        $('html, body').animate({'scrollTop': 0}, 200);
        var modalContent = $('#modal-content');
        modalContent.empty().append(html);
        if(naturalWidth > 1200) {
            modalContent.find('img').css({
                'width': 1200
            });
        } else {
            modalContent.find('img').css({
                'width': naturalWidth
            });
        }
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
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/detail/1.jpg",
                    title: "产品详情页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/detail/2.jpg",
                    title: "产品详情页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/detail/4.jpg",
                    title: "产品详情页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/detail/5.jpg",
                    title: "产品详情页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/detail/6.jpg",
                    title: "产品详情页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/detail/7.jpg",
                    title: "产品详情页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/detail/8.jpg",
                    title: "产品详情页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/detail/9.jpg",
                    title: "产品详情页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/detail/10.jpg",
                    title: "产品详情页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/detail/011.jpg",
                    title: "产品详情页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/detail/012.jpg",
                    title: "产品详情页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/detail/013.jpg",
                    title: "产品详情页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/detail/014.jpg",
                    title: "产品详情页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/detail/015.jpg",
                    title: "产品详情页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/detail/016.jpg",
                    title: "产品详情页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/detail/017.jpg",
                    title: "产品详情页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/detail/018.jpg",
                    title: "产品详情页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/detail/019.jpg",
                    title: "产品详情页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/detail/020.jpg",
                    title: "产品详情页"
                }
        ]
    };
    return dataObj;
}