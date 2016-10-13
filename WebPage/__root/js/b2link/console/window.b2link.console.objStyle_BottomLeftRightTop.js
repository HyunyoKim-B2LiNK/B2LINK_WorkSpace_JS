//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/console/window.b2link.console.objStyle_BottomLeftRightTop.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} t
 */
window.b2link.console.objStyle_BottomLeftRightTop = function( t )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.console.objStyle_BottomLeftRightTop():void----------" );
	var s = t.style;
	console.log( "Bottom : " + s.bottom );
	console.log( "Left : " + s.left );
	console.log( "Right : " + s.right );
	console.log( "Top : " + s.top );
	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.console.objStyle_BottomLeftRightTop():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;