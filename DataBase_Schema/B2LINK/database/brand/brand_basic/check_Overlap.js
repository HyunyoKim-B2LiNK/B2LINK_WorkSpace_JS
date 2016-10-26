function( d )
{
	print( "-- [ S ] - brand_basic$check__Overlap():{uint}----------" );

	printjson( d );

	var o = {
		nm_kr : r.nm_kr
		, nm_cn : r.nm_cn
		, nm_us : r.nm_us
		, url : r.url
	};

	var r = brand_basic$findOne( o );
	printjson( r );

	if( null == r )
	{
		print( "-- [ E ] - brand_basic$check__Overlap():{uint}----------return 0;" );
		return 0;
	}

	print( "-- [ E ] - brand_basic$check__Overlap():{uint}----------return 1;" );
	return 1;
}
