//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/element/window.b2link.element.setClassName__tbody_tr_td.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} tbody HTMLElement
 */
window.b2link.element.setClassName__tbody_tr_td = function( tbody, className )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.element.setClassName__tbody_tr_td():void----------" );
	var aTR = tbody.children;
	var i=0, iLen=aTR.length;
	for( ; i<iLen; ++i )
	{
		var aTD = aTR[ i ].children;
		var j=0, jLen=aTD.length;
		for( ; j<jLen; ++j ) aTD[ j ].className = className;
	}
	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.element.setClassName__tbody_tr_td():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;