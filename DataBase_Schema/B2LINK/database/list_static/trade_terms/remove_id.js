function( _id )
{
	print( "-- [ S ] - trade_terms$remove_id():{uint}----------" );

	print( "_id : " + _id );

	//if( !( _id > -1 ) ){
	if( !trade_terms$validation__remove_id( _id ) ){
		print( "-- [ E ] - trade_terms$remove_id():{uint}----------return 0;" );
		return 0;
	}

	var r = trade_terms$_getCol().remove( { _id : NumberInt( _id ) }, 1 );
		print( r );

	print( "-- [ E ] - trade_terms$remove_id():{uint}----------return 1;" );
	return 1;
}
