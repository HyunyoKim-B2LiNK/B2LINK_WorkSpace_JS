//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_ui_member/window.b2link_ui_member.member_basic.signUp.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui_member.member_basic.signUp = function()
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link_ui_member.member_basic.signUp():void----------" );

	var d = {
		url : window.b2link.STATIC.CONFIG.URL.UI.B2LINK_MEMBER
		, nm : "signUp"
		, css_url : "./css_ui/"
		, css_front_nm : "div__member_basic-"
		, key : "member_basic$signUp"
	};

	//var o = window.b2link.ui.add_HTML_JS_CSS( d );
	var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( d );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link_ui_member.member_basic.signUp():void----------" );

	return o;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;