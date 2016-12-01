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

	var id = 0, due_date_length = d.due_date.length;
	for ( ; id < due_date_length ; ++id) d.due_date[ id ] = NumberInt( d.due_date[ id ] );
	var id = 0, date_create_length = d.date_create.length;
	for ( ; id < date_create_length ; ++id) d.date_create[ id ] = NumberInt( d.date_create[ id ] );

	print( "-- [ E ] - transaction_quote_sale_req$validation__addDoc():{Object}----------" );
	return d;
}
