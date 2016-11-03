//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_ui_member/window.b2link_ui_member.member_basic.getAllList__nm.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 */
window.b2link_ui_member.member_basic.getAllList__nm = function()
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link_ui_member.member_basic.getAllList__nm ():void----------" );

	var _url = window.b2link.STATIC.CONFIG.URL.UI.B2LINK_MEMBER;
	var _nm = "getAllList__nm";

	var _nmFileHTML = window.b2link.ui.__getFileNM_HTML( _url, _nm );
	var _nmFileJS = window.b2link.ui.__getFileNM_JS( _url, _nm );

	var f = window.b2link.util.importHTMLJS__And_Add_b2link_STATIC_UI;
	f( _nm, _nmFileHTML, _nmFileJS, "div_0__UI_Component_Fixed" );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link_ui_member.member_basic.getAllList__nm ():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
