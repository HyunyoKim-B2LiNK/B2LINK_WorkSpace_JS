function( _id )
{
	print( "-- [ S ] - transaction_quote_sale_res$remove_id():{uint}----------" );

	print( "_id : " + _id );

	//if( !( _id > -1 ) ){
	if( !transaction_quote_sale_res$validation__remove_id( _id ) ){
		print( "-- [ E ] - transaction_quote_sale_res$remove_id():{uint}----------return 0;" );
		return 0;
	}

	var r = transaction_quote_sale_res$_getCol().remove( { _id : NumberInt( _id ) }, 1 );
		print( r );

	print( "-- [ E ] - transaction_quote_sale_res$remove_id():{uint}----------return 1;" );
	return 1;
}
