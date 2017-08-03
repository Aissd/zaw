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
                {
                    "url": "http://zaw001-1254097928.cosgz.myqcloud.com/050.jpg",
                    title: "海报"
                }
        ]
    };
    return dataObj;
}