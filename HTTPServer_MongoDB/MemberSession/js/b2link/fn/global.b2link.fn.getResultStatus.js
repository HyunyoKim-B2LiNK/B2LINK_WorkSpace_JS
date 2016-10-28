//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/fn/global.b2link.fn.getResultStatus.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function(){

	var _fnStore = {
		0 : function(){ return 0; }
		, 1 : function(){ return 1; }
		, "false" : function(){ return 0; }
		, "true" : function(){ return 1; }
	};

	/**
	 * @function
	 * @param {*} result
	 */
	global.b2link.fn.getResultStatus = function( result )
	{
		global.TtwLog.timeStamp( "---- [ S ] - global.b2link.fn.getResultStatus():{*}----------" );

		console.log( "Input result : " );
		console.log( result );

		try
		{
			if( _fnStore.hasOwnProperty( result ) )
			{
				var r = _fnStore[ result ]();
					console.log( "Return result : " + r );
				return r;
			}
		}
		catch( er )
		{
			console.error( "global.b2link.fn.getResultStatus Error : " + er );
		}

		global.TtwLog.timeStamp( "---- [ E ] - global.b2link.fn.getResultStatus():{*}----------return 0;" );
		console.log( "Return result : " );
		console.log( result );
		return result;
	};
})();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;