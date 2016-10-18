//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/ui/window.b2link.ui.staticUIMap_Add.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} key
 * @param {Array} t [ HTMLElement, {} ]
 */
window.b2link.ui.staticUIMap_Add = function( key, t )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui.staticUIMap_Add():void----------" );

	window.b2link.STATIC.UI.__add( key, t );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui.staticUIMap_Add():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
