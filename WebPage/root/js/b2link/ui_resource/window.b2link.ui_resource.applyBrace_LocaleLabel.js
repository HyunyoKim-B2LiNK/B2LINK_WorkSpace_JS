//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/ui_resource/window.b2link.ui_resource.applyBrace_LocaleLabel.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} url ./ui/...
 * @param {HTMLElement} el
 */
window.b2link.ui_resource.applyBrace_LocaleLabel = function( url, el )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui_resource.applyBrace_LocaleLabel():void----------" );

	/*/
	var _o_locale_label = window.b2link.ui_resource.reqSync_JSON_LocaleLabel( url );
	var o = window.b2link.html.apply_html( el, _o_locale_label );
	/*/
	window.b2link.html.applyBrace_html( el, window.b2link.ui_resource.reqSync_JSON_LocaleLabel( url ) );
	//*/

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui_resource.applyBrace_LocaleLabel():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;