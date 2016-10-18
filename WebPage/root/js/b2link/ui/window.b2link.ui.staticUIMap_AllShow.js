//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/ui/window.b2link.ui.removeStaticUIMap.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} key
 */
window.b2link.ui.removeStaticUIMap = function( key )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui.removeStaticUIMap():void----------" );

	var t = window.b2link.STATIC.UI[ key ];
	if( t )
	{
		if( t[ 0 ].dispose ) t[ 0 ].dispose();
		if( t[ 1 ].dispose ) t[ 1 ].dispose();
		delete window.b2link.STATIC.UI[ key ]
	}
	else
	{
		var s = "UI Map에 key - " + key + " 가 존재 하지 않습니다.";
		console.error( s );
		alert( s );
	}

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui.removeStaticUIMap():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
