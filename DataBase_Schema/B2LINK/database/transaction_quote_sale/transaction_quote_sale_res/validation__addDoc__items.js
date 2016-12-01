function( d )
{
	print( "-- [ S ] - transaction_quote_sale_res$validation__addDoc__itmes():{Object}----------" );
	var i = 0 , iLen = d.length;
	var io;
	for ( ; i < iLen ; ++i )
	{
		io = d[i];
		if( !io.hasOwnProperty( "_id$brand_basic" ) || !io.hasOwnProperty( "_id$product_basic" ) || !io.hasOwnProperty( "quantity" ) )
		{
			print( "-- [ E ] - transaction_quote_sale_res$validation__addDoc__itmes():{Object}----------return 0;" );
			return 0;
		}
	}
	print( "-- [ E ] - transaction_quote_sale_res$validation__addDoc__itmes():{Object}----------" );
	return d;
}
