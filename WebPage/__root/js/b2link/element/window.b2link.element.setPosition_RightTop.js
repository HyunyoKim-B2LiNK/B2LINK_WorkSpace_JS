//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/element/window.b2link.element.setPosition_RightTop.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} t HTML Element
 * @param {Number} right
 * @param {Number} top
 */
window.b2link.element.setPosition_RightTop = function( t, right, top )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.element.setPosition_RightTop():void----------" );

	var s = t.style;
		s.bottom = "";
		s.left = "";
		s.right = right + "px";
		s.top = top + "px";

	//window.b2link.console.objStyle_BottomLeftRightTop( t );
	window.b2link.console.objStyle_LeftTopRightBottom( t );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.element.setPosition_RightTop():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;