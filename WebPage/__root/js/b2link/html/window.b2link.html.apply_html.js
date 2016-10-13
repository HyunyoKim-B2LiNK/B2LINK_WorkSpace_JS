//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/html/window.b2link.html.apply_html.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement}
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 */
window.b2link.html.apply_html = function( element, o )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.html.apply_html():void----------" );

	var r = SUtilString.applyStrFromObj__NV_NA( element.innerHTML, o );
	//console.log( r );
	element.innerHTML = r;

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.html.apply_html():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;