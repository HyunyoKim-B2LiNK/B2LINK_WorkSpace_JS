//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/list_static/member_basic/remove_ids.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/list_static/member_basic/remove_ids
//*/
(function( req, res ){
	global.RayLog.log( "- [ S ] - member_basic/remove_ids():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	global.b2link_validation.list_static.member_basic$remove_ids( q );

	global.b2link_router.list_static.req__value( req, res, q, "member_basic$remove_ids", q.ids );

	global.RayLog.log( "- [ E ] - member_basic/remove_ids():void----------" );
});
