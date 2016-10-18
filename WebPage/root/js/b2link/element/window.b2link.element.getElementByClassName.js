//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/element/window.b2link.element.getElementByClassName.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} t HTMLElement
 * @param {String} className
 */
window.b2link.element.getElementByClassName = function( t, className )
{
	//////////window.TtwLog.timeStamp( "---- [ S ] - window.b2link.element.getElementByClassName():void----------" );
	//////////window.TtwLog.timeStamp( "---- [ E ] - window.b2link.element.getElementByClassName():void----------" );
	return t.getElementsByClassName( className )[ 0 ];
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;