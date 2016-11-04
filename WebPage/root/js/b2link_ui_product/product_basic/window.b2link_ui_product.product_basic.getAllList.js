//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_ui_product/product_basic/window.b2link_ui_product.product_basic.getAllList.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui_product.product_basic.getAllList = function()
{
	window.RayLog.timeStamp( "---- [ S ] - window.b2link_ui_product.product_basic.getAllList():{Array}----------" );
    var d = {
        url : window.b2link.STATIC.CONFIG.URL.UI.B2LINK_PRODDUCT_BASIC
        , nm : "getAllList"
        , css_url : "./css_ui/"
        , css_front_nm : "div__product_basic-"
        , key : "product_basic$getAllList"
    };
    
    //var o = window.b2link.ui.add_HTML_JS_CSS( d );
    var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( d );
        
	window.RayLog.timeStamp( "---- [ E ] - window.b2link_ui_product.product_basic.getAllList():{Array}----------" );
    
    return o;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
