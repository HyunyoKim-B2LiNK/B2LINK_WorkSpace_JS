//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/response/global.b2link.response.send_200.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTTPClientRequest} req
 * @param {HTTPClientResponse} res
 */
global.b2link.response.send_200 = function( req, res )
{
	console.log( "---- [ S ] - global.b2link.response.send_200():void----------" );
	console.log( "req.url : " + req.url );
	if( res ) global.server.sendResponse_200_False( req, res );

	console.log( "---- [ E ] - global.b2link.response.send_200():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
