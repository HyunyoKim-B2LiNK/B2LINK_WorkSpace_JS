function( _id )
{
	print( "-- [ S ] - currency$remove_id():{uint}----------" );

	print( "_id : " + _id );

	//if( !( _id > -1 ) ){
	if( !currency$validation__remove_id( _id ) ){
		print( "-- [ E ] - currency$remove_id():{uint}----------return 0;" );
		return 0;
	}

	var r = currency$_getCol().remove( { _id : NumberInt( _id ) }, 1 );
		print( r );

	print( "-- [ E ] - currency$remove_id():{uint}----------return 1;" );
	return 1;
}
