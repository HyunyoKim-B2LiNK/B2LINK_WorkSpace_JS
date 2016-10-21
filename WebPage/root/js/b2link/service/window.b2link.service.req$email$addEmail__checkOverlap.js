//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/service/window.b2link.service.req$email$addEmail__checkOverlap.js";
if ( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var _t = window.b2link.STATIC.CONFIG.URL;
var _url = _t.PROXY + _t.MONGODB.LIST_STATIC.EMAIL + "checkEmail_Overlap?";

/**
 * @function
 * @param {Function} cbFunction function( data ){};
 */
window.b2link.service.req$email$addEmail__checkOverlap = function( d, cbFunction )
{
	window.RayLog.timeStamp( "---- [ S ] - window.b2link.service.req$email$addEmail__checkOverlap():void----------" );


	var r = window.b2link.session.getSession();
	var _tmpUrl = _url + "sid=" + r.sid
		+ "&uid=" + r.uid
		+ "&SLD=" + d.SLD
		+ "&TLD=" + d.TLD
		+ "&ccTLD=" + d.ccTLD
		+ "&gTLD=" + d.gTLD
		+ "&c=" + d.c;

	window.b2link.service.res$email$addEmail__checkOverlap( SUtilXMLHttpReqGet.reqSyncReturn( _tmpUrl, null ).responseText, cbFunction );

	window.RayLog.timeStamp( "---- [ E ] - window.b2link.service.req$email$addEmail__checkOverlap():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

