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

	//global.b2link.request.get__member_session$checkSessionAndReqMongoDB( req, res, q, "member", "member_session$destroySession__sid(" + JSON.stringify( qp ) + ")" );

	q.db = "member";
	q.q = "member_session$destroySession__sid(" + JSON.stringify( qp ) + ")";

	t.req_DB( req, res, q, function( error, result ){
		global.TtwLog.timeStamp( "-- [ S ] - member/member_session/checkSession__Sign_In::__checkSession__1::res():void----------" );
		if( error )
		{
			global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
			global.TtwLog.timeStamp( "-- [ E ] - member/member_session/checkSession__Sign_In::__checkSession__1::res():void----------if( error ) return;" );
			return;
		}
		global.b2link.response.setHeader__setcookie__null( req, res );
		global.b2link.response.send_200_String_DestroySessionComplete( req, res );
		global.TtwLog.timeStamp( "-- [ E ] - member/member_session/checkSession__Sign_In::__checkSession__1::res():void----------" );
	});

	console.log( "- [ E ] - member/member_session/destroySession():void----------" );
});
