//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/response/global.b2link.response.send_200_True.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTTPClientRequest} req
 * @param {HTTPClientResponse} res
 */
global.b2link.response.send_200_True = function( req, res )
{
	console.log( "---- [ S ] - global.b2link.response.send_200_True():void----------" );
	console.log( "req.url : " + req.url );
	if( res ) global.server.sendResponse_200_True( req, res );

	console.log( "---- [ E ] - global.b2link.response.send_200_True():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
