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

	if( window.b2link.STATIC.UI.__checkKey( d.key ) )
	{
		window.b2link.STATIC.UI.__show( d.key );
		var o = window.b2link.STATIC.UI.__getObj( d.key );

		if( o[ 1 ].req_Data ) o[ 1 ].req_Data();

		return o;
	}

	var o = window.b2link.ui.add_HTML_JS_CSS( d );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI():{Array}----------" );

	return o;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;