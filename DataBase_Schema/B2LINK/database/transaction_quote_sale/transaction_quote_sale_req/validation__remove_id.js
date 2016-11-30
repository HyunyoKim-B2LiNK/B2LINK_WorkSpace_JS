function( n )
{
	print( "-- [ S ] - transaction_quote_sale_req$validation__remove_id():{uint}----------" );

	if( n > -1 )
	{
		print( "-- [ E ] - transaction_quote_sale_req$validation__remove_id():{uint}----------return 1;" );
		return 1;
	}

	print( "-- [ E ] - transaction_quote_sale_req$validation__remove_id():{uint}----------return 0;" );
	return 0;
}