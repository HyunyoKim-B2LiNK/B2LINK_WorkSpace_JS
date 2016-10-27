//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/member/member_session/checkSession__Sign_In.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @property {Object}
 */
var __referenceObj = {
	server : null
};

/**
 * checkSession and SignIn
 * @function
 * @param {HTTPClientRequest} req
 * @param {HTTPClientResponse} res
 * @param {Object} q {}
 * @param {Object} qp {}
 */
__referenceObj.checkSession__0 = function( req, res, q, qp )
{
	global.TtwLog.timeStamp( "- [ S ] - member/member_session/checkSession__Sign_In::__checkSession__0():void----------" );

	var t = __referenceObj.server;//HTTP Server;
	q.q = "member_session$checkSession__Sign_In(" + JSON.stringify( qp ) + ")";//Query;

	t.req_DB( req, res, q, function( error, result ){
		if( error )
		{
			global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
			return;
		}

		global.b2link.response.setHeader__setcookie( req, res, qp );

		if( 0 == result ) global.b2link.response.send_301_DestroySession( req, res );
		else if( 1 == result ) global.b2link.response.send_200_JSON( req, res, { sid : qp.sid, Expires : qp.d_ex, mid : qp.mid } );
	});

	global.TtwLog.timeStamp( "- [ E ] - member/member_session/checkSession__Sign_In::__checkSession__0():void----------" );
};

/**
 * checkSession
 * @function
 * @param {HTTPClientRequest} req
 * @param {HTTPClientResponse} res
 * @param {Object} q {}
 * @param {Object} qp {}
 */
__referenceObj.checkSession__1 = function( req, res, q, qp )
{
	global.TtwLog.timeStamp( "- [ S ] - member/member_session/checkSession__Sign_In::__checkSession__1():void----------" );

	var t = __referenceObj.server;//HTTP Server;
	q.q = "member_session$checkSession__Expired__mid(" + JSON.stringify( qp ) + ")";

	t.req_DB( req, res, q, function( error, result ){
		global.TtwLog.timeStamp( "-- [ S ] - member/member_session/checkSession__Sign_In::__checkSession__1::res():void----------" );
		if( error )
		{
			global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
			global.TtwLog.timeStamp( "-- [ E ] - member/member_session/checkSession__Sign_In::__checkSession__1::res():void----------if( error ) return;" );
			return;
		}

		if( 0 == result ) global.b2link.response.send_301_DestroySession( req, res );
		else if( 1 == result ) global.b2link.response.send_200_JSON( req, res, { sid : qp.sid, Expires : qp.d_ex, mid : qp.mid } );
		global.TtwLog.timeStamp( "-- [ E ] - member/member_session/checkSession__Sign_In::__checkSession__1::res():void----------" );
	});

	global.TtwLog.timeStamp( "- [ E ] - member/member_session/checkSession__Sign_In::__checkSession__1():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//	Return Object(Function);

//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/member_session/checkSession__Sign_In
http://localhost:49320/member_session/checkSession__Sign_In?mid=thdtjsdn@gmail.com&upw=123qweasd
http://localhost:49320/member_session/checkSession__Sign_In?mid=thdtjsdn@gmail.com&upw=123qweasd
//*/
(function( req, res ){
	global.TtwLog.timeStamp( "- [ S ] - member/member_session/checkSession__Sign_In():void----------" );

	var t = __referenceObj.server = global.server;//HTTP Server;
	var q = global.b2link.url.getQueryFromURL( req.url );//Query;
	var qp = global.b2link.session.get_or_create__Session( req, res, q );//Query Parameter;

	console.logObjectInformation( q, "q" );

	qp.mid = q.mid;
	qp.mpw = q.mpw;

	q.sid ? qp.sid = q.sid : null;
	q.db = "member";

	//Request Database;
	console.log( "qp.bFirstSession : " + qp.bFirstSession );
	__referenceObj[ "checkSession__" + qp.bFirstSession ]( req, res, q, qp );

	global.TtwLog.timeStamp( "- [ E ] - member/member_session/checkSession__Sign_In():void----------" );
});
