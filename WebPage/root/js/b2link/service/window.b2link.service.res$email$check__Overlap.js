//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/service/window.b2link.service.res$email$check__Overlap.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link.service.res$email$check__Overlap = function( result, cbFunction )
{
	window.RayLog.timeStamp( "---- [ S ] - window.b2link.service.res$email$check__Overlap():void----------" );
	console.log( result );

	var r = JSON.parse( result );
	cbFunction( r );

	window.RayLog.timeStamp( "---- [ E ] - window.b2link.service.res$email$check__Overlap():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;