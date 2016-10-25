
//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_url/window.b2link_url.list_static.country$getParam.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d country {}
 * @return {String}
 */
window.b2link_url.list_static.country$getParam = function( d )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link_url.list_static.country$getParam():{String}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link_url.list_static.country$getParam():{String}----------" );

	return "&SLD=" + d.SLD
		+ "&TLD=" + d.TLD
		+ "&ccTLD=" + d.ccTLD
		+ "&gTLD=" + d.gTLD
		+ "&c=" + d.c;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;