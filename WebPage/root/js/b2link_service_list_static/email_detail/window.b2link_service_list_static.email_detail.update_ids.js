//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_service_list_static/email_detail/window.b2link_service_list_static.email_detail.update_ids.js";
if ( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var _t = window.b2link.STATIC.CONFIG.URL;
var _url = _t.PROXY + _t.MONGODB.LIST_STATIC.EMAIL_DETAIL + "update_ids?";

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
window.b2link_service_list_static.email_detail.update_ids = function( d, cbFunction )
{
	window.RayLog.timeStamp( "---- [ S ] - window.b2link_service_list_static.email_detail.update_ids():void----------" );

	window.b2link_service.common._fn_req( _url + "&ids=" + JSON.stringify( d ), cbFunction );

	window.RayLog.timeStamp( "---- [ E ] - window.b2link_service_list_static.email_detail.update_ids():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;