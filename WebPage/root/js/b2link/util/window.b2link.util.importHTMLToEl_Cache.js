//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/util/window.b2link.util.importHTMLToEl_Cache.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {HTMLElement} targetElement
 * @return {*}
 */
window.b2link.util.importHTMLToEl_Cache = function( htmlURL, targetElement )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.util.importHTMLToEl_Cache():{*}----------" );

	window.TtwLog.timeStamp( "htmlURL : " + htmlURL );

	var r = SUtilTemplateHTML.addHTML__URLToEl_Cache( htmlURL, targetElement );
		console.log( r );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.util.importHTMLToEl_Cache():{*}----------" );

	return r;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;