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

	var of = window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Input_Type;
	var r = {};
	var a = t.children;
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		if( "INPUT" == io.tagName ) of[ "_fn_" + io.type ]( r, io );
	}

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Input_Type():{Object}----------" );

	return r;
};
window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Input_Type._fn_checkbox = function( t, o ){ t[ o.className ] = o.checked; };
window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Input_Type._fn_email = function( t, o ){ t[ o.className ] = o.value; };
window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Input_Type._fn_number = function( t, o ){ t[ o.className ] = o.value; };
window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Input_Type._fn_text = function( t, o ){ t[ o.className ] = o.value; };
window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Input_Type._fn_url = function( t, o ){ t[ o.className ] = o.value; };

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;