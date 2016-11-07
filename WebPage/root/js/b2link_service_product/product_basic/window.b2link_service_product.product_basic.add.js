//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_service_product/product_basic/window.b2link_service_product.product_basic.add.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var _t = window.b2link.STATIC.CONFIG.URL;
var _url = _t.PROXY + _t.MONGODB.PRODUCT.BASIC + "add?";

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
window.b2link_service_product.product_basic.add = function( d, cbFunction )
{
	window.RayLog.timeStamp( "---- [ S ] - window.b2link_service_product.product_basic.add():void----------" );
	window.RayLog.logObjectInformation(d);
	window.b2link_service.common._fn_req( _url + window.b2link_url_product.product_basic.getParam( d ) , cbFunction );

	window.RayLog.timeStamp( "---- [ E ] - window.b2link_service_product.product_basic.add():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
