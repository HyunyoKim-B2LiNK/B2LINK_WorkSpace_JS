//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/xhr/window.b2link.xhr.req_String.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} url
 * @param {Function} cbFunction function( str ){}
 */
window.b2link.xhr.req_String = function( url, cbFunction )
{
	console.log( "---- [ S ] - window.b2link.xhr.req_String():void----------" );

	SUtilXMLHttpReqGet.req_String( url, cbFunction );

	console.log( "---- [ E ] - window.b2link.xhr.req_String():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
