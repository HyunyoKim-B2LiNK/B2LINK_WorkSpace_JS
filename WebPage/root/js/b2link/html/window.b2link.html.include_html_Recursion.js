//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/html/window.b2link.html.include_html_Recursion.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} element
 * @return {HTMLElement}
 */
window.b2link.html.include_html_Recursion = function( element )
{
	//////////window.TtwLog.timeStamp( "---- [ S ] - window.b2link.html.include_html_Recursion():{HTMLElement}----------" );
	//////////window.TtwLog.timeStamp( "---- [ E ] - window.b2link.html.include_html_Recursion():{HTMLElement}----------" );
	//debugger;
	return SUtilHTML.includeHTML_Recursion( element );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;