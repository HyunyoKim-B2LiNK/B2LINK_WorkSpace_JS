function( _id )
{
	print( "-- [ S ] - partner_buyers$remove_id():{uint}----------" );

	print( "_id : " + _id );

	//if( !( _id > -1 ) ){
	if( !partner_buyers$validation__remove_id( _id ) ){
		print( "-- [ E ] - partner_buyers$remove_id():{uint}----------return 0;" );
		return 0;
	}

	var r = partner_buyers$_getCol().remove( { _id : NumberInt( _id ) }, 1 );
		print( r );

	print( "-- [ E ] - partner_buyers$remove_id():{uint}----------return 1;" );
	return 1;
}
