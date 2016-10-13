//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/response/global.b2link.response.setHeader__setcookie.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTTPClientRequest} req
 * @param {HTTPClientResponse} res
 * @param {Object} d
 */
global.b2link.response.setHeader__setcookie = function( req, res, d )
{
	console.log( "---- [ S ] - global.b2link.response.setHeader__setcookie():void----------" );
	console.log( "req.url : " + req.url );
	if( res )
		res.setHeader( "set-cookie"
			, "connect.sid=" + d.sid
				+ "; session_id=" + d.sid
				+ "; Expires=" + d.d_ex
				+ "; HttpOnly"
		);

	console.log( "---- [ E ] - global.b2link.response.setHeader__setcookie():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
