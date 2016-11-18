//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/el_tbody/window.b2link.el_tbody.getTD__FirstTRFirstTD.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} tbody
 * @return {HTMLElement} td
 */
window.b2link.el_tbody.getTD__FirstTRFirstTD = function( tbody )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.el_tbody.getTD__FirstTRFirstTD():{HTMLElement}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.el_tbody.getTD__FirstTRFirstTD():{HTMLElement}----------" );

	return tbody.children[ 0 ].children[ 0 ];
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;