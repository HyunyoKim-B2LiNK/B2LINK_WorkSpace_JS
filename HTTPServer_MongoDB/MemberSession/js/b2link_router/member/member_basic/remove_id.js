//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/list_static/member_basic/remove_id.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/list_static/member_basic/remove_id
//*/
(function( req, res ){
	global.RayLog.log( "- [ S ] - member_basic/remove_id():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	global.b2link_validation.member.member_basic$remove_id( q );

	global.b2link_router.member.req__value( req, res, q, "member_basic$remove_id", q._id );

	global.RayLog.log( "- [ E ] - member_basic/remove_id():void----------" );
});
