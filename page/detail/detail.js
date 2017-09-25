$(function () {
    var dataObj = getJson();
    var html = '';
    for(var i = 0, len = dataObj.list.length; i < len; i++){
        html += '<div class="waterfall-item">'+
                    '<img src="'+dataObj.list[i].url+'"  alt="'+dataObj.list[i].title+'" />'+
                '</div>';
    }
    
    $("#water-bar").append(html).waterfall({
        itemClass: ".waterfall-item",
        minColCount: 3,
        spacingHeight: 10,
        resizeable: true
    });

    $('#water-bar').on('click', '.waterfall-item', function(e){
        window.open("./../review/review.html?url=" + e.target.currentSrc + '&alt=' + e.target.alt);
    });
});

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
                }
        ]
    };
    return dataObj;
}