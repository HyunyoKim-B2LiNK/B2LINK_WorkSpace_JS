//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/request/global.b2link.request.get__member_session$checkSession.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTTPClientRequest} req
 * @param {HTTPClientResponse} res
 * @param {Object} q query
 * @param {Function} cbComplete function( result ){}
 */
global.b2link.request.get__member_session$checkSession = function( req, res, q, cbComplete )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.b2link.request.get__member_session$checkSession():void----------" );

	//console.log( 'global.b2link_router.CONFIG.URL.MEMBER.MEMBER_SESSION.CHECK_SESSION + "sid=" + q.sid' );
	//console.log( global.b2link_router.CONFIG.URL.MEMBER.MEMBER_SESSION.CHECK_SESSION + "sid=" + q.sid );

	global.b2link.request.get(
		global.b2link_router.CONFIG.URL.MEMBER.MEMBER_SESSION.CHECK_SESSION + "sid=" + q.sid
		, cbComplete
		, req.headers
	);

	global.TtwLog.timeStamp( "---- [ E ] - global.b2link.request.get__member_session$checkSession():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
