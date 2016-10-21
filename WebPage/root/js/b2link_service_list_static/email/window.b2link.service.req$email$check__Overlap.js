//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/service/window.b2link.service.req$email$check__Overlap.js";
if ( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var _t = window.b2link.STATIC.CONFIG.URL;
var _url = _t.PROXY + _t.MONGODB.LIST_STATIC.EMAIL + "check__Overlap?";

/**
 * @function
 * @param {Function} cbFunction function( data ){};
 */
window.b2link.service.req$email$check__Overlap = function( d, cbFunction )
{
	window.RayLog.timeStamp( "---- [ S ] - window.b2link.service.req$email$check__Overlap():void----------" );

	var r = window.b2link.session.getSession();
	var _tmpUrl = _url
		+ window.b2link_url.member.getParam__member_session$session( r )
		+ window.b2link_url.list_static.getParam__email$email( d );

	window.b2link.service.res$email$check__Overlap( SUtilXMLHttpReqGet.reqSyncReturn( _tmpUrl, null ).responseText, cbFunction );

	window.RayLog.timeStamp( "---- [ E ] - window.b2link.service.req$email$check__Overlap():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

