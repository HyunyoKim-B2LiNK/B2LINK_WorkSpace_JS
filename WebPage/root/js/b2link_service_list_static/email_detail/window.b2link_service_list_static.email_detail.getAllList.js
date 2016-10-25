//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_service_list_static/email_detail/window.b2link_service_list_static.email_detail.getAllList.js";
if ( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var _t = window.b2link.STATIC.CONFIG.URL;
var _url = _t.PROXY + _t.MONGODB.LIST_STATIC.EMAIL_DETAIL + "getAllList?";


/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
var _fn_res = function( result, cbFunction )
{
	window.RayLog.timeStamp( "---- [ S ] - window.b2link_service_list_static.email_detail.getAllList.res():void----------" );
	console.log( result );

	var r = JSON.parse( result );
	cbFunction( r );

	window.RayLog.timeStamp( "---- [ E ] - window.b2link_service_list_static.email_detail.getAllList.res():void----------" );
};

/**
 * @function
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_list_static.email_detail.getAllList = function( cbFunction )
{
	window.RayLog.timeStamp( "---- [ S ] - window.b2link_service_list_static.email_detail.getAllList():void----------" );

	var r = window.b2link.session.getSession();
	_url += "sid=" + r.sid + "&uid=" + r.uid;

	_fn_res( SUtilXMLHttpReqGet.reqSyncReturn( _url, null ).responseText, cbFunction );

	window.RayLog.timeStamp( "---- [ E ] - window.b2link_service_list_static.email_detail.getAllList():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

