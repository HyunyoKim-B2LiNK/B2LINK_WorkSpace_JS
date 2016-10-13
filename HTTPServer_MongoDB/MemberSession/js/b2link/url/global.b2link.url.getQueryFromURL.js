//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/url/global.b2link.url.getQueryFromURL.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} url
 */
global.b2link.url.getQueryFromURL = function( url )
{
	console.log( "---- [ S ] - global.b2link.url.getQueryFromURL():void----------" );
	console.log( "---- [ E ] - global.b2link.url.getQueryFromURL():void----------" );
	return global.server.getQueryFromURL( url );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
