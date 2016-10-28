//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/session/window.b2link.session.setSession.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d data { "Expires" : "", "sid" : "", "mid" : mid }
 */
window.b2link.session.setSession = function( d )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.session.setSession():void----------" );

	var t = window.sessionStorage;

	if( d.sid ) t.setItem( "sid", d.sid );
	if( d.Expires ) t.setItem( "Expires", d.Expires );
	if( d.mid ) t.setItem( "mid", d.mid );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.session.setSession():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
