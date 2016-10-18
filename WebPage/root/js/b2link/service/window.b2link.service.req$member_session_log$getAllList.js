//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/service/window.b2link.service.req$member_session_log$getAllList.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var _t = window.b2link.STATIC.CONFIG.URL;
var _url = _t.PROXY + _t.MONGODB.MEMBER.SESSION_LOG + "getAllList?";

/**
 * @function
 * @param {Object} d signin data { "id" : "", "pw" : "" }
 * @param {Function} cbFunction function( data ){};
 */
window.b2link.service.req$member_session_log$getAllList = function( d, cbFunction )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.service.req$member_session_log$getAllList():void----------" );

	var r = window.b2link.session.getSession();
	_url += "sid=" + r.sid + "&uid=" + r.uid;

	window.b2link.service.res$member_session_log$getAllList( SUtilXMLHttpReqGet.reqSyncReturn( _url, null ).responseText, cbFunction );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.service.req$member_session_log$getAllList():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
