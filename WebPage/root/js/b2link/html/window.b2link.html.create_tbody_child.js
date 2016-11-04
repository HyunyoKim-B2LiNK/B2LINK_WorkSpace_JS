//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/html/window.b2link.html.create_tbody_child.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Array} keys [ "_id", "email", "nm", ... ]
 * @param {Array} a [ { "_id" : 0, "email" : "thdtjsdn@gmail.com", ... }, {}, {}, ... ]
 * @return {String}
 */
window.b2link.html.create_tbody_child = function( keys, d )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.html.create_tbody_child():{String}----------" );

	var f0 = window.b2link.obj.getValueFromKey_dotKeyRef;

	var r = "";
	var td = '<td>$d</td>';
	var io;
	/*///수정 - 20161011 - 송선우 - 테스트;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		var r = "<tr>";
		io = d[ i ];
	/*///Test;
	var i=0, iLen=10;
	for( ; i<iLen; ++i )
	{
		r += "<tr>";
		io = d[ 0 ];
	//*/
		var j=0, jLen=keys.length;
		for( ; j<jLen; ++j )
			r += td.replace( "$d"
				//, io[ keys[ j ] ]
				, f0( io, keys[ j ] )
			);
		r += "</tr>";
	}

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.html.create_tbody_child():{String}----------" );

	return r;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;