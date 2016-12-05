//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_service_list_static/bank_swift_kr/window.b2link_service_list_static.bank_swift_kr.getAllList.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var _t = window.b2link.STATIC.CONFIG.URL;
var _url = _t.PROXY + _t.MONGODB.LIST_STATIC.BANK_SWIFT_KR + "getAllList?";

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
window.b2link_service_list_static.bank_swift_kr.getAllList = function( cbFunction )
{
	window.Rh2Log.timeStamp( "---- [ S ] - window.b2link_service_list_static.bank_swift_kr.getAllList():void----------" );

	window.b2link_service.common._fn_req( _url, cbFunction );

	window.Rh2Log.timeStamp( "---- [ E ] - window.b2link_service_list_static.bank_swift_kr.getAllList():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;