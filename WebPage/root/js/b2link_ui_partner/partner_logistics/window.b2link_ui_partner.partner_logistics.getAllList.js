//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_ui_partner/partner_logistics/window.b2link_ui_partner.partner_logistics.getAllList.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui_partner.partner_logistics.getAllList = function()
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link_ui_partner.partner_logistics.getAllList():{Array}----------" );
	var d = {
		url : window.b2link.STATIC.CONFIG.URL.UI.B2LINK_PARTNER_LOGISTICS
		, nm : "getAllList"
		, css_url : "./css_ui/"
		, css_front_nm : "div__partner_logistics-"
		, key : "partner_logistics$getAllList"
	};

	//var o = window.b2link.ui.add_HTML_JS_CSS( d );
	var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( d );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link_ui_partner.partner_logistics.getAllList():{Array}----------" );

	return o;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;