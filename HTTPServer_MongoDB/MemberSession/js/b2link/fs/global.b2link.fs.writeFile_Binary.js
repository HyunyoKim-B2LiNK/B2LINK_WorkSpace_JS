//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/fn/global.b2link.fs.writeFile_Binary.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} fileNm
 * @param {ByteArray} d
 * @param {Object} options
 * @param {Function} cb_Complete
 */
global.b2link.fs.writeFile_Binary = function( fileNm, d, options, cb_Complete )
{
	console.log( "---- [ S ] - global.b2link.fs.writeFile_Binary():void----------" );

	STtwUtilFsWriteStream.writeFile_Binary( fileNm, d, options, cb_Complete );
	
	console.log( "---- [ E ] - global.b2link.fs.writeFile_Binary():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
