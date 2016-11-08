//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_service_list_static/email_detail/window.b2link_service_product.product_basic.remove_id.js";
if ( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var _t = window.b2link.STATIC.CONFIG.URL;
var _url = _t.PROXY + _t.MONGODB.PRODUCT.BASIC + "remove_id?";

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
//var _fn_res = function( result, cbFunction ){};

/**
 * @function
 * @param {uint} d _id
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_product.product_basic.remove_id = function( d, cbFunction )
{
	window.RayLog.timeStamp( "---- [ S ] - window.b2link_service_product.product.remove_id():void----------" );

	window.b2link_service.common._fn_req( _url + "&_id=" + d, cbFunction );

	window.RayLog.timeStamp( "---- [ E ] - window.b2link_service_product.product.remove_id():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;