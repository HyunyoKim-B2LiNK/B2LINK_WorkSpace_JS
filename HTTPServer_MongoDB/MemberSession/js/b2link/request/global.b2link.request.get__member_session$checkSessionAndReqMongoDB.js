//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/request/global.b2link.request.get__member_session$checkSessionAndReqMongoDB.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTTPClientRequest} req
 * @param {HTTPClientResponse} res
 * @param {String} q query
 * @param {String} db mongod Name
 * @param {String} nq next query
 */
global.b2link.request.get__member_session$checkSessionAndReqMongoDB = function( req, res, q, db, nq )
{
	console.log( "---- [ S ] - global.b2link.request.get__member_session$checkSessionAndReqMongoDB():void----------" );

	var t = global.server;

	global.b2link.request.get(
		global.b2link_router.CONFIG.URL.MEMBER.MEMBER_SESSION.CHECK_SESSION + "sid=" + q.sid
		, function( result )
		{
			console.log( "typeof( result ) : " + typeof( result ) );
			console.log( "result : " + result );

			if( "false" == result )
			{
				global.b2link.response.send_200_False( req, res );
				return;
			}

			q.db = db;
			q.q = nq;

			t.req_DB( req, res, q, function( error, result ){
				if( error )
				{
					global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
					return;
				}
				console.log( result );
				global.b2link.response.send_200_JSON( req, res, result );
			});
		}
		, req.headers
	);

	console.log( "---- [ E ] - global.b2link.request.get__member_session$checkSessionAndReqMongoDB():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
