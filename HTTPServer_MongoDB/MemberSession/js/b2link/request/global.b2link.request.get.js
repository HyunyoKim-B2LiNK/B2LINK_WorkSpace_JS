//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/request/global.b2link.request.get.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} url
 * @param {Function} cbComplete
 * @param {Object} headers
 */
global.b2link.request.get = function( url, cbComplete, headers )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.b2link.request.get():void----------" );

	var d = STtwUtilURL.getParseResult( url );

	var aHost = d.host.split( ":" );
	var o = { encoding : "utf8"
		, options : {
			host : aHost[ 0 ], port : aHost[ 1 ], path : d.path
			, headers : headers ? headers : null
		}
		, cbFunctions : { end : cbComplete } };

	global.b2link_router.STATIC.REQUEST_COUNT.P1();

	STtwUtilHttp.request_GET( o );

	global.TtwLog.timeStamp( "---- [ E ] - global.b2link.request.get():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
