//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/util/window.b2link.util.importHTML.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {String} targetElementID
 * @return {*}
 */
window.b2link.util.importHTML = function( htmlURL, targetElementID )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.util.importHTML():{*}----------" );

	window.TtwLog.timeStamp( "htmlURL : " + htmlURL );

	var r = SUtilTemplateHTML.addHTML__URLToElID( htmlURL, targetElementID );
		console.log( r );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.util.importHTML():{*}----------" );

	return r;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;