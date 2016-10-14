//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/ui/window.b2link_ui.member_basic.getAllList.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 */
window.b2link_ui.member_basic.getAllList = function()
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link_ui.member_basic.getAllList():void----------" );

    var _url = window.b2link.STATIC.CONFIG.URL.UI.B2LINK_MEMBER;
    var _nm = "getAllList";
    
    var html = window.b2link.ui.__getFileNM_HTML( _url, _nm );
	var js = window.b2link.ui.__getFileNM_JS( _url, _nm );
    var css = window.b2link.ui.__getFileNM_CSS( "./css_ui/", "div__member_basic-" + _nm );

	var f = window.b2link.util.importHTMLJSCSS__And_Add_b2link_STATIC_UI;
	f( _nm, html, js, css, "div_0__UI_Component_Fixed" );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link_ui.member_basic.getAllList():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
