//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_ui/window.b2link_ui.email_detail.getAllList.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 */
window.b2link_ui.email_detail.getAllList = function()
{
	window.RayLog.timeStamp( "---- [ S ] - window.b2link_ui.email_detail.getAllList():void----------" );

	var d = {
		url : window.b2link.STATIC.CONFIG.URL.UI.B2LINK_EMAIL_DETAIL
		, nm : "getAllList"
		, css_url : "./css_ui/"
		, css_front_nm : "div__email_detail-"
		, key : "email_detail$getAllList"
	};
	var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( d );

	window.RayLog.timeStamp( "---- [ E ] - window.b2link_ui.email_detail.getAllList():void----------");

	return o;
}

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
