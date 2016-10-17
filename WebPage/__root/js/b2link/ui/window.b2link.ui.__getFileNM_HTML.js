//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/ui/window.b2link.ui.__getFileNM_HTML.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} folderName
 * @param {String} fileName
 */
window.b2link.ui.__getFileNM_HTML = function( folderNM, fileNM )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui.__getFileNM_HTML():void----------" );

	const _ui = window.b2link.STATIC.CONFIG.URL.UI;

	//var _nmFileHTML = folderNM + _ui.CSS + "/" + fileNM;
	var _nmFileHTML = folderNM + fileNM + _ui.CSS + ".html";
		console.log( "_nmFileHTML : " + _nmFileHTML );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui.__getFileNM_HTML():void----------" );

	return _nmFileHTML;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
