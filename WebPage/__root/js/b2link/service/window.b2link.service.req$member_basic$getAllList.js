//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/service/window.b2link.service.req$member_basic$getAllList.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var _t = window.b2link.STATIC.CONFIG.URL;
var _url = _t.PROXY + _t.MONGODB.MEMBER.BASIC + "getAllList?";

/**
 * @function
 * @param {Function} cbFunction function( data ){};
 */
window.b2link.service.req$member_basic$getAllList = function( cbFunction )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.service.req$member_basic$getAllList():void----------" );

	var r = window.b2link.session.getSession();
	_url += "sid=" + r.sid + "&uid=" + r.uid;

	window.b2link.service.res$member_basic$getAllList( SUtilXMLHttpReqGet.reqSyncReturn( _url, null ).responseText, cbFunction );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.service.req$member_basic$getAllList():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
