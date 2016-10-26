//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/member/member_basic/getAllList__nm_kr.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/member_basic/getAllList__nm_kr
//*/
(function( req, res ){
	global.TtwLog.log( "- [ S ] - member/member_basic/getAllList__nm_kr():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	global.b2link_router.member.req__fNm( req, res, q, "member_basic$getAllList__nm_kr" );

	global.TtwLog.log( "- [ E ] - member/member_basic/getAllList__nm_kr():void----------" );
});
