//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/member/member_session/checkSession.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/member_session/checkSession
http://localhost:49320/member_session/checkSession?uid=thdtjsdn@gmail.com&upw=123qweasd
//*/
(function( req, res ){
	console.log( "- [ S ] - member/member_session/checkSession():void----------" );

	var t = global.server;//HTTP Server;
	var q = global.b2link.url.getQueryFromURL( req.url );//Query;
	var qp = global.b2link.session.get_or_create__Session( req, res, q );//Query Parameter;

	q.sid ? qp.sid = q.sid : null;
	q.db = "member";

	//Request Database;
	q.q = "member_session$checkSession__Expired__sid(" + JSON.stringify( qp ) + ")";
		//console.logObjectInformation( q, "q" );
		//console.logObjectInformation( qp, "qp" );

	t.req_DB( req, res, q, function( error, result ){
		if( error )
		{
			global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
			return;
		}
		if( 0 == result ) global.b2link.response.send_301_DestroySession( req, res );
		else if( 1 == result ) global.b2link.response.send_200_JSON( req, res, result );
	});

	console.log( "- [ E ] - member/member_session/checkSession():void----------" );
});