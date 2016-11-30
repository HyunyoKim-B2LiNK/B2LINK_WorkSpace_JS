//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_ui_partner/partner_buyer/window.b2link_ui_partner.partner_buyer.getAllList.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui_partner.partner_buyer.getAllList = function()
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link_ui_partner.partner_buyer.getAllList():{Array}----------" );
	var d = {
		url : window.b2link.STATIC.CONFIG.URL.UI.B2LINK_PARTNER_BUYER
		, nm : "getAllList"
		, css_url : "./css_ui/"
		, css_front_nm : "div__partner_buyer-"
		, key : "partner_buyer$getAllList"
	};

	//var o = window.b2link.ui.add_HTML_JS_CSS( d );
	var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( d );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link_ui_partner.partner_buyer.getAllList():{Array}----------" );

	return o;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;