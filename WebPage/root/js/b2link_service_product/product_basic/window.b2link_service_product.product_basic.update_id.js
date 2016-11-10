//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_service_brand/brand_basic/window.b2link_service_product.product_basic.update_id.js";
if ( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var _t = window.b2link.STATIC.CONFIG.URL;
var _url = _t.PROXY + _t.MONGODB.PRODUCT.BASIC + "update_id?";

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
//var _fn_res = function( result, cbFunction ){};

/**
 * @function
 * @param {Object} d _id
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_product.product_basic.update_id = function( d, cbFunction )
{
	window.RayLog.timeStamp( "---- [ S ] - window.b2link_service_product.product_basic.update_id():void----------" );

	window.b2link_service.common._fn_req( _url + window.b2link_url_product.product_basic.getParam_with_product_id( d ), cbFunction );

	window.RayLog.timeStamp( "---- [ E ] - window.b2link_service_product.product_basic.update_id():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;