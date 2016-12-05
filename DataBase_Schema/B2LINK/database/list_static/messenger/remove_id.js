function( _id )
{
	print( "-- [ S ] - messenger$remove_id():{uint}----------" );

	print( "_id : " + _id );

	//if( !( _id > -1 ) ){
	if( !messenger$validation__remove_id( _id ) ){
		print( "-- [ E ] - messenger$remove_id():{uint}----------return 0;" );
		return 0;
	}

	var r = messenger$_getCol().remove( { _id : NumberInt( _id ) }, 1 );
		print( r );

	print( "-- [ E ] - messenger$remove_id():{uint}----------return 1;" );
	return 1;
}
