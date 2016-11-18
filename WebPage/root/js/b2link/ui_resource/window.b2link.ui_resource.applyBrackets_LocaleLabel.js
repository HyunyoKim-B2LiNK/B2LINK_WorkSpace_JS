//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/ui_resource/window.b2link.ui_resource.applyBrackets_LocaleLabel.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} url ./ui/...
 * @param {HTMLElement} el
 */
window.b2link.ui_resource.applyBrackets_LocaleLabel = function( url, el )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui_resource.applyBrackets_LocaleLabel():void----------" );

	window.b2link.html.applyBrackets_html( el, window.b2link.ui_resource.reqSync_JSON_LocaleLabel( url ) );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui_resource.applyBrackets_LocaleLabel():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;