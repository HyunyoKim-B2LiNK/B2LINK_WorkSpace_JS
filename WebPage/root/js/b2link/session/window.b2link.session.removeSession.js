//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/session/window.b2link.session.removeSession.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function(){

	var _a = [ "Expires", "sid", "mid" ];

	/**
	 * @function
	 */
	window.b2link.session.removeSession = function()
	{
		window.TtwLog.timeStamp( "\n" );
		window.TtwLog.timeStamp( "---- [ S ] - window.b2link.session.removeSession():void----------" );
		var t = window.sessionStorage;
		var i=0, iLen=_a.length; for( ; i<iLen; ++i ) t.removeItem( _a[ i ] );
		window.TtwLog.timeStamp( "---- [ E ] - window.b2link.session.removeSession():void----------" );
		window.TtwLog.timeStamp( "\n" );
	};
});