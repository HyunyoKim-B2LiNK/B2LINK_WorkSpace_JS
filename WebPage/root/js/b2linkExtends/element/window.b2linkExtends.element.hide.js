//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2linkExtends/element/window.b2linkExtends.element.hide.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 */
window.b2linkExtends.element.hide = function()
{
	//////////window.TtwLog.timeStamp( "---- [ S ] - window.b2linkExtends.element.hide():void----------" );
	this.__el.style.display = "none";
	//////////window.TtwLog.timeStamp( "---- [ E ] - window.b2linkExtends.element.hide():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;