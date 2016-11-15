//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/member/member_basic/getDocProperty__Name__id.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/member/member_basic/getDocProperty__Name__id
//*/
(function( req, res ){
	global.TtwLog.log( "- [ S ] - member/member_basic/getDocProperty__Name__id():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	global.b2link_router.member.req__string( req, res, q, "member_basic$getDocProperty__Name__id", q.sid );

	global.TtwLog.log( "- [ E ] - member/member_basic/getDocProperty__Name__id():void----------" );
});