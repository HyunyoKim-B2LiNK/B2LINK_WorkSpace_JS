//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/service/window.b2link.service.res$member_basic$getAllList__nm.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link.service.res$member_basic$getAllList__nm = function( result, cbFunction )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.service.res$member_basic$getAllList__nm():void----------" );
	console.log( result );

	var r = JSON.parse( result );
	cbFunction( r );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.service.res$member_basic$getAllList__nm():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
