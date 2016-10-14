//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/ui/window.b2link.ui.addStaticUIMap.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} key
 * @param {Array} t [ HTMLElement, {} ]
 */
window.b2link.ui.addStaticUIMap = function( key, t )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui.addStaticUIMap():void----------" );

	if( window.b2link.STATIC.UI[ key ] )
	{
		var s = "UI Map에 key - " + key + " 가 이미 존재합니다";
		console.error( s );
		alert( s );
	}
	else window.b2link.STATIC.UI[ key ] = t;

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui.addStaticUIMap():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
