//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/element/window.b2link.element.show.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} t HTMLElement
 */
window.b2link.element.show = function( t )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.element.show():void----------" );
	t.style.display = "";
	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.element.show():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;