//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/console/window.b2link.console.objStyle_LeftTopRightBottom.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} t
 */
window.b2link.console.objStyle_LeftTopRightBottom = function( t )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.console.objStyle_LeftTopRightBottom():void----------" );
	var s = t.style;
	console.log( "Left : " + s.left );
	console.log( "Top : " + s.top );
	console.log( "Right : " + s.right );
	console.log( "Bottom : " + s.bottom );
	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.console.objStyle_LeftTopRightBottom():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;