//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_ui/window.b2link_ui.country.add.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 */
window.b2link_ui.country.add = function()
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link_ui.country.add():void----------" );

	var d = {
		url : window.b2link.STATIC.CONFIG.URL.UI.B2LINK_COUNTRY
		, nm : "add"
		, css_url : "./css_ui/"
		, css_front_nm : "div__country-"
		, key : "country$add"
	};

	//var o = window.b2link.ui.add_HTML_JS_CSS( d );
	var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( d );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link_ui.country.add():void----------" );

	return o;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
