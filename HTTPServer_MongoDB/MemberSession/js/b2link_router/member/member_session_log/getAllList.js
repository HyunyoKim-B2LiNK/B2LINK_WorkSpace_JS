//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/member_session_log/getAllList.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/member_session_log/getAllList
//*/
(function( req, res ){
	global.TtwLog.log( "- [ S ] - member_session_log/getAllList():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	global.b2link_router.member.req__fNm( req, res, q, "member_session_log$getAllList" );

	global.TtwLog.log( "- [ E ] - member_session_log/getAllList():void----------" );
});
