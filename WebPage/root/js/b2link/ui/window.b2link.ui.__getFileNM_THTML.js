//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/ui/window.b2link.ui.__getFileNM_THTML.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} folderName
 * @param {String} fileName
 */
window.b2link.ui.__getFileNM_THTML = function( folderNM, fileNM )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui.__getFileNM_THTML():void----------" );

	const _ui = window.b2link.STATIC.CONFIG.URL.UI;

	//var _nmFileTHTML = folderNM + _ui.CSS + "/" + fileNM;
	var _nmFileTHTML = folderNM + fileNM + _ui.CSS + ".thtml";
		console.log( "_nmFileTHTML : " + _nmFileTHTML );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui.__getFileNM_THTML():void----------" );

	return _nmFileTHTML;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;