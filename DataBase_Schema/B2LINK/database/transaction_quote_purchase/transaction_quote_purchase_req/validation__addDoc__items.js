function( d )
{
	print( "-- [ S ] - transaction_quote_purchase_req$validation__addDoc__itmes():{Object}----------" );
	var i = 0 , iLen = d.length;
	var io;
	for ( ; i < iLen ; ++i )
	{
		io = d[i];
		if( !io.hasOwnProperty( "_id$brand_basic" ) || !io.hasOwnProperty( "_id$product_basic" ) || !io.hasOwnProperty( "quantity" ) )
		{
			print( "-- [ E ] - transaction_quote_purchase_req$validation__addDoc__itmes():{Object}----------return 0;" );
			return 0;
		}

		io._id$brand_basic = NumberInt( io._id$brand_basic );
		io._id$product_basic = NumberInt( io._id$product_basic );
		io.quantity = NumberInt( io.quantity );
		io.quantity_of_unit = NumberInt( io.quantity_of_unit );
		io.UOM.quantity = NumberInt( io.UOM.quantity );
	}
	print( "-- [ E ] - transaction_quote_purchase_req$validation__addDoc__itmes():{Object}----------" );
	return d;
}
