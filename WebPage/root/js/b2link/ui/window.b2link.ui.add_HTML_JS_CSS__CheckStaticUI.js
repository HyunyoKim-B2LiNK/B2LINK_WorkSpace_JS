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
 *	, "key" : ""
 * }
 * </code>
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI = function( d )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI():{Array}----------" );

	var o = window.b2link.ui.staticUIMap_checkObject( d.key );
	if( o ) return o;

	o = window.b2link.ui.add_HTML_JS_CSS( d );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI():{Array}----------" );

	return o;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;