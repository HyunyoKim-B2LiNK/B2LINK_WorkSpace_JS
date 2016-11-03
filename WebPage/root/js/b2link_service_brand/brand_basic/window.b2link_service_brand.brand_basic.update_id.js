//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_service_list_static/email_detail/window.b2link_service_brand.brand_basic.update_id.js";
if ( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var _t = window.b2link.STATIC.CONFIG.URL;
var _url = _t.PROXY + _t.MONGODB.BRAND.BRAND_BASIC + "update_id?";

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
window.b2link_service_brand.brand_basic.update_id = function( d, cbFunction )
{
	window.RayLog.timeStamp( "---- [ S ] - window.b2link_service_brand.brand_basic.update_id():void----------" );
	
	window.b2link_service.common._fn_req( _url + window.b2link_url.brand.brand_basic$getParam_with_brand_id( d ), cbFunction );

	window.RayLog.timeStamp( "---- [ E ] - window.b2link_service_brand.brand_basic.update_id():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
