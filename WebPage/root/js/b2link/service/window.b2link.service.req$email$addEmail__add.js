//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/service/window.b2link.service.req$email$addEmail__add.js";
if ( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var _t = window.b2link.STATIC.CONFIG.URL;
var _url = _t.PROXY + _t.MONGODB.LIST_STATIC.EMAIL + "addEmail?";

/**
 * @function
 * @param {Function} cbFunction function( data ){};
 */
window.b2link.service.req$email$addEmail__add = function( d, cbFunction )
{
	window.RayLog.timeStamp( "---- [ S ] - window.b2link.service.req$email$addEmail__add():void----------" );


	var r = window.b2link.session.getSession();
	var _tmpUrl = _url + "sid=" + r.sid
		+ "&uid=" + r.uid
		+ "&SLD=" + d.SLD
		+ "&TLD=" + d.TLD
		+ "&ccTLD=" + d.ccTLD
		+ "&gTLD=" + d.gTLD
		+ "&c=" + d.c;
	window.b2link.service.res$email$addEmail__add( SUtilXMLHttpReqGet.reqSyncReturn( _tmpUrl, null ).responseText, cbFunction );

	window.RayLog.timeStamp( "---- [ E ] - window.b2link.service.req$email$addEmail__add():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

