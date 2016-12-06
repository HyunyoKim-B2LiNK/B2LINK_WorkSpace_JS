function( d )
{
	print( "-- [ S ] - transaction_quote_purchase_res$validation__addDoc__itmes():{Object}----------" );
	var i = 0 , iLen = d.length;
	var io;
	for ( ; i < iLen ; ++i )
	{
		io = d[i];
		if( !io.hasOwnProperty( "_id$brand_basic" ) || !io.hasOwnProperty( "_id$product_basic" ) || !io.hasOwnProperty( "quantity" ) )
		{
			print( "-- [ E ] - transaction_quote_purchase_res$validation__addDoc__itmes():{Object}----------return 0;" );
			return 0;
		}
		io._id$brand_basic = NumberInt( io._id$brand_basic );
		io._id$product_basic = NumberInt( io._id$product_basic );
		io.item_total_price._id$currency = NumberInt( io.item_total_price._id$currenc );
		var id=0, due_date_length=io.due_date.length;
		for( ; id<due_date_length; ++id ) io.due_date[ id ] = NumberInt( io.due_date[ id ] );
		io.price_quantity._id$currency = NumberInt( io.price_quantity._id$currency );
		io.price_quantity_of_unit._id$currency = NumberInt( io.price_quantity_of_unit._id$currency );
		io.quantity = NumberInt( io.quantity );
		io.quantity_of_unit = NumberInt( io.quantity_of_unit );
		io.UOM.quantity = NumberInt( io.UOM.quantity );
	}
	print( "-- [ E ] - transaction_quote_purchase_res$validation__addDoc__itmes():{Object}----------" );
	return d;
}
