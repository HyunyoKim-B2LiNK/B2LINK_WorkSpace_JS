//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/session/window.b2link.session.getSession__sid.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {String}
 */
window.b2link.session.getSession__sid = function()
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.session.getSession__sid():{String}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.session.getSession__sid():{String}----------" );
	return window.sessionStorage.getItem( "sid" );
};