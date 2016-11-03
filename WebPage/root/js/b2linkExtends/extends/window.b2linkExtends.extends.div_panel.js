//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2linkExtends/extends/window.b2linkExtends.extends.div_panel.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} t target
 */
window.b2linkExtends.extends.div_Panel = function( t )
{
	//////////window.TtwLog.timeStamp( "---- [ S ] - window.b2linkExtends.extends.div_panel():void----------" );
	t.hide = window.b2linkExtends.element.hide;
	t.show = window.b2linkExtends.element.show;
	//////////window.TtwLog.timeStamp( "---- [ E ] - window.b2linkExtends.extends.div_panel():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;