function( d )
{
	print( "-- [ S ] - transaction_quote_sale_res$addDoc():{uint}----------" );

	var col = transaction_quote_sale_res$_getCol();
	var len = transaction_quote_sale_res$_findAll().count();
	var r = transaction_quote_sale_res$validation__addDoc( d );

	print( "r : " + r );
	printjson( r );

	if( 0 == r )
	{
		print( "-- [ E ] - transaction_quote_sale_res$addDoc():{uint}----------return 0;" );
		return 0;
	}

	if( transaction_quote_sale_res$check__Overlap( r ) )
	{
		print( "-- [ E ] - transaction_quote_sale_res$addDoc():{uint}----------return 0;" );
		return 0;
	}
	else
	{
		col.insert({
			_id : NumberInt( len )
			, _id$currency : NumberInt( r._id$currency )
			, _id$delivery_type : NumberInt( r._id$delivery_type )
			, _id$member : NumberInt( r._id$member )
			, _id$partner_buyer : NumberInt( r._id$partner_buyer )
			, _id$trade_terms :  NumberInt( r._id$trade_terms )
			, date_create : r.date_create
			, items : r.items
			, logistic_fee : r.logistic_fee
			, quote_sale_res_no : r.quote_sale_res_no
			, shipping_address : r.shipping_address
			, total_supply_price : r.total_supply_price
		});

		print( "-- [ E ] - transaction_quote_sale_res$addDoc():{uint}----------return 1;" );
		return 1;
	}
}
