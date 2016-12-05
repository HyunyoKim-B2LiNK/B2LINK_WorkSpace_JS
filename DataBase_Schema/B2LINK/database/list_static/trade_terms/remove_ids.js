function( ids )
{
	print( "-- [ S ] - trade_terms$remove_ids():{uint}----------" );

	print( "ids : " + ids );

	var r = [];
	var p = { _id : null };
	var i=0, iLen=ids.length;
	for( ; i<iLen; ++i )
	{
		p._id = NumberInt( ids[ i ] );
		if( !trade_terms$validation__remove_id( p._id ) )
		{
			print( "-- [ E ] - trade_terms$remove_id():{uint}---------- fail;" );
			continue;
		}
		r.push( trade_terms$_getCol().remove( p, 1 ) );
	}

	print( "result : " );
	printjson( r );

	print( "-- [ E ] - trade_terms$remove_ids():{uint}----------" );
	return 1;
}
