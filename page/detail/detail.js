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
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/038.jpg",
                    title: "产品详情页"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/041.jpg",
                    title: "产品详情页"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/048.jpg",
                    title: "产品详情页"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/049.jpg",
                    title: "产品详情页"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/032.jpg",
                    title: "产品详情页"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/033.jpg",
                    title: "产品详情页"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/034.jpg",
                    title: "产品详情页"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/035.jpg",
                    title: "产品详情页"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/036.jpg",
                    title: "产品详情页"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/037.jpg",
                    title: "产品详情页"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/039.jpg",
                    title: "产品详情页"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/040.jpg",
                    title: "产品详情页"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/042.jpg",
                    title: "产品详情页"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/043.jpg",
                    title: "产品详情页"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/044.jpg",
                    title: "产品详情页"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/045.jpg",
                    title: "产品详情页"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/046.jpg",
                    title: "产品详情页"
                },
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/047.jpg",
                    title: "产品详情页"
                }
        ]
    };
    return dataObj;
}