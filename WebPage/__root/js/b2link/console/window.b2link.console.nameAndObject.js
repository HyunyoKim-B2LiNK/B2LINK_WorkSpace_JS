//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/console/window.b2link.console.nameAndObject.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} name
 * @param {Object} t
 */
window.b2link.console.nameAndObject = function( name, t )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.console.nameAndObject():void----------" );
	console.info( "//--------------------------------------------------;"
		+ "\n//---------- [ S ] - " + name + " ----------;" );
	console.log( t );
	console.info( "//---------- [ E ] - " + name + " ----------;"
		+ "\n//--------------------------------------------------;" );
	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.console.nameAndObject():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;