//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_service/common/window.b2link_service.common._fn_res.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service.common._fn_res = function( result, cbFunction )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link_service.common._fn_res():void----------" );

	console.log( result );

	var r = JSON.parse( result );
	cbFunction( r );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link_service.common._fn_res():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
