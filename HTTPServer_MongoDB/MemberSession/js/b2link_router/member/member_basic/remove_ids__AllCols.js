//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/member/member_basic/remove_ids__AllCols.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/member/member_basic/remove_ids__AllCols
//*/
(function( req, res ){
	global.RayLog.log( "- [ S ] - member_basic/remove_ids__AllCols():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	global.b2link_validation.member.member_basic$remove_ids__AllCols( q );

	global.b2link_router.member.req__value( req, res, q, "member_basic$remove_ids__AllCols", q.ids );

	global.RayLog.log( "- [ E ] - member_basic/remove_ids__AllCols():void----------" );
});