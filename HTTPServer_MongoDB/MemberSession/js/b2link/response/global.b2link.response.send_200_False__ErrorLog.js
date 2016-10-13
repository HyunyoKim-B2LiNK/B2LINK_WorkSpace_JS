//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/response/global.b2link.response.send_200_False__ErrorLog.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTTPClientRequest} req
 * @param {HTTPClientResponse} res
 * @param {Object} q query
 * @param {*} error
 */
global.b2link.response.send_200_False__ErrorLog = function( req, res, q, error )
{
	console.log( "---- [ S ] - global.b2link.response.send_200_False__ErrorLog():void----------" );
	console.log( "req.url : " + req.url );
	console.error( q.q + " Error : " + error );
	if( res ) global.b2link.response.send_200_False( req, res );

	console.log( "---- [ E ] - global.b2link.response.send_200_False__ErrorLog():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
