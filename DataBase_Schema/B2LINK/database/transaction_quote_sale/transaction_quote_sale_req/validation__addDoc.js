function( d )
{
	print( "-- [ S ] - transaction_quote_sale_req$validation__addDoc():{Object}----------" );
	if( !d.hasOwnProperty( "_id$member" ) || !d.hasOwnProperty( "items" ) || !d.hasOwnProperty( "quote_sale_req_no" ) )
	{
		print( "-- [ E ] - transaction_quote_sale_req$validation__addDoc():{Object}----------return 0;" );
		return 0;
	}

	if ( !transaction_quote_sale_req$validation__addDoc__items( d.items ) )
	{
		print( "-- [ E ] - transaction_quote_sale_req$validation__addDoc():{Object}----------return 0;" );
		return 0;
	}

	print( "-- [ E ] - transaction_quote_sale_req$validation__addDoc():{Object}----------" );
	return d;
}
