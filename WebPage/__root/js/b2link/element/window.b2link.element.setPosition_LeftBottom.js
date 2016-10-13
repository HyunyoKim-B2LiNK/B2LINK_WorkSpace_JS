//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/element/window.b2link.element.setPosition_LeftBottom.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} t HTML Element
 * @param {Number} left
 * @param {Number} bottom
 */
window.b2link.element.setPosition_LeftBottom = function( t, left, bottom )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.element.setPosition_LeftBottom():void----------" );

	var s = t.style;
		s.bottom = bottom + "px";
		s.left = left + "px";
		s.right = "";
		s.top = "";

	//window.b2link.console.objStyle_BottomLeftRightTop( t );
	window.b2link.console.objStyle_LeftTopRightBottom( t );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.element.setPosition_LeftBottom():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;