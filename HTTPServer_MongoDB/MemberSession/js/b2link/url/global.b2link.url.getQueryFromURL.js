//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/url/global.b2link.url.getQueryFromURL.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} url
 * @return {String}
 */
global.b2link.url.getQueryFromURL = function( url )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.b2link.url.getQueryFromURL():{String}----------" );
	global.TtwLog.timeStamp( "---- [ E ] - global.b2link.url.getQueryFromURL():{String}----------" );
	return global.server.getQueryFromURL( url );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
