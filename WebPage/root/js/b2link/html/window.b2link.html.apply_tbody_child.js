//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/html/window.b2link.html.apply_tbody_child.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} tbody
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @return {HTMLElement}
 */
window.b2link.html.apply_tbody_child = function( tbody, a )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.html.apply_tbody_child():{HTMLElement}----------" );

	if( !tbody.__originalInnerHTML ) tbody.__originalInnerHTML = tbody.innerHTML;

	//삭제 - 20161011 - 송선우 - 테스트;
	//var a = [ a[ 0 ], a[ 0 ], a[ 0 ] ];console.log( a );
	var r = SUtilString.applyStrFromArray( tbody.__originalInnerHTML, a );
		//console.log( r );

	tbody.innerHTML = r;

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.html.apply_tbody_child():{HTMLElement}----------" );

	return tbody;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;