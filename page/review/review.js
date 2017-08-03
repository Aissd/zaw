$(function(){
    var stateParam = GetRequest();
    $('#review-img').attr('src', stateParam.url).attr('alt', stateParam.alt);
});
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