//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/el_tbody/window.b2link.el_tbody.getTDFromTBody_CheckBoxSelected.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} t tbody
 * @return {Array} [ {HTMLElement}, {HTMLElement}, .... ]
 */
window.b2link.el_tbody.getTDFromTBody_CheckBoxSelected = function( t )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.el_tbody.getTDFromTBody_CheckBoxSelected():{Array}----------" );

	var r = [];
	var a = t.children;
	var io;
	var ioCheckBox;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		ioCheckBox = io.children[ 0 ].children[ 0 ];
		if( ioCheckBox.checked ) r.push( io.children[ 0 ] );
	}

	console.log( r );
	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.el_tbody.getTDFromTBody_CheckBoxSelected():{Array}----------" );

	return r;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
