//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/html/window.b2link.html.include_html.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} element
 * @return {HTMLElement}
 */
window.b2link.html.include_html = function( element )
{
	//////////window.TtwLog.timeStamp( "---- [ S ] - window.b2link.html.include_html():{HTMLElement}----------" );
	//////////window.TtwLog.timeStamp( "---- [ E ] - window.b2link.html.include_html():{HTMLElement}----------" );

	return SUtilHTML.includeHTML( element );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;