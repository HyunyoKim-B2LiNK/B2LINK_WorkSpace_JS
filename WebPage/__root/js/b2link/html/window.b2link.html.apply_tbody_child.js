//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/html/window.b2link.html.apply_tbody_child.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement}
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 */
window.b2link.html.apply_tbody_child = function( element, a )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.html.apply_tbody_child():void----------" );

	console.count();

	//삭제 - 20161011 - 송선우 - 테스트;
	var a = [ a[ 0 ], a[ 0 ], a[ 0 ] ];

	console.log( a );

	var r = SUtilString.applyStrFromArray( element.innerHTML, a );
	//console.log( r );
	element.innerHTML = r;

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.html.apply_tbody_child():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;