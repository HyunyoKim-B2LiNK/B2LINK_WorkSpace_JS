//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_service_list_static/common_code/window.b2link_service_list_static.common_code.getAllList.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var _t = window.b2link.STATIC.CONFIG.URL;
var _url = _t.PROXY + _t.MONGODB.LIST_STATIC.common_code + "getAllList?";

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
window.b2link_service_list_static.common_code.getAllList = function( cbFunction )
{
	window.Rh2Log.timeStamp( "---- [ S ] - window.b2link_service_list_static.common_code.getAllList():void----------" );

	window.b2link_service.common._fn_req( _url, cbFunction );

	window.Rh2Log.timeStamp( "---- [ E ] - window.b2link_service_list_static.common_code.getAllList():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;