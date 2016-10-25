//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/ui/window.b2link.ui.getArray_IDAndValueFromParentElement__Input.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} t
 * @return {Array} [ {HTMLElement}, {HTMLElement}, .... ]
 */
window.b2link.ui.getArray_IDAndValueFromParentElement__Input = function( t )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui.getArray_IDAndValueFromParentElement__Input():{Array}----------" );

	var r = [];
	var a = t.children;
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		if( "INPUT" == io.tagName ) r.push( [ io.id, io.value ] );
	}

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui.getArray_IDAndValueFromParentElement__Input():{Array}----------" );

	return r;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
