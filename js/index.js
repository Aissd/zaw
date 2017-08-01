$(document).ready(function () {
    $(".mygallery").chromaGallery({
        color: '#000',
        gridMargin: 15,
        maxColumns: 5,
        dof: true,
        screenOpacity: 0.8
    });
});

window.onload = function () {
    var list = [{
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/001.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/002.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/003.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/004.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/005.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/006.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/007.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/008.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/009.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/010.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/011.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/012.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/013.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/014.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/015.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/016.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/017.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/018.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/019.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/020.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/021.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/022.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/023.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/024.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/025.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/026.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/027.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/028.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/029.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/030.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/031.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/032.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/033.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/034.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/035.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/036.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/037.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/038.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/039.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/040.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/041.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/042.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/043.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/044.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/045.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/046.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/047.jpg",
            title: ""
        },
        {
            "url": "http://zaw01-1254097928.cosgz.myqcloud.com/048.jpg",
            title: ""
        }
    ];

    var html = '';
    for (var i = 0, len = list.length; i < len; i++) {
        html += "<img src='" + list[i].url + "' alt='" + list[i].title + "' data-largesrc='" + list[i].url + "'>";
    }
    $("#mygallery").append(html);
};