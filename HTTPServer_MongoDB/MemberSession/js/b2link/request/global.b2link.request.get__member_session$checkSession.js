//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/request/global.b2link.request.get__member_session$checkSession.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} q query
 * @param {Function} cbComplete function( result ){}
 */
global.b2link.request.get__member_session$checkSession = function( q, cbComplete )
{
	console.log( "---- [ S ] - global.b2link.request.get__member_session$checkSession():void----------" );

	global.b2link.request.get(
		global.b2link_router.CONFIG.URL.MEMBER.CHECK_SESSION + "sid=" + q.sid
		, cbComplete
		, req.headers
	);

	console.log( "---- [ E ] - global.b2link.request.get__member_session$checkSession():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
