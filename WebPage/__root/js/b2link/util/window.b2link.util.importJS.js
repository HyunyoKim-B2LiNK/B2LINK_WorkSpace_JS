//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/util/window.b2link.util.importJS.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} url
 * @return {*}
 */
window.b2link.util.importJS = function( url )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.util.importJS():{*}----------" );

	var r = SUtilTemplateHTML.addJS__URL( url );
		console.log( r );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.util.importJS():{*}----------" );

  return r;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
