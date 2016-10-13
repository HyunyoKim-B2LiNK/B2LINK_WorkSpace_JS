//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/response/global.b2link.response.send_200_JSON.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTTPClientRequest} req
 * @param {HTTPClientResponse} res
 * @param {Object} obj
 */
global.b2link.response.send_200_JSON = function( req, res, obj )
{
	console.log( "---- [ S ] - global.b2link.response.send_200_JSON():void----------" );
	console.log( "req.url : " + req.url );
	if( res ) global.server.sendResponse_200_String( req, res, JSON.stringify( obj ) );

	console.log( "---- [ E ] - global.b2link.response.send_200_JSON():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
