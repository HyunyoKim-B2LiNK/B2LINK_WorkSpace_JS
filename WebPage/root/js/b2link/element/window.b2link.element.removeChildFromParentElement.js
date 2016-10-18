//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/element/window.b2link.element.removeChildFromParentElement.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} t HTMLElement
 */
window.b2link.element.removeChildFromParentElement = function( t )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.element.removeChildFromParentElement():void----------" );

	try
	{
		t.parentElement.removeChild( t );
	}
	catch( er )
	{
		console.error( "Error : " + er );
	}

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.element.removeChildFromParentElement():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;