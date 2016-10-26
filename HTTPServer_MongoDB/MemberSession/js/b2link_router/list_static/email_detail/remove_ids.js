//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/list_static/email_detail/remove_ids.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/list_static/email_detail/remove_ids
//*/
(function( req, res ){
	global.RayLog.log( "- [ S ] - email_detail/remove_ids():void----------" );

	var t = global.server;//HTTP Server;
	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	global.b2link.request.get__member_session$checkSessionAndReqMongoDB( req, res, q, "list_static" , "email_detail$remove_ids(" + q.ids + ")");

	global.RayLog.log( "- [ E ] - email_detail/remove_ids():void----------" );
});
