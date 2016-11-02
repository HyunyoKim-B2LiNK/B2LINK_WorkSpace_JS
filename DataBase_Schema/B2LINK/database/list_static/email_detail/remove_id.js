function( _id )
{
	print( "-- [ S ] - email_detail$remove_id():{uint}----------" );

	print( "_id : " + _id );

	//if( !( _id > -1 ) ){
	if( !email_detail$validation__remove_id( _id ) ){
		print( "-- [ E ] - email_detail$remove_id():{uint}----------return 0;" );
		return 0;
	}

	var r = email_detail$_getCol().remove( { _id : NumberInt( _id ) }, 1 );
		print( r );

	print( "-- [ E ] - email_detail$remove_id():{uint}----------return 1;" );
	return 1;
}
