//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/el_tbody/window.b2link.el_tbody.push_tbody_child.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} tbody
 * @param {Array} d [ {}, {}, ... ]
 */
window.b2link.el_tbody.push_tbody_child = function( tbody, d )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.el_tbody.push_tbody_child():void----------" );

	tbody.innerHTML += SUtilString.applyStrFromArray( tbody.__originalInnerHTML, d );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.el_tbody.push_tbody_child():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;