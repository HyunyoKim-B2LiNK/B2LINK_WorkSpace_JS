//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/ui/window.b2link.ui.__getFileNM_CSS.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} folderName
 * @param {String} fileName
 */
window.b2link.ui.__getFileNM_CSS = function( folderNM, fileNM )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui.__getFileNM_CSS():void----------" );

	var _nmFileCSS = folderNM + fileNM + ".css";
		console.log( "_nmFileCSS : " + _nmFileCSS );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui.__getFileNM_CSS():void----------" );

	return _nmFileCSS;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
