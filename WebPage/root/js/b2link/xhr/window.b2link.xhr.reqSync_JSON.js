//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/xhr/window.b2link.xhr.reqSync_JSON.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} url
 * @return {Object}
 */
window.b2link.xhr.reqSync_JSON = function( url )
{
	console.log( "---- [ S ] - window.b2link.xhr.reqSync_JSON():{Object}----------" );
	console.log( "---- [ E ] - window.b2link.xhr.reqSync_JSON():{Object}----------" );

	return JSON.parse( SUtilXMLHttpReqGet.reqSyncReturn( url ).responstText );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
