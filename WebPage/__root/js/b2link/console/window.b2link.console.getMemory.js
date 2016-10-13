//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/console/window.b2link.console.getMemory.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {MemoryInfo}
 */
window.b2link.console.getMemory = function()
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.console.getMemory():void----------" );
	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.console.getMemory():void----------" );
	return console.memory;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;