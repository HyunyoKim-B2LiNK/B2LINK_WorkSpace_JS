//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/list_static/email/add.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/list_static/email/add
//*/
(function( req, res ){
	global.RayLog.log( "- [ S ] - email/add():void----------" );

	var t = global.server;//HTTP Server;
	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	//use q;
    //...Custom parameter process;

    global.b2link.request.get__member_session$checkSessionAndReqMongoDB( req, res, q, "list_static" , "email$addDoc(" + JSON.stringify( q ) + ")");

	global.RayLog.log( "- [ E ] - email/add():void----------" );
});
