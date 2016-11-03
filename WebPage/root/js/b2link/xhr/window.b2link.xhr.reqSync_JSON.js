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
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.xhr.reqSync_JSON():{Object}----------" );
	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.xhr.reqSync_JSON():{Object}----------" );

	return JSON.parse( SUtilXMLHttpReqGet.reqSyncReturn( url ).responstText );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
