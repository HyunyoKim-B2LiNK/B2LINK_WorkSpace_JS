//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/html/window.b2link.html.set_thead_child.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement}
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 */
window.b2link.html.set_thead_child = function( element, a )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.html.set_thead_child():void----------" );

	element.innerHTML = window.b2link.html.create_thead_child( a );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.html.set_thead_child():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;