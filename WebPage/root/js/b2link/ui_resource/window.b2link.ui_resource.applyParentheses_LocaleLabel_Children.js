//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/ui_resource/window.b2link.ui_resource.applyParentheses_LocaleLabel_Children.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} url ./ui/...
 * @param {HTMLElement} el
 */
window.b2link.ui_resource.applyParentheses_LocaleLabel_Children = function( url, el )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui_resource.applyParentheses_LocaleLabel_Children():void----------" );

	window.b2link.html.applyParentheses_html_Children( el, window.b2link.ui_resource.reqSync_JSON_LocaleLabel( url ) );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui_resource.applyParentheses_LocaleLabel_Children():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;