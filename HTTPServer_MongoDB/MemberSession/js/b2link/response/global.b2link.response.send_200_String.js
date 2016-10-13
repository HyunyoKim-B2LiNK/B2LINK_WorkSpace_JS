//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/response/global.b2link.response.send_200_String.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTTPClientRequest} req
 * @param {HTTPClientResponse} res
 * @param {String} str
 */
global.b2link.response.send_200_String = function( req, res, str )
{
	console.log( "---- [ S ] - global.b2link.response.send_200_String():void----------" );
	console.log( "req.url : " + req.url );
	if( res ) global.server.sendResponse_200_String( req, res, str );

	console.log( "---- [ E ] - global.b2link.response.send_200_String():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
