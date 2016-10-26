//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/session/global.b2link.session.get_or_create__Session.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTTPClientRequest} req
 * @param {HTTPClientResponse} res
 * @param {Object} q
 */
global.b2link.session.get_or_create__Session = function( req, res, q )
{
	console.log( "---- [ S ] - global.b2link.session.get_or_create__Session():void----------" );

	//if( !q.mid && !q.mpw ) global.server.sendResponse_200_False( req, res );

	var cookie = STtwUtilHttpClientRequest.getHeader_Cookie( req );
		//console.logObjectInformation( cookie, "cookie" );
	//var session = STtwUtilHttpClientRequest.getHeader_Session( req );console.logObjectInformation( session, "session" );

	var bFirstSession = 0;
	var expireDate;
	var sessionID;

	if( cookie )
	{
		if( cookie.hasOwnProperty( "connect.sid" ) ){ sessionID = cookie[ "connect.sid" ]; bFirstSession = 1; }
		//if( cookie.hasOwnProperty( "session_id" ) ){ sessionID = cookie.session_id; bFirstSession = 1; }
		if( cookie.Expires ) expireDate = cookie.expires;
	}

	if( !sessionID )
	{
		sessionID = STtwUtilHttpClientResponse.create_Session( req );
		expireDate = STtwUtilHttpClientResponse.create_Date__Expired();
	}

	console.log( "---- [ E ] - global.b2link.session.get_or_create__Session():void----------" );

	return {
		//to Application Only;
		bFirstSession : bFirstSession

		//to Application and DBMS - Collection Document's Properties;
		, sid : sessionID, d_ex : expireDate
	};
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
