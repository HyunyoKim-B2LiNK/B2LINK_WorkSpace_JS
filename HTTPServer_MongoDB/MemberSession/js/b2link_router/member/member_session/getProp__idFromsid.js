//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/member/member_session/getProp__idFromsid.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/member_session/getProp__idFromsid
//*/
(function( req, res ){
	global.TtwLog.log( "- [ S ] - member/member_session/getProp__idFromsid():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	global.b2link_router.member.req__string( req, res, q, "member_session$getProp__idFromsid", q.sid );

	global.TtwLog.log( "- [ E ] - member/member_session/getProp__idFromsid():void----------" );
});