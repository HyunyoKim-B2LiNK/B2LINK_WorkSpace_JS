function( d )
{
	print( "-- [ S ] - email_detail$remove():{uint}----------" );
	print( "d : " + d );
	d._id = NumberInt(d._id);
	var p = {};
	p._id = d._id;

	print( "-- [ E ] - email_detail$remove():{uint}----------;" );
	var r = email_detail$_getCol().remove( p, 1 );
	return r != null;
}
