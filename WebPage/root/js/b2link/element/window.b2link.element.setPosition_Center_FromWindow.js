//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/element/window.b2link.element.setPosition_Center_FromWindow.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} t HTML Element
 */
window.b2link.element.setPosition_Center_FromWindow = function( t )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.element.setPosition_Center_FromWindow():void----------" );

	var pw = t.parentElement.clientWidth;//parent width;
	var ph = t.parentElement.clientHeight;//parent height;
	var dw = t.clientWidth;//div width;
	var dh = t.clientHeight;//div height;

	var hDW = dw / 2;//half div width;
	var hDH = dh / 2;//half div height;

	var hPW = pw / 2;//half parent width;
	var hPH = ph / 2;//half parent height;

	var s = t.style;
		s.left = hPW - hDW + "px";console.log( "s.left : " + s.left );
		s.top = "auto";
		s.bottom = "auto";
		s.right = "auto";

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.element.setPosition_Center_FromWindow():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;