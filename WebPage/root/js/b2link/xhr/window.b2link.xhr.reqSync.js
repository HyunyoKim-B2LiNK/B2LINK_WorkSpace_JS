//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/xhr/window.b2link.xhr.reqSync.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} url
 */
window.b2link.xhr.reqSync = function( url )
{
	console.log( "---- [ S ] - window.b2link.xhr.reqSync():void----------" );

	SUtilXMLHttpReqGet.reqSync( url );

	console.log( "---- [ E ] - window.b2link.xhr.reqSync():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
