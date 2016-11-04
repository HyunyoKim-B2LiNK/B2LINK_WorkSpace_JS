//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/xhr/window.b2link.xhr.reqSync_String.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} url
 * @return {Object}
 */
window.b2link.xhr.reqSync_String = function( url )
{
	//////////window.TtwLog.timeStamp( "---- [ S ] - window.b2link.xhr.reqSync_String():{Object}----------" );
	//////////window.TtwLog.timeStamp( "---- [ E ] - window.b2link.xhr.reqSync_String():{Object}----------" );
	return SUtilXMLHttpReqGet.reqSyncReturn( url ).responseText;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;