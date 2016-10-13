//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/member_session_log/getAllList.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/member_session_log/getAllList
//*/
(function( req, res ){
	console.log( "- [ S ] - member_session_log/getAllList():void----------" );

	var t = global.server;//HTTP Server;
	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	//use q;
	//...Custom parameter process;

	global.b2link.request.get__member_session$checkSessionAndReqMongoDB( req, res, q, "member", "member_session_log$getAllList()" );

	console.log( "- [ E ] - member_session_log/getAllList():void----------" );
});
