//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/util/window.b2link.util.importHTMLToEl.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {HTMLElement} targetElement
 * @return {*}
 */
window.b2link.util.importHTMLToEl = function( htmlURL, targetElement )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.util.importHTMLToEl():{*}----------" );

	window.TtwLog.timeStamp( "htmlURL : " + htmlURL );

	var r = SUtilTemplateHTML.addHTML__URLToEl( htmlURL, targetElement );
		console.log( r );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.util.importHTMLToEl():{*}----------" );

	return r;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;