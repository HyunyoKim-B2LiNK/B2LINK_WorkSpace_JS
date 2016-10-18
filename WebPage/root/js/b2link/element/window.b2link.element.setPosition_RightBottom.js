//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/element/window.b2link.element.setPosition_RightBottom.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} t HTML Element
 * @param {Number} right
 * @param {Number} bottom
 */
window.b2link.element.setPosition_RightBottom = function( t, right, bottom )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.element.setPosition_RightBottom():void----------" );

	var s = t.style;
		s.bottom = bottom + "px";
		s.left = "";
		s.right = right + "px";
		s.top = "";

	//window.b2link.console.objStyle_BottomLeftRightTop( t );
	window.b2link.console.objStyle_LeftTopRightBottom( t );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.element.setPosition_RightBottom():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;