//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/response/global.b2link.response.setHeader__setcookie__null.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTTPClientRequest} req
 * @param {HTTPClientResponse} res
 */
global.b2link.response.setHeader__setcookie__null = function( req, res )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.b2link.response.setHeader__setcookie__null():void----------" );
	//console.log( "req.url : " + req.url );
	if( res )
		res.setHeader( "set-cookie"
			, "connect.sid=" + ""
				+ "; session_id=" + ""
				+ "; Expires=" + ""
				+ "; HttpOnly"
		);

	global.TtwLog.timeStamp( "---- [ E ] - global.b2link.response.setHeader__setcookie__null():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;