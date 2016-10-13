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
	console.log( "---- [ S ] - global.b2link.response.send_301_DestroySession():void----------" );
	console.log( "req.url : " + req.url );
	if( res )
	{
		console.log( "global.b2link_router.CONFIG.URL.MEMBER.MEMBER_SESSION.DESTROY_SESSION : " + global.b2link_router.CONFIG.URL.MEMBER.MEMBER_SESSION.DESTROY_SESSION );
		res.writeHead( 301, {
			Location : global.b2link_router.CONFIG.URL.MEMBER.MEMBER_SESSION.DESTROY_SESSION
		});
		res.end();
	}

	console.log( "---- [ E ] - global.b2link.response.send_301_DestroySession():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
