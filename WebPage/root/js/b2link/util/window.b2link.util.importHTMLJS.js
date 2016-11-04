//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/util/window.b2link.util.importHTMLJS.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {String} jsURL JS File URL
 * @param {String} targetElementID
 * @return {*}
 */
window.b2link.util.importHTMLJS = function( htmlURL, jsURL, targetElementID )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.util.importHTMLJS():{*}----------" );

	window.TtwLog.timeStamp( "htmlURL : " + htmlURL );
	window.TtwLog.timeStamp( "jsURL : " + jsURL );
	window.TtwLog.timeStamp( "targetElementID : " + targetElementID );

	var r = SUtilTemplateHTML.addHTMLJS__URL_Return( htmlURL, jsURL, targetElementID );
		console.log( r );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.util.importHTMLJS():{*}----------" );

	return r;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;