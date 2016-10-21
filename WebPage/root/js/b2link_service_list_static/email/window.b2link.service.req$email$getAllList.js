//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/service/window.b2link.service.req$email$getAllList.js";
if ( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var _t = window.b2link.STATIC.CONFIG.URL;
var _url = _t.PROXY + _t.MONGODB.LIST_STATIC.EMAIL + "getAllList?";

/**
 * @function
 * @param {Function} cbFunction function( data ){};
 */
window.b2link.service.req$email$getAllList = function( cbFunction )
{
    window.RayLog.timeStamp( "---- [ S ] - window.b2link.service.req$email$getAllList():void----------" );

    var r = window.b2link.session.getSession();
    _url += "sid=" + r.sid + "&uid=" + r.uid;

    window.b2link.service.res$email$getAllList( SUtilXMLHttpReqGet.reqSyncReturn( _url, null ).responseText, cbFunction );

    window.RayLog.timeStamp( "---- [ E ] - window.b2link.service.req$email$getAllList():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

