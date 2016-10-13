//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/fn/global.b2link.fs.getDirectoryList.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} path
 * @return {Array}
 */
global.b2link.fs.getDirectoryList = function( path )
{
	console.log( "---- [ S ] - global.b2link.fs.getDirectoryList():{Array}----------" );
	console.log( "---- [ E ] - global.b2link.fs.getDirectoryList():{Array}----------" );

	return STtwUtilFsReadStream.getList_Directory( path );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
