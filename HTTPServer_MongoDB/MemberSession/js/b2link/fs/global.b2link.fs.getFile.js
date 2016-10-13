//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/fn/global.b2link.fs.getFile.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} path
 * @return {Byte}
 */
global.b2link.fs.getFile = function( path )
{
	console.log( "---- [ S ] - global.b2link.fs.getFile():{Byte}----------" );
	console.log( "---- [ E ] - global.b2link.fs.getFile():{Byte}----------" );

	return STtwUtilFsReadStream.getFile( path );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
