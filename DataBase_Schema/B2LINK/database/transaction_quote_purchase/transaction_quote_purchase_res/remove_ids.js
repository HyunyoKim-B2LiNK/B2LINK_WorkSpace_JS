function( ids )
{
	print( "-- [ S ] - transaction_quote_purchase_res$remove_ids():{uint}----------" );

	print( "ids : " + ids );

	var r = [];
	var p = { _id : null };
	var i=0, iLen=ids.length;
	for( ; i<iLen; ++i )
	{
		p._id = NumberInt( ids[ i ] );
		if( !transaction_quote_purchase_res$validation__remove_id( p._id ) )
		{
			print( "-- [ E ] - transaction_quote_purchase_res$remove_id():{uint}---------- fail;" );
			continue;
		}
		r.push( transaction_quote_purchase_res$_getCol().remove( p, 1 ) );
	}

	print( "result : " );
	printjson( r );

	print( "-- [ E ] - transaction_quote_purchase_res$remove_ids():{uint}----------" );
	return 1;
}
