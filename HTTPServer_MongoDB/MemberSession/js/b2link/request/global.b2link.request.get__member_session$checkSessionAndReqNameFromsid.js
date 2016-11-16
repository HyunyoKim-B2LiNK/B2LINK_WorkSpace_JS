//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/request/global.b2link.request.get__member_session$checkSessionAndReqNameFromsid.js";
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
global.b2link.request.get__member_session$checkSessionAndReqNameFromsid = function( req, res, q )
{
	global.TtwLog.timeStamp( "\n" );
	global.TtwLog.timeStamp( "---- [ S ] - global.b2link.request.get__member_session$checkSessionAndReqNameFromsid():void----------" );

	var t = global.server;

	global.b2link.request.get(
		global.b2link_router.CONFIG.URL.MEMBER.MEMBER_SESSION.CHECK_SESSION + "sid=" + q.sid
		, function( result )
		{
			console.log( "typeof( result ) : " + typeof( result ) );
			console.log( "result : " + result );
			console.log( "global.b2link.fn.getResultStatus( result ) : " + global.b2link.fn.getResultStatus( result ) );

			if( 0 == global.b2link.fn.getResultStatus( result ) )
			{
				global.b2link.response.send_200_False( req, res );

				global.b2link_router.STATIC.REQUEST_COUNT.M1();

				return;
			}

			q.db = "member";
			q.q = 'member_session$getProp__idFromsid("' + q.sid + '")';
			global.b2link_router.STATIC.REQUEST_COUNT.P1();

			t.req_DB( req, res, q, function( error, result ){
				if( error )
				{
					global.b2link_router.STATIC.REQUEST_COUNT.M1();
					global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
					return;
				}

				global.b2link_router.STATIC.REQUEST_COUNT.M1();

				q.db = "member";
				q.q = "member_public$getProp_NameFrom_id(" + result + ")";
				global.b2link_router.STATIC.REQUEST_COUNT.P1();

				t.req_DB( req, res, q, function( error, result ){
					if( error )
					{
						global.b2link_router.STATIC.REQUEST_COUNT.M1();
						global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
						return;
					}

					global.b2link_router.STATIC.REQUEST_COUNT.M1();
					global.b2link.response.send_200_JSON( req, res, result );
				});

				//global.b2link.response.send_200_JSON( req, res, result );
			});

			global.b2link_router.STATIC.REQUEST_COUNT.M1();
		}
		, req.headers
	);

	global.TtwLog.timeStamp( "---- [ E ] - global.b2link.request.get__member_session$checkSessionAndReqNameFromsid():void----------" );
	global.TtwLog.timeStamp( "\n" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
