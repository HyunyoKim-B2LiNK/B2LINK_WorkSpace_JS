//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/member/member_public/getAllList__nm.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/member_session/checkSession__Sign_In?mid=thdtjsdn@gmail.com&upw=123qweasd
http://localhost:49320/member_public/getAllList__nm
//*/
(function( req, res ){
	global.TtwLog.log( "- [ S ] - member/member_public/getAllList__nm():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	global.b2link_router.member.req__fNm( req, res, q, "member_public$getAllList__nm" );

	global.TtwLog.log( "- [ E ] - member/member_public/getAllList__nm():void----------" );
});