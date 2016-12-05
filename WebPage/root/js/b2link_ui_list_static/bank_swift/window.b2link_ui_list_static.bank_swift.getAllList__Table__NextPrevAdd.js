//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_ui_list_static/window.b2link_ui_list_static.bank_swift.getAllList__Table__NextPrevAdd.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui_list_static.bank_swift.getAllList__Table__NextPrevAdd = function()
{
	window.Rh2Log.timeStamp( "---- [ S ] - window.b2link_ui_list_static.bank_swift.getAllList__Table__NextPrevAdd():{Array}----------" );

	var d = {
		url : window.b2link.STATIC.CONFIG.URL.UI.B2LINK_bank_swift
		, nm : "getAllList__Table__NextPrevAdd"
		, css_url : "./css_ui/"
		, css_front_nm : "div__bank_swift-"
		, key : "bank_swift$getAllList__Table__NextPrevAdd"
	};

	//var o = window.b2link.ui.add_HTML_JS_CSS( d );
	var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( d );

	window.Rh2Log.timeStamp( "---- [ E ] - window.b2link_ui_list_static.bank_swift.getAllList__Table__NextPrevAdd():{Array}----------" );

	return o;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;