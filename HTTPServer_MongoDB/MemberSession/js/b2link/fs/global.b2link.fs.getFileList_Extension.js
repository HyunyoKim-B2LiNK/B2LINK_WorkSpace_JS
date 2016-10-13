//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/fn/global.b2link.fs.getFileList_Extension.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} path directory path
 * @param {String} extension ".json", ".txt", ... file extension
 * @return {Array}
 */
global.b2link.fs.getFileList_Extension = function( path, extension )
{
	console.log( "---- [ S ] - global.b2link.fs.getFileList_Extension():{Array}----------" );
	console.log( "---- [ E ] - global.b2link.fs.getFileList_Extension():{Array}----------" );

	return STtwUtilFsReadStream.getList_File_Extension( path, extension );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
