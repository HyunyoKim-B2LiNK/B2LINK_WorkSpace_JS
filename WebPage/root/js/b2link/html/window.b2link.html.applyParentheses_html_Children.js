//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/html/window.b2link.html.applyParentheses_html_Children.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} element
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {HTMLElement}
 */
window.b2link.html.applyParentheses_html_Children = function( element, o )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.html.applyParentheses_html_Children():{HTMLElement}----------" );

	var a = element.children;
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		var r = SUtilString.applyParenthesesStrFromObj__NV_NA( io.innerHTML, o );
			//console.log( r );
		if( r ) io.innerHTML = r;
	}

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.html.applyParentheses_html_Children():{HTMLElement}----------" );

	return element;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;