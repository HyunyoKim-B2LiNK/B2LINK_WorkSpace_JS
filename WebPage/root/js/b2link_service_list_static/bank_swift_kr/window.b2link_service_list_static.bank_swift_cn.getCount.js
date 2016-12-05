//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_service_list_static/bank_swift_kr/window.b2link_service_list_static.bank_swift_kr.getCount.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var _t = window.b2link.STATIC.CONFIG.URL;
var _url = _t.PROXY + _t.MONGODB.LIST_STATIC.bank_swift_kr + "getCount?";

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
//var _fn_res = function( result, cbFunction ){};

/**
 * @function
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_list_static.bank_swift_kr.getCount = function( cbFunction )
{
	window.Rh2Log.timeStamp( "---- [ S ] - window.b2link_service_list_static.bank_swift_kr.getCount():void----------" );

	window.b2link_service.common._fn_req( _url, cbFunction );

	window.Rh2Log.timeStamp( "---- [ E ] - window.b2link_service_list_static.bank_swift_kr.getCount():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;