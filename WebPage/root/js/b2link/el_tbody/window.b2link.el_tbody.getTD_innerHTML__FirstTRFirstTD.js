//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/el_tbody/window.b2link.el_tbody.getTD_innerHTML__FirstTRFirstTD.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} tbody
 * @return {String} td.innerHTML
 */
window.b2link.el_tbody.getTD_innerHTML__FirstTRFirstTD = function( tbody )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.el_tbody.getTD_innerHTML__FirstTRFirstTD():{String}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.el_tbody.getTD_innerHTML__FirstTRFirstTD():{String}----------" );

	return window.b2link.el_tbody.getTD__FirstTRFirstTD( tbody ).innerHTML;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;