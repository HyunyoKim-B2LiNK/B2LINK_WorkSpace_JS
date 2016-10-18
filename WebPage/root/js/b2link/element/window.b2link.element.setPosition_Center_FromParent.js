//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/element/window.b2link.element.setPosition_Center_FromParent.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} t HTML Element
 */
window.b2link.element.setPosition_Center_FromParent = function( t )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.element.setPosition_Center_FromParent():void----------" );

	var pw = t.parentElement.clientWidth;//parent width;
	var dw = t.clientWidth;//div width;

	var hDW = dw / 2;//half div width;

	var hPW = pw / 2;//half parent width;

	var s = t.style;
	s.left = hPW - hDW + "px";console.log( "s.left : " + s.left );
	s.top = "auto";
	s.bottom = "auto";
	s.right = "auto";

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.element.setPosition_Center_FromParent():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;