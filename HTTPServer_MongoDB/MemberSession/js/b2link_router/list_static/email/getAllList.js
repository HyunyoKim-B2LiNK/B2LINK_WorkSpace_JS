//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/list_static/email/getAllList.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/list_static/email/getAllList
//*/
(function( req, res ){
    console.log( "- [ S ] - list_static/email/getAllList():void----------" );

    console.log( req.url );

    var t = global.server;//HTTP Server;
    var q = global.b2link.url.getQueryFromURL( req.url );//Query;

    //use q;
    //...Custom parameter process;
    global.b2link.request.get__member_session$checkSessionAndReqMongoDB( req, res, q, "list_static", "email$getAllList()");

    console.log( "- [ E ] - list_static/email/getAllList():void----------");
});