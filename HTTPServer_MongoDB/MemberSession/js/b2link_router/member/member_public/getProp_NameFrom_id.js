//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/member/member_public/getProp_NameFrom_id.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/member/member_public/getProp_NameFrom_id
//*/
(function( req, res ){
	global.TtwLog.log( "- [ S ] - member/member_public/getProp_NameFrom_id():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	global.b2link_router.member.req__fn( req, res, q
		, "member_public$getProp_NameFrom_id(" + q._id + ")" );

	global.TtwLog.log( "- [ E ] - member/member_public/getProp_NameFrom_id():void----------" );
});