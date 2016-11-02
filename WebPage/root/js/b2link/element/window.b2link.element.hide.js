//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/element/window.b2link.element.hide.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} t HTMLElement
 */
window.b2link.element.hide = function( t )
{
	//////////window.TtwLog.timeStamp( "---- [ S ] - window.b2link.element.hide():void----------" );
	t.style.display = "none";
	//////////window.TtwLog.timeStamp( "---- [ E ] - window.b2link.element.hide():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;