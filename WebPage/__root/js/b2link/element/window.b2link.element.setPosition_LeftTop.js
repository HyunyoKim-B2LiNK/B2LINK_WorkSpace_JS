//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/element/wwindow.b2link.element.setPosition_LeftTop.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} t HTML Element
 * @param {Number} left
 * @param {Number} top
 */
window.b2link.element.setPosition_LeftTop = function( t, left, top )
{
	window.TtwLog.timeStamp( "---- [ S ] - wwindow.b2link.element.setPosition_LeftTop():void----------" );

	var s = t.style;
		s.bottom = ""
		s.left = left + "px";
		s.right = "";
		s.top = top + "px";

	//window.b2link.console.objStyle_BottomLeftRightTop( t );
	window.b2link.console.objStyle_LeftTopRightBottom( t );

	window.TtwLog.timeStamp( "---- [ E ] - wwindow.b2link.element.setPosition_LeftTop():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;