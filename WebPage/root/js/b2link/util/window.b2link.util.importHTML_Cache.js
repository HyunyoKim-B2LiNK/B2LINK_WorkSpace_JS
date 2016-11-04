//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/util/window.b2link.util.importHTML_Cache.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {String} targetElementID
 * @return {*}
 */
window.b2link.util.importHTML_Cache = function( htmlURL, targetElementID )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.util.importHTML_Cache():{*}----------" );

	window.TtwLog.timeStamp( "htmlURL : " + htmlURL );

	var r = SUtilTemplateHTML.addHTML__URLToElID_Cache( htmlURL, targetElementID );
		console.log( r );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.util.importHTML_Cache():{*}----------" );

	return r;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;