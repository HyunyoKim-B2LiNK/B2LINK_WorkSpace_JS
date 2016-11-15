//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/member/member_basic/getDocProperty__Name_KR.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/member/member_basic/getDocProperty__Name_KR
//*/
(function( req, res ){
	global.TtwLog.log( "- [ S ] - member/member_basic/getDocProperty__Name_KR():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	global.b2link_router.member.req__string( req, res, q, "member_basic$getDocProperty__Name_KR", q.sid );

	global.TtwLog.log( "- [ E ] - member/member_basic/getDocProperty__Name_KR():void----------" );
});