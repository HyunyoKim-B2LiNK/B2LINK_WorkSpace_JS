//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/util/window.b2link.util.importHTMLJSCSS__And_Add_b2link_STATIC_UI.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} key b2link.STATIC.UI[ ??? ]
 * @param {String} htmlURL HTML File URL
 * @param {String} jsURL JS File URL
 * @param {String} cssURL CSS File URL
 * @param {String} targetElementID
 * @return {*}
 */
window.b2link.util.importHTMLJSCSS__And_Add_b2link_STATIC_UI = function( key, htmlURL, jsURL, cssURL, targetElementID )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.util.importHTMLJSCSS__And_Add_b2link_STATIC_UI():{*}----------" );

	window.TtwLog.timeStamp( "htmlURL : " + htmlURL );
	window.TtwLog.timeStamp( "jsURL : " + jsURL );
	window.TtwLog.timeStamp( "cssURL : " + cssURL );
	window.TtwLog.timeStamp( "targetElementID : " + targetElementID );

	var r = SUtilTemplateHTML.addHTMLJSCSS__URL_Return( htmlURL, jsURL, cssURL, targetElementID );
		console.log( r );

	window.b2link.ui.staticUIMap_Add( key, r );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.util.importHTMLJSCSS__And_Add_b2link_STATIC_UI():{*}----------" );

	return r;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
