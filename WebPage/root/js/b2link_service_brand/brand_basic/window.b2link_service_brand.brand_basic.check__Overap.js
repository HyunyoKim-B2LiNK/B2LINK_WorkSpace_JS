//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_service_brand/brand_basic/window.b2link_service_brand.brand_basic.check__Overlap.js";
if ( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var _t = window.b2link.STATIC.CONFIG.URL;
var _url = _t.PROXY + _t.MONGODB.BRAND.BASIC + "check__Overlap?";

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
//var _fn_res = function( result, cbFunction ){};

/**
 * @function
 * @param {Object} d email_detail {}
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_brand.brand_basic.check__Overlap = function( d, cbFunction )
{
	window.RayLog.timeStamp( "---- [ S ] - window.b2link_service_brand.brand_basic.check__Overlap():void----------" );

	window.b2link_service.common._fn_req( _url + window.b2link_url_brand.brand_basic.getParam( d ), cbFunction );

	window.RayLog.timeStamp( "---- [ E ] - window.b2link_service_brand.brand_basic.check__Overlap():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;