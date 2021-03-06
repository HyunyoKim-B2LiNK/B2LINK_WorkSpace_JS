//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/html/window.b2link.html.applyParentheses_html.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} element
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {HTMLElement}
 */
window.b2link.html.applyParentheses_html = function( element, o )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.html.applyParentheses_html():{HTMLElement}----------" );

	var r = SUtilString.applyParenthesesStrFromObj__NV_NA( element.innerHTML, o );
	//console.log( r );
	element.innerHTML = r;

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.html.applyParentheses_html():{HTMLElement}----------" );

	return element;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;