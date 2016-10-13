//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/member/member_basic/getAllList__nm.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/member_session/checkSession__Sign_In?uid=thdtjsdn@gmail.com&upw=123qweasd
http://localhost:49320/member_basic/getAllList__nm
//*/
(function( req, res ){
	console.log( "- [ S ] - member/member_basic/getAllList__nm():void----------" );

	var t = global.server;//HTTP Server;
	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	//use q;
	//...Custom parameter process;

	global.b2link.request.get__member_session$checkSessionAndReqMongoDB( req, res, q, "member", "member_basic$getAllList__nm()" );

	console.log( "- [ E ] - member/member_basic/getAllList__nm():void----------" );
});
