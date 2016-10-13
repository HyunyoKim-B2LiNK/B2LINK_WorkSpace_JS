//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/html/window.b2link.html.set_tbody_child.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement}
 * @param {Array} keys [ "_id", "email", "nm", ... ]
 * @param {Array} d data [ { "_id" : 0, "email" : "thdtjsdn@gmail.com", ... }, {}, {}, ... ]
 */
window.b2link.html.set_tbody_child = function( element, keys, d )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.html.set_tbody_child():void----------" );

	element.innerHTML = window.b2link.html.create_tbody_child( keys, d );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.html.set_tbody_child():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;