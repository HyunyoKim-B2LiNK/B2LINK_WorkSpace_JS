//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_ui/window.b2link_ui.brand_basic.getAllList.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 */
window.b2link_ui.brand_basic.getAllList = function()
{
	window.RayLog.timeStamp( "---- [ S ] - window.b2link_ui.brand_basic.getAllList():void----------" );

	var d = {
		url : window.b2link.STATIC.CONFIG.URL.UI.B2LINK_BRAND
		, nm : "getAllList"
		, css_url : "./css_ui/"
		, css_front_nm : "div__brand-"
		, key : "getAllList"
	};

	//var o = window.b2link.ui.add_HTML_JS_CSS( d );
	var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( d );

	window.RayLog.timeStamp( "---- [ E ] - window.b2link_ui.brand_basic.getAllList():void----------" );

	return o;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
