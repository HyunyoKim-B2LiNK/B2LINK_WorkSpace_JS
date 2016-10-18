//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/xhr/window.b2link.xhr.reqSyncReturn.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} url
 * @return {XMLHTTPRequest}
 */
window.b2link.xhr.reqSyncReturn = function( url )
{
	console.log( "---- [ S ] - window.b2link.xhr.reqSyncReturn():{XMLHTTPRequest}----------" );
	console.log( "---- [ E ] - window.b2link.xhr.reqSyncReturn():{XMLHTTPRequest}----------" );

	return SUtilXMLHttpReqGet.reqSyncReturn( url );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
