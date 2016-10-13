//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/service/window.b2link.service.res$member_session$checkSession__Sign_In.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link.service.res$member_session$checkSession__Sign_In = function( result, cbFunction )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.service.res$member_session$checkSession__Sign_In():void----------" );
    window.b2link.console.nameAndObject( "window.b2link.service.res$member_session$checkSession__Sign_In result", result );
	var r = JSON.parse( result );
	window.b2link.session.setSession( r );
	cbFunction( r );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.service.res$member_session$checkSession__Sign_In():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
