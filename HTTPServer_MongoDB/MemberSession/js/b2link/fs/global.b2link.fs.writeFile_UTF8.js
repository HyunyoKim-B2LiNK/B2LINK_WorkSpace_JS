//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/fn/global.b2link.fs.writeFile_UTF8.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} fileNm
 * @param {String} s
 * @param {Function} cb_Complete
 */
global.b2link.fs.writeFile_UTF8 = function( fileNm, s, cb_Complete )
{
	console.log( "---- [ S ] - global.b2link.fs.writeFile_UTF8():void----------" );

	STtwUtilFsWriteStream.writeFile_UTF8( fileNm, s, cb_Complete );
	
	console.log( "---- [ E ] - global.b2link.fs.writeFile_UTF8():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
