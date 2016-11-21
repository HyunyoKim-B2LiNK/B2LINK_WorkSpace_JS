function( _id )
{
	print( "-- [ S ] - product_cateogry$remove_id():{uint}----------" );

	print( "_id : " + _id );

	//if( !( _id > -1 ) ){
	if( !product_cateogry$validation__remove_id( _id ) ){
		print( "-- [ E ] - product_cateogry$remove_id():{uint}----------return 0;" );
		return 0;
	}

	var r = product_cateogry$_getCol().remove( { _id : NumberInt( _id ) }, 1 );
		print( r );

	print( "-- [ E ] - product_cateogry$remove_id():{uint}----------return 1;" );
	return 1;
}
