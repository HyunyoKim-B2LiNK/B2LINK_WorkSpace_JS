//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/console/window.b2link.console.objInfo.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} t
 */
window.b2link.console.objInfo = function( t )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.console.objInfo():void----------" );
	t.__status();
	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.console.objInfo():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;