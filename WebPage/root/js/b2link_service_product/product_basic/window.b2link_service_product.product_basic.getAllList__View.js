//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_service_product/product_basic/window.b2link_service_product.product_basic.getAllList__View.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var _t = window.b2link.STATIC.CONFIG.URL;
var _url = _t.PROXY + _t.MONGODB.PRODUCT.BASIC + "getAllList__View?";

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
window.b2link_service_product.product_basic.getAllList__View = function( cbFunction )
{
	window.RayLog.timeStamp( "---- [ S ] - window.b2link_service_product.product_basic.getAllList__View():void----------" );

	window.b2link_service.common._fn_req( _url, cbFunction );

	window.RayLog.timeStamp( "---- [ E ] - window.b2link_service_product.product_basic.getAllList__View():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;