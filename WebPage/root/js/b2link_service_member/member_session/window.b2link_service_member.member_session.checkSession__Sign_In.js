//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_service_member/member_session/window.b2link_service_member.member_session.checkSession__Sign_In.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var _t = window.b2link.STATIC.CONFIG.URL;
var _url = _t.PROXY + _t.MONGODB.MEMBER.SESSION + "checkSession__Sign_In?";

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
var _fn_res = function( result, cbFunction )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link_service_member.member_session.checkSession__Sign_In.res():void----------" );

	console.log( "typeof result : " + typeof( result ) );
	console.log( result );

	var r = window.b2link.fn.getResultStatus( result );
	if( 0 == r || "destroySession" == r )
	{
		window.b2link.session.removeSession();
		window.b2link.log.error__Signin_failure();
	}
	else if( 1 == r )
	{
		window.b2link.session.removeSession();
		window.b2link.log.error__Signin_failure();
	}
	else
	{
		var r = JSON.parse( result );
		console.log( "typeof r : " + typeof( r ) );
		window.b2link.session.setSession( r );
		cbFunction( r );
	}

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link_service_member.member_session.checkSession__Sign_In.res():void----------" );
};

/**
 * @function
 * @param {Object} d signin data { "id" : "", "pw" : "" }
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_member.member_session.checkSession__Sign_In = function( d, cbFunction )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link_service_member.member_session.checkSession__Sign_In():void----------" );

	_fn_res(
		SUtilXMLHttpReqGet.reqSyncReturn(
			_url + "mid=" + d.id
				+ "&mpw="+ d.pw
				//+ "&d_ex=" + new Date()
				+ "&date_cache=" + new Date()
			, null
		).responseText
		, cbFunction
	);

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link_service_member.member_session.checkSession__Sign_In():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;