//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_service_brand/brand_basic/window.b2link_service_brand.brand_basic.add.js";
if ( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var _t = window.b2link.STATIC.CONFIG.URL;
var _url = _t.PROXY + _t.MONGODB.BRAND.BRAND_BASIC + "add?";

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
window.b2link_service_brand.brand_basic.add = function( d, cbFunction )
{
	window.RayLog.timeStamp( "---- [ S ] -window.b2link_service_brand.brand_basic.add():void----------" );

	window.b2link_service.common._fn_req( _url + window.b2link_url_brand.brand_basic.getParam( d ), cbFunction );

	window.RayLog.timeStamp( "---- [ E ] - window.b2link_service_brand.brand_basic.add():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;