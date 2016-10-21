//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_service_list_static/country/window.b2link_service_list_static.country.getAllList.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var _t = window.b2link.STATIC.CONFIG.URL;
var _url = _t.PROXY + _t.MONGODB.LIST_STATIC.COUNTRY + "getAllList?";

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
var _fn_res = function( result, cbFunction )
{
	window.TtwLog.timeStamp( "----- [ S ] - window.b2link_service_list_static.country.getAllList.res():void----------" );
	console.log( result );

	var r = JSON.parse( result );
	cbFunction( r );

	window.TtwLog.timeStamp( "----- [ E ] - window.b2link_service_list_static.country.getAllList.res():void----------" );
};

/**
 * @function
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_list_static.country.getAllList = function( cbFunction )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link_service_list_static.country.getAllList():void----------" );

	_url += window.b2link_url.member.getParam__member_session$session( window.b2link.session.getSession() );

	_fn_res( SUtilXMLHttpReqGet.reqSyncReturn( _url, null ).responseText, cbFunction );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link_service_list_static.country.getAllList():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;