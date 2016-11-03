//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/list_static/email_detail/update_id.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/list_static/email_detail/update_id
//*/
(function( req, res ){
	global.RayLog.log( "- [ S ] - email_detail/update_id():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	var d = {};
	global.b2link_validation.list_static.email_detail$update_id( d, q );

	global.b2link_router.list_static.req__json( req, res, q, "email_detail$update_id", d );

	global.RayLog.log( "- [ E ] - email_detail/update_id():void----------" );
});
