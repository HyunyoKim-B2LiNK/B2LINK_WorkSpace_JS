//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/ui/window.b2link.ui.staticUIMap_checkObject.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} key
 * @return {null|Array} [ {HTMLElement}, {} ]
 */
window.b2link.ui.staticUIMap_checkObject = function( key )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui.staticUIMap_checkObject():{null|Array}----------" );

	if( window.b2link.STATIC.UI.__checkKey( key ) )
	{
		window.b2link.STATIC.UI.__show( key );
		var o = window.b2link.STATIC.UI.__getObj( key );

		//*/
		if( o[ 1 ].req_Data ) o[ 1 ].req_Data();
		//*/

		return o;
	}

	return null;

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui.staticUIMap_checkObject():{null|Array}----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;