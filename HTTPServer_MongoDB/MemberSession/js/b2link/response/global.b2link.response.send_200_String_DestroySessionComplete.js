//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/response/global.b2link.response.send_200_String_DestroySessionComplete.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTTPClientRequest} req
 * @param {HTTPClientResponse} res
 */
global.b2link.response.send_200_String_DestroySessionComplete = function( req, res )
{
	console.log( "---- [ S ] - global.b2link.response.send_200_String_DestroySessionComplete():void----------" );
	console.log( "req.url : " + req.url );
	if( res ) global.server.sendResponse_200_String( req, res, "destroySession" );
	console.log( "---- [ E ] - global.b2link.response.send_200_String_DestroySessionComplete():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
