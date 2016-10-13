//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/fn/global.b2link.fs.writeFile.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} fileNm
 * @param {String} s
 * @param {Object} options
 * @param {Function} cb_Complete
 */
global.b2link.fs.writeFile = function( fileNm, s, options, cb_Complete )
{
	console.log( "---- [ S ] - global.b2link.fs.writeFile():void----------" );

	STtwUtilFsWriteStream.writeFile( fileNm, s, options, cb_Complete );
	
	console.log( "---- [ E ] - global.b2link.fs.writeFile():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
