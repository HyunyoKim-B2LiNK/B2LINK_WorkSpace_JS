//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/ui/window.b2link.ui.__getFileNM_JS.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} folderName
 * @param {String} fileName
 */
window.b2link.ui.__getFileNM_JS = function( folderNM, fileNM )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui.__getFileNM_JS():void----------" );

	const _ui = window.b2link.STATIC.CONFIG.URL.UI;

	var _nmFileJS = folderNM + fileNM + ".js";

		console.log( "_nmFileJS : " + _nmFileJS );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui.__getFileNM_JS():void----------" );

	return _nmFileJS;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
