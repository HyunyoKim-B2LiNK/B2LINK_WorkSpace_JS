function( d )
{
	print( "-- [ S ] - transaction_quote_sale_res$validation__addDoc():{Object}----------" );
	if( !d.hasOwnProperty( "_id$member" ) || !d.hasOwnProperty( "items" ) || !d.hasOwnProperty( "quote_sale_res_no" ) )
	{
		print( "-- [ E ] - transaction_quote_sale_res$validation__addDoc():{Object}----------return 0;" );
		return 0;
	}

	if ( !transaction_quote_sale_res$validation__addDoc__items( d.items ) )
	{
		print( "-- [ E ] - transaction_quote_sale_res$validation__addDoc():{Object}----------return 0;" );
		return 0;
	}

	d.logistic_fee._id$currency = NumberInt( d.logistic_fee._id$currency );
	d.total_supply_price._id$currency = NumberInt( d.total_supply_price._id$currency );
	var id=0, date_create_length=d.date_create.length;
	for( ; id<date_create_length; ++id ) d.date_create[ id ] = NumberInt( d.date_create[ id ] );

	print( "-- [ E ] - transaction_quote_sale_res$validation__addDoc():{Object}----------" );
	return d;
}
