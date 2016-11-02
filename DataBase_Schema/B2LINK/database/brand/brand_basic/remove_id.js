function( _id )
{
	print( "-- [ S ] - brand_basic$remove_id():{uint}----------" );

	print( "_id : " + _id );

	//if( !( _id > -1 ) ){
	if( !brand_basic$validation__remove_id( _id ) ){
		print( "-- [ E ] - brand_basic$remove_id():{uint}----------return 0;" );
		return 0;
	}

	var r = brand_basic$_getCol().remove( { _id : NumberInt( _id ) }, 1 );
		print( r );

	print( "-- [ E ] - brand_basic$remove_id():{uint}----------return 1;" );
	return 1;
}
