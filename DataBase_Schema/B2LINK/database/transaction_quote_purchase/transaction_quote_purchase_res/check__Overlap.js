function( d )
{
	print( "-- [ S ] - transaction_quote_purchase_res$check__Overlap():{uint}----------" );

	//printjson( d );

	var r = transaction_quote_purchase_res$findOne({
		quote_purchase_res_no : d.quote_purchase_res_no
	});
	//printjson( r );

	if( r )
	{
		print( "-- [ E ] - transaction_quote_purchase_res$check__Overlap():{uint}----------return 1;" );
		return 1;
	}
	else
	{
		print( "-- [ E ] - transaction_quote_purchase_res$check__Overlap():{uint}----------return 0;" );
		return 0;
	}
}
