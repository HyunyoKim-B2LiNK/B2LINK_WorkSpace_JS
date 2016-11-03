//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/element/window.b2link.element.mouseEnable.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} t
 * @return {HTMLElement}
 */
window.b2link.element.mouseEnable = function( t )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.element.mouseEnable():{HTMLElement}----------" );

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.element.mouseEnable():{HTMLElement}----------" );

	return SUtilDisObj.mouseEnable( t );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;