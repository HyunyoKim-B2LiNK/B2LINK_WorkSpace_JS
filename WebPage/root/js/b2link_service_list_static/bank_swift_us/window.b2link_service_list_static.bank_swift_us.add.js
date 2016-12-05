//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_service_list_static/bank_swift_us/window.b2link_service_list_static.bank_swift_us.add.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var _t = window.b2link.STATIC.CONFIG.URL;
var _url = _t.PROXY + _t.MONGODB.LIST_STATIC.bank_swift_us + "add?";

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
//var _fn_res = function( result, cbFunction ){};

/**
 * @function
 * @param {Object} d
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_list_static.bank_swift_us.add = function( d, cbFunction )
{
	window.Rh2Log.timeStamp( "---- [ S ] - window.b2link_service_list_static.bank_swift_us.add():void----------" );

	window.b2link_service.common._fn_req( _url + window.b2link_url_list_static.bank_swift_us.getParam( d ), cbFunction );

	window.Rh2Log.timeStamp( "---- [ E ] - window.b2link_service_list_static.bank_swift_us.add():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;