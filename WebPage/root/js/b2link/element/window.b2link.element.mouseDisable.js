//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/element/window.b2link.element.mouseDisable.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} t
 * @return {HTMLElement}
 */
window.b2link.element.mouseDisable = function( t )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.element.mouseDisable():{HTMLElement}----------" );

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.element.mouseDisable():{HTMLElement}----------" );

	return SUtilDisObj.mouseDisable( t );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;