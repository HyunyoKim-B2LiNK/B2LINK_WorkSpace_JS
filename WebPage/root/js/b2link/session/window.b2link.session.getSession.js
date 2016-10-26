//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/fn/window.b2link.session.getSession.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function(){

	var _a = [ "Expires", "sid", "mid" ];

	/**
	 * @function
	 * @return {Object} { "sid" : "", "Expires" : "", "mid" : "" }
	 */
	window.b2link.session.getSession = function()
	{
		window.TtwLog.timeStamp( "---- [ S ] - window.b2link.session.getSession():void----------" );
		var t = window.sessionStorage;

		var r = {};
		var io;
		var i=0, iLen=_a.length;
		for( ; i<iLen; ++i )
		{
			io = _a[ i ];
			r[ io ] = t.getItem( io );
			if( !r[ io ] ) delete r[ io ];
		}

		return r;
		window.TtwLog.timeStamp( "---- [ E ] - window.b2link.session.getSession():void----------" );
	};
});
