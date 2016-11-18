//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_ui_product/product_basic/window.b2link_ui_product.product_basic.joinCol__getAllList.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui_product.product_basic.joinCol__getAllList = function()
{
	window.RayLog.timeStamp( "---- [ S ] - window.b2link_ui_product.product_basic.joinCol__getAllList():{Array}----------" );
	var d = {
		url : window.b2link.STATIC.CONFIG.URL.UI.B2LINK_PRODUCT_BASIC
		, nm : "joinCol__getAllList"
		, css_url : "./css_ui/"
		, css_front_nm : "div__product_basic-"
		, key : "product_basic$joinCol__getAllList"
	};

	//var o = window.b2link.ui.add_HTML_JS_CSS( d );
	var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( d );

	window.RayLog.timeStamp( "---- [ E ] - window.b2link_ui_product.product_basic.joinCol__getAllList()):{Array}----------" );

	return o;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;