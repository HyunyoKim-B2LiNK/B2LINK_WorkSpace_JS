//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/ui/window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Input_Type.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} t
 * @return {Object}
 */
window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Input_Type = function( t )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Input_Type():{Object}----------" );

	var of = window.b2link.el_input.setObjectInputValueFromInputTypeAndClassName;
	var r = {};
	var a = t.children;
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		if( "INPUT" == io.tagName ) of( r, io );
	}

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Input_Type():{Object}----------" );

	return r;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;