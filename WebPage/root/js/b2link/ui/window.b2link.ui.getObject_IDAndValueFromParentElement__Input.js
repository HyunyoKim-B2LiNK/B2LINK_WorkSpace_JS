//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/ui/window.b2link.ui.getObject_IDAndValueFromParentElement__Input.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} t
 * @return {Object}
 */
window.b2link.ui.getObject_IDAndValueFromParentElement__Input = function( t )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui.getObject_IDAndValueFromParentElement__Input():{Object}----------" );

	var r = {};
	var a = t.children;
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		if( "INPUT" == io.tagName ) r[ io.id ] = io.value;
	}

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui.getObject_IDAndValueFromParentElement__Input():{Object}----------" );

	return r;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
