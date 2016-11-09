//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/ui/window.b2link.ui.add_HTML_JS_CSS.js";
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
 *	, "key" : ""
 * }
 * </code>
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.b2link.ui.add_HTML_JS_CSS = function( d )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui.add_HTML_JS_CSS():{Array}----------" );

	var html = window.b2link.ui.__getFileNM_HTML( d.url, d.nm );
	var js = window.b2link.ui.__getFileNM_JS( d.url, d.nm );
	var css = window.b2link.ui.__getFileNM_CSS( d.css_url, d.css_front_nm + d.nm );
	var key = d.key ? d.key : d.nm;

	var f = window.b2link.util.importHTMLJSCSS__And_Add_b2link_STATIC_UI;
	var o = f( key, html, js, css, window.b2link.STATIC.CONST.ROOT_DIV.ID_UI_COMPONENT_FIXED );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui.add_HTML_JS_CSS():{Array}----------" );

	return o;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;