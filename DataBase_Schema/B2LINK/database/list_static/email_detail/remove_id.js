function( _id )
{
	print( "-- [ S ] - email_detail$remove_id():{uint}----------" );
	print( "_id : " + _id );
	printjson( _id );
	var r = email_detail$_getCol().remove( { _id : NumberInt( _id ) }, 1 );
	print( r );
	print( "-- [ E ] - email_detail$remove_id():{uint}----------" );
	return 1;
}
