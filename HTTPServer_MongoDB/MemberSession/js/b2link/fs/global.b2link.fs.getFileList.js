//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/fn/global.b2link.fs.getFileList.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} path
 * @return {Array}
 */
global.b2link.fs.getFileList = function( path )
{
	console.log( "---- [ S ] - global.b2link.fs.getFileList():{Array}----------" );
	console.log( "---- [ E ] - global.b2link.fs.getFileList():{Array}----------" );

	return STtwUtilFsReadStream.getList_File( path );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
