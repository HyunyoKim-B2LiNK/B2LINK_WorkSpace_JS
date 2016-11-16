//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/member/member_public/getAllList__nm_us.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/member_public/getAllList__nm_us
//*/
(function( req, res ){
	global.TtwLog.log( "- [ S ] - member/member_public/getAllList__nm_us():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	global.b2link_router.member.req__fNm( req, res, q, "member_public$getAllList__nm_us" );

	global.TtwLog.log( "- [ E ] - member/member_public/getAllList__nm_us():void----------" );
});