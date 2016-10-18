//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/ui/window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d data
 * <code>
 * {
 *	"nm" : ""
 *	, "url" : ""
 *	, "css_url : ""
 *	, "css_front_nm : ""
 * }
 * </code>
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI = function( d )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI():{Array}----------" );

	if( window.b2link.STATIC.UI.__checkKey( d.nm ) )
	{
		window.b2link.STATIC.UI.__show( d.nm );
		return window.b2link.STATIC.UI.__getObj( d.nm );
	}

	var html = window.b2link.ui.__getFileNM_HTML( d.url, d.nm );
	var js = window.b2link.ui.__getFileNM_JS( d.url, d.nm );
	var css = window.b2link.ui.__getFileNM_CSS( d.css_url, d.css_front_nm + d.nm );

	var f = window.b2link.util.importHTMLJSCSS__And_Add_b2link_STATIC_UI;
	var o = f( d.nm, html, js, css, window.b2link.STATIC.CONST.ROOT_DIV.ID_UI_COMPONENT_FIXED );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI():{Array}----------" );

	return o;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
