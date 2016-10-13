//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/member/member_session/destroySession.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/member_session/destroySession
http://localhost:49320/member_session/destroySession?sid="";
//*/
(function( req, res ){
	console.log( "- [ S ] - member/member_session/destroySession():void----------" );

	var t = global.server;//HTTP Server;
	var q = global.b2link.url.getQueryFromURL( req.url );//Query;
	var qp = global.b2link.session.get_or_create__Session( req, res, q );//Query Parameter;

	global.b2link.request.get__member_session$checkSessionAndReqMongoDB( req, res, q, "member", "member_session$destroySession__sid(" + JSON.stringify( qp ) + ")" );

	console.log( "- [ E ] - member/member_session/destroySession():void----------" );
});
