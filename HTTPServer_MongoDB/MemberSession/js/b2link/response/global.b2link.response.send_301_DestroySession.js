//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/response/global.b2link.response.send_301_DestroySession.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTTPClientRequest} req
 * @param {HTTPClientResponse} res
 */
global.b2link.response.send_301_DestroySession = function( req, res )
{
	global.TtwLog.timeStamp( "\n" );
	global.TtwLog.timeStamp( "---- [ S ] - global.b2link.response.send_301_DestroySession():void----------" );
	global.TtwLog.timeStamp( "req.url : " + req.url );
	if( res )
	{
		global.TtwLog.timeStamp( " : " + global.b2link_router.CONFIG.URL.MEMBER.MEMBER_SESSION.DESTROY_SESSION );
		res.writeHead( 301, {
			Location : global.b2link_router.CONFIG.URL.MEMBER.MEMBER_SESSION.DESTROY_SESSION
		});
		res.end();
	}

	global.TtwLog.timeStamp( "---- [ E ] - global.b2link.response.send_301_DestroySession():void----------" );
	global.TtwLog.timeStamp( "\n" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
