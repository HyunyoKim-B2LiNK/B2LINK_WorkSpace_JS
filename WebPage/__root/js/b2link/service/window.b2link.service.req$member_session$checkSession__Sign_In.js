//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/service/window.b2link.service.req$member_session$checkSession__Sign_In.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var _t = window.b2link.STATIC.CONFIG.URL;
var _url = _t.PROXY + _t.MONGODB.MEMBER.SESSION + "checkSession__Sign_In?";

/**
 * @function
 * @param {Object} d signin data { "id" : "", "pw" : "" }
 * @param {Function} cbFunction function( data ){};
 */
window.b2link.service.req$member_session$checkSession__Sign_In = function( d, cbFunction )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.service.req$member_session$checkSession__Sign_In():void----------" );

	_url +=  "uid=" + d.id + "&upw="+ d.pw;
	window.b2link.service.res$member_session$checkSession__Sign_In( SUtilXMLHttpReqGet.reqSyncReturn( _url, null ).responseText, cbFunction );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.service.req$member_session$checkSession__Sign_In():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
