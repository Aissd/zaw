window.onload = function () {
    var urlParams = GetRequest(), dataObj = '';
    switch(urlParams.page) {
    case 'poster':
        $('#poster').addClass('current').siblings().removeClass('current');
        dataObj = getPosterData();
        break;
    case 'detail':
        $('#detail').addClass('current').siblings().removeClass('current');
        dataObj = getDetailData();
        break;
    default:
        $('#index').addClass('current').siblings().removeClass('current');
        dataObj = getIndexData();
    }

    var html = '';
    for (var i = 0, len = dataObj.list.length; i < len; i++) {
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
        var pictureWidth = $(e.currentTarget).find('img')[0].naturalWidth; // 原图片宽度
        var pictureHeight = $(e.currentTarget).find('img')[0].naturalHeight; // 原图片宽度
        var html = '<img src="' + url + '" />';
        var modalContent = $('#modal-content');
        $('html, body').animate({'scrollTop': 0}, 200);
        modalContent.empty().append(html);
        if(pictureWidth > 1200) {
            modalContent.find('img').css({
                'width': 1200
            });
        } else {
            modalContent.find('img').css({
                'width': pictureWidth
            });
        }
        $('body').css({'height': pictureHeight});
        $('#modal-container').show();
    });

    // 点击关闭模态框
    $('#modal-container').on('click', '#modal-close', function(e){
        $('#modal-container').hide();
    });
};


/*
 * 获取URL参数
 */
function GetRequest() {
    var url=window.location.href;
    var requeststr=url.split('?')[1];
    var theRequest=new Object();
    if(requeststr!=undefined)
    {
        var requestparams=requeststr.split('&');
        for(var i=0;i<requestparams.length;i++)
        {
            var key=requestparams[i].split("=")[0];
            var kvalue=requestparams[i].split("=")[1];
            kvalue=decodeURI(kvalue);
            theRequest[key]=decodeURI(kvalue);
        }
    }
    return theRequest;
}

// 获取店铺首页数据
function getIndexData() {
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
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/storeIndex/009.jpg",
                    title: "首页"
                },
                {
                    "url": "http://zaw002-1254097928.cosgz.myqcloud.com/storeIndex/010.jpg",
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
                }
        ]
    };

    return dataObj;
}

// 获取海报数据
function getPosterData() {
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
                }
        ]
    };
    return dataObj;
}

// 获取详情页数据
function getDetailData() {
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
