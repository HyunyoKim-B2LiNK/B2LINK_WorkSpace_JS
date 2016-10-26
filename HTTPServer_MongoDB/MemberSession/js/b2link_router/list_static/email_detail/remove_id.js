//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/list_static/email_detail/remove_id.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/list_static/email_detail/remove_id
//*/
(function( req, res ){
	global.RayLog.log( "- [ S ] - email_detail/remove_id():void----------" );

	var t = global.server;//HTTP Server;
	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	//use q;
	//...Custom parameter process;

	global.b2link.request.get__member_session$checkSessionAndReqMongoDB( req, res, q, "list_static" , "email_detail$remove_id(" + q._id + ")");

	global.RayLog.log( "- [ E ] - email_detail/remove_id():void----------" );
});
