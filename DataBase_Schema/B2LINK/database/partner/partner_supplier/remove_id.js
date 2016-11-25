function( _id )
{
	print( "-- [ S ] - partner_supplier$remove_id():{uint}----------" );

	print( "_id : " + _id );

	//if( !( _id > -1 ) ){
	if( !partner_supplier$validation__remove_id( _id ) ){
		print( "-- [ E ] - partner_supplier$remove_id():{uint}----------return 0;" );
		return 0;
	}

	var r = partner_supplier$_getCol().remove( { _id : NumberInt( _id ) }, 1 );
		print( r );

	print( "-- [ E ] - partner_supplier$remove_id():{uint}----------return 1;" );
	return 1;
}
