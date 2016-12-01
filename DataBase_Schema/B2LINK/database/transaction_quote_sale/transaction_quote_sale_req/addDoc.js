function( d )
{
	print( "-- [ S ] - transaction_quote_sale_req$addDoc():{uint}----------" );

	var col = transaction_quote_sale_req$_getCol();
	var len = transaction_quote_sale_req$_findAll().count();
	var r = transaction_quote_sale_req$validation__addDoc( d );

	print( "r : " + r );
	printjson( r );

	if( 0 == r )
	{
		print( "-- [ E ] - transaction_quote_sale_req$addDoc():{uint}----------return 0;" );
		return 0;
	}

	if( transaction_quote_sale_req$check__Overlap( r ) )
	{
		print( "-- [ E ] - transaction_quote_sale_req$addDoc():{uint}----------return 0;" );
		return 0;
	}
	else
	{
		col.insert({
			_id : NumberInt( len )
			, _id$currency : NumberInt( r._id$currency )
			, _id$delivery_type : NumberInt( r._id$delivery_type )
			, _id$member : r._id$member
			, _id$partner_buyer : r._id$partner_buyer
			, _id$trade_terms : r._id$trade_terms
			, items : r.items
			, date_create : r.date_create
			, due_date : r.due_date
			, quote_sale_req_no : r.quote_sale_req_no
			, shipping_address : r.shipping_address
		});

		print( "-- [ E ] - transaction_quote_sale_req$addDoc():{uint}----------return 1;" );
		return 1;
	}
}
