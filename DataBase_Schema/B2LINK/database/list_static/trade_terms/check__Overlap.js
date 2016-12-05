function( d )
{
	print( "-- [ S ] - trade_terms$check__Overlap():{uint}----------" );

	//printjson( d );

	var r = trade_terms$findOne({
		nm : d.nm
	});
	//printjson( r );

	if( r )
	{
		print( "-- [ E ] - trade_terms$check__Overlap():{uint}----------return 1;" );
		return 1;
	}
	else
	{
		print( "-- [ E ] - trade_terms$check__Overlap():{uint}----------return 0;" );
		return 0;
	}
}
