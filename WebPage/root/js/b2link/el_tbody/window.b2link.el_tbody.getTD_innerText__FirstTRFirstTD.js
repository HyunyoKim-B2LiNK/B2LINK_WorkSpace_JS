//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/el_tbody/window.b2link.el_tbody.getTD_innerText__FirstTRFirstTD.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} tbody
 * @return {String} td.innerText
 */
window.b2link.el_tbody.getTD_innerText__FirstTRFirstTD = function( tbody )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.el_tbody.getTD_innerText__FirstTRFirstTD():{String}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.el_tbody.getTD_innerText__FirstTRFirstTD():{String}----------" );

	return window.b2link.el_tbody.getTD__FirstTRFirstTD( tbody ).innerText;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;