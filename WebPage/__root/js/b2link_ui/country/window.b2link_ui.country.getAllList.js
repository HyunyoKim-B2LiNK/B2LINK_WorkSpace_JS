//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_ui/window.b2link_ui.country.getAllList.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 */
window.b2link_ui.country.getAllList = function()
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link_ui.country.getAllList():void----------" );

	var d = {
		url : window.b2link.STATIC.CONFIG.URL.UI.B2LINK_COUNTRY
		, nm : "getAllList"
		, css_url : "./css_ui/"
		, css_front_nm : "div__country-"
		, key : "country$getAllList"
	};

	//var o = window.b2link.ui.add_HTML_JS_CSS( d );
	var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( d );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link_ui.country.getAllList():void----------" );

	return o;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
