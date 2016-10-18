//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/element/window.b2link.element.appendChild.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} p parent HTMLElement
 * @param {HTMLElement} c element HTMLElement
 */
window.b2link.element.appendChild = function( p, o )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.element.appendChild():void----------" );

	try
	{
		p.appendChild( o );
		window.TtwLog.timeStamp( p.id + "에 " + o.id + "를 추가 함" );
	}
	catch( er )
	{
		console.error( "Error : " + er );
	}

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.element.appendChild():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;