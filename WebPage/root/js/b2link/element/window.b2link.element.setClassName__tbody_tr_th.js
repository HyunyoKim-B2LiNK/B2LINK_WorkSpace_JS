//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/element/window.b2link.element.setClassName__tbody_tr_th.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} thead HTMLElement
 */
window.b2link.element.setClassName__tbody_tr_th = function( thead, className )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.element.setClassName__tbody_tr_th():void----------" );
	var aTR = thead.children;
	var i=0, iLen=aTR.length;
	for( ; i<iLen; ++i )
	{
		var aTH = aTR[ i ].children;
		var j=0, jLen=aTH.length;
		for( ; j<jLen; ++j ) aTH[ j ].className = className;
	}
	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.element.setClassName__tbody_tr_th():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;