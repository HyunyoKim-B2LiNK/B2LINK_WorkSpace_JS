//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/html/window.b2link.html.create_thead_child.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 */
window.b2link.html.create_thead_child = function( a )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.html.create_thead_child():void----------" );
	var r = "<tr>";
	var th = '<th style="width: $w">$nm</th>';
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		r += th.replace( "$w", io.w + "px;" ).replace( "$nm", io.nm );
	}
	r += "</tr>";
	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.html.create_thead_child():void----------" );

	return r;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;