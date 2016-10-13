//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/fn/global.b2link.fs.getFile_UTF8.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} path
 * @return {String}
 */
global.b2link.fs.getFile_UTF8_UTF8 = function( path )
{
	console.log( "---- [ S ] - global.b2link.fs.getFile_UTF8():{String}----------" );
	console.log( "---- [ E ] - global.b2link.fs.getFile_UTF8():{String}----------" );

	return STtwUtilFsReadStream.getFile( path ).toString( "utf8" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
