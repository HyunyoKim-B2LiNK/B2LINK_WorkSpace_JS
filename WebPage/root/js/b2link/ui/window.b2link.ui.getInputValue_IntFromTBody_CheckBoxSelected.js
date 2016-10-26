//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/ui/window.b2link.ui.getInputValue_IntFromTBody_CheckBoxSelected.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} t tbody
 * @return {Array} [ {HTMLElement}, {HTMLElement}, .... ]
 */
window.b2link.ui.getInputValue_IntFromTBody_CheckBoxSelected = function( t )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui.getInputValue_IntFromTBody_CheckBoxSelected():{Array}----------" );

	var r = [];
	var a = t.children;
	var io;
	var ioCheckBox;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		ioCheckBox = io.children[ 0 ].children[ 0 ];
		if( ioCheckBox.checked ) r.push( parseInt( ioCheckBox.value ) );
	}

	console.log( r );
	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui.getInputValue_IntFromTBody_CheckBoxSelected():{Array}----------" );

	return r;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
