//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/el_tbody/window.b2link.el_tbody.change_tbody_child.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} tbody
 * @param {Array} d [ {}, {}, ... ]
 */
window.b2link.el_tbody.change_tbody_child = function( tbody, d )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.el_tbody.change_tbody_child():void----------" );

	var a = tbody.children;
	var io;//tr;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ]//tr;
		var b = io.children;
		var j=0, jLen=b.length;

		dio = d[ i ];
		if( dio )
			for( ; j<jLen; ++j ) b[ j ].innerText = dio[ tbody.__array_td_key[ j ] ];
		else
			for( ; j<jLen; ++j ) b[ j ].innerText = "";
	}

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.el_tbody.change_tbody_child():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;